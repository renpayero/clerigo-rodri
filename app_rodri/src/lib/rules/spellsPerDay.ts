/** Tabla de conjuros por día del clérigo (Core pg. 38) por nivel de personaje, niveles 0-6. */
const CLERIC_TABLE: Record<number, number[]> = {
  11: [4, 4, 4, 4, 3, 2, 1],
  12: [4, 4, 4, 4, 3, 3, 2],
  13: [4, 4, 4, 4, 4, 3, 2],
};

/** Ranura de dominio: 1 por nivel 1-6 (0 en nivel 0). */
const DOMAIN = [0, 1, 1, 1, 1, 1, 1];

/** Conjuros extra por característica (Core pg. 17, Table 1-3). */
export function bonusSpells(abilityMod: number, spellLevel: number): number {
  if (spellLevel === 0 || abilityMod < spellLevel) return 0;
  return Math.floor((abilityMod - spellLevel) / 4) + 1;
}

export function abilityMod(score: number): number {
  return Math.floor((score - 10) / 2);
}

/** Conjuros por día por nivel 0-6 para un clérigo de nivel `charLevel` con Sabiduría `wis`. */
export function spellsPerDay(wis: number, charLevel = 11): number[] {
  const base = CLERIC_TABLE[charLevel] ?? CLERIC_TABLE[11]!;
  const mod = abilityMod(wis);
  return base.map((b, lvl) => b + (DOMAIN[lvl] ?? 0) + bonusSpells(mod, lvl));
}

export type SlotLayout = { level: number; idx: number; isDomain: boolean };

/** Distribución de ranuras: idx 0 de los niveles 1-6 es la ranura de dominio. */
export function slotLayout(wis: number, charLevel = 11): SlotLayout[] {
  const out: SlotLayout[] = [];
  spellsPerDay(wis, charLevel).forEach((count, level) => {
    for (let idx = 0; idx < count; idx++) out.push({ level, idx, isDomain: level > 0 && idx === 0 });
  });
  return out;
}
