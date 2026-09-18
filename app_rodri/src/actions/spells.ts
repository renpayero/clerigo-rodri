import { defineAction } from 'astro:actions';
import { z } from 'astro/zod';
import { runAction, conflict, notFound, type ActionCtx } from './_helpers';
import { spellById } from '@/data/spells/catalog';
import { presetById } from '@/data/spells/presets';
import { buffByKey } from '@/data/buffs';
import { canCast, canConvert, canPrepare, canInspire, castPlan, applyPreset, CURES_BY_LEVEL, type SlotLike } from '@/lib/rules/slots';
import { createBuff, canEndure, enduringConflicts } from '@/lib/rules/buffs';
import { parseSpec } from '@/lib/rules/dice';

const targetSchema = z.union([z.number().int(), z.literal('self')]);

const castOptions = {
  targets: z.array(targetSchema).default([]),
  mythic: z.boolean().default(false),
  augmented: z.boolean().default(false),
  enduring: z.boolean().default(false),
  activateBuff: z.boolean().default(true),
  energy: z.string().max(20).optional(),
  note: z.string().max(120).optional(),
};

function slotOf(ctx: ActionCtx, id: number): SlotLike {
  const slot = ctx.snap.slots.find((s) => s.id === id);
  if (!slot) notFound('Ranura no encontrada');
  return slot as SlotLike;
}

/** Lanza un conjuro: paga mítico/rod, tira curación, activa el buff. Devuelve la etiqueta. */
async function resolveCast(ctx: ActionCtx, spellId: string, o: { targets: (number | 'self')[]; mythic: boolean; augmented: boolean; enduring: boolean; activateBuff: boolean; energy?: string; cl: number; note?: string }) {
  const spell = spellById[spellId];
  if (!spell) notFound(`Conjuro desconocido: ${spellId}`);
  if (o.mythic && !spell.mythic) conflict(`${spell.name} no tiene versión mítica.`);
  if (o.augmented && !spell.mythic?.augmented) conflict(`${spell.name} no tiene versión augmented.`);
  const def = spell.buff ? buffByKey[spell.buff.buffKey] : undefined;
  if (o.enduring) {
    if (!def) conflict('Enduring Blessing solo sirve para conjuros con duración.');
    const r = canEndure(def);
    if (!r.ok) conflict(r.reason);
    if (o.targets.length > 1) conflict('Enduring Blessing: un solo objetivo.');
  }
  if (o.mythic) await ctx.spend('mythic_power', o.augmented ? spell.mythic!.augmented!.cost : spell.mythic!.cost);
  if (spellId === 'heroic-fortune') {
    await ctx.spend('diamond_dust_100', 1);
    await ctx.setResource('hero_point_temp', 1);
  }
  const plan = castPlan(spell, { cl: o.cl, mythic: o.mythic, augmented: o.augmented });
  let healText = '';
  if (plan.fixed !== null) healText = ` → cura ${plan.fixed}`;
  else if (plan.dice) {
    const r = ctx.roll(plan.dice, { empower: plan.empower, flatAfter: plan.flatAfter });
    healText = ` → ${r.total} pg`;
  }
  if (def && o.activateBuff) {
    if (o.enduring) {
      // Una criatura solo puede tener un conjuro con Enduring Blessing: el anterior termina.
      for (const b of enduringConflicts(ctx.snap.buffs, o.targets)) await ctx.rec.update('active_buffs', { id: b.id }, { status: 'expired', remaining: 0 });
    }
    const nb = createBuff(def, { cl: o.cl, enduring: o.enduring, mythic: o.mythic, targets: o.targets, round: ctx.snap.character.combatActive ? ctx.snap.character.round : null, energy: o.energy });
    await ctx.rec.insert('active_buffs', { ...nb, status: 'active' });
    const dur = nb.unit === 'rounds' ? `${nb.remaining} asaltos` : nb.unit === 'minutes' ? `${nb.remaining} min` : nb.unit;
    healText += ` · buff ${dur}`;
  }
  return { label: `${plan.label}${healText}${o.note ? ` · ${o.note}` : ''}` };
}

export const spells = {
  /** Lanza el conjuro preparado en una ranura. */
  cast: defineAction({
    input: z.object({ slotId: z.number().int(), ...castOptions }),
    handler: (input) =>
      runAction('spells.cast', input, async (ctx) => {
        const slot = slotOf(ctx, input.slotId);
        const chk = canCast(slot);
        if (!chk.ok) conflict(chk.reason);
        if (slot.level > 0) await ctx.rec.update('spell_slots', { id: slot.id }, { status: 'spent', spentOn: `spell:${slot.spellId}`, spentAt: ctx.now });
        const r = await resolveCast(ctx, slot.spellId!, { ...input, cl: 11 });
        return { label: `${slot.level > 0 ? `${slot.level}.º${slot.isDomain ? ' [D]' : ''}: ` : 'Orisón: '}${r.label}` };
      }),
  }),

  /** Convierte una ranura (preparada o libre) en un cure espontáneo. */
  convertToCure: defineAction({
    input: z.object({ slotId: z.number().int(), cureLevel: z.number().int().min(1).max(6), note: z.string().max(120).optional() }),
    handler: (input) =>
      runAction('spells.convertToCure', input, async (ctx) => {
        const slot = slotOf(ctx, input.slotId);
        const chk = canConvert(slot, input.cureLevel);
        if (!chk.ok) conflict(chk.reason);
        const cureId = CURES_BY_LEVEL[input.cureLevel]!;
        const lost = slot.spellId ? ` (perdés ${spellById[slot.spellId]?.name ?? slot.spellId})` : '';
        await ctx.rec.update('spell_slots', { id: slot.id }, { status: 'converted', spentOn: `cure:${cureId}`, spentAt: ctx.now });
        const r = await resolveCast(ctx, cureId, { targets: [], mythic: false, augmented: false, enduring: false, activateBuff: false, cl: 11, note: input.note });
        return { label: `${slot.level}.º → ${r.label}${lost}` };
      }),
  }),

  /** Inspired Spell: −1 poder mítico, sin ranura, CL 13. */
  inspired: defineAction({
    input: z.object({ spellId: z.string(), ...castOptions }),
    handler: (input) =>
      runAction('spells.inspired', input, async (ctx) => {
        const spell = spellById[input.spellId];
        if (!spell) notFound(`Conjuro desconocido: ${input.spellId}`);
        const chk = canInspire(spell, ctx.snap.resources.mythic_power?.current ?? 0);
        if (!chk.ok) conflict(chk.reason);
        await ctx.spend('mythic_power', 1);
        const r = await resolveCast(ctx, input.spellId, { ...input, cl: 13 });
        return { label: `Inspired Spell (−1 PM): ${r.label}` };
      }),
  }),

  /** Prepara (o vacía) una ranura. */
  prepare: defineAction({
    input: z.object({ slotId: z.number().int(), spellId: z.string().nullable(), status: z.enum(['prepared', 'free']).optional() }),
    handler: (input) =>
      runAction('spells.prepare', input, async (ctx) => {
        const slot = slotOf(ctx, input.slotId);
        const spell = input.spellId ? spellById[input.spellId] : null;
        if (input.spellId && !spell) notFound(`Conjuro desconocido: ${input.spellId}`);
        const chk = canPrepare(slot, spell ?? null);
        if (!chk.ok) conflict(chk.reason);
        const status = spell ? 'prepared' : 'free';
        await ctx.rec.update('spell_slots', { id: slot.id }, { spellId: spell?.id ?? null, status, spentOn: null, spentAt: null });
        return { label: spell ? `Preparado ${spell.name} en ${slot.level}.º${slot.isDomain ? ' [D]' : ''}` : `Ranura de ${slot.level}.º liberada` };
      }),
  }),

  /** Marca como recuperada una ranura gastada (error de carga). */
  restore: defineAction({
    input: z.object({ slotId: z.number().int() }),
    handler: (input) =>
      runAction('spells.restore', input, async (ctx) => {
        const slot = slotOf(ctx, input.slotId);
        if (slot.status === 'prepared' || slot.status === 'free') conflict('La ranura no está gastada.');
        await ctx.rec.update('spell_slots', { id: slot.id }, { status: slot.spellId ? 'prepared' : 'free', spentOn: null, spentAt: null });
        return { label: `Recuperada la ranura de ${slot.level}.º${slot.spellId ? ` (${spellById[slot.spellId]?.name ?? slot.spellId})` : ''}` };
      }),
  }),

  /** Aplica un preset de preparación a todas las ranuras. */
  applyPreset: defineAction({
    input: z.object({ preset: z.enum(['combate', 'jefe', 'viaje']) }),
    handler: (input) =>
      runAction('spells.applyPreset', input, async (ctx) => {
        const preset = presetById[input.preset];
        const layout = applyPreset(preset, ctx.snap.settings.headbandNew24h);
        for (const l of layout) {
          const slot = ctx.snap.slots.find((s) => s.level === l.level && s.idx === l.idx);
          if (!slot) continue;
          await ctx.rec.update('spell_slots', { id: slot.id }, { spellId: l.spellId, status: l.spellId ? 'prepared' : 'free', spentOn: null, spentAt: null, disabled: l.disabled });
        }
        return { label: `Preparación aplicada: ${preset.name}` };
      }),
  }),
};

export const dice = {
  /** Tirada libre con opciones de Rodri (reroll de 1, ×1,5, +1). */
  roll: defineAction({
    input: z.object({ spec: z.string().max(20), rerollOnes: z.boolean().default(false), empower: z.boolean().default(false), flatAfter: z.number().int().min(0).max(20).default(0), label: z.string().max(60).optional() }),
    handler: (input) =>
      runAction('dice.roll', input, async (ctx) => {
        let d;
        try { d = parseSpec(input.spec); } catch { conflict('Formato de dados inválido (ej. 4d8+11).'); }
        if (d.n > 100 || d.sides > 1000) conflict('Demasiados dados.');
        const r = ctx.roll(d, { rerollOnes: input.rerollOnes, empower: input.empower, flatAfter: input.flatAfter });
        return { label: `${input.label ? `${input.label}: ` : ''}${r.text}` };
      }),
  }),
};
