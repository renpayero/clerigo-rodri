import { describe, expect, it } from 'vitest';
import { z } from 'astro/zod';
import { abilities, pointBuyTotal, equipmentTotal, carriedWeight, spells, presets, buffByKey, resources, skills, allTerms, feats, traits, character } from './index';
import { spellsPerDay } from '@/lib/rules/spellsPerDay';

const AonSchema = z.object({ url: z.string().refine((u) => /^https:\/\//.test(u), 'URL inválida').refine((u) => !u.includes('2e.aonprd.com') && !u.includes('MythicPathDisplay'), 'URL de 2e o 404 conocida'), book: z.string().optional(), verified: z.boolean() });

describe('datos estáticos de la ficha', () => {
  it('compra por puntos = 20 y finales correctos', () => {
    expect(pointBuyTotal).toBe(20);
    const wis = abilities.find((a) => a.key === 'Wis')!;
    expect(wis.bought + wis.racial + wis.level4 + wis.level8 + wis.tier2 + (wis.item?.value ?? 0)).toBe(27);
    for (const a of abilities) expect(a.mod).toBe(Math.floor((a.final - 10) / 2));
  });

  it('equipo = 93.538 po (v3.3: sin vara, perla, pergaminos de Heal/BoL ni alquímicos) y 33 lb encima', () => {
    expect(equipmentTotal).toBe(93_538);
    expect(carriedWeight).toBe(33);
    expect(character.wealthCap - equipmentTotal).toBe(8_962);
  });

  it('los presets caben en las ranuras y referencian conjuros existentes del nivel correcto', () => {
    const perDay = spellsPerDay(27);
    for (const p of presets) {
      for (let lvl = 0; lvl <= 6; lvl++) {
        const slots = p.slots.filter((s) => s.level === lvl);
        expect(slots, `${p.id} nivel ${lvl}`).toHaveLength(perDay[lvl]!);
        for (const s of slots) {
          if (!s.spellId) continue;
          const sp = spells.find((x) => x.id === s.spellId);
          expect(sp, `${p.id}: ${s.spellId}`).toBeDefined();
          expect(sp!.level, `${p.id}: ${s.spellId} en nivel ${lvl}`).toBe(lvl);
          if (sp!.domainOnly) expect(s.idx, `${sp!.name} solo en ranura de dominio`).toBe(0);
        }
      }
    }
  });

  it('todo conjuro con buff tiene su BuffDef', () => {
    for (const sp of spells.filter((s) => s.buff)) expect(buffByKey[sp.buff!.buffKey], sp.id).toBeDefined();
  });

  it('URLs de AoN bien formadas (sin 2e ni 404 conocidas)', () => {
    for (const t of allTerms()) if (t.aon) expect(() => AonSchema.parse(t.aon), t.id).not.toThrow();
  });

  it('recursos con claves únicas y máximos positivos', () => {
    const keys = resources.map((r) => r.key);
    expect(new Set(keys).size).toBe(keys.length);
    for (const r of resources) expect(r.max).toBeGreaterThan(0);
  });

  it('habilidades: rangos 22 + 22 y totales coherentes', () => {
    const mods = { Str: 0, Dex: 1, Con: 4, Int: 0, Wis: 8, Cha: 2 } as const;
    expect(skills.filter((s) => !s.background).reduce((a, s) => a + s.ranks, 0)).toBe(22);
    expect(skills.filter((s) => s.background).reduce((a, s) => a + s.ranks, 0)).toBe(22);
    for (const s of skills) {
      const cs = s.classSkill && s.ranks > 0 ? 3 : 0;
      expect(s.total, s.name).toBe(mods[s.ability] + s.ranks + cs + s.misc + s.acp);
    }
  });

  it('6 dotes de nivel + 2 míticas, 3 rasgos + 1 drawback', () => {
    expect(feats.filter((f) => f.category === 'general').map((f) => f.level)).toEqual([1, 3, 5, 7, 9, 11]);
    expect(feats.filter((f) => f.category === 'mythic')).toHaveLength(2);
    expect(traits.filter((t) => t.list !== 'Drawback')).toHaveLength(3);
    expect(traits.filter((t) => t.list === 'Drawback')).toHaveLength(1);
  });
});
