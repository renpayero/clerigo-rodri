import { aon } from './sources';
import type { Domain } from './types';

const HEALING = aon('domain', 'Healing', 'Core Rulebook pg. 44');
const GLORY = aon('domain', 'Glory', 'Core Rulebook pg. 44 / APG pg. 92 (Heroism)');

export const domains: Domain[] = [
  {
    id: 'healing',
    name: 'Healing',
    es: 'Curación',
    tip: 'Dominio base: Rebuke Death, Healer\'s Blessing (cures ×1,5) y las ranuras de dominio con Breath of Life (5.º) y Heal (6.º).',
    aon: HEALING,
    powers: [
      {
        id: 'rebuke-death', name: 'Rebuke Death (Sp)', level: 1, action: 'standard', usesPerDay: 11, resource: 'rebuke_death',
        effect: 'Toque de 5 pies (es una aptitud sortílega, no un conjuro: Faith\'s Reach no la alcanza; provoca AdO). Cura 1d4+5 (1d4+7 con Mythic Domain) a una criatura que esté bajo 0 pg.',
        numbers: '1d4+5 · 1d4+7 con Mythic Domain · 11/día (3 + Wis)',
        tip: 'Estándar, toque de 5 pies (provoca): 1d4+5 (1d4+7) a una criatura bajo 0 pg. 11/día. Último recurso cuando no quedan ranuras ni channels.',
        aon: HEALING,
      },
      {
        id: 'healers-blessing', name: "Healer's Blessing (Su)", level: 6,
        effect: 'Todos tus conjuros cure se tratan como empoderados (+50 %). No se acumula con Empower Spell. Solo conjuros con "cure" en el nombre: no Heal, no Breath of Life, no channel.',
        numbers: 'CLW 15,25 · CMW 29,5 · CSW 37,75 · CCW 44,5 · Mass CLW 24,25 · Mass CMW 31 (con +1 de Blessed Touch)',
        tip: 'Todos tus conjuros cure curan ×1,5. No afecta a Heal, Breath of Life ni al channel. Por eso toda ranura sobrante es un cure ×1,5.',
        aon: HEALING,
      },
    ],
    domainSpells: [
      { level: 1, spellId: 'cure-light-wounds', name: 'Cure Light Wounds' },
      { level: 2, spellId: 'cure-moderate-wounds', name: 'Cure Moderate Wounds' },
      { level: 3, spellId: 'cure-serious-wounds', name: 'Cure Serious Wounds' },
      { level: 4, spellId: 'cure-critical-wounds', name: 'Cure Critical Wounds' },
      { level: 5, spellId: 'breath-of-life', name: 'Breath of Life' },
      { level: 6, spellId: 'heal', name: 'Heal' },
      { level: 7, spellId: 'regenerate', name: 'Regenerate' },
      { level: 8, spellId: 'cure-critical-wounds-mass', name: 'Mass Cure Critical Wounds' },
      { level: 9, spellId: 'heal-mass', name: 'Mass Heal' },
    ],
  },
  {
    id: 'glory-heroism',
    name: 'Glory',
    subdomain: 'Heroism',
    es: 'Gloria (subdominio Heroísmo)',
    tip: 'Segundo dominio: +2 a la DC del channel contra no muertos, Touch of Glory, y Aura of Heroism (acción rápida, +2 moral al grupo).',
    aon: GLORY,
    powers: [
      {
        id: 'glory-passive', name: 'Channel DC vs no muertos', level: 1,
        effect: '+2 a la DC de tu channel positivo cuando daña no muertos (DC 17 → 19).',
        tip: '+2 a la DC del channel cuando dañás no muertos (19).',
        aon: GLORY,
      },
      {
        id: 'touch-of-glory', name: 'Touch of Glory (Sp)', level: 1, action: 'standard', usesPerDay: 11, resource: 'touch_of_glory',
        effect: 'Toque: la criatura recibe +11 (+15 con Mythic Domain) a una única prueba basada en Carisma durante 1 hora o hasta usarla.',
        numbers: '+11 · +15 con Mythic Domain · 11/día',
        tip: 'Estándar, toque: +11 (+15) a una prueba de Cha de una criatura, 1 hora o hasta usarla. 11/día. Para el apoyo social antes de negociar.',
        aon: GLORY,
      },
      {
        id: 'aura-of-heroism', name: 'Aura of Heroism (Su)', level: 8, action: 'swift', usesPerDay: 15, resource: 'aura_rounds',
        effect: 'Acción rápida: aura de 30 pies; los aliados dentro quedan como bajo heroism (+2 moral a ataques, salvaciones y habilidades). 11 asaltos/día → 15 con Mythic Domain (+15 con su recarga). Asaltos no consecutivos. DM: se activa una vez, no se apaga sola, gasta asaltos mientras esté encendida.',
        numbers: '+2 moral · 15 asaltos/día (+15 recarga)',
        tip: 'Rápida: aliados a 30 pies con +2 moral a ataques, salvaciones y habilidades. 15 asaltos/día (+15 con la recarga). Se enciende una vez y se pausa cuando querés.',
        aon: GLORY,
      },
    ],
    domainSpells: [
      { level: 1, spellId: 'shield-of-faith', name: 'Shield of Faith' },
      { level: 2, spellId: 'bless-weapon', name: 'Bless Weapon' },
      { level: 3, spellId: 'heroism', name: 'Heroism' },
      { level: 4, spellId: 'holy-smite', name: 'Holy Smite' },
      { level: 5, spellId: 'righteous-might', name: 'Righteous Might' },
      { level: 6, spellId: 'heroism-greater', name: 'Greater Heroism' },
      { level: 7, spellId: 'holy-sword', name: 'Holy Sword' },
    ],
  },
];

export const domainRules = {
  slot: 'Una ranura extra por nivel 1-6 solo para conjuros de dominio; NO se convierte espontáneamente en cure (Core pg. 38).',
  subdomain: 'El subdominio reemplaza un poder del dominio base (Heroism reemplaza Divine Presence); la deidad debe conceder el dominio base (Sarenrae concede Glory).',
  moral: 'El +2 moral de Aura of Heroism no se acumula con Bless ni Heroes\' Feast (moral); sí con Prayer (suerte), Blessing of Fervor (esquiva/sin tipo) y Haste.',
  aon: aon('raw', 'https://www.aonprd.com/ClericDomains.aspx', 'Ultimate Magic pg. 30'),
};
