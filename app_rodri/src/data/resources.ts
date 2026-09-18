import { aon } from './sources';
import type { ResourceDef } from './types';

/**
 * Recursos con usos. El estado (current) vive en la DB (resource_state); el máximo y la
 * política de recarga viven acá. Agregar un recurso nuevo = agregarlo acá (el seed lo sincroniza).
 */
export const resources = [
  // ---- núcleo ----
  { key: 'channel', label: 'Channel Energy', max: 7, reset: ['daily', 'recuperation'], group: 'core', recoverHint: 'Se recupera con el descanso diario y con Recuperation. Estándar −1 · Quick Channel −2 · Reactive Healing −1.', aon: aon('class', 'Cleric', 'Core Rulebook pg. 40') },
  { key: 'mythic_power', label: 'Poder mítico', max: 9, reset: ['mythicClock'], group: 'mythic', recoverHint: '3 + 2 × tier = 9. Se recarga con el descanso (según Ajustes: con el rezo). NO con Recuperation. Boons del GM: +1.', aon: aon('rulesId', '1618', 'Mythic Adventures pg. 12') },
  { key: 'hero_points', label: 'Hero Points', max: 3, initial: 1, reset: ['never'], group: 'core', recoverHint: '1 al crear el personaje, +1 por nivel, máximo 3. No se recuperan con el descanso. Cheat Death cuesta 2.', aon: aon('rulesId', '445', 'Advanced Player\'s Guide pg. 322') },
  { key: 'hero_point_temp', label: 'Hero Point temporal (Heroic Fortune)', max: 1, initial: 0, reset: ['never'], group: 'core', recoverHint: 'Lo crea Heroic Fortune (11 asaltos). Se gasta antes que los permanentes.', aon: aon('spell', 'Heroic Fortune', 'Advanced Player\'s Guide pg. 324') },
  // ---- dominio ----
  { key: 'rebuke_death', label: 'Rebuke Death', max: 11, reset: ['daily', 'mythicDomain', 'recuperationIfSetting'], group: 'domain', recoverHint: '3 + Wis = 11/día. La recarga de Mythic Domain lo vuelve a 11.', aon: aon('domain', 'Healing', 'Core Rulebook pg. 44') },
  { key: 'touch_of_glory', label: 'Touch of Glory', max: 11, reset: ['daily', 'mythicDomain', 'recuperationIfSetting'], group: 'domain', recoverHint: '3 + Wis = 11/día. La recarga de Mythic Domain lo vuelve a 11.', aon: aon('domain', 'Glory', 'Core Rulebook pg. 44') },
  { key: 'aura_rounds', label: 'Aura of Heroism (asaltos)', max: 15, reset: ['daily', 'mythicDomain', 'recuperationIfSetting'], group: 'domain', recoverHint: '11 asaltos/día → 15 con Mythic Domain (nivel 15). La recarga de Mythic Domain vuelve a 15 (DM). Gasta 1 por asalto encendida.', aon: aon('domain', 'Glory', 'APG pg. 92') },
  { key: 'mythic_domain_recharge', label: 'Recarga de Mythic Domain', max: 1, reset: ['daily'], group: 'mythic', recoverHint: '1/día: acción estándar + 1 poder mítico → Rebuke Death, Touch of Glory y aura al máximo.', aon: aon('pathAbilities', 'Hierophant', 'Mythic Adventures pg. 34') },
  // ---- racial / objetos ----
  { key: 'daylight_sla', label: 'Daylight (SLA)', max: 1, reset: ['daily'], group: 'item', recoverHint: '1/día (racial, CL 11).', aon: aon('race', 'Aasimar', 'ARG pg. 84') },
  // ---- por asalto ----
  { key: 'amazing_initiative', label: 'Amazing Initiative (este asalto)', max: 1, reset: ['round'], group: 'round', recoverHint: '1 por asalto (+1 poder mítico).', aon: aon('rulesId', '1618', 'Mythic Adventures pg. 12') },
  { key: 'swift_action', label: 'Acción rápida', max: 1, reset: ['round'], group: 'round', recoverHint: 'Una por asalto. Usar una inmediata fuera de tu turno la consume hasta tu próximo turno.', aon: aon('rulesName', 'Name=Actions%20in%20Combat&Category=Combat', 'Core Rulebook pg. 183') },
  { key: 'immediate_action', label: 'Acción inmediata', max: 1, reset: ['round'], group: 'round', recoverHint: 'Una por asalto (cuenta como la rápida del próximo turno si es fuera de turno).', aon: aon('rulesName', 'Name=Actions%20in%20Combat&Category=Combat', 'Core Rulebook pg. 183') },
  { key: 'hero_point_round', label: 'Hero Point este asalto', max: 1, reset: ['round'], group: 'round', recoverHint: 'Máximo 1 Hero Point por asalto (Cheat Death exento).', aon: aon('rulesId', '447', 'Advanced Player\'s Guide pg. 323') },
  // ---- consumibles ----
  { key: 'wand_clw', label: 'Wand of Cure Light Wounds', max: 50, reset: ['never'], group: 'consumable', recoverHint: 'No se recarga (750 po una nueva).' },
  { key: 'wand_pfe', label: 'Wand of Protection from Evil', max: 50, reset: ['never'], group: 'consumable', recoverHint: 'No se recarga (750 po).' },
  { key: 'wand_lesser_restoration', label: 'Wand of Lesser Restoration', max: 50, reset: ['never'], group: 'consumable', recoverHint: 'No se recarga (750 po).' },
  { key: 'scroll_restoration', label: 'Scroll of Restoration', max: 1, reset: ['never'], group: 'consumable', recoverHint: 'Compra: 800 po.' },
  { key: 'scroll_remove_curse', label: 'Scroll of Remove Curse', max: 1, reset: ['never'], group: 'consumable', recoverHint: 'Compra: 375 po.' },
  { key: 'scroll_neutralize_poison', label: 'Scroll of Neutralize Poison', max: 1, reset: ['never'], group: 'consumable', recoverHint: 'Compra: 700 po.' },
  { key: 'diamond_dust_100', label: 'Polvo de diamante (100 po)', max: 4, reset: ['never'], group: 'consumable', recoverHint: 'Restoration y Heroic Fortune.' },
  { key: 'diamond_dust_1000', label: 'Polvo de diamante (1.000 po)', max: 1, reset: ['never'], group: 'consumable', recoverHint: 'Restoration contra un nivel negativo permanente.' },
  { key: 'healers_kit', label: "Healer's kit", max: 10, reset: ['never'], group: 'consumable', recoverHint: '10 usos; 50 po.' },
  { key: 'smelling_salts', label: 'Smelling salts', max: 1, reset: ['never'], group: 'consumable', recoverHint: '25 po.' },
] as const satisfies readonly ResourceDef[];

export type ResourceKey = (typeof resources)[number]['key'];
export const resourceDefs: readonly ResourceDef[] = resources;
export const RESOURCE_KEYS = resources.map((r) => r.key) as [ResourceKey, ...ResourceKey[]];
export const resourceByKey = Object.fromEntries(resourceDefs.map((r) => [r.key, r])) as unknown as Record<ResourceKey, ResourceDef>;

/** Costos de cada acción en recursos. */
export const actionCosts = {
  channel_standard: [{ key: 'channel', n: 1 }],
  channel_quick: [{ key: 'channel', n: 2 }],
  channel_reactive: [{ key: 'channel', n: 1 }, { key: 'immediate_action', n: 1 }],
  surge: [{ key: 'mythic_power', n: 1 }, { key: 'immediate_action', n: 1 }],
  amazing_initiative: [{ key: 'mythic_power', n: 1 }, { key: 'amazing_initiative', n: 1 }],
  relentless_healing: [{ key: 'mythic_power', n: 1 }],
  inspired_spell: [{ key: 'mythic_power', n: 1 }],
  mythic_spell: [{ key: 'mythic_power', n: 1 }],
  mythic_heal_augmented: [{ key: 'mythic_power', n: 2 }],
  mythic_domain_recharge: [{ key: 'mythic_power', n: 1 }, { key: 'mythic_domain_recharge', n: 1 }],
  recuperation: [{ key: 'mythic_power', n: 1 }],
  rebuke_death: [{ key: 'rebuke_death', n: 1 }],
  touch_of_glory: [{ key: 'touch_of_glory', n: 1 }],
  aura_activate: [{ key: 'swift_action', n: 1 }],
  divine_interference: [{ key: 'immediate_action', n: 1 }],
  hero_point: [{ key: 'hero_points', n: 1 }, { key: 'hero_point_round', n: 1 }],
  cheat_death: [{ key: 'hero_points', n: 2 }],
  daylight_sla: [{ key: 'daylight_sla', n: 1 }],
} as const satisfies Record<string, readonly { key: ResourceKey; n: number }[]>;

export type ActionKind = keyof typeof actionCosts;
