import { useEffect, useRef, useState } from 'preact/hooks';
import { actions } from 'astro:actions';
import { useStore } from '@nanostores/preact';
import { $busy } from './store';
import { runAction } from './useAction';
import type { AllyRow } from '@/db/schema';
import { parseHpEntry } from '@/lib/rules/hp';

/**
 * Pg de un aliado editables en la Mesa, sin abrir nada: escribís el número y Enter lo fija;
 * con signo (+7, −12) lo suma o resta. Escape cancela.
 */
export function AllyHpInput({ ally }: { ally: AllyRow }) {
  const busy = useStore($busy);
  const current = ally.hpCurrent ?? null;
  const [text, setText] = useState(current === null ? '' : String(current));
  const [editing, setEditing] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const cancelled = useRef(false);

  // Si cambia desde otro lado (otro dispositivo, −5/+5, deshacer) y no lo estoy editando, sigo el valor.
  useEffect(() => {
    if (!editing) setText(current === null ? '' : String(current));
  }, [current, editing]);

  const revert = () => setText(current === null ? '' : String(current));

  /** Al entrar al campo se selecciona el número entero: escribís los pg nuevos encima, sin borrar.
   *  Va en un timeout porque el click coloca el cursor después del focus, y respeta una selección hecha a mano. */
  const selectAllSoon = () => setTimeout(() => {
    const el = ref.current;
    if (el && document.activeElement === el && el.selectionStart === el.selectionEnd) el.select();
  }, 0);

  async function commit() {
    setEditing(false);
    // Escape descarta lo escrito: el blur que dispara no tiene que guardar nada.
    if (cancelled.current) { cancelled.current = false; revert(); return; }
    const entry = parseHpEntry(text, current);
    if (entry.kind === 'none') { revert(); return; }
    const r = await runAction(actions.allies.adjustHp, { id: ally.id, delta: entry.value, set: entry.kind === 'set' }, { silent: true });
    if (!r) revert();
  }

  return (
    <label class="ally-hp-edit" title={`${ally.name}: escribí los pg y Enter; con signo (+7, -12) suma o resta`}>
      <span class="sr-only">Pg de {ally.name}</span>
      <input
        ref={ref}
        class="input ally-hp-field"
        type="text"
        inputMode="numeric"
        autocomplete="off"
        value={text}
        disabled={busy}
        placeholder={current === null ? '?' : ''}
        onFocus={() => { setEditing(true); selectAllSoon(); }}
        onClick={selectAllSoon}
        onInput={(e) => setText((e.target as HTMLInputElement).value)}
        onBlur={commit}
        onKeyDown={(e) => {
          if (e.key === 'Enter') { e.preventDefault(); (e.target as HTMLInputElement).blur(); }
          if (e.key === 'Escape') { cancelled.current = true; revert(); setEditing(false); (e.target as HTMLInputElement).blur(); }
        }}
      />
      {ally.maxHp ? <span class="max">/{ally.maxHp}</span> : null}
    </label>
  );
}
