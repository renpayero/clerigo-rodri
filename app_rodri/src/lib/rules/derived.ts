/**
 * Estadísticas derivadas de Rodri (Cleric 11 / Hierophant 3). Todo sale de la ficha v3.
 * Funciones puras: sin DB ni Astro.
 */
import { abilityMod } from './spellsPerDay';

export const BASE = {
  level: 11,
  tier: 3,
  bab: 8,
  saves: { fort: 7, ref: 3, will: 7 },
  abilities: { str: 10, dex: 12, con: 18, int: 10, wis: 27, cha: 14 },
  armor: 7,
  shield: 3,
  deflection: 1,
  natural: 1,
  resistance: 4,
  initiativeMisc: { reactionary: 2, amazingInitiative: 3, iounStone: 1 },
  hpRolled: 50,
  favoredClassHp: 11,
  mythicHpPerTier: 4,
} as const;

export const mod = abilityMod;

export function maxHp(con = BASE.abilities.con, tier = BASE.tier): number {
  return 8 + BASE.hpRolled + BASE.level * mod(con) + BASE.favoredClassHp + BASE.mythicHpPerTier * tier;
}

/** Hard to Kill: muerte a −2 × Con. */
export function deathThreshold(con = BASE.abilities.con): number {
  return -2 * con;
}

export type AcOptions = { magicVestmentArmor?: boolean; magicVestmentShield?: boolean; shieldOfFaith?: boolean; fervorDodge?: boolean; cover?: boolean; flatFooted?: boolean };

export function armorClass(o: AcOptions = {}) {
  const dex = o.flatFooted ? 0 : mod(BASE.abilities.dex);
  const armor = BASE.armor + (o.magicVestmentArmor ? 1 : 0); // +2 de mejora reemplaza al +1
  const shield = BASE.shield + (o.magicVestmentShield ? 1 : 0);
  const deflection = Math.max(BASE.deflection, o.shieldOfFaith ? 3 : 0);
  const dodge = o.flatFooted ? 0 : o.fervorDodge ? 2 : 0;
  const cover = o.cover ? 4 : 0;
  const total = 10 + armor + shield + dex + deflection + BASE.natural + dodge + cover;
  return {
    total,
    touch: 10 + dex + deflection + dodge,
    flatFooted: 10 + armor + shield + deflection + BASE.natural + cover,
    breakdown: { base: 10, armor, shield, dex, deflection, natural: BASE.natural, dodge, cover },
  };
}

export function cmb(): number {
  return BASE.bab + mod(BASE.abilities.str);
}

export function cmd(o: { shieldOfFaith?: boolean; fervorDodge?: boolean } = {}): number {
  const deflection = Math.max(BASE.deflection, o.shieldOfFaith ? 3 : 0);
  return 10 + BASE.bab + mod(BASE.abilities.str) + mod(BASE.abilities.dex) + deflection + (o.fervorDodge ? 2 : 0);
}

export type SaveOptions = { auraInside?: boolean; prayer?: boolean; heroPointBonus?: 8 | 4 | 0 };

export function saves(o: SaveOptions = {}) {
  const extra = (o.auraInside ? 2 : 0) + (o.prayer ? 1 : 0) + (o.heroPointBonus ?? 0);
  return {
    fort: BASE.saves.fort + mod(BASE.abilities.con) + BASE.resistance + extra,
    ref: BASE.saves.ref + mod(BASE.abilities.dex) + BASE.resistance + extra,
    will: BASE.saves.will + mod(BASE.abilities.wis) + BASE.resistance + extra,
  };
}

export function initiative(): number {
  const m = BASE.initiativeMisc;
  return mod(BASE.abilities.dex) + m.reactionary + m.amazingInitiative + m.iounStone;
}

export function concentration(cl = BASE.level): number {
  return cl + mod(BASE.abilities.wis);
}

/** Probabilidad (0-1) de superar la prueba de concentración al lanzar a la defensiva. */
export function defensiveCastChance(spellLevel: number, cl = BASE.level): number {
  const dc = 15 + 2 * spellLevel;
  const need = dc - concentration(cl);
  const successes = Math.max(0, Math.min(20, 21 - need));
  return successes / 20;
}

export function spellDc(spellLevel: number): number {
  return 10 + spellLevel + mod(BASE.abilities.wis);
}

export function channelDc(vsUndead = false): number {
  return 10 + Math.floor(BASE.level / 2) + mod(BASE.abilities.cha) + (vsUndead ? 2 : 0);
}

export function channelUses(): number {
  return 3 + mod(BASE.abilities.cha) + 2; // Extra Channel
}

export function selectiveExclusions(): number {
  return mod(BASE.abilities.cha);
}

/** Carga (Str 10, Core Table 7-4). */
export function carrying(str = BASE.abilities.str) {
  const table: Record<number, number> = { 8: 26, 9: 30, 10: 33, 11: 38, 12: 43 };
  const light = table[str] ?? 33;
  return { light, medium: light * 2, heavy: Math.round(light * 3.03) };
}

export const rangeClose = (cl: number) => 25 + 5 * Math.floor(cl / 2);
export const rangeMedium = (cl: number) => 100 + 10 * cl;
export const rangeLong = (cl: number) => 400 + 40 * cl;
