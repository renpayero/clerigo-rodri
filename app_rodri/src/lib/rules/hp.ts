export type HpState = 'ok' | 'disabled' | 'dying_stable' | 'dead';

export type HpPools = { hp: number; temp: number; nonlethal: number };

export function hpState(hp: number, deathThreshold = -36): HpState {
  if (hp <= deathThreshold) return 'dead';
  if (hp < 0) return 'dying_stable'; // Hard to Kill: estable automáticamente
  if (hp === 0) return 'disabled';
  return 'ok';
}

export function hpStateLabel(s: HpState): string {
  return { ok: 'OK', disabled: 'Incapacitada (0 pg)', dying_stable: 'Inconsciente, estable (Hard to Kill)', dead: 'MUERTA' }[s];
}

/** Daño: consume pg temporales primero. */
export function applyDamage(p: HpPools, damage: number): HpPools {
  if (damage <= 0) return p;
  const fromTemp = Math.min(p.temp, damage);
  return { ...p, temp: p.temp - fromTemp, hp: p.hp - (damage - fromTemp) };
}

/** Curación: sube pg (tope máx) y quita la misma cantidad de daño no letal. */
export function applyHealing(p: HpPools, amount: number, max: number): HpPools {
  if (amount <= 0) return p;
  return { ...p, hp: Math.min(max, p.hp + amount), nonlethal: Math.max(0, p.nonlethal - amount) };
}

export function applyNonlethal(p: HpPools, amount: number): HpPools {
  return { ...p, nonlethal: Math.max(0, p.nonlethal + amount) };
}

export function belowPercent(hp: number, max: number, pct = 40): boolean {
  return hp < (max * pct) / 100;
}

/** Reactive Healing se puede usar si el golpe te dejaría a 0 o menos. */
export function reactiveHealingApplies(hp: number, temp: number, incoming: number): boolean {
  return hp + temp - incoming <= 0;
}

export function percent(hp: number, max: number): number {
  return Math.max(0, Math.min(100, Math.round((hp / max) * 100)));
}

/** Daño no letal: igual a los pg actuales → tambaleante; mayor → inconsciente. */
export function nonlethalState(hp: number, nonlethal: number): 'ok' | 'staggered' | 'unconscious' {
  if (nonlethal <= 0 || hp <= 0) return 'ok';
  if (nonlethal > hp) return 'unconscious';
  if (nonlethal === hp) return 'staggered';
  return 'ok';
}
