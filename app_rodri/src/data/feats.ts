import { aon, FAQ_CRB } from './sources';
import type { Feat, Trait } from './types';

export const feats: Feat[] = [
  {
    id: 'selective-channeling', name: 'Selective Channeling', level: 1, category: 'general',
    prerequisites: 'Cha 13 ✓ (14), channel energy',
    effect: 'Al canalizar, excluís hasta 2 criaturas (tu modificador de Cha) del efecto.',
    tip: 'Excluís hasta 2 criaturas de cada channel. Tenés que verlas o tocarlas (FAQ 07-ene-2011): los invisibles no se pueden excluir.',
    aon: aon('feat', 'Selective Channeling', 'Core Rulebook pg. 132'),
  },
  {
    id: 'extra-channel', name: 'Extra Channel', level: 3, category: 'general',
    prerequisites: 'Channel energy',
    effect: '+2 usos de channel al día (7 en total). No se puede tomar dos veces.',
    tip: '+2 usos de channel al día → 7. Una sola vez (regla general de dotes; la FAQ de 2011 confirma "exactly two extra uses").',
    aon: aon('feat', 'Extra Channel', 'Core Rulebook pg. 123'),
  },
  {
    id: 'quick-channel', name: 'Quick Channel', level: 5, category: 'general',
    prerequisites: 'Knowledge (religion) 5 rangos ✓, channel energy',
    effect: 'Canalizás como acción de movimiento gastando 2 usos diarios.',
    tip: 'Canalizás como acción de MOVIMIENTO gastando 2 usos. El corazón de la build: estándar para el buff o el Heal, movimiento para curar a todos.',
    aon: aon('feat', 'Quick Channel', 'Ultimate Magic pg. 154'),
  },
  {
    id: 'reactive-healing', name: 'Reactive Healing', level: 7, category: 'general',
    prerequisites: 'Quick Channel ✓ (o Quicken Spell), channel energy',
    effect: 'Acción inmediata + 1 uso de channel: te curás 8d6 antes de que un golpe te deje a 0 o menos. Solo a vos.',
    tip: 'Inmediata + 1 uso: te curás 8d6 antes de aplicar un golpe que te dejaría a 0 o menos. Solo a vos misma. Bloquea la rápida de tu próximo turno.',
    aon: aon('feat', 'Reactive Healing', 'Advanced Class Guide pg. 155'),
  },
  {
    id: 'craft-wondrous-item', name: 'Craft Wondrous Item', level: 9, category: 'general',
    prerequisites: 'CL 3 ✓',
    effect: 'Fabricás objetos maravillosos a mitad de precio (8 h por 1.000 po de valor; 1 objeto por día). Activa el +25 % de WBL (UC pg. 173).',
    tip: 'Maravillosos a mitad de precio (8 h por 1.000 po). Spellcraft +8 tomando 10 = 18 → cualquier objeto de CL ≤ 13 cuyos prerrequisitos cumplas. Anillos y varas no.',
    aon: aon('feat', 'Craft Wondrous Item', 'Core Rulebook pg. 120'),
  },
  {
    id: 'divine-interference', name: 'Divine Interference', level: 11, category: 'general',
    prerequisites: 'Lanzador divino, CL 10 ✓',
    effect: 'Acción inmediata cuando un enemigo a 30 pies acierta a un aliado: sacrificás un conjuro preparado de nivel N y el enemigo repite el ataque con −N. Una vez por criatura y día.',
    tip: 'Inmediata: un enemigo a 30 pies acierta a un aliado → sacrificás un conjuro preparado de nivel N y repite el ataque con −N. 1 vez por criatura y día. Contra el crítico del dragón al tanque.',
    aon: aon('feat', 'Divine Interference', 'Ultimate Magic pg. 149'),
  },
  {
    id: 'mythic-spell-lore', name: 'Mythic Spell Lore', level: 1, category: 'mythic',
    prerequisites: 'Lanzar conjuros (dote mítica de tier 1)',
    effect: 'Conocés tantos conjuros míticos como tu tier (3): Heal, Blessing of Fervor, Breath of Life. +1 por tier.',
    tip: 'Conocés 3 conjuros míticos (Heal, Blessing of Fervor, Breath of Life). Al lanzar la versión normal gastás 1 poder mítico y sube a la mítica.',
    aon: aon('feat', 'Mythic Spell Lore', 'Mythic Adventures pg. 70'),
  },
  {
    id: 'extra-path-ability', name: 'Extra Path Ability', level: 3, category: 'mythic',
    prerequisites: '3.er tier mítico ✓ (dote mítica de tier 3)',
    effect: 'Una habilidad de senda más: Mythic Domain.',
    tip: 'Una habilidad de senda extra → Mythic Domain (poderes de dominio como nivel 15 y recarga diaria).',
    aon: aon('feat', 'Extra Path Ability', 'Mythic Adventures pg. 65'),
  },
];

export const traits: Trait[] = [
  { id: 'reactionary', name: 'Reactionary', list: 'Combat', source: 'Ultimate Campaign pg. 53 / APG pg. 328', effect: '+2 rasgo a iniciativa', tip: '+2 a iniciativa: buffear antes de que peguen.', aon: aon('trait', 'Reactionary', 'Ultimate Campaign pg. 53') },
  { id: 'envoy-of-healing', name: 'Envoy of Healing', list: 'Religion', source: "Healer's Handbook pg. 12 (Sarenrae)", effect: 'Repetís los 1 naturales de los dados de curación del channel (obligatorio quedarse con el nuevo).', tip: 'Repetís los 1 naturales de los dados del channel: 8d6 pasa de 28 a ≈31 de media.', aon: aon('trait', 'Envoy of Healing', "Healer's Handbook pg. 12") },
  { id: 'blessed-touch', name: 'Blessed Touch', list: 'Faith', source: 'Champions of Purity pg. 7', effect: '+1 pg a cada objetivo de cada channel y a cada conjuro cure.', tip: '+1 pg a cada objetivo de cada channel y de cada cure.', aon: aon('trait', 'Blessed Touch', 'Champions of Purity pg. 7') },
  { id: 'scarred', name: 'Scarred', list: 'Drawback', source: "Antihero's Handbook pg. 6", effect: '−5 Disguise, −2 Bluff.', tip: 'Drawback: −5 Disguise, −2 Bluff. Costo casi nulo para un sanador; da el tercer rasgo.', aon: aon('trait', 'Scarred', "Antihero's Handbook pg. 6") },
];

export const featFaq = FAQ_CRB;
