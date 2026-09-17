import { aon } from './sources';
import type { AonRef } from './types';

export type Glossary = { id: string; name: string; tip: string; aon?: AonRef };

const COMBAT = aon('rulesName', 'Name=Actions%20in%20Combat&Category=Combat', 'Core Rulebook pg. 183');
const BONUS = aon('rulesId', '211', 'Core Rulebook pg. 208 (Combining Magic Effects)');
const INJURY = aon('rulesName', 'Name=Injury%20and%20Death&Category=Combat', 'Core Rulebook pg. 189-191');
const CASTING = aon('rulesName', 'Name=Casting%20Spells&Category=Magic', 'Core Rulebook pg. 206');

/** Glosario de términos de reglas usados en la UI (para <Term k="...">). */
export const glossary: Glossary[] = [
  { id: 'accion-estandar', name: 'Acción estándar', tip: 'Una por asalto: lanzar un conjuro, canalizar, atacar. Amazing Initiative da una extra (no conjuro).', aon: COMBAT },
  { id: 'accion-movimiento', name: 'Acción de movimiento', tip: 'Moverse, sacar un objeto del haversack, o Quick Channel (2 usos).', aon: COMBAT },
  { id: 'accion-rapida', name: 'Acción rápida', tip: 'Una por asalto, en tu turno. Aura of Heroism al activarla. Usar una inmediata fuera de tu turno la consume.', aon: COMBAT },
  { id: 'accion-inmediata', name: 'Acción inmediata', tip: 'Se hace fuera de tu turno (Divine Interference, Reactive Healing, Surge, Liberating Command). Gasta la rápida de tu próximo turno.', aon: COMBAT },
  { id: 'accion-gratuita', name: 'Acción gratuita', tip: 'No consume acción (Relentless Healing, activar Amazing Initiative).', aon: COMBAT },
  { id: 'ado', name: 'Ataque de oportunidad (AdO)', tip: 'Lanzar un conjuro, leer un pergamino o usar Rebuke Death amenazada provoca. Canalizar, usar una varita y el paso de 5 pies no.', aon: COMBAT },
  { id: 'lanzar-defensiva', name: 'Lanzar a la defensiva', tip: 'Concentración DC 15 + 2 × nivel del conjuro para no provocar: con +19, Heal (DC 27) sale con 8+ (65 %); 4.º (DC 23) con 4+ (85 %).', aon: CASTING },
  { id: 'cl', name: 'Nivel de lanzador (CL)', tip: '11 (13 con Inspired Spell). Define duración, alcance, dados de daño y pruebas de CL (1d20+11).', aon: CASTING },
  { id: 'dc', name: 'DC de salvación', tip: '10 + nivel del conjuro + Wis 8: 18 (0.º) a 24 (6.º). Channel: 17 (19 vs no muertos).', aon: CASTING },
  { id: 'close', name: 'Alcance corto (close)', tip: '25 + 5 × (CL/2) = 50 pies a CL 11 (55 con Inspired Spell).', aon: CASTING },
  { id: 'medium', name: 'Alcance medio (medium)', tip: '100 + 10 × CL = 210 pies.', aon: CASTING },
  { id: 'long', name: 'Alcance largo (long)', tip: '400 + 40 × CL = 840 pies.', aon: CASTING },
  { id: 'toque', name: 'Toque', tip: "Con Faith's Reach, todo conjuro divino de toque llega a 30 pies. Sobre aliados dispuestos no hay tirada (DM).", aon: aon('pathAbilities', 'Hierophant', 'Mythic Adventures pg. 34') },
  { id: 'moral', name: 'Bono moral', tip: 'Aura of Heroism (+2), Heroism, Bless, Heroes\' Feast, Death Ward (vs muerte), Remove Fear (vs miedo). Los del mismo tipo no se acumulan: se queda el mayor.', aon: BONUS },
  { id: 'suerte', name: 'Bono de suerte', tip: 'Prayer (+1), Hero Point Bonus (+8/+4). Se acumula con moral y esquiva.', aon: BONUS },
  { id: 'desvio', name: 'Bono de desvío', tip: 'Ring of Protection +1, Shield of Faith +3, Protection from Evil +2 (vs malvados). No se acumulan entre sí.', aon: BONUS },
  { id: 'esquiva', name: 'Bono de esquiva', tip: 'Blessing of Fervor (+2 CA y Reflejos). Los de esquiva sí se acumulan y se pierden al quedar desprevenida.', aon: BONUS },
  { id: 'resistencia', name: 'Bono de resistencia', tip: 'Cloak of Resistance +4; Protection from Evil +2 vs malvados (no se acumulan).', aon: BONUS },
  { id: 'mejora', name: 'Bono de mejora', tip: 'Magic Vestment +2 reemplaza el +1 de la armadura/escudo (no se suman). Diadema, cinturón y brazales son de mejora a características.', aon: BONUS },
  { id: 'moribundo', name: 'Moribundo / estable', tip: 'Bajo 0 pg estás inconsciente. Hard to Kill te estabiliza sola; morís a −36. Heal + Relentless Healing te trae desde cualquier valor.', aon: INJURY },
  { id: 'umbral', name: 'Umbral de muerte', tip: 'Con 18 → −18 normal; con Hard to Kill, −2 × Con = −36. Breath of Life solo revive si deja al muerto por encima del umbral.', aon: INJURY },
  { id: 'helpless', name: 'Indefenso (helpless)', tip: 'A ≤ 0 pg un aliado es indefenso: lo pueden rematar (coup de grace). Subirlo a 1+ lo saca de ese estado.', aon: aon('rulesName', 'Name=Helpless%20Defenders&Category=Combat%20Modifiers', 'Core Rulebook pg. 197') },
  { id: 'niveles-negativos', name: 'Niveles negativos', tip: 'Heal NO los quita. Restoration (100 po) quita los temporales; contra uno permanente, 1.000 po y una vez por semana.', aon: aon('spell', 'Restoration', 'Core Rulebook pg. 334') },
  { id: 'spontaneous', name: 'Cure espontáneo', tip: 'Cualquier ranura que no sea de dominio se convierte al lanzar en un cure del mismo nivel o menor (×1,5 por Healer\'s Blessing).', aon: aon('class', 'Cleric', 'Core Rulebook pg. 40') },
  { id: 'ranura-dominio', name: 'Ranura de dominio [D]', tip: 'Una por nivel 1-6, solo para conjuros de Healing o Heroism. Nunca se convierte en cure.', aon: aon('class', 'Cleric', 'Core Rulebook pg. 40') },
  { id: 'poder-mitico', name: 'Poder mítico', tip: '9 usos/día. Surge, Inspired Spell, conjuros míticos, Amazing Initiative, Relentless Healing, Recuperation, recarga de Mythic Domain.', aon: aon('rulesId', '1618', 'Mythic Adventures pg. 12') },
  { id: 'hero-point', name: 'Hero Point', tip: 'Act Out of Turn · Bonus +8/+4 · Extra Action (puede ser un conjuro) · Recall · Reroll · Inspiration · Special · Cheat Death (2). Máximo 1 por asalto (Cheat Death exento).', aon: aon('rulesId', '447', "Advanced Player's Guide pg. 323") },
  { id: 'discord', name: 'Comando de Discord', tip: 'El bot solo entiende /roll dice:NdM. El reroll de los 1 (Envoy of Healing), el ×1,5 (Healer\'s Blessing) y el +1 (Blessed Touch) se aplican a mano.' },
];

export const glossaryById = Object.fromEntries(glossary.map((g) => [g.id, g])) as Record<string, Glossary>;
