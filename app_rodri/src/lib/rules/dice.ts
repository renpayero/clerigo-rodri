export type DiceSpec = { n: number; sides: number; bonus: number };

export type RollOpts = {
  /** Repetir una vez los 1 naturales (Envoy of Healing). */
  rerollOnes?: boolean;
  /** ×1,5 redondeado hacia abajo (Healer's Blessing) sobre dados + bono. */
  empower?: boolean;
  /** Bono plano que se suma después del multiplicador (Blessed Touch +1). */
  flatAfter?: number;
  rng?: () => number;
};

export type RollResult = {
  spec: string;
  dice: { first: number; reroll?: number; final: number }[];
  bonus: number;
  subtotal: number;
  multiplied: number;
  flatAfter: number;
  total: number;
  text: string;
  discord: string;
};

export function parseSpec(spec: string): DiceSpec {
  const m = /^\s*(\d+)\s*d\s*(\d+)\s*([+-]\s*\d+)?\s*$/i.exec(spec);
  if (!m) throw new Error(`Especificación de dados inválida: ${spec}`);
  return { n: Number(m[1]), sides: Number(m[2]), bonus: m[3] ? Number(m[3].replace(/\s+/g, '')) : 0 };
}

export function formatSpec(d: DiceSpec): string {
  return `${d.n}d${d.sides}${d.bonus ? (d.bonus > 0 ? `+${d.bonus}` : `${d.bonus}`) : ''}`;
}

export function discordCommand(d: DiceSpec, prefix = '/roll dice:'): string {
  return `${prefix}${formatSpec(d)}`;
}

export function roll(d: DiceSpec, o: RollOpts = {}): RollResult {
  const rng = o.rng ?? Math.random;
  const die = () => 1 + Math.floor(rng() * d.sides);
  const dice = Array.from({ length: d.n }, () => {
    const first = die();
    if (o.rerollOnes && first === 1) {
      const reroll = die();
      return { first, reroll, final: reroll };
    }
    return { first, final: first };
  });
  const subtotal = dice.reduce((s, x) => s + x.final, 0) + d.bonus;
  const multiplied = o.empower ? Math.floor(subtotal * 1.5) : subtotal;
  const flatAfter = o.flatAfter ?? 0;
  const total = multiplied + flatAfter;
  const parts = dice.map((x) => (x.reroll !== undefined ? `~~${x.first}~~→${x.final}` : `${x.final}`)).join(' ');
  const text = `${formatSpec(d)}: [${parts}]${d.bonus ? ` ${d.bonus > 0 ? '+' : ''}${d.bonus}` : ''} = ${subtotal}${o.empower ? ` ×1,5 = ${multiplied}` : ''}${flatAfter ? ` +${flatAfter} = ${total}` : ''}`;
  return { spec: formatSpec(d), dice, bonus: d.bonus, subtotal, multiplied, flatAfter, total, text, discord: discordCommand(d) };
}

/** Channel de Rodri: 8d6, reroll de 1 (Envoy of Healing), +1 (Blessed Touch). */
export function channelRoll(rng?: () => number, phylactery = true): RollResult {
  return roll({ n: phylactery ? 8 : 6, sides: 6, bonus: 0 }, { rerollOnes: true, flatAfter: 1, rng });
}

/** Cure de Rodri: ×1,5 (Healer's Blessing) +1 (Blessed Touch). */
export function cureRoll(d: DiceSpec, rng?: () => number): RollResult {
  return roll(d, { empower: true, flatAfter: 1, rng });
}

/** Valor esperado de una tirada con las opciones dadas (para mostrar medias). */
export function expectedValue(d: DiceSpec, o: Pick<RollOpts, 'rerollOnes' | 'empower' | 'flatAfter'> = {}): number {
  const avg = (d.sides + 1) / 2;
  const per = o.rerollOnes ? avg + (1 / d.sides) * (avg - 1) : avg;
  const sub = d.n * per + d.bonus;
  return (o.empower ? sub * 1.5 : sub) + (o.flatAfter ?? 0);
}

/** RNG determinista para tests (LCG). */
export function seededRng(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}
