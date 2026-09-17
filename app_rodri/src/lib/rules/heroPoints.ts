import type { ResourceMap } from './resources';
import { currentOf } from './resources';

export const HERO_POINT_KINDS = ['act_out_of_turn', 'bonus_before', 'bonus_after', 'extra_action', 'inspiration', 'recall', 'reroll', 'special', 'cheat_death'] as const;
export type HeroPointKind = (typeof HERO_POINT_KINDS)[number];

export const heroPointInfo: Record<HeroPointKind, { label: string; cost: number; detail: string }> = {
  act_out_of_turn: { label: 'Act Out of Turn', cost: 1, detail: 'Actuás ya (una acción de movimiento o estándar), como una acción preparada antes de la criatura que está actuando. Curar al tanque antes de que el monstruo vuelva a pegar.' },
  bonus_before: { label: 'Bonus +8 (antes de tirar)', cost: 1, detail: '+8 de suerte a una tirada de d20 declarado antes de tirar. Salvación letal, concentración de un Heal.' },
  bonus_after: { label: 'Bonus +4 (después de tirar)', cost: 1, detail: '+4 de suerte a una tirada de d20 ya hecha.' },
  extra_action: { label: 'Extra Action', cost: 1, detail: 'Una acción estándar o de movimiento extra en tu turno. Puede ser un conjuro: un segundo Heal.' },
  inspiration: { label: 'Inspiration', cost: 1, detail: 'Le pedís una pista al GM sobre qué hacer.' },
  recall: { label: 'Recall', cost: 1, detail: 'Recuperás un conjuro ya lanzado (o un uso de una habilidad limitada). Nunca mientras queden poderes míticos: Inspired Spell hace lo mismo por 1 uso.' },
  reroll: { label: 'Reroll', cost: 1, detail: 'Repetís una tirada de d20 que acabás de hacer; te quedás con la segunda.' },
  special: { label: 'Special', cost: 1, detail: 'Le pedís al GM intentar algo casi imposible.' },
  cheat_death: { label: 'Cheat Death', cost: 2, detail: 'Sobrevivís con pg negativos estables. Solo para vos. La única forma de gastar 2 puntos en un turno.' },
};

export function heroPointCost(kind: HeroPointKind): number {
  return heroPointInfo[kind].cost;
}

export function totalHeroPoints(state: ResourceMap): number {
  return currentOf('hero_points', state) + currentOf('hero_point_temp', state);
}

export function canUseHeroPoint(state: ResourceMap, kind: HeroPointKind, inCombat: boolean): { ok: true } | { ok: false; reason: string } {
  const cost = heroPointCost(kind);
  if (totalHeroPoints(state) < cost) return { ok: false, reason: `${heroPointInfo[kind].label} cuesta ${cost} Hero Point${cost > 1 ? 's' : ''} y tenés ${totalHeroPoints(state)}.` };
  if (inCombat && kind !== 'cheat_death' && currentOf('hero_point_round', state) < 1) return { ok: false, reason: 'Ya usaste un Hero Point este asalto (máximo 1, salvo Cheat Death).' };
  return { ok: true };
}

/** Gasta primero el temporal (Heroic Fortune). Devuelve el estado y cuántos salieron de cada pool. */
export function spendHeroPoints(state: ResourceMap, cost: number): { state: ResourceMap; fromTemp: number; fromPermanent: number } {
  let remaining = cost;
  const temp = currentOf('hero_point_temp', state);
  const fromTemp = Math.min(temp, remaining);
  remaining -= fromTemp;
  const perm = currentOf('hero_points', state);
  if (perm < remaining) throw new Error('Hero Points insuficientes');
  return {
    state: { ...state, hero_point_temp: { ...state.hero_point_temp!, current: temp - fromTemp }, hero_points: { ...state.hero_points!, current: perm - remaining } },
    fromTemp,
    fromPermanent: remaining,
  };
}
