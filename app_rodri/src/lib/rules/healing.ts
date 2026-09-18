import type { HealSpec } from '@/data/types';

export type Dice = { n: number; sides: number; bonus?: number };

export type HealOptions = {
  cl?: number;
  /** Healer's Blessing: ×1,5 en conjuros cure. */
  healersBlessing?: boolean;
  /** Blessed Touch: +1 por objetivo en channel y cures. */
  blessedTouch?: boolean;
  mythic?: boolean;
};

export type HealMath = { dice?: Dice; flat: number; multiplier: 1 | 1.5; bonusAfter: number; avg: number; min: number; max: number; formula: string };

const avgDie = (sides: number) => (sides + 1) / 2;

/** Aplica Healer's Blessing (empoderado: ×1,5 redondeado hacia abajo). */
export function applyEmpower(total: number): number {
  return Math.floor(total * 1.5);
}

/** Curación de un conjuro según su HealSpec y las opciones de Rodri. */
export function healMath(spec: HealSpec, o: HealOptions = {}): HealMath {
  const cl = o.cl ?? 11;
  const isCure = spec.kind === 'cure';
  const mult: 1 | 1.5 = isCure && (o.healersBlessing ?? true) ? 1.5 : 1;
  const bonusAfter = isCure && (o.blessedTouch ?? true) ? 1 : 0;

  if (spec.kind === 'heal' && spec.flatPerLevel) {
    const flat = Math.min(spec.flatPerLevel.amount * cl, spec.flatPerLevel.max);
    return { flat, multiplier: 1, bonusAfter: 0, avg: flat, min: flat, max: flat, formula: `${spec.flatPerLevel.amount} × ${cl} (máx. ${spec.flatPerLevel.max}) = ${flat}` };
  }

  const dice = spec.dice ? { ...spec.dice } : undefined;
  const flat = spec.perLevel ? Math.min(cl, spec.perLevel.max) : 0;
  const baseAvg = (dice ? dice.n * avgDie(dice.sides) : 0) + flat;
  const baseMin = (dice ? dice.n : 0) + flat;
  const baseMax = (dice ? dice.n * dice.sides : 0) + flat;
  const f = (x: number) => (mult === 1.5 ? applyEmpower(x) : x) + bonusAfter;
  const diceTxt = dice ? `${dice.n}d${dice.sides}` : '';
  const formula = `${diceTxt}${flat ? `+${flat}` : ''}${mult === 1.5 ? ' ×1,5' : ''}${bonusAfter ? ' +1' : ''}`;
  return { dice, flat, multiplier: mult, bonusAfter, avg: round1(mult === 1.5 ? baseAvg * 1.5 + bonusAfter : baseAvg + bonusAfter), min: f(baseMin), max: f(baseMax), formula };
}

export function healAmount(cl = 11, mythic = false): number {
  return mythic ? Math.min(15 * cl, 225) : Math.min(10 * cl, 150);
}

export function breathOfLife(cl = 11, mythic = false): Dice {
  return { n: 5, sides: mythic ? 12 : 8, bonus: Math.min(cl, 25) };
}

export function rebukeDeath(mythicDomain = true): Dice {
  const effLevel = mythicDomain ? 15 : 11;
  return { n: 1, sides: 4, bonus: Math.floor(effLevel / 2) };
}

/** Channel: 6d6 + 2d6 (Phylactery). */
export function channelDice(phylactery = true): Dice {
  return { n: phylactery ? 8 : 6, sides: 6 };
}

/** Media de un d6 con reroll de los 1 una vez (Envoy of Healing): 3,5 + (1/6)·(3,5 − 1) = 3,9167. */
export function avgDieRerollOnes(sides: number): number {
  const base = avgDie(sides);
  return base + (1 / sides) * (base - 1);
}

export function channelAverage(o: { phylactery?: boolean; envoy?: boolean; blessedTouch?: boolean } = {}): number {
  const d = channelDice(o.phylactery ?? true);
  const per = o.envoy ?? true ? avgDieRerollOnes(d.sides) : avgDie(d.sides);
  return round1(d.n * per + ((o.blessedTouch ?? true) ? 1 : 0));
}

/** Patrones de curación por asalto (ficha §8). */
export function roundPatterns() {
  const ch = channelAverage();
  return [
    { label: 'Heal + Quick Channel', single: 110 + ch, others: ch, cost: '1 ranura 6.º + 2 usos de channel' },
    { label: '+ Amazing Initiative (channel extra)', single: 110 + 2 * ch, others: 2 * ch, cost: '+1 poder mítico, +1 uso' },
    { label: '+ Hero Point Extra Action (2.º Heal)', single: 220 + 2 * ch, others: 2 * ch, cost: '+1 Hero Point, 2.ª ranura 6.º' },
  ].map((p) => ({ ...p, single: round1(p.single), others: round1(p.others) }));
}

export function round1(x: number): number {
  return Math.round(x * 100) / 100;
}
