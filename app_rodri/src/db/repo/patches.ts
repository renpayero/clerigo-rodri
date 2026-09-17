import { and, eq, getTableColumns, sql } from 'drizzle-orm';
import type { PgTable } from 'drizzle-orm/pg-core';
import { characterState, resourceState, spellSlots, activeBuffs, allies, settings, notes, type Patch } from '../schema';

export const TABLES = {
  character_state: characterState,
  resource_state: resourceState,
  spell_slots: spellSlots,
  active_buffs: activeBuffs,
  allies,
  settings,
  notes,
} as const;

export type TableName = keyof typeof TABLES;

type Tx = { update: any; insert: any; delete: any; select: any; execute: any };

function pkWhere(table: PgTable, pk: Record<string, unknown>) {
  const cols = getTableColumns(table) as Record<string, any>;
  const conds = Object.entries(pk).map(([k, v]) => eq(cols[k], v));
  return conds.length === 1 ? conds[0] : and(...conds);
}

/** Convierte valores serializados (ISO) a Date para columnas timestamp. */
function revive(table: PgTable, row: Record<string, unknown>): Record<string, unknown> {
  const cols = getTableColumns(table) as Record<string, any>;
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(row)) {
    const col = cols[k];
    out[k] = col && col.dataType === 'date' && typeof v === 'string' ? new Date(v) : v;
  }
  return out;
}

function serializeValues(row: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(row)) out[k] = v instanceof Date ? v.toISOString() : v;
  return out;
}

/**
 * Registra los cambios de una action como patches (antes/después) para poder deshacerlos.
 */
export class PatchRecorder {
  readonly patches: Patch[] = [];
  constructor(private tx: Tx) {}

  async update<T extends TableName>(name: T, pk: Record<string, unknown>, changes: Record<string, unknown>) {
    const table = TABLES[name] as PgTable;
    const [current] = await this.tx.select().from(table).where(pkWhere(table, pk)).limit(1);
    if (!current) throw new Error(`${name} ${JSON.stringify(pk)} no existe`);
    const before: Record<string, unknown> = {};
    const after: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(changes)) {
      const prev = (current as Record<string, unknown>)[k];
      if (JSON.stringify(serializeValues({ v: prev })) === JSON.stringify(serializeValues({ v }))) continue;
      before[k] = prev;
      after[k] = v;
    }
    if (Object.keys(after).length === 0) return;
    await this.tx.update(table).set(after).where(pkWhere(table, pk));
    this.patches.push({ table: name, pk, before: serializeValues(before), after: serializeValues(after) });
  }

  async insert<T extends TableName>(name: T, values: Record<string, unknown>): Promise<Record<string, unknown>> {
    const table = TABLES[name] as PgTable;
    const [row] = await this.tx.insert(table).values(values).returning();
    const pk = name === 'resource_state' ? { key: row.key } : { id: row.id };
    this.patches.push({ table: name, pk, before: null, after: serializeValues(row) });
    return row;
  }

  async delete<T extends TableName>(name: T, pk: Record<string, unknown>) {
    const table = TABLES[name] as PgTable;
    const [current] = await this.tx.select().from(table).where(pkWhere(table, pk)).limit(1);
    if (!current) return;
    await this.tx.delete(table).where(pkWhere(table, pk));
    this.patches.push({ table: name, pk, before: serializeValues(current), after: null });
  }
}

/** Revierte una lista de patches (en orden inverso). */
export async function revertPatches(tx: Tx, patches: Patch[]) {
  for (const p of [...patches].reverse()) {
    const table = TABLES[p.table as TableName] as PgTable | undefined;
    if (!table) continue;
    if (p.before === null) {
      await tx.delete(table).where(pkWhere(table, p.pk));
    } else if (p.after === null) {
      await tx.insert(table).values(revive(table, p.before));
    } else {
      await tx.update(table).set(revive(table, p.before)).where(pkWhere(table, p.pk));
    }
  }
}

export const bumpVersionSql = sql`version + 1`;
