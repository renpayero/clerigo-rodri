import { asc, desc, eq } from 'drizzle-orm';
import type { Db } from '../client';
import { characterState, resourceState, spellSlots, activeBuffs, allies, settings, notes, events } from '../schema';
import { resourceByKey, type ResourceKey } from '@/data/resources';
import type { StateSnapshot } from '@/lib/snapshot';
import type { ResourceMap } from '@/lib/rules/resources';

type Tx = Parameters<Parameters<Db['transaction']>[0]>[0] | Db;

function serialize<T extends Record<string, unknown>>(row: T): any {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(row)) out[k] = v instanceof Date ? v.toISOString() : v;
  return out;
}

export async function loadSnapshot(tx: Tx): Promise<StateSnapshot> {
  const [cs] = await tx.select().from(characterState).where(eq(characterState.id, 1)).limit(1);
  if (!cs) throw new Error('character_state no inicializado (correr el seed)');
  const res = await tx.select().from(resourceState);
  const slots = await tx.select().from(spellSlots).orderBy(asc(spellSlots.level), asc(spellSlots.idx));
  const buffs = await tx.select().from(activeBuffs).where(eq(activeBuffs.status, 'active'));
  const paused = await tx.select().from(activeBuffs).where(eq(activeBuffs.status, 'paused'));
  const al = await tx.select().from(allies).where(eq(allies.active, true)).orderBy(asc(allies.sortOrder), asc(allies.id));
  const [st] = await tx.select().from(settings).where(eq(settings.id, 1)).limit(1);
  const nt = await tx.select().from(notes);
  const [last] = await tx.select({ id: events.id, label: events.label, at: events.at, undone: events.undone }).from(events).where(eq(events.undone, false)).orderBy(desc(events.id)).limit(1);

  const resources: ResourceMap = {};
  for (const r of res) {
    const def = resourceByKey[r.key as ResourceKey];
    if (!def) continue;
    resources[r.key] = { current: r.current, max: def.max, maxOverride: r.maxOverride };
  }

  return {
    character: serialize(cs),
    resources,
    slots: slots.map(serialize),
    buffs: [...buffs, ...paused].map(serialize),
    allies: al,
    settings: serialize(st ?? { id: 1 }),
    notes: nt.map(serialize),
    lastEvent: last ? { id: last.id, label: last.label, at: last.at.toISOString(), undone: last.undone } : null,
    version: cs.version,
  };
}
