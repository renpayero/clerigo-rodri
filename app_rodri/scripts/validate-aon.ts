/**
 * Valida las URLs de AoN de src/data: descarga cada página (3 en paralelo, 400 ms entre pedidos)
 * y comprueba que exista y que contenga el nombre del elemento. Escribe scripts/out/aon-report.json.
 *   npx tsx scripts/validate-aon.ts            → todas
 *   npx tsx scripts/validate-aon.ts --unverified → solo las marcadas verified:false
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { allTerms } from '../src/data';

type Entry = { id: string; name: string; url: string; verified: boolean; kind: string };
type Result = Entry & { status: number | 'error'; ok: boolean; foundName: boolean; note?: string };

const onlyUnverified = process.argv.includes('--unverified');
const entries: Entry[] = [];
const seen = new Set<string>();
for (const t of allTerms()) {
  if (!t.aon) continue;
  if (onlyUnverified && t.aon.verified) continue;
  if (seen.has(t.aon.url)) continue;
  seen.add(t.aon.url);
  entries.push({ id: t.id, name: t.name, url: t.aon.url, verified: t.aon.verified, kind: t.kind });
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const strip = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

async function check(e: Entry): Promise<Result> {
  try {
    const res = await fetch(e.url, { headers: { 'user-agent': 'rodri-companion/0.1 (validador de fuentes; contacto: jugador)' }, redirect: 'follow' });
    const html = await res.text();
    const text = strip(html.replace(/<[^>]+>/g, ' '));
    // AoN devuelve 200 aun sin resultados; buscamos el nombre (o su primera palabra significativa).
    const words = strip(e.name).replace(/[()+×,'’.:]/g, ' ').split(/\s+/).filter((w) => w.length > 3);
    const skipName = e.kind === 'glosario' || e.kind === 'recurso' || /Rules\.aspx|SpecialMaterials|FAQs\.aspx|paizo\.com/.test(e.url);
    const foundName = skipName || words.length === 0 || words.slice(0, 4).some((w) => text.includes(w));
    const empty = !/FAQs\.aspx/.test(e.url) && (/no results|not found/.test(text) || html.length < 4000);
    return { ...e, status: res.status, ok: res.ok && foundName && !empty, foundName, note: empty ? 'página vacía' : undefined };
  } catch (err) {
    return { ...e, status: 'error', ok: false, foundName: false, note: String(err) };
  }
}

const results: Result[] = [];
const queue = [...entries];
async function worker() {
  while (queue.length) {
    const e = queue.shift()!;
    results.push(await check(e));
    process.stdout.write(`\r${results.length}/${entries.length}`);
    await sleep(400);
  }
}
await Promise.all([worker(), worker(), worker()]);
console.log();

mkdirSync('scripts/out', { recursive: true });
writeFileSync('scripts/out/aon-report.json', JSON.stringify(results, null, 2));

const bad = results.filter((r) => !r.ok);
console.log(`\n${results.length} URLs comprobadas · ${results.length - bad.length} OK · ${bad.length} con problemas`);
for (const r of bad) console.log(`  ✗ ${r.id} (${r.name}) → ${r.status} ${r.foundName ? '' : '[nombre no encontrado]'} ${r.note ?? ''}\n     ${r.url}`);
const unverifiedOk = results.filter((r) => r.ok && !r.verified);
if (unverifiedOk.length) console.log(`\n${unverifiedOk.length} URLs marcadas verified:false que SÍ responden bien (pasar a verified:true):\n` + unverifiedOk.map((r) => `  ${r.id}`).join('\n'));
process.exit(bad.length ? 1 : 0);
