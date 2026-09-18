import type { BuffDef } from '@/data/types';
import type { BuffTarget } from '@/db/schema';
import { durationAt, communalSplit, type Duration } from './durations';

export type BuffLike = {
  id: number;
  buffKey: string;
  label: string;
  unit: 'rounds' | 'minutes' | 'until_rest' | 'permanent';
  remaining: number | null;
  targets: BuffTarget[];
  status: 'active' | 'paused' | 'expired';
};

export type BuffUpdate = { id: number; changes: Record<string, unknown> };

/** Descuenta n asaltos a los buffs por asaltos activos; devuelve updates y los que expiran. */
export function tickRounds<T extends BuffLike>(buffs: T[], n = 1): { updates: BuffUpdate[]; expired: T[] } {
  const updates: BuffUpdate[] = [];
  const expired: T[] = [];
  for (const b of buffs) {
    if (b.status !== 'active' || b.unit !== 'rounds' || b.remaining === null) continue;
    const left = Math.max(0, b.remaining - n);
    if (left === 0) {
      expired.push(b);
      updates.push({ id: b.id, changes: { remaining: 0, status: 'expired' } });
    } else {
      updates.push({ id: b.id, changes: { remaining: left } });
    }
  }
  return { updates, expired };
}

/** Descuenta minutos a los buffs por minutos (Communal: por objetivo). */
export function tickMinutes<T extends BuffLike>(buffs: T[], minutes: number): { updates: BuffUpdate[]; expired: T[] } {
  const updates: BuffUpdate[] = [];
  const expired: T[] = [];
  for (const b of buffs) {
    if (b.status !== 'active' || b.unit !== 'minutes') continue;
    const perTarget = b.targets.some((t) => typeof t.remaining === 'number');
    if (perTarget) {
      const targets = b.targets.map((t) => (typeof t.remaining === 'number' ? { ...t, remaining: Math.max(0, t.remaining - minutes) } : t));
      const alive = targets.some((t) => typeof t.remaining !== 'number' || t.remaining > 0);
      const maxLeft = Math.max(0, ...targets.map((t) => (typeof t.remaining === 'number' ? t.remaining : 0)));
      if (!alive) { expired.push(b); updates.push({ id: b.id, changes: { targets, remaining: 0, status: 'expired' } }); }
      else updates.push({ id: b.id, changes: { targets, remaining: maxLeft } });
    } else if (b.remaining !== null) {
      const left = Math.max(0, b.remaining - minutes);
      if (left === 0) { expired.push(b); updates.push({ id: b.id, changes: { remaining: 0, status: 'expired' } }); }
      else updates.push({ id: b.id, changes: { remaining: left } });
    }
  }
  return { updates, expired };
}

export type NewBuff = {
  buffKey: string;
  label: string;
  source: string;
  casterLevel: number;
  unit: 'rounds' | 'minutes' | 'until_rest' | 'permanent';
  remaining: number | null;
  targets: BuffTarget[];
  extended: boolean;
  mythic: boolean;
  data: Record<string, unknown>;
  startedRound: number | null;
};

/** Crea el registro de un buff a partir de su definición, el CL y los objetivos. */
export function createBuff(def: BuffDef, o: { cl: number; enduring: boolean; mythic: boolean; targets: (number | 'self')[]; round: number | null; energy?: string; sourceLabel?: string }): NewBuff {
  // Enduring Blessing (Hierophant): un buff de ≥ 10 min/nivel sobre un objetivo dispuesto pasa a durar 24 h.
  const d = o.enduring ? ENDURING_DURATION : durationAt(def.duration, o.cl);
  let unit: NewBuff['unit'] = 'until_rest';
  let remaining: number | null = null;
  if (d.unit === 'rounds') { unit = 'rounds'; remaining = d.amount; }
  else if (d.unit === 'minutes') { unit = 'minutes'; remaining = d.amount; }
  else if (d.unit === 'permanent') unit = 'permanent';

  const targetsIn = o.targets.length ? o.targets : (['self'] as const);
  let targets: BuffTarget[] = targetsIn.map((t) => ({ allyId: t }));
  if (def.communalBlockMinutes && d.unit === 'minutes') {
    const split = communalSplit(d.amount, def.communalBlockMinutes, targets.length);
    targets = targets.map((t, i) => ({ ...t, remaining: split[i] ?? 0 }));
    remaining = Math.max(...split);
  }
  if (def.absorbPerTarget) targets = targets.map((t) => ({ ...t, absorb: def.absorbPerTarget }));
  if (o.energy) targets = targets.map((t) => ({ ...t, energy: o.energy }));

  const suffix = [o.mythic ? 'mítico' : '', o.enduring ? '24 h Enduring' : '', o.cl !== 11 ? `CL ${o.cl}` : ''].filter(Boolean).join(', ');
  return {
    buffKey: def.key,
    label: suffix ? `${def.name} (${suffix})` : def.name,
    source: `${def.source.kind}:${def.source.id}`,
    casterLevel: o.cl,
    unit,
    remaining,
    targets,
    extended: o.enduring,
    mythic: o.mythic,
    data: o.energy ? { energy: o.energy } : {},
    startedRound: o.round,
  };
}

export const ENDURING_DURATION: Duration = { unit: 'minutes', amount: 24 * 60, label: '24 h' };

/**
 * Enduring Blessing (Mythic Adventures pg. 36): conjuro con duración de 10 min/nivel o más, sobre UN objetivo dispuesto → 24 h.
 * Vale para self (Range personal) y para un objetivo; no para Communal, varios objetivos ni áreas. Sin costo.
 */
export function canEndure(def: BuffDef): { ok: true } | { ok: false; reason: string } {
  if (def.source.kind !== 'spell') return { ok: false, reason: 'Enduring Blessing solo afecta a conjuros.' };
  if (def.targets === 'many' || def.targets === 'area' || def.communalBlockMinutes) return { ok: false, reason: 'Enduring Blessing exige un único objetivo (no Communal, ni varios, ni áreas).' };
  const k = def.duration.kind;
  const long = k === 'ten_minutes_per_level' || k === 'hours_per_level' || (k === 'fixed' && def.duration.unit === 'hours' && def.duration.amount >= 2) || (k === 'fixed' && def.duration.unit === 'minutes' && def.duration.amount >= 110);
  if (!long) return { ok: false, reason: 'Enduring Blessing pide una duración de 10 min/nivel o más.' };
  return { ok: true };
}

/** Enduring Blessing: cada criatura solo puede tener un conjuro así; al lanzar otro, el anterior termina. */
export function enduringConflicts<T extends { extended: boolean; status: string; targets: BuffTarget[] }>(active: T[], targets: (number | 'self')[]): T[] {
  const set = new Set<string>((targets.length ? targets : ['self']).map(String));
  return active.filter((b) => b.status === 'active' && b.extended && b.targets.some((t) => set.has(String(t.allyId))));
}
