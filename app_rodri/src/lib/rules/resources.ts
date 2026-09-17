import { resourceDefs, resourceByKey, actionCosts, type ResourceKey, type ActionKind } from '@/data/resources';
import type { ResourceDef, ResetPolicy } from '@/data/types';

export type ResourceMap = Record<string, { current: number; max: number; maxOverride: number | null }>;

export type RuleResult = { ok: true } | { ok: false; reason: string };

export function maxOf(key: ResourceKey, state: ResourceMap): number {
  const s = state[key];
  return s?.maxOverride ?? resourceByKey[key].max;
}

export function currentOf(key: ResourceKey, state: ResourceMap): number {
  return state[key]?.current ?? 0;
}

/** ¿Alcanza para gastar n de key? */
export function canSpend(state: ResourceMap, key: ResourceKey, n: number): RuleResult {
  const cur = currentOf(key, state);
  if (cur >= n) return { ok: true };
  const def = resourceByKey[key];
  return { ok: false, reason: `No alcanza ${def.label}: hace falta ${n} y queda${cur === 1 ? '' : 'n'} ${cur}.` };
}

/** ¿Se pueden pagar todos los costos de una acción? */
export function canAfford(state: ResourceMap, kind: ActionKind): RuleResult {
  for (const c of actionCosts[kind]) {
    const r = canSpend(state, c.key, c.n);
    if (!r.ok) return r;
  }
  return { ok: true };
}

export function spend(state: ResourceMap, key: ResourceKey, n: number): ResourceMap {
  const cur = currentOf(key, state);
  if (cur < n) throw new Error(`Recurso insuficiente: ${key}`);
  return { ...state, [key]: { ...state[key]!, current: cur - n } };
}

export function restore(state: ResourceMap, key: ResourceKey, n: number | 'max'): ResourceMap {
  const max = maxOf(key, state);
  const cur = currentOf(key, state);
  const next = n === 'max' ? max : Math.min(max, cur + n);
  return { ...state, [key]: { ...(state[key] ?? { max, maxOverride: null }), current: next } };
}

export function payCosts(state: ResourceMap, kind: ActionKind): ResourceMap {
  let s = state;
  for (const c of actionCosts[kind]) s = spend(s, c.key, c.n);
  return s;
}

export type ResetContext = { recuperationRestoresDomain: boolean; mythicPowerReset: 'prayer' | 'rest8h' | 'manual' };

/** Qué recursos recupera una política dada. */
export function resourcesForPolicy(policy: ResetPolicy, ctx: ResetContext): ResourceDef[] {
  return resourceDefs.filter((r) => {
    if (r.reset.includes(policy)) return true;
    if (policy === 'recuperation' && r.reset.includes('recuperationIfSetting') && ctx.recuperationRestoresDomain) return true;
    if (policy === 'daily' && r.reset.includes('mythicClock') && ctx.mythicPowerReset !== 'manual') return true;
    return false;
  });
}

export function resetByPolicy(state: ResourceMap, policy: ResetPolicy, ctx: ResetContext): { state: ResourceMap; restored: string[] } {
  let s = state;
  const restored: string[] = [];
  for (const r of resourcesForPolicy(policy, ctx)) {
    const key = r.key as ResourceKey;
    if (currentOf(key, s) < maxOf(key, s)) {
      s = restore(s, key, 'max');
      restored.push(r.label);
    }
  }
  return { state: s, restored };
}

/** Estado inicial (máximos, o `initial` si está definido). */
export function initialResources(): ResourceMap {
  const out: ResourceMap = {};
  for (const r of resourceDefs) out[r.key] = { current: r.initial ?? r.max, max: r.max, maxOverride: null };
  return out;
}
