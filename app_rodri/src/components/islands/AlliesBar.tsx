import { useState } from 'preact/hooks';
import { actions } from 'astro:actions';
import { useStore } from '@nanostores/preact';
import { $busy } from './store';
import { runAction } from './useAction';
import { Sheet } from './Sheet';
import type { StateSnapshot } from '@/lib/snapshot';
import type { AllyRow } from '@/db/schema';
import { belowPercent } from '@/lib/rules/hp';

const DOWN_LABEL: Record<AllyRow['downState'], string> = { ok: '', zero: '≤ 0', dead: 'MUERTO', dead_death_effect: 'EFECTO DE MUERTE' };

/** Pg actuales de los aliados con −/+ y marcado de caído/muerto. */
export function AlliesBar({ snap }: { snap: StateSnapshot }) {
  const busy = useStore($busy);
  const allies = snap.allies.filter((a) => a.active).sort((a, b) => a.sortOrder - b.sortOrder || a.id - b.id);
  const [edit, setEdit] = useState<AllyRow | null>(null);
  const [amount, setAmount] = useState('');
  const round = snap.character.round;

  function status(a: AllyRow) {
    if (a.downState !== 'ok') return { cls: 'is-alert', text: DOWN_LABEL[a.downState] + (a.diedRound !== null && (a.downState === 'dead' || a.downState === 'dead_death_effect') ? ` as. ${a.diedRound}${round - a.diedRound <= 1 ? ' · Relentless OK' : round - a.diedRound === 2 ? ' · solo Mythic BoL' : ''}` : '') };
    if (a.maxHp && a.hpCurrent !== null && belowPercent(a.hpCurrent, a.maxHp, 40)) return { cls: 'is-low', text: 'bajo 40 %' };
    return { cls: '', text: '' };
  }

  return (
    <section class="card mesa-allies" aria-labelledby="allies-title">
      <div class="row-between">
        <h2 id="allies-title" class="section-title">Aliados</h2>
        <a class="btn btn--sm btn--ghost" href="/ajustes#aliados">Editar</a>
      </div>
      {allies.length === 0 ? (
        <p class="help">Sin aliados cargados. Agregalos en Ajustes.</p>
      ) : (
        <div class="allies">
          {allies.map((a) => {
            const s = status(a);
            const pct = a.maxHp && a.hpCurrent !== null ? Math.max(0, Math.min(100, Math.round((a.hpCurrent / a.maxHp) * 100))) : null;
            return (
              <div key={a.id} class={`ally ${s.cls}`}>
                <button type="button" class="ally-name" onClick={() => { setEdit(a); setAmount(''); }} title="Ajustar / marcar estado">
                  <b>{a.name}</b>{a.role && <small> {a.role}</small>}
                </button>
                <div class="ally-hp">
                  <button type="button" class="btn btn--icon btn--sm" aria-label={`${a.name}: −5 pg`} disabled={busy} onClick={() => runAction(actions.allies.adjustHp, { id: a.id, delta: -5 }, { silent: true })}>−5</button>
                  <span class="value">{a.hpCurrent ?? '—'}<span class="max">{a.maxHp ? `/${a.maxHp}` : ''}</span></span>
                  <button type="button" class="btn btn--icon btn--sm" aria-label={`${a.name}: +5 pg`} disabled={busy} onClick={() => runAction(actions.allies.adjustHp, { id: a.id, delta: 5 }, { silent: true })}>+5</button>
                </div>
                {pct !== null && <span class="bar"><i style={`width:${pct}%`} /><i class="mark" /></span>}
                {s.text && <span class="ally-status">{s.text}</span>}
              </div>
            );
          })}
        </div>
      )}
      <Sheet open={!!edit} title={edit?.name ?? ''} onClose={() => setEdit(null)}>
        {edit && (
          <div class="stack">
            <label class="field"><span>Pg (fijar) o cambio (+/−)</span>
              <input class="input" type="number" inputMode="numeric" value={amount} onInput={(e) => setAmount((e.target as HTMLInputElement).value)} placeholder={`actual ${edit.hpCurrent ?? '?'}`} autoFocus />
            </label>
            <div class="btn-row">
              <button type="button" class="btn" disabled={busy || amount === ''} onClick={async () => { const r = await runAction(actions.allies.adjustHp, { id: edit.id, delta: Number(amount), set: true }); if (r) setEdit(null); }}>Fijar en {amount || '…'}</button>
              <button type="button" class="btn" disabled={busy || amount === ''} onClick={async () => { const r = await runAction(actions.allies.adjustHp, { id: edit.id, delta: Number(amount) }); if (r) setEdit(null); }}>Sumar {amount || '…'}</button>
            </div>
            <h4 class="section-title">Estado</h4>
            <div class="btn-row">
              {(['ok', 'zero', 'dead', 'dead_death_effect'] as const).map((st) => (
                <button key={st} type="button" class={`btn btn--sm ${edit.downState === st ? 'is-active' : ''} ${st.startsWith('dead') ? 'btn--danger' : ''}`} disabled={busy} onClick={async () => { const r = await runAction(actions.allies.markDown, { id: edit.id, state: st }); if (r) setEdit(null); }}>
                  {{ ok: 'En pie', zero: '≤ 0 pg (indefenso)', dead: 'Murió este asalto', dead_death_effect: 'Efecto de muerte' }[st]}
                </button>
              ))}
            </div>
            <p class="help">"Murió" habilita Relentless Healing (este asalto o el siguiente). Efecto de muerte → Mythic Breath of Life (2 asaltos).</p>
          </div>
        )}
      </Sheet>
    </section>
  );
}
