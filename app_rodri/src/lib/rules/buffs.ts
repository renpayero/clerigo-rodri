import type { BuffDef } from '@/data/types';
import type { BuffTarget } from '@/db/schema';
import { durationAt, communalSplit } from './durations';

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
export function createBuff(def: BuffDef, o: { cl: number; extend: boolean; mythic: boolean; targets: (number | 'self')[]; round: number | null; energy?: string; sourceLabel?: string }): NewBuff {
  const d = durationAt(def.duration, o.cl, o.extend);
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

  const suffix = [o.mythic ? 'mítico' : '', o.extend ? '×2 Rod' : '', o.cl !== 11 ? `CL ${o.cl}` : ''].filter(Boolean).join(', ');
  return {
    buffKey: def.key,
    label: suffix ? `${def.name} (${suffix})` : def.name,
    source: `${def.source.kind}:${def.source.id}`,
    casterLevel: o.cl,
    unit,
    remaining,
    targets,
    extended: o.extend,
    mythic: o.mythic,
    data: o.energy ? { energy: o.energy } : {},
    startedRound: o.round,
  };
}

/** ¿Se puede extender con la Rod of Extend (lesser)? Conjuros de nivel ≤ 3 con duración no instantánea. */
export function canExtend(def: BuffDef, rodUses: number): { ok: true } | { ok: false; reason: string } {
  if (def.source.kind !== 'spell') return { ok: false, reason: 'La vara solo afecta a conjuros.' };
  if ((def.spellLevel ?? 99) > 3) return { ok: false, reason: 'La Rod of Extend (lesser) solo extiende conjuros de nivel ≤ 3.' };
  if (def.duration.kind === 'instant' || def.duration.kind === 'permanent' || def.duration.kind === 'concentration') return { ok: false, reason: 'Ese conjuro no tiene duración extensible.' };
  if (rodUses < 1) return { ok: false, reason: 'No quedan usos de la Rod of Extend hoy.' };
  return { ok: true };
}
