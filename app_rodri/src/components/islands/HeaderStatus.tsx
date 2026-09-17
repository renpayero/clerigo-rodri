import { useEffect } from 'preact/hooks';
import { useStore } from '@nanostores/preact';
import { $snapshot, $offline, initSnapshot, startPolling } from './store';
import type { StateSnapshot } from '@/lib/snapshot';
import { maxHp, deathThreshold } from '@/lib/rules/derived';
import { hpState } from '@/lib/rules/hp';

/** Resumen permanente en el header: pg, channels, poder mítico, asalto. Arranca el polling. */
export function HeaderStatus({ snapshot }: { snapshot: StateSnapshot }) {
  initSnapshot(snapshot);
  const snap = useStore($snapshot) ?? snapshot;
  const offline = useStore($offline);
  useEffect(() => {
    startPolling();
  }, []);

  const c = snap.character;
  const r = snap.resources;
  const critical = hpState(c.hpCurrent, deathThreshold()) !== 'ok';
  return (
    <>
      <a href="/" class={`hs-chip ${critical ? 'is-alert' : ''}`} title="Puntos de golpe">
        <span class="hs-label">pg</span>
        <b>{c.hpCurrent}</b>
        <span class="hs-max">/{maxHp()}</span>
        {c.hpTemp > 0 && <span class="hs-max">+{c.hpTemp}</span>}
      </a>
      <span class={`hs-chip ${(r.channel?.current ?? 0) === 0 ? 'is-alert' : ''}`} title="Channel Energy">
        <span class="hs-label">ch</span>
        <b>{r.channel?.current ?? 0}</b>
      </span>
      <span class={`hs-chip ${(r.mythic_power?.current ?? 0) === 0 ? 'is-alert' : ''}`} title="Poder mítico">
        <span class="hs-label">pm</span>
        <b>{r.mythic_power?.current ?? 0}</b>
      </span>
      {c.combatActive && (
        <span class="hs-chip is-solid" title="Asalto de combate">
          <span class="hs-label">as.</span>
          <b>{c.round}</b>
        </span>
      )}
      {offline && (
        <span class="hs-chip is-alert" title="Sin conexión con el servidor">
          ⚠
        </span>
      )}
    </>
  );
}
export default HeaderStatus;
