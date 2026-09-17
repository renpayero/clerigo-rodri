import type { AonRef } from './types';

const BASE = 'https://www.aonprd.com/';

type Kind =
  | 'class' | 'domain' | 'feat' | 'trait' | 'spell' | 'wondrous' | 'ring' | 'rod' | 'misc' | 'armor' | 'weapon'
  | 'race' | 'deity' | 'skill' | 'rulesId' | 'rulesName' | 'path' | 'pathAbilities' | 'raw';

const PATH: Record<Exclude<Kind, 'rulesId' | 'rulesName' | 'raw'>, string> = {
  class: 'ClassDisplay.aspx?ItemName=',
  domain: 'DomainDisplay.aspx?ItemName=',
  feat: 'FeatDisplay.aspx?ItemName=',
  trait: 'TraitDisplay.aspx?ItemName=',
  spell: 'SpellDisplay.aspx?ItemName=',
  wondrous: 'MagicWondrousDisplay.aspx?FinalName=',
  ring: 'MagicRingsDisplay.aspx?FinalName=',
  rod: 'MagicRodsDisplay.aspx?FinalName=',
  misc: 'EquipmentMiscDisplay.aspx?ItemName=',
  armor: 'EquipmentArmorDisplay.aspx?ItemName=',
  weapon: 'EquipmentWeaponsDisplay.aspx?ItemName=',
  race: 'RacesDisplay.aspx?ItemName=',
  deity: 'DeityDisplay.aspx?ItemName=',
  skill: 'Skills.aspx?ItemName=',
  path: 'MythicPaths.aspx?Path=',
  pathAbilities: 'PathAbilities.aspx?Path=',
};

/**
 * Construye una referencia a AoN. `verified: true` sólo para las URLs confirmadas en la
 * investigación; el resto sigue el patrón oficial y se valida con scripts/validate-aon.ts.
 */
export function aon(kind: Kind, name: string, book?: string, verified = true): AonRef {
  let url: string;
  if (kind === 'raw') url = name;
  else if (kind === 'rulesId') url = `${BASE}Rules.aspx?ID=${name}`;
  else if (kind === 'rulesName') url = `${BASE}Rules.aspx?${name}`;
  else url = BASE + PATH[kind] + (/[%+]/.test(name) ? name : encodeURIComponent(name));
  return { url, book, verified };
}

export const FAQ_CRB = aon('raw', 'https://paizo.com/paizo/faq/v5748nruor1fm', 'FAQ del Core Rulebook (Paizo)');
export const AON_FAQS = aon('raw', 'https://www.aonprd.com/FAQs.aspx', 'FAQ / erratas en AoN');
