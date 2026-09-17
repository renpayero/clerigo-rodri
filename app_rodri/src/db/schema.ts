import {
  bigint,
  bigserial,
  boolean,
  check,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  serial,
  smallint,
  text,
  timestamp,
  unique,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

// ---------------------------------------------------------------------------
// Enums
// ---------------------------------------------------------------------------

export const slotStatus = pgEnum('slot_status', ['prepared', 'spent', 'converted', 'free', 'sacrificed']);
export const buffUnit = pgEnum('buff_unit', ['rounds', 'minutes', 'until_rest', 'permanent']);
export const buffStatus = pgEnum('buff_status', ['active', 'paused', 'expired']);
export const allyDownState = pgEnum('ally_down_state', ['ok', 'zero', 'dead', 'dead_death_effect']);

// ---------------------------------------------------------------------------
// Estado del personaje (una sola fila, id = 1). Los máximos viven en src/data.
// ---------------------------------------------------------------------------

export const characterState = pgTable(
  'character_state',
  {
    id: integer('id').primaryKey(),
    hpCurrent: integer('hp_current').notNull(),
    hpNonlethal: integer('hp_nonlethal').notNull().default(0),
    hpTemp: integer('hp_temp').notNull().default(0),
    conditions: jsonb('conditions').$type<string[]>().notNull().default([]),
    combatActive: boolean('combat_active').notNull().default(false),
    round: integer('round').notNull().default(0),
    auraActive: boolean('aura_active').notNull().default(false),
    divineInterferenceUsed: jsonb('divine_interference_used').$type<string[]>().notNull().default([]),
    gold: integer('gold').notNull(),
    sessionNumber: integer('session_number').notNull().default(1),
    lastFullRestAt: timestamp('last_full_rest_at', { withTimezone: true }),
    lastRecuperationAt: timestamp('last_recuperation_at', { withTimezone: true }),
    lastMythicResetAt: timestamp('last_mythic_reset_at', { withTimezone: true }),
    version: integer('version').notNull().default(1),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [check('character_state_single_row', sql`${t.id} = 1`)],
);

// ---------------------------------------------------------------------------
// Recursos con usos (channel, poder mítico, Hero Points, cargas, ...).
// key = ResourceKey de src/data/resources.ts; el máximo NO se guarda acá.
// ---------------------------------------------------------------------------

export const resourceState = pgTable('resource_state', {
  key: text('key').primaryKey(),
  current: integer('current').notNull(),
  maxOverride: integer('max_override'),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});

// ---------------------------------------------------------------------------
// Ranuras de conjuro (una fila por ranura, niveles 0-6)
// ---------------------------------------------------------------------------

export const spellSlots = pgTable(
  'spell_slots',
  {
    id: serial('id').primaryKey(),
    level: smallint('level').notNull(),
    idx: smallint('idx').notNull(),
    isDomain: boolean('is_domain').notNull().default(false),
    spellId: text('spell_id'),
    status: slotStatus('status').notNull().default('prepared'),
    spentOn: text('spent_on'),
    spentAt: timestamp('spent_at', { withTimezone: true }),
    disabled: boolean('disabled').notNull().default(false),
  },
  (t) => [unique('spell_slots_level_idx').on(t.level, t.idx)],
);

// ---------------------------------------------------------------------------
// Buffs activos
// ---------------------------------------------------------------------------

export type BuffTarget = {
  allyId: number | 'self';
  remaining?: number;
  absorb?: number;
  energy?: string;
};

export const activeBuffs = pgTable('active_buffs', {
  id: serial('id').primaryKey(),
  buffKey: text('buff_key').notNull(),
  label: text('label').notNull(),
  source: text('source').notNull(),
  casterLevel: smallint('caster_level').notNull().default(11),
  unit: buffUnit('unit').notNull(),
  remaining: integer('remaining'),
  targets: jsonb('targets').$type<BuffTarget[]>().notNull().default([]),
  extended: boolean('extended').notNull().default(false),
  mythic: boolean('mythic').notNull().default(false),
  data: jsonb('data').$type<Record<string, unknown>>().notNull().default({}),
  status: buffStatus('status').notNull().default('active'),
  startedRound: integer('started_round'),
  startedAt: timestamp('started_at', { withTimezone: true }).notNull().defaultNow(),
  expiresAt: timestamp('expires_at', { withTimezone: true }),
  createdEventId: bigint('created_event_id', { mode: 'number' }),
});

// ---------------------------------------------------------------------------
// Aliados (pg máx y Con no están en la ficha: null = pendiente)
// ---------------------------------------------------------------------------

export const allies = pgTable('allies', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  role: text('role'),
  maxHp: integer('max_hp'),
  con: smallint('con'),
  isMythic: boolean('is_mythic').notNull().default(true),
  hpCurrent: integer('hp_current'),
  downState: allyDownState('down_state').notNull().default('ok'),
  diedRound: integer('died_round'),
  adjacent: boolean('adjacent').notNull().default(false),
  frontLine: boolean('front_line').notNull().default(true),
  active: boolean('active').notNull().default(true),
  sortOrder: smallint('sort_order').notNull().default(0),
  notes: text('notes'),
});

// ---------------------------------------------------------------------------
// Log de eventos (deshacer por patches)
// ---------------------------------------------------------------------------

export type Patch = {
  table: string;
  pk: Record<string, unknown>;
  before: Record<string, unknown> | null;
  after: Record<string, unknown> | null;
};

export const events = pgTable('events', {
  id: bigserial('id', { mode: 'number' }).primaryKey(),
  at: timestamp('at', { withTimezone: true }).notNull().defaultNow(),
  kind: text('kind').notNull(),
  label: text('label').notNull(),
  input: jsonb('input').$type<Record<string, unknown>>(),
  roll: jsonb('roll').$type<Record<string, unknown>>(),
  patches: jsonb('patches').$type<Patch[]>().notNull().default([]),
  undone: boolean('undone').notNull().default(false),
  undoneAt: timestamp('undone_at', { withTimezone: true }),
  undoOf: bigint('undo_of', { mode: 'number' }),
  sessionNumber: integer('session_number'),
  round: integer('round'),
});

// ---------------------------------------------------------------------------
// Notas
// ---------------------------------------------------------------------------

export const notes = pgTable('notes', {
  id: serial('id').primaryKey(),
  kind: text('kind').notNull().unique(),
  body: text('body').notNull().default(''),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});

// ---------------------------------------------------------------------------
// Ajustes (ambigüedades de reglas configurables; una fila, id = 1)
// ---------------------------------------------------------------------------

export const settings = pgTable(
  'settings',
  {
    id: integer('id').primaryKey(),
    mythicPowerReset: text('mythic_power_reset').notNull().default('prayer'),
    recuperationRestoresDomain: boolean('recuperation_restores_domain').notNull().default(true),
    blessedTouchInAverages: boolean('blessed_touch_in_averages').notNull().default(true),
    mythicDomainRechargeMode: text('mythic_domain_recharge_mode').notNull().default('reset'),
    scrollCl: jsonb('scroll_cl')
      .$type<Record<string, number>>()
      .notNull()
      .default({ restoration: 7, removeCurse: 5, neutralizePoison: 7 }),
    mythicHealAugmentedDiamond: text('mythic_heal_augmented_diamond').notNull().default('unknown'),
    relentlessVsDeathEffects: boolean('relentless_vs_death_effects').notNull().default(false),
    amazingInitiativeAllows: text('amazing_initiative_allows').notNull().default('channel'),
    bolThresholdMythic: text('bol_threshold_mythic').notNull().default('con'),
    headbandNew24h: boolean('headband_new_24h').notNull().default(false),
    outOfCombatClock: text('out_of_combat_clock').notNull().default('manual'),
    discordPrefix: text('discord_prefix').notNull().default('/roll dice:'),
    theme: text('theme').notNull().default('auto'),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [check('settings_single_row', sql`${t.id} = 1`)],
);

// ---------------------------------------------------------------------------
// Sesiones de auth (un solo usuario, varias sesiones = varios dispositivos)
// ---------------------------------------------------------------------------

export const sessions = pgTable('sessions', {
  id: text('id').primaryKey(),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
  lastSeenAt: timestamp('last_seen_at', { withTimezone: true }).notNull().defaultNow(),
  userAgent: text('user_agent'),
});

export type CharacterStateRow = typeof characterState.$inferSelect;
export type ResourceStateRow = typeof resourceState.$inferSelect;
export type SpellSlotRow = typeof spellSlots.$inferSelect;
export type ActiveBuffRow = typeof activeBuffs.$inferSelect;
export type AllyRow = typeof allies.$inferSelect;
export type EventRow = typeof events.$inferSelect;
export type NoteRow = typeof notes.$inferSelect;
export type SettingsRow = typeof settings.$inferSelect;
export type SessionRow = typeof sessions.$inferSelect;
