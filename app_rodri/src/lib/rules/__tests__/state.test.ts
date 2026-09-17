import { describe, expect, it } from 'vitest';
import { initialResources, canSpend, canAfford, spend, restore, resetByPolicy, type ResourceMap } from '../resources';
import { hpState, applyDamage, applyHealing, reactiveHealingApplies, belowPercent } from '../hp';
import { canUseHeroPoint, spendHeroPoints, heroPointCost } from '../heroPoints';
import { fullRest, recuperation, mythicDomainRecharge, newSession, applyRest } from '../rest';
import { roll, channelRoll, cureRoll, expectedValue, parseSpec, discordCommand, seededRng } from '../dice';
import { tickRounds, tickMinutes, createBuff, canExtend } from '../buffs';
import { buffByKey } from '@/data/buffs';

const ctx = { recuperationRestoresDomain: true, mythicPowerReset: 'prayer' as const, mythicDomainRechargeMode: 'reset' as const };

function withUsed(): ResourceMap {
  let s = initialResources();
  s = spend(s, 'channel', 5);
  s = spend(s, 'mythic_power', 4);
  s = spend(s, 'rebuke_death', 11);
  s = spend(s, 'aura_rounds', 15);
  s = spend(s, 'rod_extend', 3);
  s = spend(s, 'wand_clw', 10);
  return s;
}

describe('recursos', () => {
  it('estado inicial: channel 7, poder mítico 9, Hero Points 1 (no 3), temporal 0', () => {
    const s = initialResources();
    expect(s.channel!.current).toBe(7);
    expect(s.mythic_power!.current).toBe(9);
    expect(s.hero_points!.current).toBe(1);
    expect(s.hero_point_temp!.current).toBe(0);
    expect(s.aura_rounds!.current).toBe(15);
  });
  it('Quick Channel con 1 uso → no alcanza', () => {
    let s = initialResources();
    s = spend(s, 'channel', 6);
    expect(canAfford(s, 'channel_quick').ok).toBe(false);
    expect(canAfford(s, 'channel_standard').ok).toBe(true);
  });
  it('spend no baja de 0 y restore no pasa el máximo', () => {
    const s = initialResources();
    expect(() => spend(s, 'channel', 8)).toThrow();
    expect(restore(s, 'channel', 5).channel!.current).toBe(7);
    expect(canSpend(s, 'pearl_1st', 2).ok).toBe(false);
  });
  it('maxOverride manda sobre el máximo de datos', () => {
    const s = initialResources();
    s.wand_clw = { ...s.wand_clw!, maxOverride: 60, current: 50 };
    expect(restore(s, 'wand_clw', 20).wand_clw!.current).toBe(60);
  });
});

describe('pg', () => {
  it('estados: 125 ok · 0 incapacitada · −35 estable · −36 muerta', () => {
    expect(hpState(125)).toBe('ok');
    expect(hpState(0)).toBe('disabled');
    expect(hpState(-35)).toBe('dying_stable');
    expect(hpState(-36)).toBe('dead');
  });
  it('el daño consume temporales primero; la curación no pasa el máximo', () => {
    const p = applyDamage({ hp: 100, temp: 10, nonlethal: 0 }, 15);
    expect(p).toEqual({ hp: 95, temp: 0, nonlethal: 0 });
    expect(applyHealing({ hp: 120, temp: 0, nonlethal: 0 }, 50, 125).hp).toBe(125);
  });
  it('Reactive Healing solo si el golpe deja a 0 o menos', () => {
    expect(reactiveHealingApplies(30, 0, 30)).toBe(true);
    expect(reactiveHealingApplies(30, 5, 30)).toBe(false);
    expect(belowPercent(49, 125, 40)).toBe(true);
    expect(belowPercent(50, 125, 40)).toBe(false);
  });
});

describe('Hero Points', () => {
  it('Cheat Death cuesta 2 y con 1 punto falla', () => {
    const s = initialResources();
    expect(heroPointCost('cheat_death')).toBe(2);
    expect(canUseHeroPoint(s, 'cheat_death', true).ok).toBe(false);
    expect(canUseHeroPoint(s, 'reroll', true).ok).toBe(true);
  });
  it('el temporal (Heroic Fortune) se gasta primero', () => {
    let s = initialResources();
    s = restore(s, 'hero_point_temp', 1);
    const r = spendHeroPoints(s, 1);
    expect(r.fromTemp).toBe(1);
    expect(r.fromPermanent).toBe(0);
    expect(r.state.hero_points!.current).toBe(1);
  });
  it('máximo 1 por asalto en combate, salvo Cheat Death', () => {
    let s = initialResources();
    s = restore(s, 'hero_points', 2);
    s = spend(s, 'hero_point_round', 1);
    expect(canUseHeroPoint(s, 'reroll', true).ok).toBe(false);
    expect(canUseHeroPoint(s, 'reroll', false).ok).toBe(true);
    expect(canUseHeroPoint(s, 'cheat_death', true).ok).toBe(true);
  });
});

describe('descansos', () => {
  it('descanso completo recarga todo lo diario y el poder mítico (prayer), no las varitas', () => {
    const out = fullRest(withUsed(), ctx);
    expect(out.hp).toBe(125);
    expect(out.resources.channel!.current).toBe(7);
    expect(out.resources.mythic_power!.current).toBe(9);
    expect(out.resources.rebuke_death!.current).toBe(11);
    expect(out.resources.aura_rounds!.current).toBe(15);
    expect(out.resources.rod_extend!.current).toBe(3);
    expect(out.resources.wand_clw!.current).toBe(40);
    expect(out.reprepareSlots).toBe(true);
    expect(out.expireBuffs).toContain('rounds');
  });
  it('descanso con poder mítico manual no lo toca', () => {
    const out = fullRest(withUsed(), { ...ctx, mythicPowerReset: 'manual' });
    expect(out.resources.mythic_power!.current).toBe(5);
  });
  it('Recuperation: channels y ranuras sí, poder mítico no, dominio según ajuste', () => {
    const out = recuperation(withUsed(), ctx);
    expect(out.resources.channel!.current).toBe(7);
    expect(out.resources.mythic_power!.current).toBe(5);
    expect(out.resources.rebuke_death!.current).toBe(11);
    expect(out.hp).toBe(62);
    const out2 = recuperation(withUsed(), { ...ctx, recuperationRestoresDomain: false });
    expect(out2.resources.rebuke_death!.current).toBe(0);
  });
  it('recarga de Mythic Domain: reset a 11/11/15 sin tocar channels', () => {
    const out = mythicDomainRecharge(withUsed(), ctx, 'reset');
    expect(out.resources.rebuke_death!.current).toBe(11);
    expect(out.resources.aura_rounds!.current).toBe(15);
    expect(out.resources.channel!.current).toBe(2);
  });
  it('nueva sesión cierra combate y suma 1', () => {
    const out = newSession(withUsed(), ctx);
    expect(out.endCombat).toBe(true);
    expect(out.sessionIncrement).toBe(1);
    expect(applyRest('mythicPowerManual', withUsed(), ctx).resources.mythic_power!.current).toBe(9);
  });
  it('resetByPolicy round devuelve las acciones del asalto', () => {
    let s = initialResources();
    s = spend(s, 'swift_action', 1);
    s = spend(s, 'immediate_action', 1);
    const r = resetByPolicy(s, 'round', ctx);
    expect(r.state.swift_action!.current).toBe(1);
    expect(r.state.immediate_action!.current).toBe(1);
  });
});

describe('dados', () => {
  it('reroll de los 1 una sola vez y +1 plano después', () => {
    const seq = [0, 0.99, 0.5, 0.5, 0, 0, 0.2, 0.2, 0.2, 0.2]; // 1→6, 4, 4, 1→1, 2, 2, 2, 2
    let i = 0;
    const rng = () => seq[i++ % seq.length]!;
    const r = channelRoll(rng);
    expect(r.dice[0]).toEqual({ first: 1, reroll: 6, final: 6 });
    expect(r.dice[3]).toEqual({ first: 1, reroll: 1, final: 1 });
    expect(r.total).toBe(r.subtotal + 1);
    expect(r.text).toContain('~~1~~→6');
  });
  it('cure: ×1,5 hacia abajo sobre dados+bono, luego +1', () => {
    const rng = () => 0.5; // d8 → 5
    const r = cureRoll(parseSpec('4d8+11'), rng);
    expect(r.subtotal).toBe(31);
    expect(r.multiplied).toBe(46);
    expect(r.total).toBe(47);
  });
  it('valor esperado del channel ≈ 32,33 y comando Discord', () => {
    expect(expectedValue({ n: 8, sides: 6, bonus: 0 }, { rerollOnes: true, flatAfter: 1 })).toBeCloseTo(32.33, 2);
    expect(discordCommand({ n: 8, sides: 6, bonus: 0 })).toBe('/roll dice:8d6');
    expect(discordCommand(parseSpec('4d8+11'), '/r ')).toBe('/r 4d8+11');
  });
  it('rng sembrado es determinista y queda en [0,1)', () => {
    const a = seededRng(7);
    const b = seededRng(7);
    const xs = Array.from({ length: 5 }, () => a());
    expect(xs).toEqual(Array.from({ length: 5 }, () => b()));
    expect(xs.every((x) => x >= 0 && x < 1)).toBe(true);
    const r = roll({ n: 100, sides: 6, bonus: 0 }, { rng: seededRng(3) });
    expect(r.dice.every((d) => d.final >= 1 && d.final <= 6)).toBe(true);
  });
});

describe('buffs', () => {
  const fervor = buffByKey['blessing-of-fervor']!;
  const vestment = buffByKey['magic-vestment']!;
  it('Blessing of Fervor a CL 11: 11 asaltos; expira tras 11 ticks', () => {
    const b = createBuff(fervor, { cl: 11, extend: false, mythic: false, targets: ['self', 1, 2], round: 1 });
    expect(b.unit).toBe('rounds');
    expect(b.remaining).toBe(11);
    const list = [{ ...b, id: 1, status: 'active' as const }];
    const t10 = tickRounds(list, 10);
    expect(t10.expired).toHaveLength(0);
    expect(t10.updates[0]!.changes.remaining).toBe(1);
    const t11 = tickRounds(list, 11);
    expect(t11.expired).toHaveLength(1);
  });
  it('Magic Vestment 11 h → 22 h con la Rod; Fervor (4.º) no se puede extender', () => {
    const b = createBuff(vestment, { cl: 11, extend: true, mythic: false, targets: [1], round: null });
    expect(b.unit).toBe('minutes');
    expect(b.remaining).toBe(1320);
    expect(canExtend(vestment, 3).ok).toBe(true);
    expect(canExtend(vestment, 0).ok).toBe(false);
    expect(canExtend(fervor, 3).ok).toBe(false);
  });
  it('Communal reparte por objetivo y tickMinutes expira cuando todos llegan a 0', () => {
    const communal = buffByKey['resist-energy-communal']!;
    const b = createBuff(communal, { cl: 11, extend: false, mythic: false, targets: [1, 2, 3], round: null, energy: 'fire' });
    expect(b.targets.map((t) => t.remaining)).toEqual([30, 30, 50]);
    const list = [{ ...b, id: 5, status: 'active' as const }];
    const t = tickMinutes(list, 35);
    expect(t.expired).toHaveLength(0);
    expect((t.updates[0]!.changes.targets as { remaining: number }[]).map((x) => x.remaining)).toEqual([0, 0, 15]);
    expect(tickMinutes(list, 50).expired).toHaveLength(1);
  });
});
