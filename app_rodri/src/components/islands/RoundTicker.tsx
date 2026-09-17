import { useState } from 'preact/hooks';
import { actions } from 'astro:actions';
import { useStore } from '@nanostores/preact';
import { $busy } from './store';
import { runAction } from './useAction';
import { Sheet } from './Sheet';
import type { StateSnapshot } from '@/lib/snapshot';

/** Iniciar combate · Siguiente asalto · Terminar · Pasó tiempo (fuera de combate). */
export function RoundTicker({ snap }: { snap: StateSnapshot }) {
  const busy = useStore($busy);
  const c = snap.character;
  const [endOpen, setEndOpen] = useState(false);
  const [minutes, setMinutes] = useState('1');
  const activeRoundBuffs = snap.buffs.filter((b) => b.status === 'active' && b.unit === 'rounds').length;

  return (
    <section class={`card round ${c.combatActive ? 'card--tint' : ''}`} aria-labelledby="round-title">
      <div class="round-head">
        <h2 id="round-title" class="section-title">{c.combatActive ? 'Combate' : 'Tiempo'}</h2>
        {c.combatActive && <span class="round-num" aria-live="polite">Asalto <b>{c.round}</b></span>}
      </div>
      {c.combatActive ? (
        <div class="btn-row">
          <button type="button" class="btn btn--primary round-next" disabled={busy} onClick={() => runAction(actions.combat.tickRound, undefined as never)}>
            Siguiente asalto →
            <span class="cost">{c.auraActive ? 'aura −1 · ' : ''}{activeRoundBuffs ? `${activeRoundBuffs} buff${activeRoundBuffs > 1 ? 's' : ''} −1` : 'sin buffs por asaltos'}</span>
          </button>
          <button type="button" class="btn" disabled={busy} onClick={() => setEndOpen(true)}>Terminar combate</button>
        </div>
      ) : (
        <div class="btn-row">
          <button type="button" class="btn btn--primary" disabled={busy} onClick={() => runAction(actions.combat.start, undefined as never)}>Iniciar combate</button>
          {[1, 10, 60, 480].map((m) => (
            <button key={m} type="button" class="btn" disabled={busy} onClick={() => runAction(actions.combat.passTime, { minutes: m })}>
              +{m >= 60 ? `${m / 60} h` : `${m} min`}
            </button>
          ))}
        </div>
      )}
      <Sheet open={endOpen} title="Terminar combate" onClose={() => setEndOpen(false)}>
        <div class="stack">
          <p class="help">Expiran los buffs por asaltos y el Hero Point temporal; la aura se pausa. Si querés, descontá minutos a los buffs por minutos (el combate duró {c.round} asaltos ≈ {Math.ceil(c.round / 10)} min).</p>
          <label class="field"><span>Minutos transcurridos</span><input class="input" type="number" inputMode="numeric" min={0} value={minutes} onInput={(e) => setMinutes((e.target as HTMLInputElement).value)} /></label>
          <button type="button" class="btn btn--primary" disabled={busy} onClick={async () => { const r = await runAction(actions.combat.end, { minutesElapsed: Math.max(0, Number(minutes) || 0) }); if (r) setEndOpen(false); }}>Terminar</button>
        </div>
      </Sheet>
    </section>
  );
}
