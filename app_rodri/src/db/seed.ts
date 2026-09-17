import { eq } from 'drizzle-orm';
import type { Db } from './client';
import { settings, notes, characterState, resourceState, spellSlots, allies } from './schema';
import { resourceDefs } from '../data/resources';
import { presetById } from '../data/spells/presets';
import { character } from '../data/character';
import { slotLayout } from '../lib/rules/spellsPerDay';

const NOTE_KINDS = ['session', 'shopping', 'narrative', 'free'] as const;

/**
 * Crea las filas iniciales si no existen. Idempotente: se ejecuta en cada arranque.
 * `syncResources` agrega recursos nuevos definidos en data/resources.ts sin tocar los existentes.
 */
export async function seedIfEmpty(db: Db): Promise<{ created: boolean; details: string[] }> {
  const details: string[] = [];
  let created = false;

  await db.transaction(async (tx) => {
    const [s] = await tx.select().from(settings).where(eq(settings.id, 1)).limit(1);
    if (!s) {
      await tx.insert(settings).values({ id: 1 });
      details.push('settings');
      created = true;
    }

    for (const kind of NOTE_KINDS) {
      const [n] = await tx.select().from(notes).where(eq(notes.kind, kind)).limit(1);
      if (!n) {
        await tx.insert(notes).values({ kind });
        details.push(`notes:${kind}`);
        created = true;
      }
    }

    const [cs] = await tx.select().from(characterState).where(eq(characterState.id, 1)).limit(1);
    if (!cs) {
      await tx.insert(characterState).values({ id: 1, hpCurrent: character.hpMax, gold: character.gold });
      details.push('character_state');
      created = true;
    }

    // Recursos: inserta los que falten (sincronización).
    const existing = new Set((await tx.select({ key: resourceState.key }).from(resourceState)).map((r) => r.key));
    for (const r of resourceDefs) {
      if (!existing.has(r.key)) {
        await tx.insert(resourceState).values({ key: r.key, current: r.initial ?? r.max });
        details.push(`resource:${r.key}`);
        created = true;
      }
    }

    const slotCount = (await tx.select({ id: spellSlots.id }).from(spellSlots)).length;
    if (slotCount === 0) {
      const preset = presetById.combate;
      const layout = slotLayout(27);
      await tx.insert(spellSlots).values(
        layout.map((l) => {
          const p = preset.slots.find((x) => x.level === l.level && x.idx === l.idx);
          const spellId = p?.spellId ?? null;
          return { level: l.level, idx: l.idx, isDomain: l.isDomain, spellId, status: spellId ? ('prepared' as const) : ('free' as const) };
        }),
      );
      details.push(`spell_slots:${layout.length}`);
      created = true;
    }

    const allyCount = (await tx.select({ id: allies.id }).from(allies)).length;
    if (allyCount === 0) {
      await tx.insert(allies).values([
        { name: 'Tanque 1', role: 'tanque', sortOrder: 1, frontLine: true, adjacent: true },
        { name: 'Tanque 2', role: 'tanque', sortOrder: 2, frontLine: true, adjacent: true },
        { name: 'DPS 1', role: 'dps', sortOrder: 3, frontLine: true },
        { name: 'DPS 2', role: 'dps', sortOrder: 4, frontLine: true },
        { name: 'Apoyo', role: 'apoyo', sortOrder: 5, frontLine: false },
      ]);
      details.push('allies:5');
      created = true;
    }
  });

  return { created, details };
}
