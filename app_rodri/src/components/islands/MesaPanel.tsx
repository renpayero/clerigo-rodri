import { useStore } from '@nanostores/preact';
import { $snapshot, initSnapshot } from './store';
import type { StateSnapshot } from '@/lib/snapshot';
import { HpPanel } from './HpPanel';
import { ResourceCounters } from './ResourceCounters';
import { ActionBar } from './ActionBar';
import { RoundTicker } from './RoundTicker';
import { BuffTracker } from './BuffTracker';
import { AlliesBar } from './AlliesBar';
import { EventLog } from './EventLog';
import { DiceRoller } from './DiceRoller';

/** Isla raíz de la Mesa: comparte el snapshot con HeaderStatus vía nanostores. */
export function MesaPanel({ snapshot }: { snapshot: StateSnapshot }) {
  initSnapshot(snapshot);
  const snap = useStore($snapshot) ?? snapshot;
  return (
    <div class="mesa">
      <div class="mesa-col">
        <HpPanel snap={snap} />
        <RoundTicker snap={snap} />
        <ActionBar snap={snap} />
        <EventLog snap={snap} />
        <DiceRoller snap={snap} />
      </div>
      <div class="mesa-col">
        <ResourceCounters snap={snap} />
        <BuffTracker snap={snap} />
        <AlliesBar snap={snap} />
      </div>
    </div>
  );
}
export default MesaPanel;
