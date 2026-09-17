import { useState } from 'preact/hooks';
import { actions } from 'astro:actions';
import { useStore } from '@nanostores/preact';
import { $snapshot, $busy, initSnapshot } from './store';
import { runAction } from './useAction';
import type { StateSnapshot } from '@/lib/snapshot';
import { resourceDefs, type ResourceKey } from '@/data/resources';
import { Term } from '@/components/Term';

/** Cargas de varitas, pergaminos, polvo de diamante y consumibles: −/+ (el + sube el máximo si ya está lleno). */
export function Consumables({ snapshot }: { snapshot: StateSnapshot }) {
  initSnapshot(snapshot);
  const snap = useStore($snapshot) ?? snapshot;
  const busy = useStore($busy);
  const defs = resourceDefs.filter((d) => d.group === 'consumable');
  return (
    <section class="card" id="consumibles">
      <h2>Consumibles y cargas</h2>
      <p class="help">No se recuperan con el descanso. "+" sobre un ítem lleno sube el máximo (compraste más).</p>
      <div class="counter-grid">
        {defs.map((d) => {
          const r = snap.resources[d.key];
          const cur = r?.current ?? 0;
          const max = r?.maxOverride ?? d.max;
          return (
            <div key={d.key} class={`counter counter--compact ${cur === 0 ? 'is-empty' : ''}`}>
              <span class="label"><Term name={d.label} tip={d.recoverHint} aon={d.aon}>{d.label}</Term></span>
              <span class="controls">
                <button type="button" class="btn btn--icon btn--sm" aria-label={`${d.label}: gastar 1`} disabled={busy || cur <= 0} onClick={() => runAction(actions.resources.spend, { key: d.key as ResourceKey, n: 1 })}>−</button>
                <span class="value">{cur}<span class="max">/{max}</span></span>
                <button type="button" class="btn btn--icon btn--sm" aria-label={`${d.label}: sumar 1`} disabled={busy} onClick={() => runAction(actions.resources.restore, { key: d.key as ResourceKey, n: 1, maxOverride: cur >= max ? max + 1 : undefined }, { silent: true })}>+</button>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/** Oro actual con ajustes rápidos y nota. */
export function GoldEditor({ snapshot }: { snapshot: StateSnapshot }) {
  initSnapshot(snapshot);
  const snap = useStore($snapshot) ?? snapshot;
  const busy = useStore($busy);
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const n = Number(amount) || 0;
  const go = async (sign: 1 | -1) => {
    const r = await runAction(actions.gold.adjust, { delta: sign * Math.abs(n), note: note || undefined });
    if (r) { setAmount(''); setNote(''); }
  };
  return (
    <section class="card" id="oro">
      <div class="row-between">
        <h2>Oro</h2>
        <span class="stat"><span class="value">{snap.character.gold.toLocaleString('es-AR')} po</span></span>
      </div>
      <form class="row" onSubmit={(e) => { e.preventDefault(); if (n) go(-1); }}>
        <input class="input mono" type="number" inputMode="numeric" min={0} value={amount} onInput={(e) => setAmount((e.target as HTMLInputElement).value)} placeholder="cantidad" style="width: 120px" aria-label="Cantidad de oro" />
        <input class="input" value={note} onInput={(e) => setNote((e.target as HTMLInputElement).value)} placeholder="nota (compra, botín…)" maxLength={120} style="flex: 1; min-width: 160px" aria-label="Nota" />
        <button type="button" class="btn btn--sm" disabled={busy || !n} onClick={() => go(-1)}>Gastar</button>
        <button type="button" class="btn btn--sm" disabled={busy || !n} onClick={() => go(1)}>Ganar</button>
      </form>
    </section>
  );
}
export default Consumables;
