import { character, abilities, defenses, attacks, racialTraits, classFeatures, pointBuyTotal, POINT_BUY_COST } from './character';
import { feats, traits } from './feats';
import { domains, domainRules } from './domains';
import { mythic, mythicAbilities, mythicSpells, mythicBudget, mythicProgression } from './mythic';
import { spells, spellById, spellsByLevel, notOnClericList } from './spells/catalog';
import { presets, presetById } from './spells/presets';
import { inspiredReserve, inspiredExcluded } from './spells/inspiredReserve';
import { buffs, buffByKey } from './buffs';
import { items, wishlist, equipmentTotal, carriedWeight } from './items';
import { resources, resourceDefs, resourceByKey, actionCosts, RESOURCE_KEYS } from './resources';
import { skills, skillPoints } from './skills';
import { houseRules } from './houseRules';
import { glossary, glossaryById } from './tooltips';
import type { AonRef } from './types';

export {
  character, abilities, defenses, attacks, racialTraits, classFeatures, pointBuyTotal, POINT_BUY_COST,
  feats, traits, domains, domainRules, mythic, mythicAbilities, mythicSpells, mythicBudget, mythicProgression,
  spells, spellById, spellsByLevel, notOnClericList, presets, presetById, inspiredReserve, inspiredExcluded,
  buffs, buffByKey, items, wishlist, equipmentTotal, carriedWeight, resources, resourceDefs, resourceByKey, actionCosts, RESOURCE_KEYS,
  skills, skillPoints, houseRules, glossary, glossaryById,
};

export type TermInfo = { id: string; name: string; tip: string; aon?: AonRef; kind: string };

/** Registro unificado de términos para <Term k="..."> (dotes, rasgos, poderes, mítico, conjuros, objetos, glosario). */
const registry = new Map<string, TermInfo>();
const add = (kind: string, list: { id: string; name: string; tip: string; aon?: AonRef }[]) => {
  for (const e of list) if (!registry.has(e.id)) registry.set(e.id, { id: e.id, name: e.name, tip: e.tip, aon: e.aon, kind });
};
add('dote', feats);
add('rasgo', traits);
add('racial', racialTraits);
add('clase', classFeatures);
add('dominio', domains);
add('poder', domains.flatMap((d) => d.powers));
add('mítico', mythicAbilities);
add('conjuro', spells);
add('objeto', items);
add('deseo', wishlist);
add('glosario', glossary);
add('recurso', resourceDefs.map((r) => ({ id: `res:${r.key}`, name: r.label, tip: r.recoverHint, aon: r.aon })));

export function term(id: string): TermInfo | undefined {
  return registry.get(id);
}

export const allTerms = () => Array.from(registry.values());
