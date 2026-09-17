import { aon, AON_FAQS } from './sources';
import type { MythicAbility } from './types';

const BASE = aon('rulesId', '1618', 'Mythic Adventures pg. 12 (Base Mythic Abilities)');
const PATH = aon('pathAbilities', 'Hierophant', 'Mythic Adventures pg. 32-37');
const HIEROPHANT = aon('path', 'Hierophant', 'Mythic Adventures pg. 32');

export const mythic = {
  path: 'Hierophant',
  tier: 3,
  mythicPower: 9,
  surgeDie: 'd6',
  hpPerTier: 4,
  aon: { hierophant: HIEROPHANT, pathAbilities: PATH, base: BASE, rules: aon('rulesId', '1608', 'Mythic Adventures pg. 54, 78'), feats: aon('raw', 'https://www.aonprd.com/Feats.aspx?Category=Mythic', 'Mythic Adventures') },
} as const;

export const mythicAbilities: MythicAbility[] = [
  // Tier 1
  { id: 'hard-to-kill', tier: 1, kind: 'base', name: 'Hard to Kill (Ex)', effect: 'Bajo 0 pg te estabilizás automáticamente. No morís hasta −2 × Con = −36.', tip: 'Bajo 0 pg te estabilizás sola; no morís hasta −36.', aon: BASE },
  { id: 'mythic-power', tier: 1, kind: 'base', name: 'Mythic Power (Su)', effect: '3 + 2 × tier = 9 usos por día. Alimenta Surge, Inspired Spell, conjuros míticos, Amazing Initiative, Relentless Healing, Recuperation y Mythic Domain.', tip: '9 usos/día para Surge, Inspired Spell, conjuros míticos, Amazing Initiative, Relentless Healing, Recuperation y Mythic Domain. Se recarga con el descanso.', aon: BASE },
  { id: 'surge', tier: 1, kind: 'base', name: 'Surge (Su)', action: 'immediate', cost: '1 poder mítico', effect: 'Acción inmediata: +1d6 a una tirada de d20 propia después de ver el resultado (1d8 a tier 4).', tip: 'Inmediata, 1 uso: +1d6 a un d20 propio después de ver el resultado. Salvaciones letales y concentración de un Heal.', aon: BASE },
  { id: 'inspired-spell', tier: 1, kind: 'surge', name: 'Divine Surge: Inspired Spell (Su)', action: 'standard', cost: '1 poder mítico', effect: 'Acción estándar + 1 uso: lanzás cualquier conjuro divino de tu lista de clase o de dominio de nivel ≤ 6.º con tiempo ≤ 1 estándar, sin haberlo preparado ni gastar ranura, a CL 13 (texto vigente por FAQ 2013).', tip: 'Estándar + 1 uso: cualquier conjuro divino ≤ 6.º de ≤ 1 estándar sin prepararlo, a CL 13. Heal 130, Death Ward, Freedom of Movement de bolsillo.', aon: AON_FAQS },
  { id: 'faiths-reach', tier: 1, kind: 'path', name: "Faith's Reach (Su)", effect: 'Todo conjuro divino de toque se lanza a 30 pies. Si requería ataque de toque cuerpo a cuerpo, pasa a toque a distancia. DM: sobre aliados dispuestos no hay tirada.', tip: 'Todo conjuro divino de toque llega a 30 pies. Sobre aliados dispuestos no hay tirada (DM); contra no dispuestos, toque a distancia +9. No aplica a Rebuke Death (es Sp).', aon: PATH },
  { id: 'mythic-spell-lore', tier: 1, kind: 'feat', name: 'Mythic Spell Lore', effect: '3 conjuros míticos: Heal, Blessing of Fervor, Breath of Life. +1 por tier.', tip: 'Conocés 3 conjuros míticos (Heal, Blessing of Fervor, Breath of Life); +1 por tier.', aon: aon('feat', 'Mythic Spell Lore', 'Mythic Adventures pg. 70') },
  { id: 'hp-t1', tier: 1, kind: 'bonus', name: '+4 pg', effect: '+4 puntos de golpe por tier.', tip: '+4 pg por tier mítico.', aon: HIEROPHANT },
  // Tier 2
  { id: 'amazing-initiative', tier: 2, kind: 'base', name: 'Amazing Initiative (Ex)', action: 'free', cost: '1 poder mítico', effect: '+3 (tier) a iniciativa. Acción gratuita + 1 uso: una acción estándar extra este asalto que no puede ser lanzar un conjuro. 1/asalto.', tip: '+3 iniciativa. Gratuita + 1 uso: una acción estándar extra que no sea un conjuro → un channel más en el asalto de crisis.', aon: BASE },
  { id: 'ability-t2', tier: 2, kind: 'bonus', name: '+2 Sabiduría', effect: 'Wis 21 → 23.', tip: 'Mejora de característica de tier 2: +2 Wis.', aon: BASE },
  { id: 'relentless-healing', tier: 2, kind: 'path', name: 'Relentless Healing (Su)', action: 'free', cost: '1 poder mítico', effect: 'Si una criatura murió hace ≤ 1 asalto, como acción gratuita gastás 1 uso y le aplicás una cura; si la deja por encima del umbral de muerte, revive estabilizada con esos pg.', tip: 'Si alguien murió hace ≤ 1 asalto, gratuita + 1 uso: cualquier cura tuya lo resucita si lo deja sobre el umbral. Heal 110 sobre un muerto a −45 = vivo con 65.', aon: PATH },
  { id: 'hp-t2', tier: 2, kind: 'bonus', name: '+4 pg', effect: '+4 puntos de golpe.', tip: '+4 pg por tier mítico.', aon: HIEROPHANT },
  // Tier 3
  { id: 'recuperation', tier: 3, kind: 'base', name: 'Recuperation (Ex)', action: 'special', cost: '1 poder mítico + 1 hora', effect: 'Con 8 h de descanso recuperás todos los pg. Además, 1 uso + 1 hora de descanso: recuperás la mitad de los pg máximos y los rasgos de clase con usos por día (conjuros, channels), como si hubieras dormido 8 h. No recarga poder mítico.', tip: '1 uso + 1 hora de descanso: mitad de pg y recuperás conjuros y channels (no poder mítico). Entre dos combates grandes.', aon: BASE },
  { id: 'abundant-healing', tier: 3, kind: 'path', name: 'Abundant Healing (Su)', effect: 'Cuando curás con un conjuro o rasgo de clase, el exceso sobre los pg máximos del objetivo pasa a un aliado adyacente a vos, y podés seguir con otros aliados adyacentes.', tip: 'El exceso de cualquier cura (Heal, channel) pasa a un aliado adyacente a vos, y sigue al siguiente. Por eso te ponés pegada a 1-2 aliados.', aon: PATH },
  { id: 'extra-path-ability', tier: 3, kind: 'feat', name: 'Extra Path Ability → Mythic Domain', effect: 'Dote mítica de tier 3 que compra la habilidad de senda Mythic Domain.', tip: 'Dote mítica que compra una habilidad de senda extra: Mythic Domain.', aon: aon('feat', 'Extra Path Ability', 'Mythic Adventures pg. 65') },
  { id: 'mythic-domain', tier: 3, kind: 'path', name: 'Mythic Domain (Su)', action: 'standard', cost: '1 poder mítico (recarga)', effect: 'Tus poderes de dominio se calculan como si tuvieras 4 niveles más (15): Aura of Heroism 15 asaltos, Rebuke Death 1d4+7, Touch of Glory +15. Una vez por día, acción estándar + 1 uso: recuperás todos los poderes de dominio como si hubieras dormido 8 h (DM: los dos dominios, aura incluida).', tip: 'Poderes de dominio como nivel 15 (aura 15 asaltos, Rebuke Death 1d4+7, Touch of Glory +15). 1/día, estándar + 1 uso: recargás todo como si hubieras dormido.', aon: PATH },
  { id: 'hp-t3', tier: 3, kind: 'bonus', name: '+4 pg', effect: '+4 puntos de golpe.', tip: '+4 pg por tier mítico.', aon: HIEROPHANT },
];

export const mythicSpells = [
  { spellId: 'heal', name: 'Heal', cost: 1, effect: '15 pg por nivel (máx. 225): 165 a CL 11, 195 con Inspired Spell. Augmented (2 usos en total): además actúa como Restoration.', tip: '1 uso: 165 pg (195 con Inspired Spell). Con 2 usos actúa además como Restoration.' },
  { spellId: 'blessing-of-fervor', name: 'Blessing of Fervor', cost: 1, effect: 'Cada aliado elige dos beneficios por asalto en lugar de uno.', tip: '1 uso: cada aliado elige dos beneficios por asalto (ataque extra Y +2/+2). La firma del buffer en combates grandes.' },
  { spellId: 'breath-of-life', name: 'Breath of Life', cost: 1, effect: '5d12 + 1/CL (máx. +25) = 5d12+11. Revive a quien murió por daño hace ≤ 2 asaltos. Contra un efecto de muerte con salvación, permite repetirla; vuelve con −10 + lo curado.', tip: '1 uso: 5d12+11, revive a quien murió hace ≤ 2 asaltos y repite la salvación contra un efecto de muerte.' },
] as const;

export const mythicBudget = [
  { label: 'Mythic Blessing of Fervor', uses: 2, when: 'asalto 1 de cada combate grande' },
  { label: 'Mythic Heal', uses: 2, when: 'el tanque baja de 40 pg' },
  { label: 'Inspired Spell', uses: 1, when: 'Death Ward / Freedom of Movement / tercer Heal no preparados' },
  { label: 'Amazing Initiative', uses: 1, when: 'el asalto de crisis (Heal + dos channels)' },
  { label: 'Relentless Healing', uses: 1, when: 'un aliado muere este asalto' },
  { label: 'Recuperation', uses: 1, when: 'tras el primer combate: 1 h → conjuros y channels de nuevo' },
  { label: 'Surge', uses: 1, when: 'salvación letal propia o concentración' },
] as const;

export const mythicProgression = [
  { tier: 4, items: ['Surge 1d8', '+2 Wis (con nivel 12 → 30)', 'Poder mítico 11/día', 'Path ability: Overflowing Grace (+1 sagrado 10 asaltos a quien quede a pg máximos tras tu cura)', 'Conjuro mítico: Cure Critical Wounds (87 con Healer\'s Blessing)'] },
  { tier: 5, items: ['Mythic Saving Throws', 'Poder mítico 13/día', 'Dote mítica: Mythic Selective Channeling (+4 a cada aliado por channel) o Dual Path (Marshal → Rally)', 'Path ability: Enduring Blessing (Freedom of Movement 24 h)'] },
] as const;
