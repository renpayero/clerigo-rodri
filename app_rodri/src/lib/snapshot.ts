/**
 * Instantánea del estado mutable que viaja entre servidor e islas. Es lo que devuelve cada action.
 */
import type { CharacterStateRow, SpellSlotRow, ActiveBuffRow, AllyRow, SettingsRow, NoteRow } from '@/db/schema';
import type { ResourceMap } from '@/lib/rules/resources';

export type SerializedRow<T> = { [K in keyof T]: T[K] extends Date ? string : T[K] extends Date | null ? string | null : T[K] };

export type StateSnapshot = {
  character: SerializedRow<CharacterStateRow>;
  resources: ResourceMap;
  slots: SerializedRow<SpellSlotRow>[];
  buffs: SerializedRow<ActiveBuffRow>[];
  allies: AllyRow[];
  settings: SerializedRow<SettingsRow>;
  notes: SerializedRow<NoteRow>[];
  lastEvent: { id: number; label: string; at: string; undone: boolean } | null;
  version: number;
};

export type ActionOutcome = {
  snapshot: StateSnapshot;
  event: { id: number; label: string } | null;
  roll?: import('@/lib/rules/dice').RollResult | null;
  message?: string;
};
