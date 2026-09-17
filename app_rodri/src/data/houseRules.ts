import { aon } from './sources';
import type { AonRef } from './types';

export type HouseRule = { id: string; label: string; detail: string; aon?: AonRef };

/** Reglas de la mesa y rulings del DM confirmados (ficha §0 y §13). */
export const houseRules: HouseRule[] = [
  { id: 'point-buy', label: 'Compra por puntos 20', detail: 'Str 10 / Dex 10 / Con 14 / Int 10 / Wis 17 / Cha 12 = 0+0+5+0+13+2.', aon: aon('rulesId', '90', 'Core Rulebook pg. 15') },
  { id: 'magic-no-masterwork', label: 'Lo mágico no paga el masterwork', detail: 'DM: un arma, armadura o escudo mágico es masterwork de por sí y no se cobra ese componente (+1 Scimitar 2.015, +1 Darkwood Heavy Wooden Shield 1.107, +1 Mithral Breastplate 5.050). Equipo 101.728 po; sobran 772.', aon: aon('rulesId', '401', 'Core Rulebook pg. 468') },
  { id: 'tier', label: 'Tier mítico 3 de arranque', detail: 'Hierophant. 3 path abilities, 2 dotes míticas, un +2 de característica (tier 2).' },
  { id: 'hero-points', label: 'Hero Points activos', detail: 'Arranca con 1; sin premios por historia/retrato; máx. 3; Cheat Death 2.', aon: aon('rulesId', '445', "Advanced Player's Guide pg. 322") },
  { id: 'background-skills', label: 'Background Skills', detail: '2 rangos de trasfondo por nivel (Linguistics, Knowledge history/nobility, Profession, Lore).', aon: aon('rulesId', '1732', 'Pathfinder Unchained pg. 46') },
  { id: 'drawback', label: 'Drawback permitido', detail: 'Scarred → tercer rasgo (Blessed Touch).', aon: aon('rulesId', '1222', 'Ultimate Campaign pg. 64') },
  { id: 'sacred-geometry', label: 'Sacred Geometry BANEADA', detail: 'Dote prohibida por el GM.' },
  { id: 'aon-all', label: 'Todo lo de AoN 1e permitido', detail: 'Player Companions y Campaign Setting incluidos.' },
  { id: 'hp-rolled', label: 'Pg por tirada', detail: '10d8 tirados el 16/09/2026: 7,6,6,5,5,5,4,2 + reroll de dos 1 → 8,2 = 50. Total 125.' },
  { id: 'wand-lr', label: 'Wand of Lesser Restoration: acción estándar', detail: 'No 3 asaltos por carga.' },
  { id: 'craft-25', label: '+25 % de WBL por Craft Wondrous Item', detail: 'Sobre el valor de mercado: tope 102.500 po (equipo 101.728, sobran 772).', aon: aon('rulesId', '1432', 'Ultimate Campaign pg. 173') },
  { id: 'headband-phylactery', label: 'Headband + Phylactery combinadas', detail: 'Objeto combinado con la regla del +50 % (permitido).', aon: aon('rulesId', '412', 'Core Rulebook pg. 553') },
  { id: 'slot-change', label: 'Cambio de ranura al +50 % (regla de la casa)', detail: 'Belt of Incredible Dexterity +2 como brazales por 6.000 po.' },
  { id: 'eitr', label: 'Elephant in the Room activo', detail: 'No afecta a ninguna dote de Rodri.' },
  { id: 'retraining', label: 'Retraining', detail: '5 días + 10 po × nivel × días = 550 po por dote (con entrenador).', aon: aon('rulesId', '1471', 'Ultimate Campaign pg. 188') },
  { id: 'dm-aura', label: 'DM: Aura of Heroism', detail: 'Se activa una vez (rápida), no se apaga sola, gasta asaltos mientras esté encendida; una inmediata no la corta.' },
  { id: 'dm-faiths-reach', label: "DM: Faith's Reach", detail: 'Sin tirada de toque sobre aliados dispuestos.' },
  { id: 'dm-mythic-domain', label: 'DM: Mythic Domain', detail: 'La recarga devuelve todo como si hubiera dormido 8 h: ambos dominios, aura 15 + 15 asaltos.' },
  { id: 'dm-mythic-power', label: 'DM: poder mítico', detail: '9/día, se recarga con el descanso (lo dicen las reglas).' },
  { id: 'campaign', label: 'Campaña', detail: 'Dragones, ajenos y monstruos homebrew; pocos no muertos. 2 tanques + 2 DPS cuerpo a cuerpo + 1 apoyo social. Sin trapero (no invertir en trampas). Metrópolis con PNJ de Regenerate.' },
];
