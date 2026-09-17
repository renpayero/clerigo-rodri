/**
 * Guía táctica por asalto (ficha §11): a partir del estado de la mesa y unas pocas respuestas,
 * recomienda qué hacer con cada tipo de acción, con números y disponibilidad real.
 * Funciones puras: sin DB ni Astro.
 */
import type { ResourceMap } from './resources';
import { healAmount, channelAverage, healMath, rebukeDeath } from './healing';
import { spellById } from '@/data/spells/catalog';

export type TacticsSlot = { id: number; level: number; isDomain: boolean; spellId: string | null; status: string; disabled: boolean };
export type TacticsAlly = { id: number; name: string; hpCurrent: number | null; maxHp: number | null; downState: 'ok' | 'zero' | 'dead' | 'dead_death_effect'; diedRound: number | null; frontLine: boolean };
export type TacticsSnap = {
  resources: ResourceMap;
  slots: TacticsSlot[];
  activeBuffKeys: string[];
  auraActive: boolean;
  combatActive: boolean;
  round: number;
  allies: TacticsAlly[];
  ownHp: number;
  ownMaxHp: number;
};

export type Condition = 'none' | 'paralizado' | 'cegado' | 'aterrado' | 'agarrado' | 'dominado' | 'envenenado' | 'nivel_negativo' | 'fatigado' | 'enfermo' | 'maldito';

export type TacticsInput = {
  /** Aliados bajo el 40 % (ids o nombres libres). */
  lowAllies: number[];
  /** Aliado a 0 o menos (vivo). */
  downAllies: number[];
  /** Muertos este asalto o el anterior. */
  deadRecent: number[];
  /** Muertos hace 2 asaltos o por efecto de muerte. */
  deadLate: number[];
  condition: Condition;
  bigFight: boolean;
  threatened: boolean;
  arcaneHaste: boolean;
  bossHitsHard: boolean;
};

export type ActionSlot = 'swift' | 'standard' | 'move' | 'immediate' | 'free';

export type Recommendation = {
  action: ActionSlot;
  title: string;
  detail: string;
  numbers?: string;
  cost?: string;
  available: boolean;
  reason?: string;
  /** Qué ejecutar desde la UI (la isla lo traduce a una action). */
  exec?: { kind: 'aura_on' } | { kind: 'channel'; mode: 'standard' | 'quick' } | { kind: 'cast'; slotId: number } | { kind: 'inspired'; spellId: string; mythic?: boolean } | { kind: 'relentless'; allyId: number; heal: number } | { kind: 'rebuke' } | { kind: 'go'; href: string };
  priority: number;
};

export type Plan = { recommendations: Recommendation[]; warnings: string[]; summary: string };

const cur = (r: ResourceMap, k: string) => r[k]?.current ?? 0;

function preparedSlot(snap: TacticsSnap, spellId: string, opts: { domainOk?: boolean } = {}): TacticsSlot | undefined {
  return snap.slots.find((s) => s.spellId === spellId && s.status === 'prepared' && !s.disabled && (opts.domainOk !== false || !s.isDomain));
}
function freeConvertible(snap: TacticsSnap, level: number): TacticsSlot | undefined {
  // Cualquier ranura no de dominio de nivel ≥ level, preferentemente libre.
  const c = snap.slots.filter((s) => !s.isDomain && !s.disabled && s.level >= level && (s.status === 'free' || s.status === 'prepared'));
  return c.find((s) => s.status === 'free') ?? c.sort((a, b) => a.level - b.level)[0];
}

/** Cadena de curación de un objetivo, en orden de preferencia, con disponibilidad. */
export function healFallbackChain(snap: TacticsSnap, o: { mythic?: boolean } = {}): Recommendation[] {
  const pm = cur(snap.resources, 'mythic_power');
  const out: Recommendation[] = [];
  const heal = preparedSlot(snap, 'heal');
  const ccw = freeConvertible(snap, 4);
  const ccwMath = healMath(spellById['cure-critical-wounds']!.heal!);
  if (o.mythic) {
    out.push({ action: 'standard', title: 'Mythic Heal', detail: 'Heal en versión mítica: 15 pg por nivel.', numbers: `${healAmount(11, true)} pg`, cost: '1 ranura 6.º + 1 PM', available: !!heal && pm >= 1, reason: !heal ? 'Sin Heal preparado' : pm < 1 ? 'Sin poder mítico' : undefined, exec: heal ? { kind: 'cast', slotId: heal.id } : undefined, priority: 100 });
  }
  out.push({ action: 'standard', title: 'Heal', detail: 'A 30 pies (Faith\'s Reach); quita además ceguera, enfermedad, veneno, aturdimiento, etc.', numbers: `${healAmount(11)} pg`, cost: '1 ranura 6.º', available: !!heal, reason: heal ? undefined : 'Sin Heal preparado', exec: heal ? { kind: 'cast', slotId: heal.id } : undefined, priority: 90 });
  out.push({ action: 'standard', title: 'Inspired Spell: Heal', detail: 'Sin ranura, CL 13.', numbers: `${healAmount(13)} pg`, cost: '1 PM', available: pm >= 1, reason: pm < 1 ? 'Sin poder mítico' : undefined, exec: { kind: 'inspired', spellId: 'heal' }, priority: 80 });
  out.push({ action: 'standard', title: 'Cure Critical Wounds espontáneo', detail: 'Desde cualquier ranura de 4.º o más que no sea de dominio.', numbers: `${ccwMath.formula} ≈ ${ccwMath.avg}`, cost: '1 ranura ≥ 4.º', available: !!ccw, reason: ccw ? undefined : 'Sin ranuras de 4.º+', exec: { kind: 'go', href: '/conjuros' }, priority: 70 });
  out.push({ action: 'standard', title: 'Scroll of Heal', detail: 'Leer el pergamino provoca; CL 11.', numbers: '110 pg', cost: '1 pergamino', available: cur(snap.resources, 'scroll_heal') >= 1, reason: cur(snap.resources, 'scroll_heal') < 1 ? 'Sin pergamino' : undefined, exec: { kind: 'go', href: '/equipo#consumibles' }, priority: 60 });
  const rd = rebukeDeath(true);
  out.push({ action: 'standard', title: 'Rebuke Death', detail: 'Solo a una criatura bajo 0 pg; toque a 5 pies, provoca.', numbers: `${rd.n}d${rd.sides}+${rd.bonus}`, cost: '1 uso', available: cur(snap.resources, 'rebuke_death') >= 1, reason: cur(snap.resources, 'rebuke_death') < 1 ? 'Sin usos' : undefined, exec: { kind: 'rebuke' }, priority: 50 });
  return out;
}

const CONDITION_FIX: Record<Exclude<Condition, 'none'>, { spellId: string; note: string; action?: ActionSlot }> = {
  paralizado: { spellId: 'remove-paralysis', note: 'Hasta 4 criaturas a 50 pies. Un paralizado es helpless: coup de grace, prioridad alta.' },
  cegado: { spellId: 'remove-blindness-deafness', note: 'Heal también lo cura.' },
  aterrado: { spellId: 'remove-fear', note: '3 criaturas, suprime el miedo activo. Heal NO cura miedo.' },
  agarrado: { spellId: 'liberating-command', note: 'Inmediata: Escape Artist con +20. Freedom of Movement como estándar si va a seguir agarrando.', action: 'immediate' },
  dominado: { spellId: 'protection-from-evil', note: 'Nueva salvación y bloquea el control. Ataque de toque a distancia a 30 pies.' },
  envenenado: { spellId: 'heal', note: 'Heal quita el veneno; Neutralize Poison (pergamino) si no hay 6.º.' },
  nivel_negativo: { spellId: 'restoration', note: 'Restoration (3 asaltos, 100 po de polvo) quita niveles negativos temporales; Heal NO.' },
  fatigado: { spellId: 'restoration-lesser', note: 'Wand of Lesser Restoration como acción estándar (DM) o Cleanse sobre vos.' },
  enfermo: { spellId: 'heal', note: 'Heal o Remove Disease (Inspired Spell).' },
  maldito: { spellId: 'remove-curse', note: 'Prueba de CL: Inspired Spell a CL 13 o Scroll of Remove Curse.' },
};

export function recommend(input: TacticsInput, snap: TacticsSnap): Plan {
  const r = snap.resources;
  const pm = cur(r, 'mythic_power');
  const recs: Recommendation[] = [];
  const warnings: string[] = [];
  const allyName = (id: number) => snap.allies.find((a) => a.id === id)?.name ?? `#${id}`;

  // ---- Rápida: aura
  if (!snap.auraActive) {
    const rounds = cur(r, 'aura_rounds');
    const swiftFree = cur(r, 'swift_action') >= 1 || !snap.combatActive;
    recs.push({ action: 'swift', title: 'Aura of Heroism ON', detail: '+2 moral a ataques, salvaciones y habilidades para los aliados a 30 pies. Se activa una vez y gasta 1 asalto por asalto.', numbers: `${rounds} asaltos en reserva`, cost: 'rápida', available: rounds >= 1 && swiftFree, reason: rounds < 1 ? 'Sin asaltos de aura (Mythic Domain o descanso)' : !swiftFree ? 'Rápida ya usada' : undefined, exec: { kind: 'aura_on' }, priority: 100 });
  } else {
    recs.push({ action: 'swift', title: 'Aura activa', detail: `Quedan ${cur(r, 'aura_rounds')} asaltos. La rápida queda libre.`, available: true, priority: 10 });
  }

  // ---- Estándar: prioridad muerto reciente > muerto tardío > a 0 > bajo 40 % > condición > buff
  let standardDone = false;
  if (input.deadRecent.length) {
    standardDone = true;
    const id = input.deadRecent[0]!;
    const a = snap.allies.find((x) => x.id === id);
    const heal = preparedSlot(snap, 'heal');
    const revives = a?.hpCurrent !== null && a?.hpCurrent !== undefined ? a.hpCurrent + healAmount(11) > 0 : true;
    recs.push({ action: 'standard', title: `Heal + Relentless Healing sobre ${allyName(id)}`, detail: `La cura revive si supera sus pg negativos${a?.hpCurrent !== null && a?.hpCurrent !== undefined ? ` (está a ${a.hpCurrent}: ${revives ? 'revive' : 'NO alcanza, usá Mythic Heal 165 o Inspired 130'})` : ''}. Relentless es gratuita.`, numbers: `${healAmount(11)} pg`, cost: '1 ranura 6.º + 1 PM', available: !!heal && pm >= 1, reason: !heal ? 'Sin Heal preparado' : pm < 1 ? 'Sin poder mítico' : undefined, exec: heal ? { kind: 'cast', slotId: heal.id } : undefined, priority: 100 });
    recs.push({ action: 'free', title: `Relentless Healing (${allyName(id)})`, detail: 'Después de curar: marcá el revive acá (gasta 1 PM).', cost: '1 PM', available: pm >= 1, reason: pm < 1 ? 'Sin poder mítico' : undefined, exec: { kind: 'relentless', allyId: id, heal: healAmount(11) }, priority: 100 });
    const bol = preparedSlot(snap, 'breath-of-life');
    recs.push({ action: 'standard', title: 'Breath of Life (ranura de dominio de 5.º)', detail: 'Alternativa si no hay Heal: revive si murió hace ≤ 1 asalto y queda por encima de −Con.', numbers: '5d8+11 +1 ≈ 34,5', cost: '1 ranura 5.º [D]', available: !!bol, reason: bol ? undefined : 'Sin Breath of Life preparado', exec: bol ? { kind: 'cast', slotId: bol.id } : undefined, priority: 85 });
    recs.push(...healFallbackChain(snap).filter((x) => x.title !== 'Heal').map((x) => ({ ...x, title: `${x.title} + Relentless`, priority: x.priority - 20 })));
  } else if (input.deadLate.length) {
    standardDone = true;
    const bol = preparedSlot(snap, 'breath-of-life');
    recs.push({ action: 'standard', title: `Mythic Breath of Life sobre ${allyName(input.deadLate[0]!)}`, detail: 'Revive a quien murió hace ≤ 2 asaltos, incluso por efecto de muerte (repite la salvación; vuelve a −10 + lo curado).', numbers: '5d12+11 +1 ≈ 44,5', cost: '1 ranura 5.º [D] + 1 PM', available: !!bol && pm >= 1, reason: !bol ? 'Sin Breath of Life preparado' : pm < 1 ? 'Sin poder mítico' : undefined, exec: bol ? { kind: 'cast', slotId: bol.id } : undefined, priority: 100 });
    warnings.push('Si murió hace más de 2 asaltos o el cuerpo está destruido: solo Resurrection (7.º, PNJ de la metrópolis ≈ 10.910 po). Gentle Repose para que no cuenten los días.');
  } else if (input.downAllies.length) {
    standardDone = true;
    const id = input.downAllies[0]!;
    if (input.threatened) warnings.push('Estás amenazada: el channel no provoca; lanzar a 30 pies a la defensiva (Heal 65 %, CCW 85 %) o paso de 5 pies.');
    recs.push(...healFallbackChain(snap).map((x) => ({ ...x, detail: `${allyName(id)} a 0 o menos: subirlo a 1+ para que deje de estar helpless (coup de grace). ${x.detail}` })));
    if (input.threatened) recs.push({ action: 'standard', title: 'Channel estándar (no provoca)', detail: 'Si no podés arriesgar la concentración: 8d6 a todos los aliados a 30 pies.', numbers: `≈ ${channelAverage()} pg`, cost: '1 uso', available: cur(r, 'channel') >= 1, reason: cur(r, 'channel') < 1 ? 'Sin usos de channel' : undefined, exec: { kind: 'channel', mode: 'standard' }, priority: 75 });
  } else if (input.lowAllies.length) {
    standardDone = true;
    const names = input.lowAllies.map(allyName).join(', ');
    const chain = healFallbackChain(snap, { mythic: input.bossHitsHard });
    recs.push(...chain.map((x) => ({ ...x, detail: `${names} bajo el 40 %. ${x.detail}` })));
    if (input.lowAllies.length >= 2) {
      const hp = cur(r, 'hero_points') + cur(r, 'hero_point_temp');
      recs.push({ action: 'standard', title: 'Hero Point: Extra Action (segundo Heal)', detail: 'Dos críticos a la vez: una estándar extra para un segundo Heal.', cost: '1 Hero Point + 2.ª ranura 6.º', available: hp >= 1 && snap.slots.filter((s) => s.spellId === 'heal' && s.status === 'prepared').length >= 2, reason: hp < 1 ? 'Sin Hero Points' : 'Hace falta un segundo Heal preparado', exec: { kind: 'go', href: '/' }, priority: 65 });
      recs.push({ action: 'standard', title: 'Amazing Initiative: channel extra', detail: 'Estándar extra (no conjuro): otro channel a todos.', numbers: `≈ ${channelAverage()} pg a cada uno`, cost: '1 PM + 1 uso', available: pm >= 1 && cur(r, 'channel') >= 1 && cur(r, 'amazing_initiative') >= 1, reason: pm < 1 ? 'Sin poder mítico' : cur(r, 'channel') < 1 ? 'Sin channel' : cur(r, 'amazing_initiative') < 1 ? 'Ya usada este asalto' : undefined, exec: { kind: 'go', href: '/' }, priority: 64 });
    }
  }

  // ---- Condición sobre un DPS
  if (input.condition !== 'none') {
    const fix = CONDITION_FIX[input.condition];
    const sp = spellById[fix.spellId];
    const slot = sp ? preparedSlot(snap, sp.id) : undefined;
    const canInspire = sp && sp.level <= 6 && !['3_rounds', '1_minute', 'full', 'special'].includes(sp.castingTime);
    recs.push({ action: fix.action ?? 'standard', title: `${sp?.name ?? fix.spellId} (condición: ${input.condition.replace('_', ' ')})`, detail: fix.note, cost: slot ? `1 ranura ${slot.level}.º` : canInspire ? '1 PM (Inspired Spell)' : 'consumible', available: !!slot || (!!canInspire && pm >= 1) || (sp?.id === 'restoration-lesser' && cur(r, 'wand_lesser_restoration') >= 1), reason: !slot ? (canInspire ? (pm >= 1 ? 'No preparado: vía Inspired Spell' : 'No preparado y sin poder mítico') : 'No preparado: pergamino/varita') : undefined, exec: slot ? { kind: 'cast', slotId: slot.id } : canInspire && sp ? { kind: 'inspired', spellId: sp.id } : { kind: 'go', href: '/equipo#consumibles' }, priority: standardDone ? 60 : 95 });
    if (!standardDone) standardDone = true;
  }

  // ---- Nadie que curar: buff o control
  if (!standardDone) {
    const fervorOn = snap.activeBuffKeys.includes('blessing-of-fervor');
    const prayerOn = snap.activeBuffKeys.includes('prayer');
    const fervor = preparedSlot(snap, 'blessing-of-fervor');
    const prayer = preparedSlot(snap, 'prayer');
    if (!fervorOn && !input.arcaneHaste) {
      recs.push({ action: 'standard', title: input.bigFight ? 'Mythic Blessing of Fervor' : 'Blessing of Fervor', detail: 'La firma del buffer: 11 aliados, 11 asaltos, cada uno elige un beneficio por asalto (dos con la versión mítica). No se acumula con haste.', cost: input.bigFight ? '1 ranura 4.º + 1 PM' : '1 ranura 4.º', available: !!fervor && (!input.bigFight || pm >= 1), reason: !fervor ? 'Sin Blessing of Fervor preparado' : pm < 1 && input.bigFight ? 'Sin poder mítico: lanzalo normal' : undefined, exec: fervor ? { kind: 'cast', slotId: fervor.id } : undefined, priority: 90 });
    }
    if (!prayerOn) {
      recs.push({ action: 'standard', title: 'Prayer', detail: `${input.arcaneHaste ? 'Hay haste arcano: Fervor no se acumula, Prayer sí. ' : ''}+1 suerte a ataques, daño, salvaciones y habilidades; −1 a los enemigos. 40 pies, 11 asaltos.`, cost: '1 ranura 3.º', available: !!prayer, reason: prayer ? undefined : 'Sin Prayer preparado', exec: prayer ? { kind: 'cast', slotId: prayer.id } : undefined, priority: input.arcaneHaste ? 90 : 80 });
    }
    const pfe = preparedSlot(snap, 'protection-from-evil-communal');
    recs.push({ action: 'standard', title: 'Communal Protection from Evil', detail: 'Antes del jefe encantador o contra ajenos malvados: +2 desvío/resistencia y bloqueo de control mental.', cost: '1 ranura 2.º', available: !!pfe, reason: pfe ? undefined : 'No preparado', exec: pfe ? { kind: 'cast', slotId: pfe.id } : undefined, priority: 70 });
    const silence = preparedSlot(snap, 'silence');
    recs.push({ action: 'standard', title: 'Control: Silence sobre un punto', detail: 'Sobre el PUNTO donde está el lanzador enemigo no hay salvación (el área no lo sigue). Blade Barrier (11d6, Ref 24) y Greater Command (Will 23) son las otras opciones.', cost: '1 ranura 2.º', available: !!silence, reason: silence ? undefined : 'No preparado', exec: silence ? { kind: 'cast', slotId: silence.id } : undefined, priority: 60 });
    recs.push({ action: 'standard', title: 'Guardá el poder mítico', detail: 'Sin nadie herido, Amazing Initiative sobra: no gastes PM. Guidance, Spiritual Ally o Dispel Magic no cuestan nada valioso.', available: true, priority: 30 });
  }

  // ---- Movimiento
  const anyHurt = snap.allies.some((a) => a.maxHp && a.hpCurrent !== null && a.hpCurrent < a.maxHp) || input.lowAllies.length > 0 || input.downAllies.length > 0;
  if (anyHurt) {
    recs.push({ action: 'move', title: 'Quick Channel', detail: 'La curación de área va en el movimiento: 8d6 (reroll de 1) +1 a cada aliado a 30 pies; excluís 2 enemigos que veas.', numbers: `≈ ${channelAverage()} pg a cada uno`, cost: '2 usos', available: cur(r, 'channel') >= 2, reason: cur(r, 'channel') < 2 ? `Quedan ${cur(r, 'channel')} usos (hacen falta 2)` : undefined, exec: { kind: 'channel', mode: 'quick' }, priority: 90 });
  }
  recs.push({ action: 'move', title: 'Posicionarte', detail: 'Fila detrás de los tanques, adyacente a 1-2 aliados (Abundant Healing) y con los 4 cuerpo a cuerpo a 30 pies.', available: true, priority: 40 });

  // ---- Inmediata (reserva)
  const imm = cur(r, 'immediate_action') >= 1 || !snap.combatActive;
  if (!imm) warnings.push('Ya usaste la inmediata este asalto: sin Divine Interference, Reactive Healing ni Surge hasta tu próximo turno.');
  const anyPrepared = snap.slots.some((s) => s.status === 'prepared' && s.level >= 1 && s.spellId);
  recs.push({ action: 'immediate', title: 'Divine Interference', detail: 'Un enemigo repite un ataque que acertó a un aliado, con −nivel del conjuro sacrificado. 1 vez por criatura y día.', cost: '1 ranura preparada', available: imm && anyPrepared, reason: !imm ? 'Inmediata usada' : 'Sin conjuros preparados', exec: { kind: 'go', href: '/' }, priority: 80 });
  recs.push({ action: 'immediate', title: 'Reactive Healing', detail: 'Si un golpe te dejaría a 0 o menos: 8d6 +1 a vos antes del daño.', numbers: `≈ ${channelAverage()} pg · estás a ${snap.ownHp}/${snap.ownMaxHp}`, cost: '1 uso de channel', available: imm && cur(r, 'channel') >= 1, reason: !imm ? 'Inmediata usada' : cur(r, 'channel') < 1 ? 'Sin channel' : undefined, exec: { kind: 'go', href: '/' }, priority: 70 });
  recs.push({ action: 'immediate', title: 'Surge', detail: '+1d6 a una tirada de d20 propia (salvación letal, concentración) después de ver el resultado.', cost: '1 PM', available: imm && pm >= 1, reason: !imm ? 'Inmediata usada' : pm < 1 ? 'Sin poder mítico' : undefined, exec: { kind: 'go', href: '/' }, priority: 60 });

  // ---- Avisos de presupuesto
  if (pm <= 2) warnings.push(`Poder mítico bajo (${pm}): reservá 1 para Relentless Healing o Surge en una salvación letal.`);
  if (cur(r, 'channel') <= 1) warnings.push(`Channel casi agotado (${cur(r, 'channel')}): sin Quick Channel; la curación de área pasa a Mass CLW (5.º) o a la varita fuera de combate.`);
  const heals = snap.slots.filter((s) => s.spellId === 'heal' && s.status === 'prepared').length;
  if (heals === 0) warnings.push('Sin Heal preparado: la cadena es Inspired Heal (1 PM) → CCW espontáneo → Scroll of Heal.');
  if (snap.ownHp <= Math.floor(snap.ownMaxHp * 0.4)) warnings.push(`Vos estás bajo el 40 % (${snap.ownHp}/${snap.ownMaxHp}): Reactive Healing en reserva y alejate del frente.`);

  const sorted = recs.sort((a, b) => order(a.action) - order(b.action) || b.priority - a.priority);
  const top = sorted.find((x) => x.action === 'standard');
  return { recommendations: sorted, warnings, summary: top ? `Estándar: ${top.title}${top.available ? '' : ' (no disponible → siguiente opción)'}` : 'Sin recomendación' };
}

function order(a: ActionSlot): number {
  return { swift: 0, standard: 1, move: 2, immediate: 3, free: 4 }[a];
}

/** Respuestas automáticas a partir del estado (el jugador puede corregirlas). */
export function autoInput(snap: TacticsSnap): TacticsInput {
  const low: number[] = [];
  const down: number[] = [];
  const deadRecent: number[] = [];
  const deadLate: number[] = [];
  for (const a of snap.allies) {
    if (a.downState === 'dead_death_effect') deadLate.push(a.id);
    else if (a.downState === 'dead') {
      if (a.diedRound !== null && snap.round - a.diedRound > 1) deadLate.push(a.id);
      else deadRecent.push(a.id);
    } else if (a.downState === 'zero' || (a.hpCurrent !== null && a.hpCurrent <= 0)) down.push(a.id);
    else if (a.maxHp && a.hpCurrent !== null && a.hpCurrent < a.maxHp * 0.4) low.push(a.id);
  }
  return { lowAllies: low, downAllies: down, deadRecent, deadLate, condition: 'none', bigFight: false, threatened: false, arcaneHaste: false, bossHitsHard: false };
}
