import type { Spell, Preset } from '@/data/types';
import type { HealSpec } from '@/data/types';
import { spellById } from '@/data/spells/catalog';
import { domains } from '@/data/domains';
import { slotLayout } from './spellsPerDay';
import { healMath, healAmount } from './healing';
import type { DiceSpec } from './dice';

export type SlotLike = { id: number; level: number; idx: number; isDomain: boolean; spellId: string | null; status: 'prepared' | 'spent' | 'converted' | 'free' | 'sacrificed'; disabled: boolean };

export type RuleResult = { ok: true } | { ok: false; reason: string };

/** Cures espontáneos por nivel de ranura (un cleric bueno convierte en cure del mismo nivel o menor). */
export const CURES_BY_LEVEL: Record<number, string> = {
  1: 'cure-light-wounds',
  2: 'cure-moderate-wounds',
  3: 'cure-serious-wounds',
  4: 'cure-critical-wounds',
  5: 'cure-light-wounds-mass',
  6: 'cure-moderate-wounds-mass',
};

/** ¿Se puede lanzar el conjuro preparado en esta ranura? */
export function canCast(slot: SlotLike): RuleResult {
  if (slot.disabled) return { ok: false, reason: 'Ranura deshabilitada (diadema < 24 h).' };
  if (slot.status !== 'prepared' || !slot.spellId) return { ok: false, reason: 'La ranura no tiene un conjuro preparado.' };
  return { ok: true };
}

/** ¿Se puede convertir la ranura en un cure de nivel cureLevel? */
export function canConvert(slot: SlotLike, cureLevel: number): RuleResult {
  if (slot.disabled) return { ok: false, reason: 'Ranura deshabilitada (diadema < 24 h).' };
  if (slot.isDomain) return { ok: false, reason: 'La ranura de dominio no se convierte en cure.' };
  if (slot.level < 1) return { ok: false, reason: 'Los orisons no se convierten.' };
  if (slot.status !== 'prepared' && slot.status !== 'free') return { ok: false, reason: 'La ranura ya está gastada.' };
  if (cureLevel < 1 || cureLevel > slot.level) return { ok: false, reason: `Desde una ranura de ${slot.level}.º solo salen cures de nivel ≤ ${slot.level}.` };
  if (!CURES_BY_LEVEL[cureLevel]) return { ok: false, reason: 'No hay cure de ese nivel.' };
  return { ok: true };
}

/** Cures disponibles desde una ranura (de mayor a menor nivel). */
export function cureOptionsFor(slotLevel: number): { level: number; spell: Spell; avg: number; formula: string }[] {
  const out: { level: number; spell: Spell; avg: number; formula: string }[] = [];
  for (let l = Math.min(6, slotLevel); l >= 1; l--) {
    const sp = spellById[CURES_BY_LEVEL[l]!];
    if (!sp?.heal) continue;
    const m = healMath(sp.heal);
    out.push({ level: l, spell: sp, avg: m.avg, formula: m.formula });
  }
  return out;
}

/** Dados a tirar para un conjuro de curación (o null si es fijo / no cura). */
export function healDice(spec: HealSpec, cl = 11): DiceSpec | null {
  if (!spec.dice) return null;
  const bonus = spec.perLevel ? Math.min(cl, spec.perLevel.max) : 0;
  return { n: spec.dice.n, sides: spec.dice.sides, bonus };
}

export type CastPlan = {
  spell: Spell;
  cl: number;
  mythic: boolean;
  /** Tirada a hacer (null si la curación es fija o no cura). */
  dice: DiceSpec | null;
  /** Opciones de tirada: cures ×1,5 +1; Blessed Touch +1 también en BoL (cura). */
  empower: boolean;
  flatAfter: number;
  /** Curación fija (Heal). */
  fixed: number | null;
  /** Descripción corta para el log. */
  label: string;
};

/** Qué tirar y cómo, según el conjuro y si es mítico / Inspired (CL 13). */
export function castPlan(spell: Spell, o: { cl?: number; mythic?: boolean; augmented?: boolean } = {}): CastPlan {
  const cl = o.cl ?? 11;
  const mythic = !!o.mythic;
  const heal = mythic && spell.mythic?.heal ? spell.mythic.heal : spell.heal;
  let dice: DiceSpec | null = null;
  let fixed: number | null = null;
  let empower = false;
  let flatAfter = 0;
  if (heal) {
    if (heal.kind === 'heal') fixed = healAmount(cl, mythic);
    else {
      dice = healDice(heal, cl);
      empower = heal.kind === 'cure';
      flatAfter = heal.kind === 'cure' || heal.kind === 'breath_of_life' ? 1 : 0;
    }
  }
  const parts = [mythic ? 'mítico' : '', o.augmented ? 'augmented' : '', cl !== 11 ? `CL ${cl}` : ''].filter(Boolean);
  return { spell, cl, mythic, dice, empower, flatAfter, fixed, label: `${spell.name}${parts.length ? ` (${parts.join(', ')})` : ''}` };
}

/** Aplica un preset sobre el layout: devuelve spellId por (level, idx). Respeta la diadema (< 24 h deshabilita la última ranura de 3.º y 4.º). */
export function applyPreset(preset: Preset, headbandNew24h = false): { level: number; idx: number; isDomain: boolean; spellId: string | null; disabled: boolean }[] {
  const layout = slotLayout(27);
  const smaller = new Set(slotLayout(23).map((s) => `${s.level}:${s.idx}`));
  return layout.map((l) => {
    const p = preset.slots.find((s) => s.level === l.level && s.idx === l.idx);
    const disabled = headbandNew24h && !smaller.has(`${l.level}:${l.idx}`);
    return { ...l, spellId: p?.spellId ?? null, disabled };
  });
}

/** Conjuros de dominio (Healing + Glory/Heroism) de un nivel: lo único que admite la ranura [D]. */
export function domainSpellsAt(level: number): { spellId: string; name: string; domain: string }[] {
  return domains.flatMap((d) => d.domainSpells.filter((sp) => sp.level === level).map((sp) => ({ spellId: sp.spellId, name: sp.name, domain: d.name })));
}
export const domainSpellIds = (level: number) => domainSpellsAt(level).map((d) => d.spellId);

/** Chequeos para preparar un conjuro en una ranura. */
export function canPrepare(slot: SlotLike, spell: Spell | null): RuleResult {
  if (slot.disabled) return { ok: false, reason: 'Ranura deshabilitada (diadema < 24 h).' };
  if (!spell) return { ok: true };
  if (spell.level !== slot.level) return { ok: false, reason: `${spell.name} es de nivel ${spell.level}; la ranura es de ${slot.level}.º.` };
  if (spell.domainOnly && !slot.isDomain) return { ok: false, reason: `${spell.name} solo se prepara en la ranura de dominio.` };
  if (slot.isDomain && !domainSpellIds(slot.level).includes(spell.id)) return { ok: false, reason: `La ranura de dominio de ${slot.level}.º solo admite un conjuro de dominio: ${domainSpellsAt(slot.level).map((d) => d.name).join(' o ')}.` };
  if (spell.tags.includes('fuera-de-alcance')) return { ok: false, reason: `${spell.name} no está en la lista del clérigo.` };
  if (spell.tags.includes('no-permitido')) return { ok: false, reason: `${spell.name}: ${spell.notes ?? 'no lo puede lanzar un clérigo NG de Sarenrae.'}` };
  return { ok: true };
}

/** Inspired Spell: cualquier conjuro divino de nivel ≤ 6 con lanzamiento ≤ 1 estándar. */
export function canInspire(spell: Spell, mythicPower: number): RuleResult {
  if (mythicPower < 1) return { ok: false, reason: 'No queda poder mítico.' };
  if (spell.level > 6) return { ok: false, reason: 'Inspired Spell solo llega hasta 6.º.' };
  const long = ['full', '1_round', '3_rounds', '1_minute', 'special'];
  if (long.includes(spell.castingTime)) return { ok: false, reason: `${spell.name} tarda más de una acción estándar: no sirve con Inspired Spell.` };
  if (spell.tags.includes('fuera-de-alcance')) return { ok: false, reason: `${spell.name} no está en la lista del clérigo.` };
  if (spell.tags.includes('no-permitido')) return { ok: false, reason: `${spell.name}: ${spell.notes ?? 'no lo puede lanzar un clérigo NG de Sarenrae.'}` };
  return { ok: true };
}
