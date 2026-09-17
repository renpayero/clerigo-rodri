import type { Preset, PresetSlot } from '../types';

/**
 * Preparación diaria por nivel. idx 0 de los niveles 1-6 es la ranura de dominio [D].
 * null = ranura libre (se rellena en 15 min o se convierte en cure al lanzar).
 * Ranuras por nivel con Wis 27: 4 / 7 / 7 / 7 / 6 / 4 / 3 (ficha §8 y §10).
 */
function level(lvl: number, ids: (string | null)[]): PresetSlot[] {
  return ids.map((spellId, idx) => ({ level: lvl, idx, spellId }));
}

const combate: PresetSlot[] = [
  ...level(0, ['detect-magic', 'guidance', 'light', 'stabilize']),
  ...level(1, ['shield-of-faith', 'protection-from-evil', 'protection-from-evil', 'liberating-command', 'remove-fear', null, null]),
  ...level(2, ['cure-moderate-wounds', 'protection-from-evil-communal', 'resist-energy', 'status', 'remove-paralysis', 'silence', 'restoration-lesser']),
  ...level(3, ['heroism', 'magic-vestment', 'magic-vestment', 'prayer', 'resist-energy-communal', 'dispel-magic', 'remove-blindness-deafness']),
  ...level(4, ['cure-critical-wounds', 'blessing-of-fervor', 'blessing-of-fervor', 'freedom-of-movement', 'protection-from-energy-communal', 'death-ward']),
  ...level(5, ['breath-of-life', 'cleanse', 'wall-of-stone', null]),
  ...level(6, ['heal', 'heal', 'blade-barrier']),
];

const jefe: PresetSlot[] = combate.map((s) =>
  s.level === 2 && s.spellId === 'restoration-lesser' ? { ...s, spellId: 'heroic-fortune' } : s,
);

/** Día de viaje/social: solo los cambios que lista la ficha; el resto queda libre. */
const viaje: PresetSlot[] = [
  ...level(0, ['detect-magic', 'guidance', 'light', 'stabilize']),
  ...level(1, ['shield-of-faith', 'comprehend-languages', 'endure-elements', 'protection-from-evil', null, null, null]),
  ...level(2, ['cure-moderate-wounds', 'augury', 'zone-of-truth', 'gentle-repose', 'status', null, null]),
  ...level(3, ['heroism', 'water-walk', 'locate-object', 'magic-vestment', 'magic-vestment', null, null]),
  ...level(4, ['cure-critical-wounds', 'divination', 'sending', 'air-walk', 'freedom-of-movement', null]),
  ...level(5, ['breath-of-life', 'commune', 'air-walk-communal', null]),
  ...level(6, ['heal', 'heroes-feast', 'word-of-recall']),
];

export const presets: Preset[] = [
  { id: 'combate', name: 'Día de combate', description: 'Dragones y ajenos: curación, buffs para 4 cuerpo a cuerpo, energía y control (ficha §10).', slots: combate },
  { id: 'jefe', name: 'Día de jefe', description: 'Como combate, con Heroic Fortune (2.º) en lugar de Lesser Restoration: el segundo Hero Point para Cheat Death.', slots: jefe },
  { id: 'viaje', name: 'Día de viaje / social', description: 'Divinación, idiomas, desplazamiento y Heroes\' Feast. Las ranuras vacías se rellenan en 15 min o se convierten en cures.', slots: viaje },
];

export const presetById = Object.fromEntries(presets.map((p) => [p.id, p])) as Record<Preset['id'], Preset>;
