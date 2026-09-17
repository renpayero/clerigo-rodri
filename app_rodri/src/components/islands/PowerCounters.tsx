import { useStore } from '@nanostores/preact';
import { $snapshot, initSnapshot } from './store';
import type { StateSnapshot } from '@/lib/snapshot';
import { ResourceCounters } from './ResourceCounters';

/** Contadores de channel, poder mítico y dominios en la página de Poderes (misma isla que la Mesa). */
export function PowerCounters({ snapshot }: { snapshot: StateSnapshot }) {
  initSnapshot(snapshot);
  const snap = useStore($snapshot) ?? snapshot;
  return <ResourceCounters snap={snap} />;
}
export default PowerCounters;
