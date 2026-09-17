import { defineAction } from 'astro:actions';
import { z } from 'astro/zod';
import { desc, eq, sql } from 'drizzle-orm';
import { db, schema } from '@/db';
import { runAction, conflict, notFound } from './_helpers';
import { RESOURCE_KEYS, resourceByKey } from '@/data/resources';
import { applyDamage, applyHealing, applyNonlethal, hpState, hpStateLabel, nonlethalState, reactiveHealingApplies } from '@/lib/rules/hp';
import { maxHp, deathThreshold } from '@/lib/rules/derived';
import { channelAverage, rebukeDeath } from '@/lib/rules/healing';
import { HERO_POINT_KINDS, heroPointInfo, canUseHeroPoint, spendHeroPoints, heroPointCost } from '@/lib/rules/heroPoints';
import { applyRest, type RestKind } from '@/lib/rules/rest';
import { revertPatches } from '@/db/repo/patches';
import { loadSnapshot } from '@/db/repo/snapshot';
import { tickRounds, tickMinutes } from '@/lib/rules/buffs';

const MAX_HP = maxHp();
const DEATH = deathThreshold();

function pools(c: { hpCurrent: number; hpTemp: number; hpNonlethal: number }) {
  return { hp: c.hpCurrent, temp: c.hpTemp, nonlethal: c.hpNonlethal };
}

async function consumeImmediate(ctx: Parameters<Parameters<typeof runAction>[2]>[0]) {
  if ((ctx.snap.resources.immediate_action?.current ?? 0) < 1) conflict('Ya usaste la acción inmediata este asalto.');
  await ctx.spend('immediate_action', 1);
  // Una inmediata fuera de turno consume la rápida del próximo turno.
  if ((ctx.snap.resources.swift_action?.current ?? 0) > 0) await ctx.setResource('swift_action', 0);
}

export const hp = {
  adjust: defineAction({
    input: z.object({ delta: z.number().int().min(-500).max(500), kind: z.enum(['damage', 'heal', 'nonlethal', 'temp', 'set']), note: z.string().max(120).optional() }),
    handler: (input) =>
      runAction('hp.adjust', input, async (ctx) => {
        const c = ctx.snap.character;
        let p = pools(c);
        let label = '';
        const n = Math.abs(input.delta);
        switch (input.kind) {
          case 'damage': p = applyDamage(p, n); label = `Daño −${n}`; break;
          case 'heal': p = applyHealing(p, n, MAX_HP); label = `Curación +${n}`; break;
          case 'nonlethal': p = applyNonlethal(p, input.delta); label = `No letal ${input.delta > 0 ? '+' : ''}${input.delta}`; break;
          case 'temp': p = { ...p, temp: Math.max(0, p.temp + input.delta) }; label = `Pg temporales ${input.delta > 0 ? '+' : ''}${input.delta}`; break;
          case 'set': p = { ...p, hp: input.delta }; label = `Pg fijados en ${input.delta}`; break;
        }
        await ctx.updateCharacter({ hpCurrent: p.hp, hpTemp: p.temp, hpNonlethal: p.nonlethal });
        const st = hpState(p.hp, DEATH);
        const nl = nonlethalState(p.hp, p.nonlethal);
        const message = st === 'dead' ? `⚠ Pg ${p.hp} ≤ ${DEATH}: MUERTA (Hard to Kill). Cheat Death (2 Hero Points) si es posible.` : st === 'dying_stable' ? `Pg ${p.hp}: inconsciente y estable (Hard to Kill). Heal + Relentless Healing te trae de vuelta.` : nl === 'unconscious' ? `No letal ${p.nonlethal} > pg ${p.hp}: INCONSCIENTE (cualquier cure lo quita 1:1).` : nl === 'staggered' ? `No letal = pg: tambaleante (una sola acción por asalto).` : undefined;
        return { label: `${label} → ${p.hp}/${MAX_HP} (${nl !== 'ok' ? (nl === 'unconscious' ? 'inconsciente por no letal' : 'tambaleante') : hpStateLabel(st)})${input.note ? ` · ${input.note}` : ''}`, message };
      }),
  }),

  /** Daño entrante con opción de Reactive Healing (inmediata, 1 uso de channel, 8d6 a vos antes del golpe). */
  incomingDamage: defineAction({
    input: z.object({ damage: z.number().int().min(1).max(500), reactiveHealing: z.boolean().default(false) }),
    handler: (input) =>
      runAction('hp.incomingDamage', input, async (ctx) => {
        const c = ctx.snap.character;
        let p = pools(c);
        let healed = 0;
        if (input.reactiveHealing) {
          if (!reactiveHealingApplies(p.hp, p.temp, input.damage)) conflict('Reactive Healing solo se puede usar si el golpe te dejaría a 0 o menos.');
          await consumeImmediate(ctx);
          await ctx.spend('channel', 1);
          const r = ctx.roll({ n: 8, sides: 6, bonus: 0 }, { rerollOnes: true, flatAfter: 1 });
          healed = r.total;
          p = applyHealing(p, healed, MAX_HP);
        }
        p = applyDamage(p, input.damage);
        await ctx.updateCharacter({ hpCurrent: p.hp, hpTemp: p.temp });
        const st = hpState(p.hp, DEATH);
        return { label: `${input.reactiveHealing ? `Reactive Healing +${healed}, luego ` : ''}daño −${input.damage} → ${p.hp}/${MAX_HP} (${hpStateLabel(st)})`, message: st === 'dead' ? '⚠ Muerte: Cheat Death con 2 Hero Points si es posible.' : undefined };
      }),
  }),
};

export const resources = {
  spend: defineAction({
    input: z.object({ key: z.enum(RESOURCE_KEYS), n: z.number().int().min(1).max(50).default(1), note: z.string().max(120).optional() }),
    handler: (input) =>
      runAction('resources.spend', input, async (ctx) => {
        await ctx.spend(input.key, input.n);
        return { label: `${resourceByKey[input.key].label} −${input.n}${input.note ? ` · ${input.note}` : ''}` };
      }),
  }),
  restore: defineAction({
    input: z.object({ key: z.enum(RESOURCE_KEYS), n: z.number().int().min(1).max(50).optional(), toMax: z.boolean().default(false), maxOverride: z.number().int().min(0).max(99).nullable().optional() }),
    handler: (input) =>
      runAction('resources.restore', input, async (ctx) => {
        if (input.maxOverride !== undefined) {
          await ctx.rec.update('resource_state', { key: input.key }, { maxOverride: input.maxOverride, updatedAt: ctx.now });
        }
        await ctx.restore(input.key, input.toMax ? 'max' : (input.n ?? 1));
        return { label: `${resourceByKey[input.key].label} ${input.toMax ? 'al máximo' : `+${input.n ?? 1}`}` };
      }),
  }),
};

export const channel = {
  use: defineAction({
    input: z.object({ mode: z.enum(['standard', 'quick']), excluded: z.number().int().min(0).max(2).default(0), undead: z.boolean().default(false), note: z.string().max(120).optional() }),
    handler: (input) =>
      runAction('channel.use', input, async (ctx) => {
        const cost = input.mode === 'quick' ? 2 : 1;
        await ctx.spend('channel', cost);
        const r = ctx.roll({ n: 8, sides: 6, bonus: 0 }, { rerollOnes: true, flatAfter: 1 });
        const left = ctx.snap.resources.channel!.current - cost;
        return {
          label: `${input.mode === 'quick' ? 'Quick Channel (movimiento, −2)' : 'Channel (estándar, −1)'}: 8d6 → ${r.total} a cada aliado${input.excluded ? `, ${input.excluded} excluido${input.excluded > 1 ? 's' : ''}` : ''}${input.undead ? ' · DC 19 vs no muertos' : ''} · quedan ${left}`,
          message: `Cada aliado a 30 pies recupera ${r.total} pg (media ≈ ${channelAverage()}).`,
        };
      }),
  }),
};

export const mythic = {
  surge: defineAction({
    input: z.object({ note: z.string().max(120).optional() }),
    handler: (input) =>
      runAction('mythic.surge', input, async (ctx) => {
        await consumeImmediate(ctx);
        await ctx.spend('mythic_power', 1);
        const r = ctx.roll({ n: 1, sides: 6, bonus: 0 });
        return { label: `Surge: +${r.total} a la tirada${input.note ? ` (${input.note})` : ''} · poder mítico ${ctx.snap.resources.mythic_power!.current - 1}` };
      }),
  }),
  amazingInitiative: defineAction({
    handler: () =>
      runAction('mythic.amazingInitiative', null, async (ctx) => {
        if (!ctx.snap.character.combatActive) conflict('Amazing Initiative se usa en combate (iniciá el combate primero).');
        if ((ctx.snap.resources.amazing_initiative?.current ?? 0) < 1) conflict('Ya usaste Amazing Initiative este asalto.');
        await ctx.spend('mythic_power', 1);
        await ctx.spend('amazing_initiative', 1);
        return { label: 'Amazing Initiative: acción estándar extra (no conjuro) · −1 poder mítico', message: 'Usala para un channel (no puede ser un conjuro).' };
      }),
  }),
  relentlessHealing: defineAction({
    input: z.object({ allyId: z.number().int(), healAmount: z.number().int().min(1).max(300) }),
    handler: (input) =>
      runAction('mythic.relentlessHealing', input, async (ctx) => {
        const ally = ctx.snap.allies.find((a) => a.id === input.allyId);
        if (!ally) notFound('Aliado no encontrado');
        const round = ctx.snap.character.round;
        if (ally.downState !== 'dead' && ally.downState !== 'dead_death_effect') conflict(`${ally.name} no está marcado como muerto.`);
        if (ally.diedRound !== null && round - ally.diedRound > 1) conflict(`${ally.name} murió hace más de 1 asalto: Relentless Healing no aplica (Mythic Breath of Life: 2 asaltos).`);
        if (ally.downState === 'dead_death_effect' && !ctx.snap.settings.relentlessVsDeathEffects) conflict('Muerte por efecto de muerte: según el ajuste actual, Relentless Healing no aplica (usá Mythic Breath of Life).');
        await ctx.spend('mythic_power', 1);
        const newHp = (ally.hpCurrent ?? 0) + input.healAmount;
        await ctx.rec.update('allies', { id: ally.id }, { hpCurrent: newHp, downState: newHp > 0 ? 'ok' : 'zero', diedRound: null });
        return { label: `Relentless Healing sobre ${ally.name}: +${input.healAmount} → ${newHp} pg, revive estabilizado · −1 poder mítico` };
      }),
  }),
  domainRecharge: defineAction({
    handler: () =>
      runAction('mythic.domainRecharge', null, async (ctx) => {
        await ctx.spend('mythic_domain_recharge', 1);
        await ctx.spend('mythic_power', 1);
        const s = ctx.snap.settings;
        const out = applyRest('mythicDomain', ctx.snap.resources, { recuperationRestoresDomain: s.recuperationRestoresDomain, mythicPowerReset: s.mythicPowerReset as any, mythicDomainRechargeMode: s.mythicDomainRechargeMode as any });
        for (const key of ['rebuke_death', 'touch_of_glory', 'aura_rounds'] as const) await ctx.setResource(key, out.resources[key]!.current);
        return { label: 'Recarga de Mythic Domain (estándar, −1 poder mítico): Rebuke Death 11, Touch of Glory 11, aura 15 asaltos' };
      }),
  }),
  recuperation: defineAction({
    handler: () =>
      runAction('mythic.recuperation', null, async (ctx) => {
        await ctx.spend('mythic_power', 1);
        await applyRestOutcome(ctx, 'recuperation');
        return { label: 'Recuperation (1 hora, −1 poder mítico): pg a la mitad como mínimo, conjuros y channels recuperados' };
      }),
  }),
};

export const domain = {
  rebukeDeath: defineAction({
    input: z.object({ target: z.string().max(60).optional() }),
    handler: (input) =>
      runAction('domain.rebukeDeath', input, async (ctx) => {
        await ctx.spend('rebuke_death', 1);
        const rd = rebukeDeath(true); const r = ctx.roll({ n: rd.n, sides: rd.sides, bonus: rd.bonus ?? 0 });
        return { label: `Rebuke Death${input.target ? ` a ${input.target}` : ''}: 1d4+7 → ${r.total} (solo bajo 0 pg; toque 5 pies, provoca)` };
      }),
  }),
  touchOfGlory: defineAction({
    input: z.object({ target: z.string().max(60).optional() }),
    handler: (input) =>
      runAction('domain.touchOfGlory', input, async (ctx) => {
        await ctx.spend('touch_of_glory', 1);
        return { label: `Touch of Glory${input.target ? ` a ${input.target}` : ''}: +15 a una prueba de Cha (1 hora)` };
      }),
  }),
  toggleAura: defineAction({
    input: z.object({ on: z.boolean() }),
    handler: (input) =>
      runAction('domain.toggleAura', input, async (ctx) => {
        const c = ctx.snap.character;
        if (input.on) {
          if (c.auraActive) return { label: 'Aura of Heroism ya estaba activa' };
          if ((ctx.snap.resources.aura_rounds?.current ?? 0) < 1) conflict('No quedan asaltos de Aura of Heroism (recargá con Mythic Domain o descansá).');
          // Activarla la primera vez en el combate cuesta la rápida (DM: una sola activación).
          if (c.combatActive && (ctx.snap.resources.swift_action?.current ?? 0) < 1) conflict('Ya usaste la acción rápida este asalto (o una inmediata fuera de turno).');
          if (c.combatActive) await ctx.spend('swift_action', 1);
          await ctx.updateCharacter({ auraActive: true });
          return { label: 'Aura of Heroism ACTIVADA (rápida): +2 moral a aliados a 30 pies; gasta 1 asalto por asalto' };
        }
        await ctx.updateCharacter({ auraActive: false });
        return { label: 'Aura of Heroism pausada' };
      }),
  }),
};

export const feat = {
  divineInterference: defineAction({
    input: z.object({ slotId: z.number().int(), creature: z.string().min(1).max(60) }),
    handler: (input) =>
      runAction('feat.divineInterference', input, async (ctx) => {
        const slot = ctx.snap.slots.find((s) => s.id === input.slotId);
        if (!slot) notFound('Ranura no encontrada');
        if (slot.status !== 'prepared' || !slot.spellId) conflict('Hay que sacrificar un conjuro preparado.');
        if (slot.level < 1) conflict('Los orisons no sirven para Divine Interference.');
        const used = ctx.snap.character.divineInterferenceUsed ?? [];
        if (used.map((u) => u.toLowerCase()).includes(input.creature.toLowerCase())) conflict(`Ya usaste Divine Interference contra ${input.creature} hoy.`);
        await consumeImmediate(ctx);
        await ctx.rec.update('spell_slots', { id: slot.id }, { status: 'sacrificed', spentOn: 'divine_interference', spentAt: ctx.now });
        await ctx.updateCharacter({ divineInterferenceUsed: [...used, input.creature] });
        return { label: `Divine Interference contra ${input.creature}: sacrificás ${slot.spellId} (${slot.level}.º) → repite el ataque con −${slot.level}` };
      }),
  }),
};

export const hero = {
  use: defineAction({
    input: z.object({ kind: z.enum(HERO_POINT_KINDS), note: z.string().max(120).optional() }),
    handler: (input) =>
      runAction('hero.use', input, async (ctx) => {
        const check = canUseHeroPoint(ctx.snap.resources, input.kind, ctx.snap.character.combatActive);
        if (!check.ok) conflict(check.reason);
        const cost = heroPointCost(input.kind);
        const { fromTemp, fromPermanent } = spendHeroPoints(ctx.snap.resources, cost);
        if (fromTemp) await ctx.spend('hero_point_temp', fromTemp);
        if (fromPermanent) await ctx.spend('hero_points', fromPermanent);
        if (input.kind !== 'cheat_death' && ctx.snap.character.combatActive) await ctx.spend('hero_point_round', 1);
        if (input.kind === 'cheat_death') await ctx.updateCharacter({ conditions: Array.from(new Set([...(ctx.snap.character.conditions ?? []), 'stable'])) });
        const info = heroPointInfo[input.kind];
        return { label: `Hero Point: ${info.label} (−${cost})${input.note ? ` · ${input.note}` : ''}`, message: info.detail };
      }),
  }),
};

export const combat = {
  start: defineAction({
    handler: () =>
      runAction('combat.start', null, async (ctx) => {
        await ctx.updateCharacter({ combatActive: true, round: 1 });
        for (const key of ['amazing_initiative', 'swift_action', 'immediate_action', 'hero_point_round'] as const) await ctx.restore(key, 'max');
        return { label: 'Combate iniciado: asalto 1' };
      }),
  }),
  tickRound: defineAction({
    handler: () =>
      runAction('combat.tickRound', null, async (ctx) => {
        const c = ctx.snap.character;
        if (!c.combatActive) conflict('No hay combate activo.');
        const next = c.round + 1;
        const changes: Partial<schema.CharacterStateRow> = { round: next };
        const notes: string[] = [];
        // Aura: gasta 1 asalto si está encendida
        if (c.auraActive) {
          const left = (ctx.snap.resources.aura_rounds?.current ?? 0) - 1;
          if (left >= 0) await ctx.setResource('aura_rounds', left);
          if (left <= 0) { changes.auraActive = false; notes.push('aura agotada'); }
        }
        // Buffs por asaltos
        const { updates, expired } = tickRounds(ctx.snap.buffs, 1);
        for (const u of updates) await ctx.rec.update('active_buffs', { id: u.id }, u.changes);
        for (const e of expired) {
          notes.push(`expira ${e.label}`);
          if (e.buffKey === 'heroic-fortune' && (ctx.snap.resources.hero_point_temp?.current ?? 0) > 0) await ctx.setResource('hero_point_temp', 0);
        }
        await ctx.updateCharacter(changes);
        for (const key of ['amazing_initiative', 'swift_action', 'immediate_action', 'hero_point_round'] as const) await ctx.restore(key, 'max');
        return { label: `Asalto ${next}${notes.length ? ` · ${notes.join(', ')}` : ''}` };
      }),
  }),
  end: defineAction({
    input: z.object({ minutesElapsed: z.number().int().min(0).max(24 * 60).default(0) }),
    handler: (input) =>
      runAction('combat.end', input, async (ctx) => {
        const { updates, expired } = tickRounds(ctx.snap.buffs, 999);
        for (const u of updates) await ctx.rec.update('active_buffs', { id: u.id }, u.changes);
        if ((ctx.snap.resources.hero_point_temp?.current ?? 0) > 0 && expired.some((e) => e.buffKey === 'heroic-fortune')) await ctx.setResource('hero_point_temp', 0);
        if (input.minutesElapsed > 0) {
          const t = tickMinutes(ctx.snap.buffs.filter((b) => b.unit === 'minutes'), input.minutesElapsed);
          for (const u of t.updates) await ctx.rec.update('active_buffs', { id: u.id }, u.changes);
        }
        await ctx.updateCharacter({ combatActive: false, round: 0, auraActive: false });
        for (const key of ['amazing_initiative', 'swift_action', 'immediate_action', 'hero_point_round'] as const) await ctx.restore(key, 'max');
        return { label: `Combate terminado${input.minutesElapsed ? ` · pasaron ${input.minutesElapsed} min` : ''} · buffs por asaltos expirados (${expired.length})` };
      }),
  }),
  passTime: defineAction({
    input: z.object({ minutes: z.number().int().min(1).max(24 * 60) }),
    handler: (input) =>
      runAction('combat.passTime', input, async (ctx) => {
        const t = tickMinutes(ctx.snap.buffs, input.minutes);
        for (const u of t.updates) await ctx.rec.update('active_buffs', { id: u.id }, u.changes);
        // Fuera de combate, pasar tiempo también libera las acciones del asalto (inmediata usada, etc.).
        for (const key of ['amazing_initiative', 'swift_action', 'immediate_action', 'hero_point_round'] as const) await ctx.restore(key, 'max');
        return { label: `Pasaron ${input.minutes} min${t.expired.length ? ` · expiran: ${t.expired.map((e) => e.label).join(', ')}` : ''}` };
      }),
  }),
};

async function applyRestOutcome(ctx: Parameters<Parameters<typeof runAction>[2]>[0], kind: RestKind, hoursElapsed = 8) {
  const s = ctx.snap.settings;
  const out = applyRest(kind, ctx.snap.resources, { recuperationRestoresDomain: s.recuperationRestoresDomain, mythicPowerReset: s.mythicPowerReset as any, mythicDomainRechargeMode: s.mythicDomainRechargeMode as any }, hoursElapsed);
  for (const [key, v] of Object.entries(out.resources)) {
    if (v.current !== ctx.snap.resources[key]?.current) await ctx.setResource(key as any, v.current);
  }
  const c = ctx.snap.character;
  const changes: Partial<schema.CharacterStateRow> = {};
  if (out.hp !== null) changes.hpCurrent = kind === 'recuperation' ? Math.max(c.hpCurrent, out.hp) : out.hp;
  if (out.clearNonlethal) changes.hpNonlethal = 0;
  if (out.clearTemp) changes.hpTemp = 0;
  if (out.auraOff) changes.auraActive = false;
  if (out.clearDivineInterference) changes.divineInterferenceUsed = [];
  if (out.endCombat) { changes.combatActive = false; changes.round = 0; }
  if (out.sessionIncrement) changes.sessionNumber = c.sessionNumber + out.sessionIncrement;
  if (kind === 'full') changes.lastFullRestAt = ctx.now;
  if (kind === 'recuperation') changes.lastRecuperationAt = ctx.now;
  if (kind === 'full' && s.mythicPowerReset !== 'manual') changes.lastMythicResetAt = ctx.now;
  await ctx.updateCharacter(changes);
  if (out.reprepareSlots) {
    for (const slot of ctx.snap.slots) {
      if (slot.status === 'prepared' || slot.status === 'free') continue;
      await ctx.rec.update('spell_slots', { id: slot.id }, { status: slot.spellId ? 'prepared' : 'free', spentOn: null, spentAt: null });
    }
  }
  if (out.expireBuffs.length) {
    for (const b of ctx.snap.buffs) if (out.expireBuffs.includes(b.unit as any)) await ctx.rec.update('active_buffs', { id: b.id }, { status: 'expired' });
  }
  if (out.minutesElapsed > 0) {
    const t = tickMinutes(ctx.snap.buffs.filter((b) => b.unit === 'minutes'), out.minutesElapsed);
    for (const u of t.updates) await ctx.rec.update('active_buffs', { id: u.id }, u.changes);
  }
  return out;
}

export const rest = {
  apply: defineAction({
    input: z.object({ kind: z.enum(['full', 'recuperation', 'mythicDomain', 'newSession', 'mythicPowerManual']), hoursElapsed: z.number().int().min(1).max(24).default(8) }),
    handler: (input) =>
      runAction('rest.apply', input, async (ctx) => {
        if (input.kind === 'recuperation') await ctx.spend('mythic_power', 1);
        if (input.kind === 'mythicDomain') { await ctx.spend('mythic_domain_recharge', 1); await ctx.spend('mythic_power', 1); }
        const out = await applyRestOutcome(ctx, input.kind, input.hoursElapsed);
        const labels: Record<RestKind, string> = { full: 'Descanso completo (rezo)', recuperation: 'Recuperation (1 h, −1 poder mítico)', mythicDomain: 'Recarga de Mythic Domain', newSession: 'Nueva sesión', mythicPowerManual: 'Poder mítico recargado (manual)' };
        return { label: labels[input.kind], message: out.summary.join(' · ') };
      }),
  }),
};

export const log = {
  undoLast: defineAction({
    handler: async () => {
      return db().transaction(async (tx) => {
        await tx.select().from(schema.characterState).where(eq(schema.characterState.id, 1)).for('update');
        const [target] = await tx.select().from(schema.events).where(eq(schema.events.undone, false)).orderBy(desc(schema.events.id)).limit(1);
        if (!target) conflict('No hay nada que deshacer.');
        if (target.kind === 'log.undoLast') conflict('No se puede deshacer un deshacer.');
        await revertPatches(tx as any, target.patches);
        const now = new Date();
        await tx.update(schema.events).set({ undone: true, undoneAt: now }).where(eq(schema.events.id, target.id));
        await tx.insert(schema.events).values({ kind: 'log.undoLast', label: `Deshecho: ${target.label}`, patches: [], undoOf: target.id, undone: true, undoneAt: now });
        await tx.update(schema.characterState).set({ version: sql`${schema.characterState.version} + 1`, updatedAt: now }).where(eq(schema.characterState.id, 1));
        const snapshot = await loadSnapshot(tx);
        return { snapshot, event: null, roll: null, message: `Deshecho: ${target.label}` };
      });
    },
  }),
  recent: defineAction({
    input: z.object({ limit: z.number().int().min(1).max(200).default(50) }),
    handler: async (input) => {
      const rows = await db().select({ id: schema.events.id, at: schema.events.at, kind: schema.events.kind, label: schema.events.label, undone: schema.events.undone, round: schema.events.round, sessionNumber: schema.events.sessionNumber, roll: schema.events.roll }).from(schema.events).orderBy(desc(schema.events.id)).limit(input.limit);
      return rows.map((r) => ({ ...r, at: r.at.toISOString() }));
    },
  }),
};
