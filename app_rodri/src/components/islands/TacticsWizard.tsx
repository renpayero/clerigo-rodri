import { useMemo, useState } from 'preact/hooks';
import { actions } from 'astro:actions';
import { useStore } from '@nanostores/preact';
import { $snapshot, $busy, initSnapshot } from './store';
import { runAction } from './useAction';
import type { StateSnapshot } from '@/lib/snapshot';
import { recommend, autoInput, type TacticsInput, type TacticsSnap, type Recommendation, type Condition } from '@/lib/rules/tactics';
import { maxHp } from '@/lib/rules/derived';

const ACTION_LABEL = { swift: 'Rápida', standard: 'Estándar', move: 'Movimiento', immediate: 'Inmediata (reserva)', free: 'Gratuita' } as const;
const CONDITIONS: { v: Condition; l: string }[] = [
  { v: 'none', l: 'Ninguna' }, { v: 'paralizado', l: 'Paralizado' }, { v: 'cegado', l: 'Cegado' }, { v: 'aterrado', l: 'Aterrado' }, { v: 'agarrado', l: 'Agarrado' },
  { v: 'dominado', l: 'Dominado' }, { v: 'envenenado', l: 'Envenenado' }, { v: 'nivel_negativo', l: 'Nivel negativo' }, { v: 'fatigado', l: 'Fatigado / exhausto' }, { v: 'enfermo', l: 'Enfermo' }, { v: 'maldito', l: 'Maldito' },
];

function toTacticsSnap(s: StateSnapshot): TacticsSnap {
  return {
    resources: s.resources,
    slots: s.slots.map((x) => ({ id: x.id, level: x.level, isDomain: x.isDomain, spellId: x.spellId, status: x.status, disabled: x.disabled })),
    activeBuffKeys: s.buffs.filter((b) => b.status === 'active').map((b) => b.buffKey),
    auraActive: s.character.auraActive,
    combatActive: s.character.combatActive,
    round: s.character.round,
    allies: s.allies.filter((a) => a.active).map((a) => ({ id: a.id, name: a.name, hpCurrent: a.hpCurrent, maxHp: a.maxHp, downState: a.downState, diedRound: a.diedRound, frontLine: a.frontLine })),
    ownHp: s.character.hpCurrent,
    ownMaxHp: maxHp(),
  };
}

/** Asistente táctico: 4 preguntas (precargadas desde la Mesa) → tarjetas por tipo de acción con "Ejecutar". */
export function TacticsWizard({ snapshot }: { snapshot: StateSnapshot }) {
  initSnapshot(snapshot);
  const snap = useStore($snapshot) ?? snapshot;
  const busy = useStore($busy);
  const ts = useMemo(() => toTacticsSnap(snap), [snap]);
  const auto = useMemo(() => autoInput(ts), [ts]);
  const [over, setOver] = useState<Partial<TacticsInput>>({});
  const input: TacticsInput = { ...auto, ...over };
  const plan = useMemo(() => recommend(input, ts), [input, ts]);
  const allies = ts.allies;
  const toggleIn = (key: 'lowAllies' | 'downAllies' | 'deadRecent' | 'deadLate', id: number) =>
    setOver((o) => {
      const cur = (o[key] ?? auto[key]) as number[];
      const next = cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id];
      return { ...o, [key]: next };
    });

  async function exec(r: Recommendation) {
    const e = r.exec;
    if (!e) return;
    switch (e.kind) {
      case 'aura_on': return runAction(actions.domain.toggleAura, { on: true });
      case 'channel': return runAction(actions.channel.use, { mode: e.mode, excluded: 0, undead: false });
      case 'cast': return runAction(actions.spells.cast, { slotId: e.slotId, targets: [], mythic: r.title.startsWith('Mythic'), augmented: false, extend: false, activateBuff: true });
      case 'inspired': return runAction(actions.spells.inspired, { spellId: e.spellId, targets: [], mythic: !!e.mythic, augmented: false, extend: false, activateBuff: true });
      case 'relentless': return runAction(actions.mythic.relentlessHealing, { allyId: e.allyId, healAmount: e.heal });
      case 'rebuke': return runAction(actions.domain.rebukeDeath, {});
      case 'go': window.location.href = e.href; return;
    }
  }

  const groups = (['swift', 'standard', 'move', 'immediate', 'free'] as const).map((a) => ({ a, items: plan.recommendations.filter((r) => r.action === a) })).filter((g) => g.items.length);

  return (
    <div class="stack tactics">
      <section class="card card--tint">
        <h2 class="section-title">Situación {snap.character.combatActive ? `· asalto ${snap.character.round}` : '· fuera de combate'}</h2>
        <div class="tq">
          <div class="tq-row">
            <span class="tq-label">¿Bajo el 40 %?</span>
            <div class="btn-row">{allies.map((a) => <button key={a.id} type="button" class={`btn btn--sm ${input.lowAllies.includes(a.id) ? 'is-active' : ''}`} onClick={() => toggleIn('lowAllies', a.id)}>{a.name}{a.maxHp && a.hpCurrent !== null ? ` ${a.hpCurrent}/${a.maxHp}` : ''}</button>)}</div>
          </div>
          <div class="tq-row">
            <span class="tq-label">¿A 0 o menos (vivo)?</span>
            <div class="btn-row">{allies.map((a) => <button key={a.id} type="button" class={`btn btn--sm ${input.downAllies.includes(a.id) ? 'is-active' : ''}`} onClick={() => toggleIn('downAllies', a.id)}>{a.name}</button>)}</div>
          </div>
          <div class="tq-row">
            <span class="tq-label">¿Murió este asalto o el anterior?</span>
            <div class="btn-row">{allies.map((a) => <button key={a.id} type="button" class={`btn btn--sm ${input.deadRecent.includes(a.id) ? 'is-active' : ''}`} onClick={() => toggleIn('deadRecent', a.id)}>{a.name}</button>)}</div>
          </div>
          <div class="tq-row">
            <span class="tq-label">¿Hace 2 asaltos o por efecto de muerte?</span>
            <div class="btn-row">{allies.map((a) => <button key={a.id} type="button" class={`btn btn--sm ${input.deadLate.includes(a.id) ? 'is-active' : ''}`} onClick={() => toggleIn('deadLate', a.id)}>{a.name}</button>)}</div>
          </div>
          <div class="tq-row">
            <span class="tq-label">¿Condición que anula a un DPS?</span>
            <select class="input" value={input.condition} onChange={(e) => setOver((o) => ({ ...o, condition: (e.target as HTMLSelectElement).value as Condition }))}>
              {CONDITIONS.map((c) => <option key={c.v} value={c.v}>{c.l}</option>)}
            </select>
          </div>
          <div class="tq-row">
            <span class="tq-label">Contexto</span>
            <div class="btn-row">
              <button type="button" class={`btn btn--sm ${input.bigFight ? 'is-active' : ''}`} onClick={() => setOver((o) => ({ ...o, bigFight: !input.bigFight }))}>Combate grande (mítico)</button>
              <button type="button" class={`btn btn--sm ${input.bossHitsHard ? 'is-active' : ''}`} onClick={() => setOver((o) => ({ ...o, bossHitsHard: !input.bossHitsHard }))}>Jefe pega 50+/asalto</button>
              <button type="button" class={`btn btn--sm ${input.threatened ? 'is-active' : ''}`} onClick={() => setOver((o) => ({ ...o, threatened: !input.threatened }))}>Estoy amenazada</button>
              <button type="button" class={`btn btn--sm ${input.arcaneHaste ? 'is-active' : ''}`} onClick={() => setOver((o) => ({ ...o, arcaneHaste: !input.arcaneHaste }))}>Hay haste arcano</button>
            </div>
          </div>
        </div>
        <p class="help">Aura {snap.character.auraActive ? 'ACTIVA' : 'apagada'} · Fervor {ts.activeBuffKeys.includes('blessing-of-fervor') ? 'activo' : 'no'} · PM {ts.resources.mythic_power?.current ?? 0} · channel {ts.resources.channel?.current ?? 0}. Las respuestas se precargan desde la Mesa; tocá para corregir.</p>
      </section>

      {plan.warnings.length > 0 && (
        <section class="card tactics-warn">
          <ul>{plan.warnings.map((w) => <li key={w}>{w}</li>)}</ul>
        </section>
      )}

      {groups.map((g) => (
        <section key={g.a} class="card">
          <h2 class="section-title">{ACTION_LABEL[g.a]}</h2>
          <div class="rec-list">
            {g.items.map((r, i) => (
              <div key={`${g.a}-${i}`} class={`rec ${r.available ? '' : 'is-unavailable'} ${i === 0 && r.available ? 'is-top' : ''}`}>
                <div class="rec-head">
                  <b>{r.title}</b>
                  {r.numbers && <span class="mono rec-num">{r.numbers}</span>}
                </div>
                <p class="rec-detail">{r.detail}</p>
                <div class="rec-foot">
                  <span class="help">{r.cost ?? ''}{!r.available && r.reason ? ` · ${r.reason}` : ''}</span>
                  {r.exec && r.available && <button type="button" class={`btn btn--sm ${i === 0 ? 'btn--primary' : ''}`} disabled={busy} onClick={() => exec(r)}>{r.exec.kind === 'go' ? 'Ir' : 'Ejecutar'}</button>}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
export default TacticsWizard;
