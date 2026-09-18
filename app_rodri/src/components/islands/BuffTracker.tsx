import { useState } from 'preact/hooks';
import { actions } from 'astro:actions';
import { useStore } from '@nanostores/preact';
import { $busy } from './store';
import { runAction } from './useAction';
import { Sheet } from './Sheet';
import type { StateSnapshot } from '@/lib/snapshot';
import { buffs as buffDefs, buffByKey } from '@/data/buffs';
import { durationAt, formatMinutes } from '@/lib/rules/durations';
import { Term } from '@/components/Term';

function fmtRemaining(unit: string, remaining: number | null) {
  if (unit === 'rounds') return `${remaining ?? 0} as.`;
  if (unit === 'minutes') return formatMinutes(remaining ?? 0);
  if (unit === 'permanent') return 'permanente';
  return 'hasta descansar';
}

/** Buffs activos con duración restante, objetivos y expirar; selector rápido para activar uno. */
export function BuffTracker({ snap }: { snap: StateSnapshot }) {
  const busy = useStore($busy);
  const active = snap.buffs.filter((b) => b.status === 'active');
  const [pickOpen, setPickOpen] = useState(false);
  const allyName = (id: number | 'self') => (id === 'self' ? 'Rodri' : (snap.allies.find((a) => a.id === id)?.name ?? `#${id}`));

  return (
    <section class="card mesa-buffs" aria-labelledby="buff-title">
      <div class="row-between">
        <h2 id="buff-title" class="section-title">Buffs activos</h2>
        <button type="button" class="btn btn--sm" disabled={busy} onClick={() => setPickOpen(true)}>+ Activar</button>
      </div>
      {active.length === 0 ? (
        <p class="help">Ninguno. Los conjuros lanzados desde Conjuros aparecen acá con su duración.</p>
      ) : (
        <ul class="buff-list">
          {active.map((b) => {
            const def = buffByKey[b.buffKey];
            const low = (b.unit === 'rounds' && (b.remaining ?? 0) <= 2) || (b.unit === 'minutes' && (b.remaining ?? 0) <= 2);
            return (
              <li key={b.id} class={`buff ${low ? 'is-low' : ''}`}>
                <div class="buff-main">
                  <span class="buff-name">
                    {def ? <Term name={def.name} tip={def.effect} aon={def.aon}>{b.label}</Term> : b.label}
                  </span>
                  <span class="buff-time">{fmtRemaining(b.unit, b.remaining)}</span>
                </div>
                <div class="buff-targets">
                  {b.targets.map((t, i) => (
                    <span key={i} class="badge">
                      {allyName(t.allyId)}
                      {typeof t.remaining === 'number' && b.unit === 'minutes' && ` ${formatMinutes(t.remaining)}`}
                      {typeof t.absorb === 'number' && ` · ${t.absorb} abs.`}
                      {t.energy && ` · ${t.energy}`}
                    </span>
                  ))}
                </div>
                <div class="buff-actions">
                  {b.unit === 'rounds' && (
                    <button type="button" class="btn btn--sm btn--ghost" disabled={busy} title="−1 asalto solo a este buff" onClick={() => runAction(actions.buffs.update, { id: b.id, remaining: Math.max(0, (b.remaining ?? 1) - 1) }, { silent: true })}>−1</button>
                  )}
                  <button type="button" class="btn btn--sm btn--ghost" disabled={busy} onClick={() => runAction(actions.buffs.expire, { id: b.id })}>Expirar</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <BuffPickSheet open={pickOpen} snap={snap} onClose={() => setPickOpen(false)} />
    </section>
  );
}

/** Selector básico: activa un buff por su definición (sin gastar ranura; para eso está Conjuros). */
function BuffPickSheet({ open, snap, onClose }: { open: boolean; snap: StateSnapshot; onClose: () => void }) {
  const busy = useStore($busy);
  const [key, setKey] = useState('');
  const [extend, setExtend] = useState(false);
  const [cl, setCl] = useState<11 | 13>(11);
  const [energy, setEnergy] = useState('fire');
  const [targets, setTargets] = useState<(number | 'self')[]>(['self']);
  const def = buffByKey[key];
  const options = buffDefs.filter((b) => b.duration.kind !== 'instant').sort((a, b) => a.name.localeCompare(b.name));
  const allies = snap.allies.filter((a) => a.active);
  const dur = def ? durationAt(def.duration, cl, extend) : null;
  const durText = dur ? (dur.unit === 'rounds' ? `${dur.amount} asaltos` : dur.unit === 'minutes' ? formatMinutes(dur.amount) : dur.unit) : '';
  const toggleTarget = (t: number | 'self') => setTargets((ts) => (ts.includes(t) ? ts.filter((x) => x !== t) : [...ts, t]));

  return (
    <Sheet open={open} title="Activar buff" onClose={onClose}>
      <div class="stack">
        <label class="field"><span>Efecto</span>
          <select class="input" value={key} onChange={(e) => setKey((e.target as HTMLSelectElement).value)}>
            <option value="">Elegí…</option>
            {options.map((b) => <option key={b.key} value={b.key}>{b.name}</option>)}
          </select>
        </label>
        {def && (
          <>
            <p class="help">{def.effect}</p>
            {def.targets !== 'self' && def.targets !== 'area' && (
              <div class="field"><span>Objetivos</span>
                <div class="btn-row">
                  <button type="button" class={`btn btn--sm ${targets.includes('self') ? 'is-active' : ''}`} onClick={() => toggleTarget('self')}>Rodri</button>
                  {allies.map((a) => <button key={a.id} type="button" class={`btn btn--sm ${targets.includes(a.id) ? 'is-active' : ''}`} onClick={() => toggleTarget(a.id)}>{a.name}</button>)}
                </div>
              </div>
            )}
            {def.energyChoice && (
              <label class="field"><span>Energía</span>
                <select class="input" value={energy} onChange={(e) => setEnergy((e.target as HTMLSelectElement).value)}>
                  {['fire', 'cold', 'electricity', 'acid', 'sonic'].map((x) => <option key={x} value={x}>{x}</option>)}
                </select>
              </label>
            )}
            <div class="btn-row">
              <div class="segmented" role="radiogroup" aria-label="Nivel de lanzador">
                <button type="button" role="radio" aria-checked={cl === 11} onClick={() => setCl(11)}>CL 11</button>
                <button type="button" role="radio" aria-checked={cl === 13} onClick={() => setCl(13)}>CL 13 (Inspired)</button>
              </div>
              {def.source.kind === 'spell' && (def.spellLevel ?? 99) <= 3 && def.duration.kind !== 'permanent' && (
                <label class="check"><input type="checkbox" checked={extend} onChange={(e) => setExtend((e.target as HTMLInputElement).checked)} /><span>×2 Rod of Extend ({snap.resources.rod_extend?.current ?? 0} usos)</span></label>
              )}
            </div>
            <p class="help">Duración: <b>{durText}</b>{def.communalBlockMinutes ? ` repartidos entre ${Math.max(1, targets.length)} objetivos` : ''}.</p>
            <button type="button" class="btn btn--primary" disabled={busy} onClick={async () => {
              const r = await runAction(actions.buffs.activate, { buffKey: key, targets: def.targets === 'self' ? ['self'] : targets, extend, casterLevel: cl, energy: def.energyChoice ? energy : undefined });
              if (r) { setKey(''); setExtend(false); onClose(); }
            }}>Activar</button>
          </>
        )}
      </div>
    </Sheet>
  );
}
