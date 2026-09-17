/**
 * Reserva vía Inspired Spell (1 poder mítico, CL 13, sin preparar): cualquier conjuro divino
 * de la lista o de dominio de nivel ≤ 6 con tiempo de lanzamiento ≤ 1 acción estándar.
 * Estos son los que la ficha recomienda tener presentes.
 */
export const inspiredReserve = [
  { spellId: 'heal', note: 'Heal a CL 13 = 130 (Mythic Heal + Inspired = 195, 2 usos)' },
  { spellId: 'death-ward', note: 'Contra Slay Living / drenadores' },
  { spellId: 'freedom-of-movement', note: 'Presas, redes, tragar entero' },
  { spellId: 'remove-curse', note: 'Prueba de CL a 13' },
  { spellId: 'remove-disease', note: 'Prueba de CL a 13' },
  { spellId: 'neutralize-poison', note: 'Prueba de CL a 13' },
  { spellId: 'dispel-magic', note: '1d20+13' },
  { spellId: 'air-walk', note: 'Cuando hay que subir ya' },
  { spellId: 'dismissal', note: 'Un extraplanar fuera' },
  { spellId: 'command-greater', note: 'Control de área sin preparar' },
] as const;

/** No sirven con Inspired Spell: tiempo de lanzamiento > 1 estándar. */
export const inspiredExcluded = ['restoration', 'restoration-lesser', 'break-enchantment', 'raise-dead', 'divination', 'sending', 'commune', 'augury', 'heroes-feast', 'antilife-shell', 'regenerate', 'resurrection', 'restoration-greater'];
