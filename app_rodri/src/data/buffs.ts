import { aon } from './sources';
import { spells } from './spells/catalog';
import type { BuffDef, DurationSpec } from './types';

/**
 * Definiciones de buffs activables. Los de conjuro se derivan del catálogo (spell.buff);
 * acá se agregan detalles (objetivos, bloques Communal, modificadores) y los de poder/SLA/objeto.
 */

type Extra = Partial<Pick<BuffDef, 'targets' | 'communalBlockMinutes' | 'absorbPerTarget' | 'energyChoice' | 'modifiers' | 'effect'>>;

const spellExtras: Record<string, Extra> = {
  'shield-of-faith': { targets: 'one', modifiers: { ac: { type: 'desvío', value: 3 } }, effect: '+3 desvío a CA' },
  'protection-from-evil': { targets: 'one', effect: '+2 desvío CA / +2 resistencia salv. vs malvados; bloquea control mental' },
  'protection-from-evil-communal': { targets: 'many', communalBlockMinutes: 1, effect: 'Protection from Evil repartido en bloques de 1 min' },
  'remove-fear': { targets: 'many', effect: '+4 moral vs miedo (3 criaturas)' },
  'sanctuary': { targets: 'self', effect: 'Atacarte exige Will DC 19' },
  'endure-elements': { targets: 'one', effect: 'Inmune a clima extremo' },
  'resist-energy': { targets: 'one', energyChoice: true, effect: 'Resistencia 30 a un tipo de energía' },
  'status': { targets: 'many', effect: 'Conocés posición y estado de 3 aliados' },
  'silence': { targets: 'area', effect: 'Radio 20 pies sin sonido' },
  'heroic-fortune': { targets: 'one', effect: '1 Hero Point temporal (se gasta primero)' },
  'weapon-of-awe': { targets: 'one', effect: '+2 sagrado al daño; crítico → shaken' },
  'delay-poison': { targets: 'one', effect: 'Inmune a veneno' },
  'heroism': { targets: 'one', modifiers: { saves: { type: 'moral', value: 2 }, attack: { type: 'moral', value: 2 } }, effect: '+2 moral ataques, salvaciones, habilidades' },
  'magic-vestment': { targets: 'self', effect: '+2 mejora a armadura O escudo (lanzar dos veces para ambos)' },
  'prayer': { targets: 'area', modifiers: { saves: { type: 'suerte', value: 1 }, attack: { type: 'suerte', value: 1 } }, effect: 'Aliados +1 suerte a todo; enemigos −1' },
  'resist-energy-communal': { targets: 'many', communalBlockMinutes: 10, energyChoice: true, effect: 'Resistencia 30 a cada tocado; 110 min en bloques de 10' },
  'invisibility-purge': { targets: 'self', effect: 'Radio 55 pies: nada invisible' },
  'water-walk': { targets: 'many', effect: 'Caminar sobre el agua' },
  'daylight': { targets: 'area', effect: 'Luz brillante 60 pies' },
  'magic-weapon-greater': { targets: 'one', effect: '+2 mejora a un arma' },
  'blessing-of-fervor': { targets: 'many', effect: 'Cada asalto: ataque extra / +2 ataque y esquiva / +30 pies / levantarse rápida (mítico: dos)' },
  'freedom-of-movement': { targets: 'one', effect: 'Los agarres fallan' },
  'protection-from-energy-communal': { targets: 'many', communalBlockMinutes: 10, absorbPerTarget: 120, energyChoice: true, effect: 'Absorbe 120 de un tipo a cada tocado; 110 min en bloques de 10' },
  'death-ward': { targets: 'one', effect: '+4 moral vs muerte; inmune a drenaje y energía negativa' },
  'air-walk': { targets: 'one', effect: 'Caminar por el aire' },
  'spiritual-ally': { targets: 'area', effect: 'Aliado espiritual +16/+11, 1d10+3' },
  'dispel-evil': { targets: 'self', effect: '+4 desvío vs malvados; un toque expulsa/disipa' },
  'righteous-might': { targets: 'self', effect: '+4 Fue/Con, +2 NA, RD 5/evil, tamaño +1' },
  'air-walk-communal': { targets: 'many', communalBlockMinutes: 10, effect: 'Air Walk repartido en bloques de 10 min' },
  'blade-barrier': { targets: 'area', effect: 'Muro 11d6, Reflejos 24, cobertura +4' },
  'heroism-greater': { targets: 'one', modifiers: { saves: { type: 'moral', value: 4 }, attack: { type: 'moral', value: 4 } }, effect: '+4 moral, inmune a miedo, 11 pg temporales' },
  'antilife-shell': { targets: 'self', effect: 'Emanación 10 pies: los vivos no entran' },
  'heroes-feast': { targets: 'many', effect: '1d8+5 pg temp, +1 moral ataque/Will, +4 moral vs veneno y miedo' },
};

const fromSpells: BuffDef[] = spells
  .filter((sp) => sp.buff)
  .map((sp) => {
    const x = spellExtras[sp.id] ?? {};
    return {
      key: sp.id,
      name: sp.name,
      source: { kind: 'spell', id: sp.id },
      duration: sp.duration,
      communalBlockMinutes: x.communalBlockMinutes,
      absorbPerTarget: x.absorbPerTarget,
      energyChoice: x.energyChoice,
      targets: x.targets ?? 'one',
      effect: x.effect ?? sp.tip,
      modifiers: x.modifiers,
      spellLevel: sp.level,
      tip: sp.tip,
      aon: sp.aon,
    };
  });

const AURA: DurationSpec = { kind: 'special', label: 'Mientras gastes asaltos de la reserva' };

const others: BuffDef[] = [
  {
    key: 'aura-of-heroism', name: 'Aura of Heroism', source: { kind: 'power', id: 'aura-of-heroism' }, duration: AURA, targets: 'area',
    effect: 'Aliados a 30 pies: +2 moral a ataques, salvaciones y habilidades', modifiers: { saves: { type: 'moral', value: 2 }, attack: { type: 'moral', value: 2 } },
    tip: 'Rápida una vez; gasta 1 asalto de la reserva (15) por asalto encendida; se pausa y reanuda.', aon: aon('domain', 'Glory', 'APG pg. 92'),
  },
  {
    key: 'daylight-sla', name: 'Daylight (SLA)', source: { kind: 'sla', id: 'aasimar-daylight' }, duration: { kind: 'ten_minutes_per_level' }, targets: 'area',
    effect: 'Luz brillante 60 pies, 110 min', spellLevel: 3, tip: 'SLA racial 1/día, CL 11.', aon: aon('spell', 'Daylight', 'Core Rulebook pg. 264'),
  },
  {
    key: 'inspired-cl13', name: 'Inspired Spell (CL 13)', source: { kind: 'power', id: 'inspired-spell' }, duration: { kind: 'instant' }, targets: 'self',
    effect: 'Marcador: el próximo conjuro se calcula a CL 13', tip: 'Los buffs lanzados con Inspired Spell duran como CL 13 (13 asaltos / 13 min / 130 min).', aon: aon('pathAbilities', 'Hierophant', 'Mythic Adventures pg. 32'),
  },
];

export const buffs: BuffDef[] = [...fromSpells, ...others];
export const buffByKey = Object.fromEntries(buffs.map((b) => [b.key, b])) as Record<string, BuffDef>;
