import { useMemo, useState } from 'preact/hooks';

type Item = { slug: string; title: string; section: string; summary: string; tags: string[]; body: string };

const fold = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

function score(item: Item, terms: string[]): number {
  const title = fold(item.title);
  const tags = fold(item.tags.join(' '));
  const summary = fold(item.summary);
  const body = fold(item.body);
  let s = 0;
  for (const t of terms) {
    if (title.includes(t)) s += 10;
    else if (tags.includes(t)) s += 6;
    else if (summary.includes(t)) s += 4;
    else if (body.includes(t)) s += 1;
    else return 0; // todos los términos deben aparecer
  }
  return s;
}

function snippet(body: string, term: string): string {
  const i = fold(body).indexOf(term);
  if (i < 0) return '';
  const start = Math.max(0, i - 60);
  return (start > 0 ? '…' : '') + body.slice(start, i + 90).replace(/\s+/g, ' ') + '…';
}

/** Búsqueda local sin acentos sobre título > tags > resumen > cuerpo. */
export function RulesSearch({ index }: { index: Item[] }) {
  const [q, setQ] = useState('');
  const terms = useMemo(() => fold(q).split(/\s+/).filter((t) => t.length >= 2), [q]);
  const results = useMemo(() => {
    if (!terms.length) return [];
    return index
      .map((it) => ({ it, s: score(it, terms) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 12);
  }, [terms, index]);
  return (
    <div class="rules-search">
      <input
        class="input"
        type="search"
        value={q}
        onInput={(e) => setQ((e.target as HTMLInputElement).value)}
        placeholder="Buscar: mummy rot, coup de grace, Recuperation, niveles negativos…"
        aria-label="Buscar en las reglas"
        autoComplete="off"
      />
      {terms.length > 0 && (
        <ul class="rules-results" aria-live="polite">
          {results.length === 0 && <li class="muted">Sin resultados.</li>}
          {results.map(({ it }) => (
            <li key={it.slug}>
              <a href={`/reglas/${it.slug}`}>
                <b>{it.title}</b> <small class="muted">· {it.section}</small>
              </a>
              <span class="muted">{snippet(it.body, terms[0]!) || it.summary}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default RulesSearch;
