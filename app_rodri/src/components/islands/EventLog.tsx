import { useEffect, useState } from 'preact/hooks';
import { actions } from 'astro:actions';
import { useStore } from '@nanostores/preact';
import { $busy, $snapshot } from './store';
import { runAction } from './useAction';
import type { StateSnapshot } from '@/lib/snapshot';

type Row = { id: number; at: string; kind: string; label: string; undone: boolean; round: number | null; sessionNumber: number | null; roll: unknown };

function fmtTime(iso: string) {
  const d = new Date(iso);
  return d.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
}

/** Último evento + Deshacer; con `full` muestra la lista de los últimos eventos. */
export function EventLog({ snap, full = false, limit = 30 }: { snap: StateSnapshot; full?: boolean; limit?: number }) {
  const busy = useStore($busy);
  const live = useStore($snapshot) ?? snap;
  const [rows, setRows] = useState<Row[]>([]);
  const last = live.lastEvent;

  useEffect(() => {
    if (!full) return;
    let cancelled = false;
    actions.log.recent({ limit }).then(({ data }) => { if (!cancelled && data) setRows(data as Row[]); });
    return () => { cancelled = true; };
  }, [full, live.version, limit]);

  return (
    <section class="card mesa-log" aria-labelledby="log-title">
      <div class="row-between">
        <h2 id="log-title" class="section-title">{full ? 'Historial' : 'Último'}</h2>
        <button type="button" class="btn btn--sm" disabled={busy || !last || last.undone} title="Revierte la última acción (pila estricta)" onClick={() => runAction(actions.log.undoLast, undefined as never)}>↶ Deshacer</button>
      </div>
      {!full && (last ? <p class={`log-last ${last.undone ? 'is-undone' : ''}`}><span class="muted">{fmtTime(last.at)}</span> {last.label}</p> : <p class="help">Todavía no hay acciones.</p>)}
      {full && (
        <ol class="log-list">
          {rows.map((r) => (
            <li key={r.id} class={r.undone ? 'is-undone' : ''}>
              <span class="muted">{fmtTime(r.at)}{r.round ? ` · as. ${r.round}` : ''}</span> {r.label}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
