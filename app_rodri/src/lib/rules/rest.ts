import type { ResourceMap, ResetContext } from './resources';
import { resetByPolicy, restore } from './resources';
import { maxHp } from './derived';

export type RestKind = 'full' | 'recuperation' | 'mythicDomain' | 'newSession' | 'mythicPowerManual';

export type RestOutcome = {
  resources: ResourceMap;
  /** null = no cambia. */
  hp: number | null;
  clearNonlethal: boolean;
  clearTemp: boolean;
  /** Re-preparar todas las ranuras (spent/converted/sacrificed → prepared si tienen conjuro, free si no). */
  reprepareSlots: boolean;
  /** Expirar buffs por unidad. */
  expireBuffs: ('rounds' | 'minutes' | 'until_rest')[];
  /** Restar minutos a los buffs por minutos (descanso: 8 h = 480). */
  minutesElapsed: number;
  auraOff: boolean;
  clearDivineInterference: boolean;
  endCombat: boolean;
  sessionIncrement: number;
  summary: string[];
};

const base = (resources: ResourceMap): RestOutcome => ({
  resources, hp: null, clearNonlethal: false, clearTemp: false, reprepareSlots: false, expireBuffs: [], minutesElapsed: 0,
  auraOff: false, clearDivineInterference: false, endCombat: false, sessionIncrement: 0, summary: [],
});

/** Descanso completo (8 h + rezo): pg al máximo (Recuperation pasiva), todos los recursos diarios, ranuras, buffs. */
export function fullRest(resources: ResourceMap, ctx: ResetContext, hoursElapsed = 8): RestOutcome {
  const r1 = resetByPolicy(resources, 'daily', ctx);
  const r2 = resetByPolicy(r1.state, 'round', ctx);
  const out = base(r2.state);
  out.hp = maxHp();
  out.clearNonlethal = true;
  out.clearTemp = true;
  out.reprepareSlots = true;
  out.expireBuffs = ['rounds', 'until_rest'];
  out.minutesElapsed = hoursElapsed * 60;
  out.auraOff = true;
  out.clearDivineInterference = true;
  out.endCombat = true;
  out.summary = [
    `Pg al máximo (${maxHp()}) por Recuperation`,
    `Recursos recuperados: ${r1.restored.join(', ') || 'ninguno'}`,
    ctx.mythicPowerReset === 'manual' ? 'Poder mítico NO recargado (ajuste manual)' : 'Poder mítico recargado',
    'Ranuras re-preparadas',
    `Buffs de asaltos expirados; a los de minutos se les restan ${hoursElapsed} h`,
  ];
  return out;
}

/** Recuperation (1 poder mítico + 1 hora): mitad de pg máx, rasgos de clase con usos/día, ranuras; NO poder mítico. */
export function recuperation(resources: ResourceMap, ctx: ResetContext): RestOutcome {
  const r = resetByPolicy(resources, 'recuperation', ctx);
  const out = base(r.state);
  out.hp = Math.floor(maxHp() / 2); // se aplica como "al menos la mitad" en la action
  out.reprepareSlots = true;
  out.minutesElapsed = 60;
  out.summary = [
    `Recuperás al menos ${Math.floor(maxHp() / 2)} pg (mitad del máximo)`,
    `Recursos: ${r.restored.join(', ') || 'ninguno'}`,
    ctx.recuperationRestoresDomain ? 'Poderes de dominio y aura incluidos (ajuste)' : 'Poderes de dominio NO incluidos (ajuste)',
    'Ranuras re-preparadas · poder mítico sin cambios · 1 hora a los buffs',
  ];
  return out;
}

/** Recarga de Mythic Domain (1/día, estándar + 1 PM): Rebuke Death, Touch of Glory y asaltos de aura al máximo. */
export function mythicDomainRecharge(resources: ResourceMap, ctx: ResetContext, mode: 'reset' | 'add' = 'reset'): RestOutcome {
  let s = resources;
  if (mode === 'reset') {
    s = resetByPolicy(s, 'mythicDomain', ctx).state;
  } else {
    for (const key of ['rebuke_death', 'touch_of_glory', 'aura_rounds'] as const) s = restore(s, key, s[key]?.max ?? 0);
  }
  const out = base(s);
  out.summary = ['Rebuke Death 11, Touch of Glory 11, Aura of Heroism 15 asaltos (recarga de Mythic Domain)'];
  return out;
}

export function newSession(resources: ResourceMap, ctx: ResetContext): RestOutcome {
  const r = resetByPolicy(resources, 'round', ctx);
  const out = base(r.state);
  out.endCombat = true;
  out.auraOff = true;
  out.sessionIncrement = 1;
  out.summary = ['Nueva sesión: combate cerrado, recursos por asalto reiniciados'];
  return out;
}

export function mythicPowerManual(resources: ResourceMap): RestOutcome {
  const out = base(restore(resources, 'mythic_power', 'max'));
  out.summary = ['Poder mítico recargado manualmente'];
  return out;
}

export function applyRest(kind: RestKind, resources: ResourceMap, ctx: ResetContext & { mythicDomainRechargeMode: 'reset' | 'add' }, hoursElapsed = 8): RestOutcome {
  switch (kind) {
    case 'full': return fullRest(resources, ctx, hoursElapsed);
    case 'recuperation': return recuperation(resources, ctx);
    case 'mythicDomain': return mythicDomainRecharge(resources, ctx, ctx.mythicDomainRechargeMode);
    case 'newSession': return newSession(resources, ctx);
    case 'mythicPowerManual': return mythicPowerManual(resources);
  }
}
