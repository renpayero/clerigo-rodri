import { describe, expect, it } from 'vitest';
import { spellsPerDay, bonusSpells, slotLayout } from '../spellsPerDay';
import { maxHp, deathThreshold, armorClass, saves, initiative, concentration, defensiveCastChance, spellDc, channelDc, channelUses, cmd, carrying } from '../derived';
import { healMath, healAmount, channelAverage, avgDieRerollOnes, breathOfLife, rebukeDeath, roundPatterns } from '../healing';
import { durationAt, communalSplit, rangeAt } from '../durations';
import { spellById } from '@/data/spells/catalog';

describe('conjuros por día', () => {
  it('Wis 27 → 4/7/7/7/6/4/3', () => {
    expect(spellsPerDay(27)).toEqual([4, 7, 7, 7, 6, 4, 3]);
  });
  it('Wis 23 (diadema < 24 h) → 4/7/7/6/5/4/3', () => {
    expect(spellsPerDay(23)).toEqual([4, 7, 7, 6, 5, 4, 3]);
  });
  it('bonus por característica', () => {
    expect(bonusSpells(8, 1)).toBe(2);
    expect(bonusSpells(8, 5)).toBe(1);
    expect(bonusSpells(8, 0)).toBe(0);
    expect(bonusSpells(6, 3)).toBe(1);
  });
  it('la ranura de dominio es idx 0 de los niveles 1-6', () => {
    const layout = slotLayout(27);
    expect(layout.filter((s) => s.isDomain).map((s) => s.level)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(layout).toHaveLength(38);
  });
});

describe('derivados', () => {
  it('pg 125 y muerte a −36', () => {
    expect(maxHp()).toBe(125);
    expect(deathThreshold()).toBe(-36);
  });
  it('CA 23 / 25 / 27, toque 12, desprevenida 22', () => {
    expect(armorClass().total).toBe(23);
    expect(armorClass().touch).toBe(12);
    expect(armorClass().flatFooted).toBe(22);
    expect(armorClass({ magicVestmentArmor: true, magicVestmentShield: true }).total).toBe(25);
    expect(armorClass({ magicVestmentArmor: true, magicVestmentShield: true, shieldOfFaith: true }).total).toBe(27);
  });
  it('salvaciones 15/8/19, iniciativa 7, CMD 20', () => {
    expect(saves()).toEqual({ fort: 15, ref: 8, will: 19 });
    expect(saves({ auraInside: true, prayer: true }).will).toBe(22);
    expect(initiative()).toBe(7);
    expect(cmd()).toBe(20);
    expect(cmd({ shieldOfFaith: true })).toBe(22);
  });
  it('concentración y lanzar a la defensiva', () => {
    expect(concentration()).toBe(19);
    expect(defensiveCastChance(6)).toBeCloseTo(0.65);
    expect(defensiveCastChance(4)).toBeCloseTo(0.85);
    expect(defensiveCastChance(3)).toBeCloseTo(0.95);
  });
  it('DCs y channel', () => {
    expect(spellDc(1)).toBe(19);
    expect(spellDc(6)).toBe(24);
    expect(channelDc()).toBe(17);
    expect(channelDc(true)).toBe(19);
    expect(channelUses()).toBe(7);
    expect(carrying()).toEqual({ light: 33, medium: 66, heavy: 100 });
  });
});

describe('curación', () => {
  it('Heal 110 / 130 / 165 / 195', () => {
    expect(healAmount(11)).toBe(110);
    expect(healAmount(13)).toBe(130);
    expect(healAmount(11, true)).toBe(165);
    expect(healAmount(13, true)).toBe(195);
  });
  it('cures ×1,5 +1', () => {
    expect(healMath(spellById['cure-light-wounds']!.heal!).avg).toBeCloseTo(15.25);
    expect(healMath(spellById['cure-critical-wounds']!.heal!).avg).toBeCloseTo(44.5);
    expect(healMath(spellById['cure-critical-wounds']!.heal!, { blessedTouch: false }).avg).toBeCloseTo(43.5);
    expect(healMath(spellById['cure-moderate-wounds-mass']!.heal!).avg).toBeCloseTo(31);
  });
  it('channel 8d6 con reroll de 1 y +1 ≈ 32,33', () => {
    expect(avgDieRerollOnes(6)).toBeCloseTo(3.9167, 3);
    expect(channelAverage()).toBeCloseTo(32.33, 1);
    expect(channelAverage({ envoy: false, blessedTouch: false })).toBe(28);
  });
  it('Breath of Life y Rebuke Death', () => {
    expect(breathOfLife()).toEqual({ n: 5, sides: 8, bonus: 11 });
    expect(breathOfLife(11, true)).toEqual({ n: 5, sides: 12, bonus: 11 });
    expect(rebukeDeath()).toEqual({ n: 1, sides: 4, bonus: 7 });
    expect(rebukeDeath(false)).toEqual({ n: 1, sides: 4, bonus: 5 });
  });
  it('patrones por asalto', () => {
    const p = roundPatterns();
    expect(p[0]!.single).toBeCloseTo(142.33, 1);
    expect(p[2]!.single).toBeCloseTo(284.67, 1);
  });
});

describe('duraciones y alcances', () => {
  it('a CL 11 y con Extend', () => {
    expect(durationAt({ kind: 'hours_per_level' }).label).toBe('11 h');
    expect((durationAt({ kind: 'hours_per_level' }, 11, true) as { amount: number }).amount).toBe(1320);
    expect((durationAt({ kind: 'rounds_per_level' }) as { amount: number }).amount).toBe(11);
    expect((durationAt({ kind: 'ten_minutes_per_level' }, 13) as { amount: number }).amount).toBe(130);
  });
  it('communal split', () => {
    expect(communalSplit(110, 10, 5)).toEqual([20, 20, 20, 20, 30]);
    expect(communalSplit(11, 1, 3)).toEqual([3, 3, 5]);
  });
  it('alcances', () => {
    expect(rangeAt('close').feet).toBe(50);
    expect(rangeAt('close', 13).feet).toBe(55);
    expect(rangeAt('medium').feet).toBe(210);
    expect(rangeAt('touch').feet).toBe(30);
  });
});
