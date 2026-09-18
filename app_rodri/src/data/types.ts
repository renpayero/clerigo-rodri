/**
 * Tipos de los datos estáticos del personaje (fuente: FICHA-FINAL-Clerigo.md v3).
 * Todo lo que cambia en mesa vive en la base de datos, no acá.
 */

export type AonRef = {
  /** URL completa en aonprd.com (o FAQ de paizo.com). */
  url: string;
  /** Libro y página tal como los indica AoN. */
  book?: string;
  /** false = la URL sigue el patrón oficial pero no se verificó (se muestra con "?"). */
  verified: boolean;
};

/** Cualquier elemento con nombre, explicación breve y fuente. */
export type Entity = {
  id: string;
  name: string;
  /** Traducción o alias en español (opcional). */
  es?: string;
  /** 1-2 líneas: qué hace y cuándo usarlo. */
  tip: string;
  aon: AonRef;
};

export type ActionType = 'free' | 'swift' | 'immediate' | 'move' | 'standard' | 'full' | '1_round' | '3_rounds' | '1_minute' | 'special';

export type Feat = Entity & {
  level: number;
  category: 'general' | 'mythic';
  prerequisites: string;
  effect: string;
};

export type Trait = Entity & {
  list: 'Combat' | 'Faith' | 'Religion' | 'Magic' | 'Social' | 'Drawback';
  effect: string;
  source: string;
};

export type RacialTrait = Entity & { effect: string };

export type ClassFeature = Entity & {
  level: number;
  effect: string;
};

export type DomainPower = Entity & {
  level: number;
  action?: ActionType;
  usesPerDay?: number;
  /** Clave del recurso en resources.ts si tiene usos. */
  resource?: string;
  effect: string;
  numbers?: string;
};

export type Domain = Entity & {
  subdomain?: string;
  powers: DomainPower[];
  /** Conjuros de dominio 1.º-9.º (ids del catálogo o nombres). */
  domainSpells: { level: number; spellId: string; name: string }[];
};

export type MythicAbility = Entity & {
  tier: number;
  kind: 'base' | 'surge' | 'path' | 'feat' | 'bonus';
  action?: ActionType;
  cost?: string;
  effect: string;
};

export type DurationSpec =
  | { kind: 'instant' }
  | { kind: 'rounds_per_level' }
  | { kind: 'minutes_per_level' }
  | { kind: 'ten_minutes_per_level' }
  | { kind: 'hours_per_level' }
  | { kind: 'fixed', unit: 'rounds' | 'minutes' | 'hours', amount: number }
  | { kind: 'concentration' }
  | { kind: 'permanent' }
  | { kind: 'special', label: string };

export type RangeSpec = 'personal' | 'touch' | 'close' | 'medium' | 'long' | { feet: number } | 'special';

export type HealSpec = {
  kind: 'cure' | 'heal' | 'breath_of_life' | 'other';
  dice?: { n: number; sides: number };
  /** Bono por nivel de lanzador y su tope (p. ej. cure: 1/CL máx 5). */
  perLevel?: { max: number };
  /** Curación fija por CL (Heal: 10/CL máx 150). */
  flatPerLevel?: { amount: number; max: number };
  targets?: string;
};

export type MythicSpec = {
  /** Texto de la versión mítica (AoN, sección Mythic). */
  effect: string;
  cost: number;
  augmented?: { cost: number; effect: string };
  /** Fórmula mítica de curación si cambia. */
  heal?: HealSpec;
};

export type BuffSpec = {
  /** Clave de buffs.ts que se activa al lanzar. */
  buffKey: string;
};

export type Spell = Entity & {
  level: number;
  school: string;
  castingTime: ActionType;
  range: RangeSpec;
  duration: DurationSpec;
  target?: string;
  save?: string;
  sr?: string;
  components?: string;
  heal?: HealSpec;
  buff?: BuffSpec;
  mythic?: MythicSpec;
  /** true si sólo se puede preparar en la ranura de dominio (Heroism, Greater Heroism). */
  domainOnly?: boolean;
  tags: string[];
  /** Notas de uso para Rodri. */
  notes?: string;
};

export type PresetSlot = { level: number; idx: number; spellId: string | null };
export type Preset = { id: 'combate' | 'jefe' | 'viaje'; name: string; description: string; slots: PresetSlot[] };

export type BuffDef = {
  key: string;
  name: string;
  source: { kind: 'spell' | 'power' | 'sla' | 'item' | 'manual'; id: string };
  duration: DurationSpec;
  /** Communal: la duración se reparte entre objetivos en bloques de N minutos. */
  communalBlockMinutes?: number;
  /** Protection from Energy Communal: puntos absorbibles por objetivo. */
  absorbPerTarget?: number;
  /** Requiere elegir tipo de energía. */
  energyChoice?: boolean;
  targets: 'self' | 'one' | 'many' | 'area';
  effect: string;
  /** Efectos numéricos que la app aplica al mostrar CA/salvaciones. */
  modifiers?: { ac?: { type: string; value: number }; saves?: { type: string; value: number }; attack?: { type: string; value: number } };
  /** Nivel del conjuro. */
  spellLevel?: number;
  tip: string;
  aon: AonRef;
};

export type ItemSlot =
  | 'armor' | 'shield' | 'headband' | 'head' | 'eyes' | 'neck' | 'shoulders' | 'body' | 'chest' | 'belt' | 'wrists' | 'hands' | 'feet' | 'ring' | 'weapon' | 'slotless' | 'mundane';

export type Item = Entity & {
  slot: ItemSlot;
  price: number;
  /** Peso que se cuenta "encima" (los objetos en el haversack no cuentan). */
  weightCarried: number;
  effect: string;
  /** Recurso asociado (cargas/usos) en resources.ts. */
  resource?: string;
  quantity?: number;
  notes?: string;
};

export type WishlistItem = Entity & { price: number; reason: string };

export type ResetPolicy = 'daily' | 'recuperation' | 'recuperationIfSetting' | 'mythicDomain' | 'mythicClock' | 'round' | 'never';

export type ResourceDef = {
  key: string;
  label: string;
  max: number;
  /** Valor inicial si difiere del máximo (Hero Points = 1). */
  initial?: number;
  reset: ResetPolicy[];
  group: 'core' | 'domain' | 'mythic' | 'round' | 'item' | 'consumable';
  /** Cómo se recupera, para el tooltip. */
  recoverHint: string;
  aon?: AonRef;
};

export type Skill = {
  name: string;
  ability: 'Str' | 'Dex' | 'Con' | 'Int' | 'Wis' | 'Cha';
  classSkill: boolean;
  background: boolean;
  ranks: number;
  misc: number;
  acp: number;
  total: number;
  note?: string;
  aon?: AonRef;
};

export type AbilityKey = 'Str' | 'Dex' | 'Con' | 'Int' | 'Wis' | 'Cha';

export type AbilityScore = {
  key: AbilityKey;
  name: string;
  bought: number;
  cost: number;
  racial: number;
  level4: number;
  level8: number;
  tier2: number;
  item: { name: string; value: number } | null;
  final: number;
  mod: number;
};
