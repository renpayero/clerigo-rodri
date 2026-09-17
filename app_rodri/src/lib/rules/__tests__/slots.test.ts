import { describe, expect, it } from 'vitest';
import { canCast, canConvert, canPrepare, canInspire, castPlan, cureOptionsFor, applyPreset, type SlotLike } from '../slots';
import { spellById } from '@/data/spells/catalog';
import { presetById } from '@/data/spells/presets';

const slot = (o: Partial<SlotLike>): SlotLike => ({ id: 1, level: 4, idx: 1, isDomain: false, spellId: 'blessing-of-fervor', status: 'prepared', disabled: false, ...o });

describe('ranuras', () => {
  it('la ranura de dominio no se convierte; una normal sí, a cure ≤ nivel', () => {
    expect(canConvert(slot({ isDomain: true, idx: 0 }), 4).ok).toBe(false);
    expect(canConvert(slot({}), 4).ok).toBe(true);
    expect(canConvert(slot({}), 5).ok).toBe(false);
    expect(canConvert(slot({ status: 'spent' }), 2).ok).toBe(false);
    expect(canConvert(slot({ spellId: null, status: 'free' }), 3).ok).toBe(true);
  });
  it('cures disponibles desde 4.º: CCW, CSW, CMW, CLW con promedios', () => {
    const opts = cureOptionsFor(4);
    expect(opts.map((o) => o.level)).toEqual([4, 3, 2, 1]);
    expect(opts[0]!.avg).toBe(44.5);
    expect(opts[3]!.avg).toBe(15.25);
    expect(cureOptionsFor(6)[0]!.spell.id).toBe('cure-moderate-wounds-mass');
  });
  it('no se lanza una ranura gastada ni deshabilitada', () => {
    expect(canCast(slot({ status: 'spent' })).ok).toBe(false);
    expect(canCast(slot({ disabled: true })).ok).toBe(false);
    expect(canCast(slot({})).ok).toBe(true);
  });
  it('preparar respeta nivel y ranura de dominio (Heroism)', () => {
    expect(canPrepare(slot({ level: 3 }), spellById['heroism']!).ok).toBe(false);
    expect(canPrepare(slot({ level: 3, isDomain: true, idx: 0 }), spellById['heroism']!).ok).toBe(true);
    expect(canPrepare(slot({ level: 3 }), spellById['heal']!).ok).toBe(false);
    expect(canPrepare(slot({ level: 3 }), spellById['prayer']!).ok).toBe(true);
  });
});

describe('plan de lanzamiento', () => {
  it('Heal: 110 fijo; mítico 165; Inspired CL 13 → 130 / 195', () => {
    expect(castPlan(spellById['heal']!).fixed).toBe(110);
    expect(castPlan(spellById['heal']!, { mythic: true }).fixed).toBe(165);
    expect(castPlan(spellById['heal']!, { cl: 13 }).fixed).toBe(130);
    expect(castPlan(spellById['heal']!, { cl: 13, mythic: true }).fixed).toBe(195);
  });
  it('CCW tira 4d8+11 ×1,5 +1; Breath of Life 5d8+11 +1 sin ×1,5; mítico 5d12', () => {
    const ccw = castPlan(spellById['cure-critical-wounds']!);
    expect(ccw.dice).toEqual({ n: 4, sides: 8, bonus: 11 });
    expect(ccw.empower).toBe(true);
    expect(ccw.flatAfter).toBe(1);
    const bol = castPlan(spellById['breath-of-life']!);
    expect(bol.dice).toEqual({ n: 5, sides: 8, bonus: 11 });
    expect(bol.empower).toBe(false);
    expect(castPlan(spellById['breath-of-life']!, { mythic: true }).dice).toEqual({ n: 5, sides: 12, bonus: 11 });
  });
  it('Inspired Spell excluye conjuros largos y de 7.º', () => {
    expect(canInspire(spellById['heal']!, 1).ok).toBe(true);
    expect(canInspire(spellById['restoration-lesser']!, 1).ok).toBe(false);
    expect(canInspire(spellById['regenerate']!, 1).ok).toBe(false);
    expect(canInspire(spellById['heal']!, 0).ok).toBe(false);
  });
});

describe('presets', () => {
  it('combate llena 38 ranuras; la diadema < 24 h deshabilita la última de 3.º y 4.º', () => {
    const layout = applyPreset(presetById.combate);
    expect(layout).toHaveLength(38);
    expect(layout.filter((l) => l.disabled)).toHaveLength(0);
    expect(layout.find((l) => l.level === 6 && l.idx === 0)?.spellId).toBe('heal');
    const hb = applyPreset(presetById.combate, true);
    expect(hb.filter((l) => l.disabled).map((l) => `${l.level}:${l.idx}`)).toEqual(['3:6', '4:5']);
  });
  it('jefe cambia Lesser Restoration por Heroic Fortune', () => {
    const ids = applyPreset(presetById.jefe).map((l) => l.spellId);
    expect(ids).toContain('heroic-fortune');
    expect(ids).not.toContain('restoration-lesser');
  });
});
