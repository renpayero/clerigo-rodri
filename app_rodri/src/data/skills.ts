import { aon } from './sources';
import type { Skill } from './types';

const SK = (n: string, verified = true) => aon('skill', n, 'Core Rulebook', verified);

/** 22 rangos de aventura + 22 de trasfondo (Background Skills, Pathfinder Unchained). ACP −1 (mithral breastplate). */
export const skills: Skill[] = [
  { name: 'Perception', ability: 'Wis', classSkill: false, background: false, ranks: 11, misc: 2, acp: 0, total: 21, note: '11 + 8 Wis + 2 Skilled (aasimar). No es de clase para el clérigo. La alarma del grupo.', aon: SK('Perception') },
  { name: 'Knowledge (religion)', ability: 'Int', classSkill: true, background: false, ranks: 5, misc: 0, acp: 0, total: 8, note: '5 + 3 clase. Prerrequisito de Quick Channel.', aon: SK('Knowledge') },
  { name: 'Spellcraft', ability: 'Int', classSkill: true, background: false, ranks: 5, misc: 0, acp: 0, total: 8, note: '5 + 3 clase. Crafteo: tomar 10 = 18.', aon: SK('Spellcraft') },
  { name: 'Heal', ability: 'Wis', classSkill: true, background: false, ranks: 1, misc: 0, acp: 0, total: 12, note: "1 + 8 + 3. Con healer's kit +2 → 14: tomando 10, primeros auxilios y heridas mortales automáticos.", aon: SK('Heal') },
  { name: 'Sense Motive', ability: 'Wis', classSkill: true, background: false, ranks: 0, misc: 0, acp: 0, total: 8, note: 'Sin rangos (Wis).', aon: SK('Sense Motive') },
  { name: 'Diplomacy', ability: 'Cha', classSkill: true, background: false, ranks: 0, misc: 2, acp: 0, total: 4, note: '2 Cha + 2 Skilled.', aon: SK('Diplomacy') },
  { name: 'Linguistics', ability: 'Int', classSkill: true, background: true, ranks: 5, misc: 0, acp: 0, total: 8, note: 'Trasfondo. 5 idiomas extra: Abyssal, Infernal, Draconic, Undercommon, Sylvan.', aon: SK('Linguistics') },
  { name: 'Knowledge (history)', ability: 'Int', classSkill: true, background: true, ranks: 5, misc: 0, acp: 0, total: 8, note: 'Trasfondo.', aon: SK('Knowledge') },
  { name: 'Knowledge (nobility)', ability: 'Int', classSkill: true, background: true, ranks: 2, misc: 0, acp: 0, total: 5, note: 'Trasfondo.', aon: SK('Knowledge') },
  { name: 'Profession (herbalist)', ability: 'Wis', classSkill: true, background: true, ranks: 5, misc: 0, acp: 0, total: 16, note: 'Trasfondo. 5 + 8 + 3.', aon: SK('Profession') },
  { name: 'Lore (Sarenrae)', ability: 'Int', classSkill: true, background: true, ranks: 5, misc: 0, acp: 0, total: 8, note: 'Trasfondo. Lore siempre es de clase.', aon: aon('rulesId', '1740', 'Pathfinder Unchained pg. 50') },
  { name: 'Bluff', ability: 'Cha', classSkill: false, background: false, ranks: 0, misc: -2, acp: 0, total: 0, note: '2 Cha − 2 (Scarred).', aon: SK('Bluff') },
  { name: 'Disguise', ability: 'Cha', classSkill: false, background: false, ranks: 0, misc: -5, acp: 0, total: -3, note: '2 Cha − 5 (Scarred).', aon: SK('Disguise') },
  { name: 'Intimidate', ability: 'Cha', classSkill: false, background: false, ranks: 0, misc: 0, acp: 0, total: 2, aon: SK('Intimidate') },
  { name: 'Acrobatics', ability: 'Dex', classSkill: false, background: false, ranks: 0, misc: 0, acp: -1, total: 0, aon: SK('Acrobatics') },
  { name: 'Stealth', ability: 'Dex', classSkill: false, background: false, ranks: 0, misc: 0, acp: -1, total: 0, aon: SK('Stealth') },
  { name: 'Climb', ability: 'Str', classSkill: false, background: false, ranks: 0, misc: 0, acp: -1, total: -1, aon: SK('Climb') },
  { name: 'Swim', ability: 'Str', classSkill: false, background: false, ranks: 0, misc: 0, acp: -1, total: -1, aon: SK('Swim') },
  { name: 'Survival', ability: 'Wis', classSkill: false, background: false, ranks: 0, misc: 0, acp: 0, total: 8, aon: SK('Survival') },
];

export const skillPoints = { adventure: 22, background: 22, perLevel: '2 + 0 Int = 2 de aventura + 2 de trasfondo por nivel', aon: aon('rulesId', '1732', 'Pathfinder Unchained pg. 46-53') };
