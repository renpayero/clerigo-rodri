import type { DurationSpec, RangeSpec } from '@/data/types';
import { rangeClose, rangeLong, rangeMedium } from './derived';

export type Duration =
  | { unit: 'rounds'; amount: number; label: string }
  | { unit: 'minutes'; amount: number; label: string }
  | { unit: 'permanent'; label: string }
  | { unit: 'instant'; label: string }
  | { unit: 'special'; label: string };

export function formatMinutes(min: number): string {
  if (min % 60 === 0) return `${min / 60} h`;
  if (min >= 60) return `${Math.floor(min / 60)} h ${min % 60} min`;
  return `${min} min`;
}

/** Duración concreta a un nivel de lanzador (extend = ×2, metamagia Extend Spell). */
export function durationAt(spec: DurationSpec, cl = 11, extend = false): Duration {
  const x = extend ? 2 : 1;
  switch (spec.kind) {
    case 'instant': return { unit: 'instant', label: 'instantáneo' };
    case 'permanent': return { unit: 'permanent', label: 'permanente' };
    case 'concentration': return { unit: 'special', label: 'concentración' };
    case 'special': return { unit: 'special', label: spec.label };
    case 'rounds_per_level': return { unit: 'rounds', amount: cl * x, label: `${cl * x} asaltos` };
    case 'minutes_per_level': return { unit: 'minutes', amount: cl * x, label: formatMinutes(cl * x) };
    case 'ten_minutes_per_level': return { unit: 'minutes', amount: 10 * cl * x, label: formatMinutes(10 * cl * x) };
    case 'hours_per_level': return { unit: 'minutes', amount: 60 * cl * x, label: formatMinutes(60 * cl * x) };
    case 'fixed':
      if (spec.unit === 'rounds') return { unit: 'rounds', amount: spec.amount * x, label: `${spec.amount * x} asaltos` };
      if (spec.unit === 'hours') return { unit: 'minutes', amount: spec.amount * 60 * x, label: formatMinutes(spec.amount * 60 * x) };
      return { unit: 'minutes', amount: spec.amount * x, label: formatMinutes(spec.amount * x) };
  }
}

/** Alcance en pies. Con Faith's Reach, "toque" pasa a 30 pies. */
export function rangeAt(spec: RangeSpec, cl = 11, faithsReach = true): { feet: number | null; label: string } {
  if (spec === 'personal') return { feet: 0, label: 'personal' };
  if (spec === 'touch') return faithsReach ? { feet: 30, label: "30 pies (Faith's Reach)" } : { feet: 5, label: 'toque' };
  if (spec === 'close') return { feet: rangeClose(cl), label: `${rangeClose(cl)} pies (close)` };
  if (spec === 'medium') return { feet: rangeMedium(cl), label: `${rangeMedium(cl)} pies (medium)` };
  if (spec === 'long') return { feet: rangeLong(cl), label: `${rangeLong(cl)} pies (long)` };
  if (spec === 'special') return { feet: null, label: 'especial' };
  return { feet: spec.feet, label: `${spec.feet} pies` };
}

/** Reparto de una duración Communal en bloques entre N objetivos (p. ej. 110 min, bloques de 10, 5 objetivos → 20/20/20/20/30). */
export function communalSplit(totalMinutes: number, blockMinutes: number, targets: number): number[] {
  if (targets <= 0) return [];
  const blocks = Math.floor(totalMinutes / blockMinutes);
  const per = Math.floor(blocks / targets);
  const rest = blocks - per * targets;
  return Array.from({ length: targets }, (_, i) => (per + (i === targets - 1 ? rest : 0)) * blockMinutes);
}
