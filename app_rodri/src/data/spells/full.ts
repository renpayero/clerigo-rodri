import data from './full.json';
import type { Spell, DurationSpec, RangeSpec, ActionType, HealSpec } from '../types';

/**
 * Lista completa de conjuros de clérigo de 0 a 6 (AoN, Spells.aspx?Class=Cleric), 589 entradas.
 * Generada por scripts fuera del repo (descarga de AoN + clasificación revisada por agentes, 18/09/2026)
 * y guardada en full.json. Los 83 del catálogo curado (catalog.ts) mandan cuando el id coincide.
 * `forbidden` marca lo que un clérigo NG de Sarenrae no puede lanzar ([evil] o conjuro de otra deidad).
 */
export type FullRecord = {
  id: string; name: string; level: number; school: string;
  castingTime: ActionType; range: RangeSpec; duration: DurationSpec;
  target: string | null; save: string | null; sr: string | null; components: string | null; costly: string | null;
  forbidden: string[];
  buff: boolean; targets: 'self' | 'one' | 'many' | 'area' | null; effect: string | null; energyChoice: boolean;
  heal: HealSpec | null; tags: string[]; tip: string; worth: number;
  url: string; book: string;
};

export const fullRecords = data as FullRecord[];

export const fullSpells: Spell[] = fullRecords.map((d) => ({
  id: d.id,
  name: d.name,
  level: d.level,
  school: d.school,
  castingTime: d.castingTime,
  range: d.range,
  duration: d.duration,
  target: d.target ?? undefined,
  save: d.save ?? undefined,
  sr: d.sr ?? undefined,
  components: d.components ?? undefined,
  heal: d.heal ?? undefined,
  buff: d.buff ? { buffKey: d.id } : undefined,
  tags: d.forbidden.length ? [...d.tags, 'no-permitido'] : d.tags,
  tip: d.tip,
  notes: d.forbidden.length ? `No lo puede lanzar un clérigo NG de Sarenrae (${d.forbidden.join(', ')}).` : d.costly ? `Componente material: ${d.costly}.` : undefined,
  aon: { url: d.url, book: d.book, verified: true },
}));

/** Detalles de buff (objetivos, etiqueta corta, elección de energía) para buffs.ts. */
export const fullBuffExtras: Record<string, { targets: 'self' | 'one' | 'many' | 'area'; effect: string; energyChoice?: boolean }> = Object.fromEntries(
  fullRecords.filter((d) => d.buff && d.targets).map((d) => [d.id, { targets: d.targets!, effect: d.effect ?? d.tip, energyChoice: d.energyChoice || undefined }]),
);
