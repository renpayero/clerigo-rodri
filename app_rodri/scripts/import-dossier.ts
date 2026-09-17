/**
 * Importa secciones curadas del dossier y de la ficha final a src/content/rules/*.md.
 * Uso: npx tsx scripts/import-dossier.ts
 * Fuente: ../DOSSIER-Clerigo-PF1e.md y ../FICHA-FINAL-Clerigo.md (fuera del repo de la app).
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const DOSSIER = resolve(root, '..', 'DOSSIER-Clerigo-PF1e.md');
const FICHA = resolve(root, '..', 'FICHA-FINAL-Clerigo.md');
const OUT = resolve(root, 'src', 'content', 'rules');

type Entry = {
  slug: string;
  title: string;
  section: string;
  order: number;
  summary: string;
  tags: string[];
  /** Encabezados a extraer (prefijo exacto, p. ej. "### 12.1"). */
  from: { file: 'dossier' | 'ficha'; heading: string }[];
};

const ENTRIES: Entry[] = [
  { slug: 'reglas-de-oro', title: 'Las 10 reglas de oro contra la desinformación', section: 'Método', order: 1, summary: 'Solo cuenta aonprd.com (1e); 3.5, 2e, d20pfsrd y Owlcat no son reglas.', tags: ['fuentes', 'AoN', 'mitos'], from: [{ file: 'dossier', heading: '### 0.2' }] },
  { slug: 'rutina-de-combate', title: 'Rutina de combate de Rodri', section: 'Juego', order: 2, summary: 'Posición, asalto 1, regla de decisión por asalto, emergencias y presupuesto mítico.', tags: ['combate', 'táctica', 'emergencias'], from: [{ file: 'ficha', heading: '## 11.' }] },
  { slug: 'lo-que-no-puede', title: 'Lo que un Cleric 11 NO puede', section: 'Juego', order: 3, summary: 'Resurrection, Regenerate, Greater Restoration: PNJ de la metrópolis.', tags: ['límites', 'PNJ'], from: [{ file: 'ficha', heading: '## 12.' }] },
  { slug: 'consultas-al-dm', title: 'Rulings del DM y reglas de la mesa', section: 'Juego', order: 4, summary: 'Aura una sola activación, Faith\'s Reach sin tirada, +25 % de crafteo, Mythic Domain recarga todo.', tags: ['DM', 'mesa', 'rulings'], from: [{ file: 'ficha', heading: '## 13.' }] },
  { slug: 'channel-energy', title: 'Channel Energy: texto aplicado', section: 'Clase', order: 10, summary: 'Estallido de 30 pies, usos, DC, Selective, Quick y Reactive.', tags: ['channel', 'clase'], from: [{ file: 'dossier', heading: '### 1.4' }] },
  { slug: 'dominios-y-ranura', title: 'Dominios y ranura de dominio', section: 'Clase', order: 11, summary: 'Qué va en la ranura [D], qué no se convierte, poderes de Healing y Glory.', tags: ['dominio', 'ranuras'], from: [{ file: 'dossier', heading: '### 1.5' }, { file: 'dossier', heading: '### 3.2' }] },
  { slug: 'preparacion-y-conversion', title: 'Preparación divina, DC y conversión espontánea', section: 'Clase', order: 12, summary: 'Cómo se preparan los conjuros, DC 18-24, cures espontáneos, orisons.', tags: ['conjuros', 'preparación', 'DC'], from: [{ file: 'dossier', heading: '### 1.6' }, { file: 'dossier', heading: '### 1.7' }, { file: 'dossier', heading: '### 1.8' }] },
  { slug: 'matematica-de-la-curacion', title: 'Las reglas que gobiernan las cuentas de curación', section: 'Curación', order: 20, summary: 'Healer\'s Blessing ×1,5, Blessed Touch +1, qué no se empodera, ranuras por combinación.', tags: ['curación', 'matemática'], from: [{ file: 'dossier', heading: '### 2.1' }, { file: 'dossier', heading: '### 2.2' }] },
  { slug: 'curacion-por-accion', title: 'Tabla maestra: curación por acción a CL 11', section: 'Curación', order: 21, summary: 'Media y máximo por objetivo de cada opción, con ejemplos de cuenta.', tags: ['curación', 'tabla'], from: [{ file: 'dossier', heading: '### 2.3' }, { file: 'dossier', heading: '### 2.4' }] },
  { slug: 'coste-por-pg', title: 'Coste por punto de golpe fuera de combate', section: 'Curación', order: 22, summary: 'Qué gastar cuando no hay prisa: varita, channel, descanso.', tags: ['curación', 'economía'], from: [{ file: 'dossier', heading: '### 2.5' }] },
  { slug: 'mitico-base', title: 'Habilidades míticas base (tier 3)', section: 'Mítico', order: 30, summary: 'Hard to Kill, Mythic Power, Surge, Amazing Initiative, Recuperation.', tags: ['mítico', 'hierophant'], from: [{ file: 'dossier', heading: '### 7.3' }, { file: 'dossier', heading: '### 3.5' }] },
  { slug: 'hierophant', title: 'Habilidades de senda Hierophant', section: 'Mítico', order: 31, summary: 'Inspired Spell, Relentless Healing, Mythic Domain, Faith\'s Reach y las demás.', tags: ['mítico', 'hierophant'], from: [{ file: 'dossier', heading: '### 7.4' }] },
  { slug: 'dotes-miticas', title: 'Dotes míticas relevantes', section: 'Mítico', order: 32, summary: 'Mythic Spell Lore, Extra Path Ability, Dual Path y las trampas.', tags: ['mítico', 'dotes'], from: [{ file: 'dossier', heading: '### 7.5' }] },
  { slug: 'conjuros-miticos', title: 'Conjuros míticos', section: 'Mítico', order: 33, summary: 'Mythic Heal 165, Mythic Breath of Life, Mythic Blessing of Fervor y qué cuesta cada uno.', tags: ['mítico', 'conjuros'], from: [{ file: 'dossier', heading: '### 7.6' }] },
  { slug: 'presupuesto-mitico', title: 'Presupuesto de poder mítico en un día difícil', section: 'Mítico', order: 34, summary: 'Cómo repartir 9 usos entre dos combates grandes.', tags: ['mítico', 'presupuesto'], from: [{ file: 'dossier', heading: '### 7.7' }] },
  { slug: 'nada-que-curar', title: 'Qué hacer cuando no hay nada que curar', section: 'Juego', order: 5, summary: 'Buffer y control: qué lanzar cuando todos están enteros.', tags: ['táctica', 'buffs', 'control'], from: [{ file: 'dossier', heading: '### 8.1' }, { file: 'dossier', heading: '### 8.2' }, { file: 'dossier', heading: '### 8.3' }] },
  { slug: 'conjuros-que-no-tiene', title: 'Conjuros que la gente cree que tiene el clérigo y NO', section: 'Clase', order: 13, summary: 'Haste, Fly, Barkskin, Mage Armor, Stoneskin, Teleport… no están en la lista.', tags: ['conjuros', 'mitos'], from: [{ file: 'dossier', heading: '### 6.10' }] },
  { slug: 'consumibles-reglas', title: 'Varitas, pergaminos, pociones y varas: reglas', section: 'Equipo', order: 40, summary: 'Cargas, CL, prueba de CL en pergaminos, política de consumibles.', tags: ['equipo', 'consumibles'], from: [{ file: 'dossier', heading: '### 9.2' }, { file: 'dossier', heading: '### 9.7' }] },
  { slug: 'hero-points', title: 'Hero Points', section: 'Mesa', order: 50, summary: 'Los 9 usos, 1 por asalto, Cheat Death (2), cómo se ganan.', tags: ['hero points', 'mesa'], from: [{ file: 'dossier', heading: '### 11.1' }] },
  { slug: 'morir-moribundo-estable', title: 'Morir, moribundo, estable', section: 'Emergencias', order: 60, summary: 'Disabled, dying, dead, daño masivo, coup de grace, Hard to Kill.', tags: ['emergencias', 'muerte'], from: [{ file: 'dossier', heading: '### 12.1' }] },
  { slug: 'umbral-breath-of-life', title: 'Breath of Life, Hard to Kill y Relentless Healing: el umbral', section: 'Emergencias', order: 61, summary: 'Cuándo revive cada opción y el protocolo "un aliado cae".', tags: ['emergencias', 'revivir', 'protocolo'], from: [{ file: 'dossier', heading: '### 12.2' }] },
  { slug: 'lanzar-amenazado', title: 'Lanzar amenazado', section: 'Emergencias', order: 62, summary: 'Ataques de oportunidad, lanzar a la defensiva (65-95 %), qué provoca y qué no.', tags: ['combate', 'concentración'], from: [{ file: 'dossier', heading: '### 12.3' }] },
  { slug: 'aflicciones', title: 'Aflicciones y condiciones: qué cura cada conjuro', section: 'Emergencias', order: 63, summary: 'Lo que Heal quita y lo que NO (niveles negativos, parálisis, miedo).', tags: ['condiciones', 'curación'], from: [{ file: 'dossier', heading: '### 12.4' }] },
  { slug: 'recuperacion-del-dia', title: 'Recuperación del poder mítico y del día', section: 'Emergencias', order: 64, summary: 'Qué vuelve con el descanso, con Recuperation y con Mythic Domain.', tags: ['descanso', 'mítico'], from: [{ file: 'dossier', heading: '### 12.5' }] },
  { slug: 'bloque-defensivo', title: 'Bloque defensivo esperado contra CR 11-13', section: 'Emergencias', order: 65, summary: 'CA, salvaciones y pg frente a lo que pega un CR 12.', tags: ['defensa'], from: [{ file: 'dossier', heading: '### 12.6' }] },
  { slug: 'mitos-desmentidos', title: 'Mitos frecuentes y el veredicto de AoN', section: 'Método', order: 70, summary: 'Lo que "todo el mundo sabe" y es de 3.5 o inventado.', tags: ['mitos', 'AoN'], from: [{ file: 'dossier', heading: '### 13.3' }] },
];

const NOTE = '> Texto importado de la investigación (16/09/2026), escrito antes de cerrar la ficha: donde diga Con 16 / muerte a −32 / compra por 25 puntos, mandan la **ficha v3** (Con 18, muerte a **−36**, compra 20) y los rulings del DM.\n\n';

function extract(md: string, heading: string): string {
  const lines = md.split(/\r?\n/);
  const level = heading.match(/^#+/)![0].length;
  const start = lines.findIndex((l) => l.startsWith(heading + ' ') || l === heading);
  if (start < 0) throw new Error(`No se encontró ${heading}`);
  let end = lines.length;
  for (let i = start + 1; i < lines.length; i++) {
    const m = /^(#{1,6}) /.exec(lines[i]!);
    if (m && m[1]!.length <= level) { end = i; break; }
    if (lines[i]!.trim() === '---' && level <= 2) { end = i; break; }
  }
  const title = lines[start]!.replace(/^#+\s*/, '').replace(/^\d+(\.\d+)?\.?\s*/, '');
  const body = lines.slice(start + 1, end).join('\n').trim();
  return `### ${title}\n\n${body}\n`;
}

/** Convierte "[AoN] https://url" y URLs sueltas en links markdown; escapa llaves para MDX-safe. */
function linkify(text: string): string {
  return text
    .replace(/\[AoN\]\s+(https?:\/\/[^\s)]+)/g, (_m, url) => `[AoN ↗](${url})`)
    .replace(/(^|\s)(https?:\/\/(?:www\.)?(?:aonprd\.com|paizo\.com)[^\s)>\]]*)/g, (_m, pre, url) => `${pre}[${url.includes('aonprd') ? 'AoN ↗' : 'paizo.com ↗'}](${url})`)
    .replace(/`https?:\/\/[^`]+`/g, (m) => m); // URLs en código quedan como están
}

function main() {
  const dossier = readFileSync(DOSSIER, 'utf8');
  const ficha = readFileSync(FICHA, 'utf8');
  if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });
  let n = 0;
  for (const e of ENTRIES) {
    const parts = e.from.map((f) => extract(f.file === 'dossier' ? dossier : ficha, f.heading));
    const body = linkify(parts.join('\n\n'));
    const fm = [
      '---',
      `title: ${JSON.stringify(e.title)}`,
      `section: ${JSON.stringify(e.section)}`,
      `order: ${e.order}`,
      `summary: ${JSON.stringify(e.summary)}`,
      `tags: ${JSON.stringify(e.tags)}`,
      `source: ${JSON.stringify(e.from.map((f) => `${f.file}:${f.heading}`).join(', '))}`,
      '---',
      '',
    ].join('\n');
    writeFileSync(resolve(OUT, `${e.slug}.md`), fm + (e.from[0]!.file === 'dossier' ? NOTE : '') + body, 'utf8');
    n++;
  }
  console.log(`Escritas ${n} entradas en ${OUT}`);
}

main();
