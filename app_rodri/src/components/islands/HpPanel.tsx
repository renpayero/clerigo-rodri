import { useState } from 'preact/hooks';
import { actions } from 'astro:actions';
import { useStore } from '@nanostores/preact';
import { $busy } from './store';
import { runAction } from './useAction';
import { Sheet } from './Sheet';
import type { StateSnapshot } from '@/lib/snapshot';
import { maxHp, deathThreshold } from '@/lib/rules/derived';
import { hpState, hpStateLabel, nonlethalState, reactiveHealingApplies, percent } from '@/lib/rules/hp';
import { channelAverage } from '@/lib/rules/healing';
import { Term } from '@/components/Term';

const MAX = maxHp();
const DEATH = deathThreshold();

/** Pg con barra (marcas 40 % / 0 / −36), botones rápidos y hoja de "daño entrante" con Reactive Healing. */
export function HpPanel({ snap }: { snap: StateSnapshot }) {
  const busy = useStore($busy);
  const c = snap.character;
  const st = hpState(c.hpCurrent, DEATH);
  const nl = nonlethalState(c.hpCurrent, c.hpNonlethal);
  const pct = percent(c.hpCurrent, MAX);
  const negPct = c.hpCurrent < 0 ? Math.min(100, Math.round((-c.hpCurrent / -DEATH) * 100)) : 0;
  const [sheet, setSheet] = useState<'none' | 'incoming' | 'free'>('none');
  const [amount, setAmount] = useState('');
  const [kind, setKind] = useState<'damage' | 'heal' | 'temp' | 'nonlethal' | 'set'>('damage');
  const [reactive, setReactive] = useState(false);

  const adjust = (delta: number, k: 'damage' | 'heal') => runAction(actions.hp.adjust, { delta, kind: k });

  const dmg = Number(amount) || 0;
  const reactiveOk = dmg > 0 && reactiveHealingApplies(c.hpCurrent, c.hpTemp, dmg);
  const canReactive = reactiveOk && (snap.resources.channel?.current ?? 0) >= 1 && (snap.resources.immediate_action?.current ?? 0) >= 1;

  async function submitIncoming(e: Event) {
    e.preventDefault();
    if (dmg <= 0) return;
    const r = await runAction(actions.hp.incomingDamage, { damage: dmg, reactiveHealing: reactive && canReactive });
    if (r) { setSheet('none'); setAmount(''); setReactive(false); }
  }
  async function submitFree(e: Event) {
    e.preventDefault();
    const n = Number(amount);
    if (!Number.isFinite(n)) return;
    const r = await runAction(actions.hp.adjust, { delta: kind === 'set' ? n : Math.abs(n), kind });
    if (r) { setSheet('none'); setAmount(''); }
  }

  return (
    <section class={`card hp mesa-hp ${st !== 'ok' || nl === 'unconscious' ? 'is-alert' : ''}`} aria-labelledby="hp-title">
      <div class="hp-head">
        <h2 id="hp-title" class="section-title">
          <Term k="hit-points" name="Puntos de golpe" tip={`Máximo ${MAX}. Muerte a ${DEATH} (Hard to Kill: −2 × Con). Bajo 0 quedás inconsciente pero estable automáticamente.`}>Puntos de golpe</Term>
        </h2>
        <span class={`badge ${st !== 'ok' || nl === 'unconscious' ? 'badge--alert' : ''}`}>{st !== 'ok' ? hpStateLabel(st) : nl === 'unconscious' ? 'Inconsciente (no letal)' : nl === 'staggered' ? 'Tambaleante (no letal)' : 'OK'}</span>
      </div>
      <div class="hp-value" aria-live="polite">
        <b>{c.hpCurrent}</b>
        <span class="hp-max">/ {MAX}</span>
        {c.hpTemp > 0 && <span class="hp-extra" title="Pg temporales">+{c.hpTemp} temp</span>}
        {c.hpNonlethal > 0 && <span class="hp-extra" title="Daño no letal">{c.hpNonlethal} no letal</span>}
      </div>
      <div class="hp-bar" role="img" aria-label={`${pct} % de los pg`}>
        <i class="hp-fill" style={`width:${pct}%`} />
        <i class="hp-mark" style="left:40%" title="40 %: umbral de la táctica" />
        {c.hpCurrent < 0 && <i class="hp-neg" style={`width:${negPct}%`} />}
      </div>
      <div class="hp-scale"><span>{DEATH}</span><span>0</span><span>40 %</span><span>{MAX}</span></div>

      <div class="btn-row hp-quick">
        {[-1, -5, -10, -20].map((d) => (
          <button key={d} type="button" class="btn" disabled={busy} onClick={() => adjust(d, 'damage')}>{d}</button>
        ))}
        {[5, 10].map((d) => (
          <button key={d} type="button" class="btn" disabled={busy} onClick={() => adjust(d, 'heal')}>+{d}</button>
        ))}
      </div>
      <div class="btn-row hp-more">
        <button type="button" class="btn btn--danger" disabled={busy} onClick={() => setSheet('incoming')}>Daño entrante…</button>
        <button type="button" class="btn" disabled={busy} onClick={() => { setKind('heal'); setSheet('free'); }}>Curar / ajustar…</button>
      </div>
      {c.conditions?.length > 0 && (
        <p class="hp-conditions">Condiciones: {c.conditions.map((x) => <span key={x} class="badge">{x}</span>)}</p>
      )}

      <Sheet open={sheet === 'incoming'} title="Daño entrante" onClose={() => setSheet('none')}>
        <form class="stack" onSubmit={submitIncoming}>
          <label class="field">
            <span>Daño del golpe</span>
            <input class="input" type="number" inputMode="numeric" min={1} max={500} value={amount} onInput={(e) => setAmount((e.target as HTMLInputElement).value)} autoFocus />
          </label>
          <p class="help">Te dejaría en <b>{c.hpCurrent + c.hpTemp - dmg}</b> pg.</p>
          <label class={`check ${!canReactive ? 'is-disabled' : ''}`}>
            <input type="checkbox" checked={reactive} disabled={!canReactive} onChange={(e) => setReactive((e.target as HTMLInputElement).checked)} />
            <span>
              <Term k="reactive-healing" name="Reactive Healing" tip="Inmediata: si un golpe te dejaría a 0 o menos, gastás 1 channel y te curás 8d6 (reroll de los 1, +1) antes de que aplique el daño.">Reactive Healing</Term>
              {' '}(−1 channel, inmediata; ≈ +{channelAverage()})
              {!reactiveOk && dmg > 0 && <small class="help"> · solo si el golpe te deja a 0 o menos</small>}
              {reactiveOk && !canReactive && <small class="help"> · sin channel o sin inmediata este asalto</small>}
            </span>
          </label>
          <button type="submit" class="btn btn--primary" disabled={busy || dmg <= 0}>Aplicar</button>
        </form>
      </Sheet>

      <Sheet open={sheet === 'free'} title="Ajustar pg" onClose={() => setSheet('none')}>
        <form class="stack" onSubmit={submitFree}>
          <div class="segmented" role="radiogroup" aria-label="Tipo">
            {(['heal', 'damage', 'temp', 'nonlethal', 'set'] as const).map((k) => (
              <button key={k} type="button" role="radio" aria-checked={kind === k} onClick={() => setKind(k)}>
                {{ heal: 'Curar', damage: 'Daño', temp: 'Temporales', nonlethal: 'No letal', set: 'Fijar' }[k]}
              </button>
            ))}
          </div>
          <label class="field">
            <span>Cantidad</span>
            <input class="input" type="number" inputMode="numeric" value={amount} onInput={(e) => setAmount((e.target as HTMLInputElement).value)} autoFocus />
          </label>
          <button type="submit" class="btn btn--primary" disabled={busy || amount === ''}>Aplicar</button>
        </form>
      </Sheet>
    </section>
  );
}
