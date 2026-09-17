import { ActionError } from 'astro:actions';
import { eq, sql } from 'drizzle-orm';
import { randomInt } from 'node:crypto';
import { db, schema } from '@/db';
import { loadSnapshot } from '@/db/repo/snapshot';
import { PatchRecorder } from '@/db/repo/patches';
import type { StateSnapshot, ActionOutcome } from '@/lib/snapshot';
import type { ResourceKey } from '@/data/resources';
import { resourceByKey } from '@/data/resources';
import { roll as rollDice, type DiceSpec, type RollOpts, type RollResult } from '@/lib/rules/dice';
import { canSpend, maxOf } from '@/lib/rules/resources';

export type ActionCtx = {
  snap: StateSnapshot;
  now: Date;
  rec: PatchRecorder;
  /** Gasta un recurso validando que alcance (lanza CONFLICT si no). */
  spend: (key: ResourceKey, n?: number) => Promise<void>;
  /** Recupera n (o 'max') sin pasar el máximo. */
  restore: (key: ResourceKey, n: number | 'max') => Promise<void>;
  setResource: (key: ResourceKey, current: number) => Promise<void>;
  updateCharacter: (changes: Partial<schema.CharacterStateRow>) => Promise<void>;
  roll: (spec: DiceSpec, opts?: RollOpts) => RollResult;
  rolls: RollResult[];
};

export type ActionResult = { label: string; message?: string };

export function conflict(message: string): never {
  throw new ActionError({ code: 'CONFLICT', message });
}

export function notFound(message: string): never {
  throw new ActionError({ code: 'NOT_FOUND', message });
}

const rng = () => randomInt(0, 1_000_000) / 1_000_000;

/**
 * Ejecuta una action dentro de una transacción con bloqueo de character_state, registra los
 * patches como evento (deshacible), incrementa la versión y devuelve el snapshot resultante.
 */
export async function runAction(kind: string, input: unknown, handler: (ctx: ActionCtx) => Promise<ActionResult>): Promise<ActionOutcome> {
  return db().transaction(async (tx) => {
    await tx.select().from(schema.characterState).where(eq(schema.characterState.id, 1)).for('update');
    const snap = await loadSnapshot(tx);
    const rec = new PatchRecorder(tx as any);
    const rolls: RollResult[] = [];
    const resources = { ...snap.resources };

    const ctx: ActionCtx = {
      snap,
      now: new Date(),
      rec,
      rolls,
      async spend(key, n = 1) {
        const r = canSpend(resources, key, n);
        if (!r.ok) conflict(r.reason);
        const next = resources[key]!.current - n;
        resources[key] = { ...resources[key]!, current: next };
        await rec.update('resource_state', { key }, { current: next, updatedAt: ctx.now });
      },
      async restore(key, n) {
        const cur = resources[key]?.current ?? 0;
        const max = maxOf(key, resources);
        const next = n === 'max' ? max : Math.min(max, cur + n);
        if (!resources[key]) resources[key] = { current: next, max: resourceByKey[key].max, maxOverride: null };
        else resources[key] = { ...resources[key]!, current: next };
        await rec.update('resource_state', { key }, { current: next, updatedAt: ctx.now });
      },
      async setResource(key, current) {
        resources[key] = { ...(resources[key] ?? { max: resourceByKey[key].max, maxOverride: null }), current };
        await rec.update('resource_state', { key }, { current, updatedAt: ctx.now });
      },
      async updateCharacter(changes) {
        await rec.update('character_state', { id: 1 }, changes as Record<string, unknown>);
      },
      roll(spec, opts) {
        const r = rollDice(spec, { ...opts, rng });
        rolls.push(r);
        return r;
      },
    };

    const result = await handler(ctx);

    // Versión + updatedAt (fuera de los patches: no se deshace)
    await tx.update(schema.characterState).set({ version: sql`${schema.characterState.version} + 1`, updatedAt: ctx.now }).where(eq(schema.characterState.id, 1));

    let event: { id: number; label: string } | null = null;
    if (rec.patches.length > 0 || rolls.length > 0) {
      const [ev] = await tx
        .insert(schema.events)
        .values({
          kind,
          label: result.label,
          input: (input ?? null) as Record<string, unknown> | null,
          roll: rolls.length ? { rolls } : null,
          patches: rec.patches,
          sessionNumber: snap.character.sessionNumber,
          round: snap.character.combatActive ? snap.character.round : null,
        })
        .returning({ id: schema.events.id });
      event = { id: ev!.id, label: result.label };
    }

    const snapshot = await loadSnapshot(tx);
    return { snapshot, event, roll: rolls[0] ?? null, message: result.message };
  });
}
