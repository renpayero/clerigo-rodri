import { useState } from 'preact/hooks';
import { actions } from 'astro:actions';
import { useStore } from '@nanostores/preact';
import { $busy } from './store';
import { runAction } from './useAction';
import { Sheet } from './Sheet';
import type { StateSnapshot } from '@/lib/snapshot';
import { canAfford, canSpend } from '@/lib/rules/resources';
import { HERO_POINT_KINDS, heroPointInfo, canUseHeroPoint, type HeroPointKind } from '@/lib/rules/heroPoints';
import { channelAverage, healAmount } from '@/lib/rules/healing';
import { Term } from '@/components/Term';

type SheetKind = 'none' | 'channel' | 'surge' | 'relentless' | 'rebuke' | 'glory' | 'divine' | 'hero' | 'recuperation' | 'domainRecharge';

type Btn = { id: SheetKind | 'amazing' | 'aura'; label: string; cost: string; k?: string; tip: string; check: () => { ok: true } | { ok: false; reason: string }; primary?: boolean };

/** Botonera de acciones con costo; cada una abre una hoja de confirmación o ejecuta directo. */
export function ActionBar({ snap }: { snap: StateSnapshot }) {
  const busy = useStore($busy);
  const [sheet, setSheet] = useState<SheetKind>('none');
  const r = snap.resources;
  const c = snap.character;
  const inCombat = c.combatActive;

  const buttons: Btn[] = [
    { id: 'channel', label: 'Channel', cost: '−1 ch', k: 'channel-energy', tip: `Estándar: 8d6 (reroll 1) +1 a cada aliado a 30 pies (≈ ${channelAverage()}). Quick Channel: lo mismo como acción de movimiento por 2 usos.`, check: () => canAfford(r, 'channel_standard'), primary: true },
    { id: 'rebuke', label: 'Rebuke Death', cost: '−1 uso', k: 'rebuke-death', tip: 'Toque (5 pies, provoca): 1d4+7 solo a una criatura bajo 0 pg.', check: () => canAfford(r, 'rebuke_death') },
    { id: 'aura', label: c.auraActive ? 'Pausar aura' : 'Aura ON', cost: c.auraActive ? '' : '−rápida', k: 'aura-of-heroism', tip: 'Rápida: +2 moral a ataques, salvaciones y habilidades para aliados a 30 pies. Gasta 1 asalto por asalto encendida (DM: se activa una sola vez, no se apaga sola).', check: () => (c.auraActive ? { ok: true } : canSpend(r, 'aura_rounds', 1)) },
    { id: 'surge', label: 'Surge', cost: '−1 PM', k: 'surge', tip: 'Inmediata: +1d6 a una tirada de d20 propia después de tirar.', check: () => canAfford(r, 'surge') },
    { id: 'amazing', label: 'Amazing Initiative', cost: '−1 PM', k: 'amazing-initiative', tip: 'Acción estándar extra este asalto (no puede ser un conjuro): un channel más.', check: () => (inCombat ? canAfford(r, 'amazing_initiative') : { ok: false, reason: 'Solo en combate' }) },
    { id: 'relentless', label: 'Relentless Healing', cost: '−1 PM', k: 'relentless-healing', tip: 'Gratuita al curar a un aliado muerto este asalto o el anterior: si la curación supera sus pg negativos, revive estabilizado.', check: () => canAfford(r, 'relentless_healing') },
    { id: 'glory', label: 'Touch of Glory', cost: '−1 uso', k: 'touch-of-glory', tip: 'Toque: +15 a una prueba de Carisma en la próxima hora.', check: () => canAfford(r, 'touch_of_glory') },
    { id: 'hero', label: 'Hero Point', cost: '−1 / −2', k: 'hero-points', tip: 'Actuar fuera de turno, +8/+4, acción extra, repetir tirada, recuperar conjuro, Cheat Death (2).', check: () => (Object.values(r).length ? { ok: true } : { ok: true }) },
    { id: 'divine', label: 'Divine Interference', cost: '−ranura', k: 'divine-interference', tip: 'Inmediata: sacrificás un conjuro preparado para que un enemigo repita un ataque contra un aliado con −nivel del conjuro. 1/criatura/día.', check: () => canAfford(r, 'divine_interference') },
    { id: 'domainRecharge', label: 'Recarga Mythic Domain', cost: '−1 PM', k: 'mythic-domain', tip: 'Estándar, 1/día: Rebuke Death 11, Touch of Glory 11 y aura 15 asaltos al máximo.', check: () => canAfford(r, 'mythic_domain_recharge') },
    { id: 'recuperation', label: 'Recuperation', cost: '−1 PM · 1 h', k: 'recuperation', tip: '1 hora de descanso: pg a la mitad (mínimo), conjuros y channels como tras 8 h. NO recarga poder mítico.', check: () => (inCombat ? { ok: false, reason: 'Recuperation exige 1 hora de descanso: terminá el combate primero.' } : canAfford(r, 'recuperation')) },
  ];

  async function direct(id: Btn['id']) {
    if (id === 'amazing') return runAction(actions.mythic.amazingInitiative, undefined as never);
    if (id === 'aura') return runAction(actions.domain.toggleAura, { on: !c.auraActive });
    setSheet(id as SheetKind);
  }

  return (
    <section class="card" aria-labelledby="act-title">
      <h2 id="act-title" class="section-title">Acciones</h2>
      <div class="action-grid">
        {buttons.map((b) => {
          const chk = b.check();
          return (
            <button
              key={b.id}
              type="button"
              class={`btn action-btn ${b.primary ? 'btn--primary' : ''} ${b.id === 'aura' && c.auraActive ? 'is-active' : ''}`}
              disabled={busy || !chk.ok}
              title={chk.ok ? b.tip : chk.reason}
              onClick={() => direct(b.id)}
            >
              <span>{b.label}</span>
              {b.cost && <span class="cost">{b.cost}</span>}
            </button>
          );
        })}
      </div>
      <p class="help">Mantené o pasá el mouse para ver el costo y la regla; los deshabilitados dicen por qué.</p>

      <ChannelSheet open={sheet === 'channel'} snap={snap} onClose={() => setSheet('none')} />
      <SurgeSheet open={sheet === 'surge'} onClose={() => setSheet('none')} />
      <RelentlessSheet open={sheet === 'relentless'} snap={snap} onClose={() => setSheet('none')} />
      <TargetSheet open={sheet === 'rebuke'} title="Rebuke Death" hint="1d4+7 a una criatura bajo 0 pg (toque, provoca). Solo sube pg; no revive." onClose={() => setSheet('none')} run={(target) => runAction(actions.domain.rebukeDeath, { target })} />
      <TargetSheet open={sheet === 'glory'} title="Touch of Glory" hint="+15 a una prueba de Carisma durante 1 hora." onClose={() => setSheet('none')} run={(target) => runAction(actions.domain.touchOfGlory, { target })} />
      <DivineSheet open={sheet === 'divine'} snap={snap} onClose={() => setSheet('none')} />
      <HeroSheet open={sheet === 'hero'} snap={snap} onClose={() => setSheet('none')} />
      <ConfirmSheet open={sheet === 'recuperation'} title="Recuperation" body={`1 poder mítico + 1 hora: pg a ${Math.floor(125 / 2)} como mínimo, todas las ranuras y channels, y (según Ajustes) usos de dominio. El poder mítico no se recupera.`} onClose={() => setSheet('none')} run={() => runAction(actions.mythic.recuperation, undefined as never)} />
      <ConfirmSheet open={sheet === 'domainRecharge'} title="Recarga de Mythic Domain" body="Acción estándar y 1 poder mítico: Rebuke Death 11, Touch of Glory 11 y Aura of Heroism 15 asaltos (reset, según el DM). 1 vez por día." onClose={() => setSheet('none')} run={() => runAction(actions.mythic.domainRecharge, undefined as never)} />
    </section>
  );
}

function ChannelSheet({ open, snap, onClose }: { open: boolean; snap: StateSnapshot; onClose: () => void }) {
  const busy = useStore($busy);
  const [mode, setMode] = useState<'standard' | 'quick'>('standard');
  const [excluded, setExcluded] = useState(0);
  const [undead, setUndead] = useState(false);
  const cur = snap.resources.channel?.current ?? 0;
  const quickOk = cur >= 2;
  async function go() {
    const r = await runAction(actions.channel.use, { mode, excluded, undead });
    if (r) onClose();
  }
  return (
    <Sheet open={open} title="Channel Energy" onClose={onClose}>
      <div class="stack">
        <div class="segmented" role="radiogroup" aria-label="Tipo de channel">
          <button type="button" role="radio" aria-checked={mode === 'standard'} onClick={() => setMode('standard')}>Estándar (−1)</button>
          <button type="button" role="radio" aria-checked={mode === 'quick'} disabled={!quickOk} title={quickOk ? '' : 'Quick Channel necesita 2 usos'} onClick={() => setMode('quick')}>Quick (movimiento, −2)</button>
        </div>
        <label class="field">
          <span><Term k="selective-channeling" name="Selective Channeling" tip="Excluís hasta 2 criaturas (mod. de Cha) del channel.">Excluidos</Term> (máx. 2)</span>
          <div class="segmented" role="radiogroup">
            {[0, 1, 2].map((n) => <button key={n} type="button" role="radio" aria-checked={excluded === n} onClick={() => setExcluded(n)}>{n}</button>)}
          </div>
        </label>
        <label class="check">
          <input type="checkbox" checked={undead} onChange={(e) => setUndead((e.target as HTMLInputElement).checked)} />
          <span>Hay no muertos en el área (daño 8d6, Will DC 19 mitad)</span>
        </label>
        <p class="help">8d6 con reroll de los 1 (Envoy of Healing) +1 (Blessed Touch): media ≈ {channelAverage()}. Quedan {cur} usos.</p>
        <button type="button" class="btn btn--primary" disabled={busy} onClick={go}>Tirar y gastar</button>
      </div>
    </Sheet>
  );
}

function SurgeSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  const busy = useStore($busy);
  const [note, setNote] = useState('');
  return (
    <Sheet open={open} title="Surge (+1d6)" onClose={onClose}>
      <div class="stack">
        <label class="field"><span>¿A qué tirada? (opcional)</span><input class="input" value={note} onInput={(e) => setNote((e.target as HTMLInputElement).value)} placeholder="Concentración del Heal, salvación de Will…" /></label>
        <p class="help">Inmediata: después de ver el resultado. Cuesta 1 poder mítico y la inmediata del asalto.</p>
        <button type="button" class="btn btn--primary" disabled={busy} onClick={async () => { const r = await runAction(actions.mythic.surge, { note: note || undefined }); if (r) { setNote(''); onClose(); } }}>Tirar 1d6</button>
      </div>
    </Sheet>
  );
}

function RelentlessSheet({ open, snap, onClose }: { open: boolean; snap: StateSnapshot; onClose: () => void }) {
  const busy = useStore($busy);
  const dead = snap.allies.filter((a) => a.active && (a.downState === 'dead' || a.downState === 'dead_death_effect'));
  const [allyId, setAllyId] = useState<number | null>(null);
  const [heal, setHeal] = useState(String(healAmount(11)));
  const chosen = dead.find((a) => a.id === (allyId ?? dead[0]?.id));
  return (
    <Sheet open={open} title="Relentless Healing" onClose={onClose}>
      <div class="stack">
        {dead.length === 0 ? (
          <p class="help">No hay aliados marcados como muertos. Marcá la muerte en la barra de aliados (pg ≤ 0 → "murió").</p>
        ) : (
          <>
            <label class="field"><span>Aliado</span>
              <select class="input" value={chosen?.id} onChange={(e) => setAllyId(Number((e.target as HTMLSelectElement).value))}>
                {dead.map((a) => <option key={a.id} value={a.id}>{a.name} ({a.hpCurrent ?? '?'} pg, murió as. {a.diedRound ?? '?'})</option>)}
              </select>
            </label>
            <label class="field"><span>Curación aplicada (Heal 110 · mítico 130 · Inspired 130)</span>
              <input class="input" type="number" inputMode="numeric" value={heal} onInput={(e) => setHeal((e.target as HTMLInputElement).value)} />
            </label>
            {chosen && chosen.hpCurrent !== null && (
              <p class="help">Queda en {chosen.hpCurrent + (Number(heal) || 0)} pg: {chosen.hpCurrent + (Number(heal) || 0) > 0 ? 'revive seguro (pg positivos)' : 'revive solo si supera su umbral de muerte (−Con); lo decide el DM'}.</p>
            )}
            <button type="button" class="btn btn--primary" disabled={busy || !chosen || !(Number(heal) > 0)} onClick={async () => { const r = await runAction(actions.mythic.relentlessHealing, { allyId: chosen!.id, healAmount: Number(heal) }); if (r) onClose(); }}>Revivir (−1 PM)</button>
          </>
        )}
      </div>
    </Sheet>
  );
}

function TargetSheet({ open, title, hint, onClose, run }: { open: boolean; title: string; hint: string; onClose: () => void; run: (target?: string) => Promise<unknown> }) {
  const busy = useStore($busy);
  const [target, setTarget] = useState('');
  return (
    <Sheet open={open} title={title} onClose={onClose}>
      <div class="stack">
        <label class="field"><span>Objetivo (opcional)</span><input class="input" value={target} onInput={(e) => setTarget((e.target as HTMLInputElement).value)} /></label>
        <p class="help">{hint}</p>
        <button type="button" class="btn btn--primary" disabled={busy} onClick={async () => { const r = await run(target || undefined); if (r) { setTarget(''); onClose(); } }}>Usar</button>
      </div>
    </Sheet>
  );
}

function ConfirmSheet({ open, title, body, onClose, run }: { open: boolean; title: string; body: string; onClose: () => void; run: () => Promise<unknown> }) {
  const busy = useStore($busy);
  return (
    <Sheet open={open} title={title} onClose={onClose}>
      <div class="stack">
        <p>{body}</p>
        <button type="button" class="btn btn--primary" disabled={busy} onClick={async () => { const r = await run(); if (r) onClose(); }}>Confirmar</button>
      </div>
    </Sheet>
  );
}

function DivineSheet({ open, snap, onClose }: { open: boolean; snap: StateSnapshot; onClose: () => void }) {
  const busy = useStore($busy);
  const prepared = snap.slots.filter((s) => s.status === 'prepared' && s.spellId && s.level >= 1).sort((a, b) => a.level - b.level || a.idx - b.idx);
  const [slotId, setSlotId] = useState<number | null>(null);
  const [creature, setCreature] = useState('');
  const chosen = prepared.find((s) => s.id === slotId) ?? prepared[0];
  return (
    <Sheet open={open} title="Divine Interference" onClose={onClose}>
      <div class="stack">
        <label class="field"><span>Criatura que ataca</span><input class="input" value={creature} onInput={(e) => setCreature((e.target as HTMLInputElement).value)} placeholder="Dragón, ogro mago…" autoFocus /></label>
        <label class="field"><span>Conjuro a sacrificar (el enemigo repite con −nivel)</span>
          <select class="input" value={chosen?.id} onChange={(e) => setSlotId(Number((e.target as HTMLSelectElement).value))}>
            {prepared.map((s) => <option key={s.id} value={s.id}>{s.level}.º{s.isDomain ? ' [D]' : ''} · {s.spellId}</option>)}
          </select>
        </label>
        <p class="help">Inmediata. Solo ataques contra aliados (no contra vos). Una vez por criatura y día.</p>
        <button type="button" class="btn btn--primary" disabled={busy || !chosen || !creature.trim()} onClick={async () => { const r = await runAction(actions.feat.divineInterference, { slotId: chosen!.id, creature: creature.trim() }); if (r) { setCreature(''); onClose(); } }}>Sacrificar</button>
      </div>
    </Sheet>
  );
}

function HeroSheet({ open, snap, onClose }: { open: boolean; snap: StateSnapshot; onClose: () => void }) {
  const busy = useStore($busy);
  const total = (snap.resources.hero_points?.current ?? 0) + (snap.resources.hero_point_temp?.current ?? 0);
  return (
    <Sheet open={open} title={`Hero Point (tenés ${total})`} onClose={onClose} wide>
      <div class="hero-list">
        {HERO_POINT_KINDS.map((k: HeroPointKind) => {
          const info = heroPointInfo[k];
          const chk = canUseHeroPoint(snap.resources, k, snap.character.combatActive);
          return (
            <button key={k} type="button" class={`hero-item ${k === 'cheat_death' ? 'is-danger' : ''}`} disabled={busy || !chk.ok} title={chk.ok ? '' : chk.reason} onClick={async () => { const r = await runAction(actions.hero.use, { kind: k }); if (r) onClose(); }}>
              <span class="hero-item-head"><b>{info.label}</b><span class="cost">−{info.cost}</span></span>
              <span class="hero-item-detail">{info.detail}</span>
            </button>
          );
        })}
      </div>
    </Sheet>
  );
}
