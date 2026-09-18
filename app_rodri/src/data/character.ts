import { aon } from './sources';
import type { AbilityScore, RacialTrait, ClassFeature } from './types';

export const character = {
  name: 'Rodri',
  player: 'Dako',
  /** Aspecto (17/09/2026): edad equivalente a un humano de 28 (aasimar: adulto 20, madurez 35); promedio de la tabla del ARG. */
  appearance: { age: 30, gender: 'varón', height: '1,80 m (5 pies 11)', weight: '70 kg (155 lb)', eyes: 'plateados, sin pupila, brillo tenue', hair: 'rubio dorado a los hombros; barba corta' },
  className: 'Cleric',
  level: 11,
  mythicPath: 'Hierophant',
  tier: 3,
  race: 'Aasimar',
  deity: 'Sarenrae',
  deityAlignment: 'NG',
  alignment: 'NG',
  domains: ['Healing', 'Glory (Heroism)'],
  size: 'Mediano',
  speed: 30,
  languages: ['Common', 'Celestial', 'Abyssal', 'Infernal', 'Draconic', 'Undercommon', 'Sylvan'],
  bab: [8, 3],
  casterLevel: 11,
  inspiredCasterLevel: 13,
  hpMax: 125,
  hpRoll: '8 (nivel 1 máx.) + 50 (10d8: 7,6,6,5,5,5,4,2 + reroll de dos 1 → 8,2) + 44 (Con 18 × 11) + 11 (clase predilecta) + 12 (Hierophant +4/tier)',
  deathThreshold: -36,
  gold: 772,
  wealthCap: 102_500,
  equipmentTotal: 101_728,
  sheetVersion: 'FICHA-FINAL v3.2 (18/09/2026)',
  aon: {
    cleric: aon('class', 'Cleric', 'Core Rulebook pg. 38'),
    aasimar: aon('race', 'Aasimar', 'Advanced Race Guide pg. 84'),
    sarenrae: aon('deity', 'Sarenrae', 'Inner Sea Gods pg. 132'),
    hierophant: aon('path', 'Hierophant', 'Mythic Adventures pg. 32'),
  },
} as const;

/** Costos de compra por puntos (Core pg. 15-16). */
export const POINT_BUY_COST: Record<number, number> = { 7: -4, 8: -2, 9: -1, 10: 0, 11: 1, 12: 2, 13: 3, 14: 5, 15: 7, 16: 10, 17: 13, 18: 17 };

export const abilities: AbilityScore[] = [
  { key: 'Str', name: 'Fuerza', bought: 10, cost: 0, racial: 0, level4: 0, level8: 0, tier2: 0, item: null, final: 10, mod: 0 },
  { key: 'Dex', name: 'Destreza', bought: 10, cost: 0, racial: 0, level4: 0, level8: 0, tier2: 0, item: { name: 'Brazales de Destreza +2', value: 2 }, final: 12, mod: 1 },
  { key: 'Con', name: 'Constitución', bought: 14, cost: 5, racial: 0, level4: 0, level8: 0, tier2: 0, item: { name: 'Belt of Mighty Constitution +4', value: 4 }, final: 18, mod: 4 },
  { key: 'Int', name: 'Inteligencia', bought: 10, cost: 0, racial: 0, level4: 0, level8: 0, tier2: 0, item: null, final: 10, mod: 0 },
  { key: 'Wis', name: 'Sabiduría', bought: 17, cost: 13, racial: 2, level4: 1, level8: 1, tier2: 2, item: { name: 'Headband of Inspired Wisdom +4', value: 4 }, final: 27, mod: 8 },
  { key: 'Cha', name: 'Carisma', bought: 12, cost: 2, racial: 2, level4: 0, level8: 0, tier2: 0, item: null, final: 14, mod: 2 },
];

export const pointBuyTotal = abilities.reduce((s, a) => s + a.cost, 0); // 20

export const defenses = {
  ac: {
    total: 23,
    breakdown: [
      { label: 'Base', value: 10 },
      { label: '+1 Mithral Breastplate', value: 7, type: 'armadura' },
      { label: '+1 Darkwood Heavy Wooden Shield', value: 3, type: 'escudo' },
      { label: 'Dex', value: 1, type: 'Dex' },
      { label: 'Ring of Protection +1', value: 1, type: 'desvío' },
      { label: 'Amulet of Natural Armor +1', value: 1, type: 'natural' },
    ],
    touch: 12,
    flatFooted: 22,
    withMagicVestment: 25,
    withMagicVestmentAndShieldOfFaith: 27,
    note: 'Magic Vestment +2 en armadura y escudo reemplaza el +1 de mejora de cada uno (+1 y +1). Shield of Faith +3 reemplaza al anillo (+2 neto). +2 esquiva si elegís esa opción de Blessing of Fervor; +4 cobertura tras Blade Barrier.',
  },
  cmb: 8,
  cmd: 20,
  cmdWithShieldOfFaith: 22,
  saves: {
    fort: { total: 15, base: 7, ability: 4, resistance: 4 },
    ref: { total: 8, base: 3, ability: 1, resistance: 4 },
    will: { total: 19, base: 7, ability: 8, resistance: 4 },
    note: 'Resistencia +4 = Cloak of Resistance +4. Sumá +2 moral si estás dentro de tu Aura of Heroism, +1 suerte con Prayer, +8/+4 con un Hero Point (Bonus), +1d6 con Surge.',
  },
  initiative: { total: 7, breakdown: [{ label: 'Dex', value: 1 }, { label: 'Reactionary', value: 2 }, { label: 'Amazing Initiative', value: 3 }, { label: 'Dusty Rose Prism (cracked)', value: 1 }] },
  concentration: { total: 19, note: 'CL 11 + Wis 8. Lanzar a la defensiva: DC 15 + 2 × nivel → 6.º 65 %, 5.º 75 %, 4.º 85 %, 3.º 95 %. Surge +1d6 rescata fallos por ≤ 6.' },
  casterLevelCheck: '1d20 + 11 (13 con Inspired Spell)',
  resistances: ['Ácido 5', 'Frío 5', 'Electricidad 5'],
  immunities: ['charm person', 'hold person (ajeno nativo)'],
  senses: ['Visión en la oscuridad 60 pies'],
  carrying: { light: 33, medium: 66, heavy: 100, carried: 33 },
} as const;

export const attacks = [
  {
    id: 'scimitar',
    name: '+1 Scimitar',
    attack: '+9/+4',
    damage: '1d6+1',
    crit: '18-20/×2',
    type: 'S',
    notes: 'Arma predilecta de Sarenrae. Solo para incorpóreos o el asalto que sobra; nunca cuerpo a cuerpo por rutina.',
    aon: aon('weapon', 'Scimitar', 'Ultimate Equipment pg. 18'),
  },
  {
    id: 'ranged-touch',
    name: 'Ataque de toque a distancia',
    attack: '+9',
    damage: '—',
    crit: '—',
    type: '—',
    notes: 'Solo contra objetivos NO dispuestos con Faith\'s Reach (p. ej. Protection from Evil sobre un aliado dominado). Sobre aliados dispuestos no hay tirada (DM).',
    aon: aon('pathAbilities', 'Hierophant', 'Mythic Adventures pg. 34'),
  },
] as const;

export const racialTraits: RacialTrait[] = [
  { id: 'aasimar-abilities', name: 'Ability Score Modifiers', es: 'Modificadores', tip: '+2 Sabiduría, +2 Carisma.', effect: '+2 Wis, +2 Cha', aon: aon('race', 'Aasimar', 'ARG pg. 84') },
  { id: 'aasimar-outsider', name: 'Native Outsider', es: 'Ajeno nativo', tip: 'Tipo ajeno (nativo): inmune a charm person y hold person, que solo afectan a humanoides.', effect: 'Inmune a charm person / hold person', aon: aon('race', 'Aasimar', 'ARG pg. 84') },
  { id: 'aasimar-darkvision', name: 'Darkvision', es: 'Visión en la oscuridad', tip: 'Ve en la oscuridad hasta 60 pies.', effect: '60 pies', aon: aon('race', 'Aasimar', 'ARG pg. 84') },
  { id: 'aasimar-resistance', name: 'Celestial Resistance', es: 'Resistencia celestial', tip: 'Resistencia 5 a ácido, frío y electricidad: alientos de dragón.', effect: 'Resistencia 5 a ácido, frío y electricidad', aon: aon('race', 'Aasimar', 'ARG pg. 84') },
  { id: 'aasimar-skilled', name: 'Skilled', es: 'Diestro', tip: '+2 racial a Diplomacy y Perception.', effect: '+2 Diplomacy, +2 Perception', aon: aon('race', 'Aasimar', 'ARG pg. 84') },
  { id: 'aasimar-daylight', name: 'Daylight (Spell-Like Ability)', es: 'Luz del día', tip: 'Daylight 1/día a CL 11 (110 min): contra deeper darkness.', effect: 'Daylight 1/día (CL 11)', aon: aon('spell', 'Daylight', 'Core Rulebook pg. 264') },
  { id: 'aasimar-fcb', name: 'Favored Class Bonus', es: 'Clase predilecta', tip: '+1 pg por nivel de clérigo (+11).', effect: '+1 pg/nivel (+11)', aon: aon('rulesId', '344', 'Core Rulebook pg. 31') },
];

export const classFeatures: ClassFeature[] = [
  { id: 'aura', name: 'Aura (Ex)', level: 1, tip: 'Aura de alineamiento NG (overwhelming a nivel 11) para Detect Evil/Good.', effect: 'Aura NG', aon: aon('class', 'Cleric', 'Core Rulebook pg. 39') },
  { id: 'channel', name: 'Channel Positive Energy (Su)', level: 1, tip: 'Estallido de 30 pies: 8d6 (≈32) a todos los aliados vivos, sin provocar. 7/día. Estándar 1 uso · movimiento 2 usos (Quick Channel) · inmediata 1 uso solo a vos (Reactive Healing).', effect: '6d6 + 2d6 (Phylactery) = 8d6 · DC 17 (19 vs no muertos) · 7 usos/día · 30 pies · no provoca', aon: aon('class', 'Cleric', 'Core Rulebook pg. 40') },
  { id: 'spontaneous', name: 'Spontaneous Casting', es: 'Lanzamiento espontáneo', level: 1, tip: 'Cualquier ranura que no sea de dominio se convierte al lanzar en un cure del mismo nivel o inferior (×1,5 por Healer\'s Blessing).', effect: 'Ranuras normales → Cure X Wounds / Mass Cure', aon: aon('class', 'Cleric', 'Core Rulebook pg. 40') },
  { id: 'orisons', name: 'Orisons', es: 'Orisones', level: 1, tip: 'Cuatro conjuros de nivel 0 preparados que no se gastan.', effect: '4 de nivel 0, ilimitados', aon: aon('class', 'Cleric', 'Core Rulebook pg. 40') },
  { id: 'domains', name: 'Domains', es: 'Dominios', level: 1, tip: 'Healing + Glory (Heroism). Una ranura extra por nivel 1-6 solo para conjuros de dominio; no se convierte en cure.', effect: 'Healing + Glory (Heroism); ranura [D] por nivel', aon: aon('class', 'Cleric', 'Core Rulebook pg. 40') },
  { id: 'proficiencies', name: 'Weapon and Armor Proficiency', es: 'Competencias', level: 1, tip: 'Armas simples, armadura ligera y media, escudos (no torre) y el scimitar de Sarenrae. Sin fallo arcano.', effect: 'Simples, ligera/media, escudos, scimitar', aon: aon('class', 'Cleric', 'Core Rulebook pg. 39') },
];
