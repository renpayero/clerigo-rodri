import { actions } from 'astro:actions';
import { useStore } from '@nanostores/preact';
import { $busy } from './store';
import { runAction } from './useAction';
import type { StateSnapshot } from '@/lib/snapshot';
import { resourceDefs, type ResourceKey } from '@/data/resources';
import type { ResourceDef } from '@/data/types';
import { Term } from '@/components/Term';

const MESA_GROUPS: { title: string; keys: ResourceKey[] }[] = [
  { title: 'Núcleo', keys: ['channel', 'mythic_power', 'hero_points', 'hero_point_temp'] },
  { title: 'Dominios', keys: ['rebuke_death', 'touch_of_glory', 'aura_rounds', 'mythic_domain_recharge'] },
  { title: 'Objetos y raza', keys: ['rod_extend', 'pearl_1st', 'daylight_sla'] },
];

function Counter({ def, snap, compact }: { def: ResourceDef; snap: StateSnapshot; compact?: boolean }) {
  const busy = useStore($busy);
  const r = snap.resources[def.key];
  const cur = r?.current ?? 0;
  const max = r?.maxOverride ?? r?.max ?? def.max;
  const empty = cur === 0 && max > 0;
  const pct = max > 0 ? Math.round((cur / max) * 100) : 0;
  return (
    <div class={`counter ${empty ? 'is-empty' : ''} ${compact ? 'counter--compact' : ''}`}>
      <span class="label">
        <Term name={def.label} tip={def.recoverHint} aon={def.aon}>{def.label}</Term>
      </span>
      <span class="controls">
        <button type="button" class="btn btn--icon btn--sm" aria-label={`${def.label}: gastar 1`} disabled={busy || cur <= 0} onClick={() => runAction(actions.resources.spend, { key: def.key as ResourceKey, n: 1 })}>−</button>
        <span class="value" aria-live="polite">{cur}<span class="max">/{max}</span></span>
        <button type="button" class="btn btn--icon btn--sm" aria-label={`${def.label}: recuperar 1`} disabled={busy || cur >= max} onClick={() => runAction(actions.resources.restore, { key: def.key as ResourceKey, n: 1 })}>+</button>
      </span>
      <span class="bar"><i style={`width:${pct}%`} /></span>
    </div>
  );
}

/** Contadores de recursos con −/+ (tooltip con la regla de recarga y link a AoN). */
export function ResourceCounters({ snap }: { snap: StateSnapshot }) {
  const byKey = Object.fromEntries(resourceDefs.map((d) => [d.key, d])) as Record<string, ResourceDef>;
  const c = snap.character;
  const round = (['amazing_initiative', 'swift_action', 'immediate_action', 'hero_point_round'] as ResourceKey[]).map((k) => ({ def: byKey[k]!, cur: snap.resources[k]?.current ?? 0 }));
  return (
    <section class="card mesa-res" aria-labelledby="res-title">
      <h2 id="res-title" class="section-title">Recursos</h2>
      {MESA_GROUPS.map((g) => (
        <div key={g.title} class="counter-group">
          <h3 class="counter-group-title">{g.title}</h3>
          <div class="counter-grid">
            {g.keys.filter((k) => k !== 'hero_point_temp' || (snap.resources.hero_point_temp?.current ?? 0) > 0).map((k) => (
              <Counter key={k} def={byKey[k]!} snap={snap} />
            ))}
          </div>
        </div>
      ))}
      {c.combatActive && (
        <div class="counter-group">
          <h3 class="counter-group-title">Este asalto</h3>
          <div class="round-flags">
            {round.map(({ def, cur }) => (
              <span key={def.key} class={`badge ${cur > 0 ? 'badge--solid' : ''}`} title={def.recoverHint}>
                {def.label.replace(' (este asalto)', '').replace(' este asalto', '')}: {cur > 0 ? 'libre' : 'usada'}
              </span>
            ))}
            {(c.divineInterferenceUsed?.length ?? 0) > 0 && (
              <span class="badge" title="Divine Interference: 1 vez por criatura y día">DI usada vs {c.divineInterferenceUsed.join(', ')}</span>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
