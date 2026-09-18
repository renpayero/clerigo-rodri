import { defineAction } from 'astro:actions';
import { z } from 'astro/zod';
import { eq } from 'drizzle-orm';
import { db, schema } from '@/db';
import { runAction, conflict, notFound } from './_helpers';
import { buffByKey } from '@/data/buffs';
import { createBuff, canEndure, enduringConflicts } from '@/lib/rules/buffs';
import { loadSnapshot } from '@/db/repo/snapshot';
import { resourceDefs } from '@/data/resources';

const targetSchema = z.union([z.number().int(), z.literal('self')]);

export const allies = {
  upsert: defineAction({
    input: z.object({
      id: z.number().int().optional(),
      name: z.string().min(1).max(40),
      role: z.string().max(20).nullable().optional(),
      maxHp: z.number().int().min(1).max(999).nullable().optional(),
      hpCurrent: z.number().int().min(-200).max(999).nullable().optional(),
      adjacent: z.boolean().default(false),
      frontLine: z.boolean().default(true),
      sortOrder: z.number().int().min(0).max(99).default(0),
      notes: z.string().max(300).nullable().optional(),
    }),
    handler: (input) =>
      runAction('allies.upsert', input, async (ctx) => {
        const { id, ...values } = input;
        if (id) {
          const existing = ctx.snap.allies.find((a) => a.id === id);
          if (!existing) notFound('Aliado no encontrado');
          await ctx.rec.update('allies', { id }, values);
          return { label: `Aliado actualizado: ${input.name}` };
        }
        await ctx.rec.insert('allies', { ...values, active: true });
        return { label: `Aliado agregado: ${input.name}` };
      }),
  }),
  remove: defineAction({
    input: z.object({ id: z.number().int() }),
    handler: (input) =>
      runAction('allies.remove', input, async (ctx) => {
        const a = ctx.snap.allies.find((x) => x.id === input.id);
        if (!a) notFound('Aliado no encontrado');
        await ctx.rec.update('allies', { id: input.id }, { active: false });
        return { label: `Aliado quitado: ${a.name}` };
      }),
  }),
  adjustHp: defineAction({
    input: z.object({ id: z.number().int(), delta: z.number().int().min(-500).max(500), set: z.boolean().default(false) }),
    handler: (input) =>
      runAction('allies.adjustHp', input, async (ctx) => {
        const a = ctx.snap.allies.find((x) => x.id === input.id);
        if (!a) notFound('Aliado no encontrado');
        const max = a.maxHp ?? 999;
        const next = input.set ? input.delta : Math.min(max, (a.hpCurrent ?? max) + input.delta);
        const changes: Record<string, unknown> = { hpCurrent: next };
        if (next > 0 && a.downState !== 'ok') { changes.downState = 'ok'; changes.diedRound = null; }
        else if (next <= 0 && a.downState === 'ok') changes.downState = 'zero';
        await ctx.rec.update('allies', { id: a.id }, changes);
        return { label: `${a.name}: ${input.set ? `pg = ${next}` : `${input.delta > 0 ? '+' : ''}${input.delta} → ${next}`}${a.maxHp ? `/${a.maxHp}` : ''}` };
      }),
  }),
  markDown: defineAction({
    input: z.object({ id: z.number().int(), state: z.enum(['ok', 'zero', 'dead', 'dead_death_effect']) }),
    handler: (input) =>
      runAction('allies.markDown', input, async (ctx) => {
        const a = ctx.snap.allies.find((x) => x.id === input.id);
        if (!a) notFound('Aliado no encontrado');
        const dead = input.state === 'dead' || input.state === 'dead_death_effect';
        await ctx.rec.update('allies', { id: a.id }, { downState: input.state, diedRound: dead ? ctx.snap.character.round : null });
        const labels = { ok: 'en pie', zero: 'a 0 o menos (indefenso)', dead: `MUERTO este asalto (${ctx.snap.character.round}) — Heal + Relentless Healing`, dead_death_effect: 'muerto por EFECTO DE MUERTE — Mythic Breath of Life' };
        return { label: `${a.name}: ${labels[input.state]}` };
      }),
  }),
};

export const buffs = {
  activate: defineAction({
    input: z.object({
      buffKey: z.string(),
      targets: z.array(targetSchema).default([]),
      enduring: z.boolean().default(false),
      mythic: z.boolean().default(false),
      casterLevel: z.union([z.literal(11), z.literal(13)]).default(11),
      energy: z.string().max(20).optional(),
      spendSlotId: z.number().int().optional(),
    }),
    handler: (input) =>
      runAction('buffs.activate', input, async (ctx) => {
        const def = buffByKey[input.buffKey];
        if (!def) notFound(`Buff desconocido: ${input.buffKey}`);
        if (input.enduring) {
          const r = canEndure(def);
          if (!r.ok) conflict(r.reason);
          if (input.targets.length > 1) conflict('Enduring Blessing: un solo objetivo.');
          for (const b of enduringConflicts(ctx.snap.buffs, input.targets)) await ctx.rec.update('active_buffs', { id: b.id }, { status: 'expired', remaining: 0 });
        }
        if (input.spendSlotId !== undefined) {
          const slot = ctx.snap.slots.find((s) => s.id === input.spendSlotId);
          if (!slot || slot.status !== 'prepared') conflict('Esa ranura no está preparada.');
          await ctx.rec.update('spell_slots', { id: slot.id }, { status: 'spent', spentOn: `spell:${slot.spellId}`, spentAt: ctx.now });
        }
        if (def.key === 'daylight-sla') await ctx.spend('daylight_sla', 1);
        if (def.key === 'heroic-fortune') await ctx.setResource('hero_point_temp', 1);
        if (input.mythic) await ctx.spend('mythic_power', 1);
        const nb = createBuff(def, { cl: input.casterLevel, enduring: input.enduring, mythic: input.mythic, targets: input.targets, round: ctx.snap.character.combatActive ? ctx.snap.character.round : null, energy: input.energy });
        await ctx.rec.insert('active_buffs', { ...nb, status: 'active' });
        const dur = nb.unit === 'rounds' ? `${nb.remaining} asaltos` : nb.unit === 'minutes' ? `${nb.remaining} min` : nb.unit;
        return { label: `Activado: ${nb.label} (${dur})` };
      }),
  }),
  expire: defineAction({
    input: z.object({ id: z.number().int() }),
    handler: (input) =>
      runAction('buffs.expire', input, async (ctx) => {
        const b = ctx.snap.buffs.find((x) => x.id === input.id);
        if (!b) notFound('Buff no encontrado');
        await ctx.rec.update('active_buffs', { id: b.id }, { status: 'expired', remaining: 0 });
        if (b.buffKey === 'heroic-fortune' && (ctx.snap.resources.hero_point_temp?.current ?? 0) > 0) await ctx.setResource('hero_point_temp', 0);
        return { label: `Expirado: ${b.label}` };
      }),
  }),
  update: defineAction({
    input: z.object({ id: z.number().int(), remaining: z.number().int().min(0).optional(), targets: z.array(z.object({ allyId: targetSchema, remaining: z.number().int().min(0).optional(), absorb: z.number().int().min(0).optional(), energy: z.string().optional() })).optional() }),
    handler: (input) =>
      runAction('buffs.update', input, async (ctx) => {
        const b = ctx.snap.buffs.find((x) => x.id === input.id);
        if (!b) notFound('Buff no encontrado');
        const changes: Record<string, unknown> = {};
        if (input.remaining !== undefined) changes.remaining = input.remaining;
        if (input.targets) changes.targets = input.targets;
        await ctx.rec.update('active_buffs', { id: b.id }, changes);
        return { label: `Ajustado: ${b.label}` };
      }),
  }),
};

const settingsSchema = z.object({
  mythicPowerReset: z.enum(['prayer', 'rest8h', 'manual']).optional(),
  recuperationRestoresDomain: z.boolean().optional(),
  blessedTouchInAverages: z.boolean().optional(),
  mythicDomainRechargeMode: z.enum(['reset', 'add']).optional(),
  relentlessVsDeathEffects: z.boolean().optional(),
  amazingInitiativeAllows: z.enum(['channel', 'channel_wand', 'channel_wand_rebuke']).optional(),
  headbandNew24h: z.boolean().optional(),
  outOfCombatClock: z.enum(['manual', 'realtime']).optional(),
  discordPrefix: z.string().max(40).optional(),
  theme: z.enum(['auto', 'light', 'dark']).optional(),
});

export const settings = {
  update: defineAction({
    input: settingsSchema,
    handler: (input) =>
      runAction('settings.update', input, async (ctx) => {
        await ctx.rec.update('settings', { id: 1 }, { ...input, updatedAt: ctx.now });
        if (input.headbandNew24h !== undefined) {
          // Diadema < 24 h: se deshabilita la última ranura de 3.º y 4.º (Wis 23 → 4/7/7/6/5/4/3).
          for (const slot of ctx.snap.slots) {
            const isLast3 = slot.level === 3 && slot.idx === 6;
            const isLast4 = slot.level === 4 && slot.idx === 5;
            if (isLast3 || isLast4) await ctx.rec.update('spell_slots', { id: slot.id }, { disabled: input.headbandNew24h });
          }
        }
        return { label: `Ajustes actualizados: ${Object.keys(input).join(', ')}` };
      }),
  }),
};

export const notes = {
  update: defineAction({
    input: z.object({ kind: z.enum(['session', 'shopping', 'narrative', 'free']), body: z.string().max(20000) }),
    handler: async (input) => {
      await db().update(schema.notes).set({ body: input.body, updatedAt: new Date() }).where(eq(schema.notes.kind, input.kind));
      return { ok: true };
    },
  }),
};

export const gold = {
  adjust: defineAction({
    input: z.object({ delta: z.number().int().min(-1_000_000).max(1_000_000), note: z.string().max(120).optional() }),
    handler: (input) =>
      runAction('gold.adjust', input, async (ctx) => {
        const next = ctx.snap.character.gold + input.delta;
        if (next < 0) conflict('El oro no puede quedar negativo.');
        await ctx.updateCharacter({ gold: next });
        return { label: `Oro ${input.delta > 0 ? '+' : ''}${input.delta} → ${next} po${input.note ? ` · ${input.note}` : ''}` };
      }),
  }),
};

export const backup = {
  export: defineAction({
    handler: async () => {
      const snap = await loadSnapshot(db());
      const ev = await db().select().from(schema.events);
      return { exportedAt: new Date().toISOString(), snapshot: snap, events: ev.slice(-500).map((e) => ({ ...e, at: e.at.toISOString(), undoneAt: e.undoneAt?.toISOString() ?? null })) };
    },
  }),
  import: defineAction({
    input: z.object({ json: z.string().max(5_000_000) }),
    handler: (input) =>
      runAction('backup.import', { size: input.json.length }, async (ctx) => {
        let data: any;
        try { data = JSON.parse(input.json); } catch { conflict('JSON inválido'); }
        const snap = data?.snapshot;
        if (!snap?.character || !snap?.resources) conflict('El archivo no tiene el formato de exportación de esta app.');
        const c = snap.character;
        await ctx.updateCharacter({ hpCurrent: c.hpCurrent, hpTemp: c.hpTemp, hpNonlethal: c.hpNonlethal, conditions: c.conditions ?? [], combatActive: c.combatActive, round: c.round, auraActive: c.auraActive, divineInterferenceUsed: c.divineInterferenceUsed ?? [], gold: c.gold, sessionNumber: c.sessionNumber });
        for (const r of resourceDefs) {
          const v = snap.resources[r.key];
          if (v && typeof v.current === 'number') await ctx.setResource(r.key as any, v.current);
        }
        for (const s of snap.slots ?? []) {
          const mine = ctx.snap.slots.find((x) => x.level === s.level && x.idx === s.idx);
          if (mine) await ctx.rec.update('spell_slots', { id: mine.id }, { spellId: s.spellId ?? null, status: s.status, spentOn: s.spentOn ?? null, disabled: !!s.disabled });
        }
        return { label: 'Copia de seguridad importada (personaje, recursos y ranuras)' };
      }),
  }),
};
