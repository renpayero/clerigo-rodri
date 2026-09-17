import { describe, expect, it } from 'vitest';
import { recommend, autoInput, healFallbackChain, type TacticsSnap, type TacticsInput } from '../tactics';
import { initialResources, spend } from '../resources';
import { applyPreset } from '../slots';
import { presetById } from '@/data/spells/presets';

function snap(o: Partial<TacticsSnap> = {}): TacticsSnap {
  const layout = applyPreset(presetById.combate);
  return {
    resources: initialResources(),
    slots: layout.map((l, i) => ({ id: i + 1, level: l.level, isDomain: l.isDomain, spellId: l.spellId, status: l.spellId ? 'prepared' : 'free', disabled: false })),
    activeBuffKeys: [],
    auraActive: false,
    combatActive: true,
    round: 3,
    allies: [
      { id: 1, name: 'Tanque 1', hpCurrent: 140, maxHp: 140, downState: 'ok', diedRound: null, frontLine: true },
      { id: 2, name: 'DPS 1', hpCurrent: 90, maxHp: 90, downState: 'ok', diedRound: null, frontLine: true },
    ],
    ownHp: 125,
    ownMaxHp: 125,
    ...o,
  };
}
const base: TacticsInput = { lowAllies: [], downAllies: [], deadRecent: [], deadLate: [], condition: 'none', bigFight: false, threatened: false, arcaneHaste: false, bossHitsHard: false };
const std = (p: ReturnType<typeof recommend>) => p.recommendations.filter((r) => r.action === 'standard');

describe('guía táctica (ficha §11)', () => {
  it('1. nadie herido: rápida = aura, estándar = Blessing of Fervor, movimiento = posicionarse', () => {
    const p = recommend(base, snap());
    expect(p.recommendations.find((r) => r.action === 'swift')?.title).toBe('Aura of Heroism ON');
    expect(std(p)[0]!.title).toBe('Blessing of Fervor');
    expect(std(p)[0]!.available).toBe(true);
    expect(p.recommendations.find((r) => r.action === 'move')?.title).toBe('Posicionarte');
  });
  it('2. haste arcano: Prayer antes que Fervor', () => {
    const p = recommend({ ...base, arcaneHaste: true }, snap());
    expect(std(p)[0]!.title).toBe('Prayer');
  });
  it('3. aliado bajo 40 %: Heal 110 + Quick Channel en el movimiento', () => {
    const p = recommend({ ...base, lowAllies: [1] }, snap({ allies: [{ id: 1, name: 'Tanque 1', hpCurrent: 40, maxHp: 140, downState: 'ok', diedRound: null, frontLine: true }] }));
    expect(std(p)[0]!.title).toBe('Heal');
    expect(std(p)[0]!.numbers).toBe('110 pg');
    expect(p.recommendations.find((r) => r.action === 'move')?.title).toBe('Quick Channel');
  });
  it('4. jefe que pega 50+: Mythic Heal 165 primero; sin PM cae a Heal', () => {
    const p = recommend({ ...base, lowAllies: [1], bossHitsHard: true }, snap());
    expect(std(p)[0]!.title).toBe('Mythic Heal');
    expect(std(p)[0]!.numbers).toBe('165 pg');
    const noPm = recommend({ ...base, lowAllies: [1], bossHitsHard: true }, snap({ resources: spend(initialResources(), 'mythic_power', 9) }));
    expect(std(noPm)[0]!.available).toBe(false);
    expect(std(noPm).find((r) => r.available)?.title).toBe('Heal');
  });
  it('5. sin 6.º: Inspired Heal 130 → CCW 44,5 → Scroll → Rebuke Death', () => {
    const s = snap();
    s.slots = s.slots.map((x) => (x.spellId === 'heal' ? { ...x, status: 'spent' } : x));
    const chain = healFallbackChain(s).filter((r) => r.available).map((r) => r.title);
    expect(chain).toEqual(['Inspired Spell: Heal', 'Cure Critical Wounds espontáneo', 'Scroll of Heal', 'Rebuke Death']);
    expect(recommend({ ...base, lowAllies: [1] }, s).warnings.some((w) => w.includes('Sin Heal preparado'))).toBe(true);
  });
  it('6. muerto este asalto: Heal + Relentless (estándar) y Relentless como gratuita; autoInput lo detecta', () => {
    const s = snap({ allies: [{ id: 1, name: 'Tanque 1', hpCurrent: -50, maxHp: 140, downState: 'dead', diedRound: 3, frontLine: true }] });
    const auto = autoInput(s);
    expect(auto.deadRecent).toEqual([1]);
    const p = recommend(auto, s);
    expect(std(p)[0]!.title).toContain('Heal + Relentless Healing');
    expect(std(p)[0]!.detail).toContain('revive');
    expect(p.recommendations.find((r) => r.action === 'free')?.exec).toEqual({ kind: 'relentless', allyId: 1, heal: 110 });
  });
  it('7. muerto hace 2 asaltos o por efecto de muerte: Mythic Breath of Life', () => {
    const s = snap({ allies: [{ id: 1, name: 'Tanque 1', hpCurrent: -50, maxHp: 140, downState: 'dead', diedRound: 1, frontLine: true }], round: 3 });
    expect(autoInput(s).deadLate).toEqual([1]);
    const p = recommend(autoInput(s), s);
    expect(std(p)[0]!.title).toContain('Mythic Breath of Life');
    expect(std(p)[0]!.cost).toContain('1 PM');
  });
  it('8. condición: agarrado → Liberating Command como inmediata; paralizado → Remove Paralysis', () => {
    const p = recommend({ ...base, condition: 'agarrado' }, snap());
    const lib = p.recommendations.find((r) => r.title.startsWith('Liberating Command'));
    expect(lib?.action).toBe('immediate');
    expect(lib?.available).toBe(true);
    const q = recommend({ ...base, condition: 'paralizado' }, snap());
    expect(std(q)[0]!.title).toContain('Remove Paralysis');
  });
  it('a 0 o menos y amenazada: ofrece el channel estándar (no provoca) y avisa', () => {
    const p = recommend({ ...base, downAllies: [2], threatened: true }, snap());
    expect(std(p).some((r) => r.title.startsWith('Channel estándar'))).toBe(true);
    expect(p.warnings.some((w) => w.includes('amenazada'))).toBe(true);
  });
  it('sin channel para Quick Channel: no disponible con motivo', () => {
    const s = snap({ resources: spend(initialResources(), 'channel', 6), allies: [{ id: 1, name: 'T', hpCurrent: 100, maxHp: 140, downState: 'ok', diedRound: null, frontLine: true }] });
    const mv = recommend(base, s).recommendations.find((r) => r.title === 'Quick Channel');
    expect(mv?.available).toBe(false);
    expect(mv?.reason).toContain('hacen falta 2');
  });
});
