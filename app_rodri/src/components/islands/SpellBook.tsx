import { useState } from 'preact/hooks';
import { actions } from 'astro:actions';
import { useStore } from '@nanostores/preact';
import { $snapshot, $busy, initSnapshot, toast } from './store';
import { runAction } from './useAction';
import { Sheet } from './Sheet';
import type { StateSnapshot } from '@/lib/snapshot';
import type { Spell } from '@/data/types';
import { spells as catalog, spellById } from '@/data/spells/catalog';
import { presets } from '@/data/spells/presets';
import { inspiredReserve } from '@/data/spells/inspiredReserve';
import { buffByKey } from '@/data/buffs';
import { spellDc, defensiveCastChance } from '@/lib/rules/derived';
import { durationAt, rangeAt, formatMinutes } from '@/lib/rules/durations';
import { healMath, healAmount } from '@/lib/rules/healing';
import { castPlan, canCast, canConvert, canInspire, cureOptionsFor, type SlotLike } from '@/lib/rules/slots';
import { canExtend } from '@/lib/rules/buffs';
import { discordCommand, expectedValue } from '@/lib/rules/dice';
import { Term } from '@/components/Term';

type Slot = StateSnapshot['slots'][number];
type Mode = { kind: 'slot'; slot: Slot } | { kind: 'inspired'; spellId: string } | null;

const LEVELS = [0, 1, 2, 3, 4, 5, 6];
const STATUS_LABEL: Record<Slot['status'], string> = { prepared: '', spent: 'gastada', converted: 'convertida', free: 'libre', sacrificed: 'sacrificada' };

function healSummary(sp: Spell, cl = 11, mythic = false): string | null {
  const heal = mythic && sp.mythic?.heal ? sp.mythic.heal : sp.heal;
  if (!heal) return null;
  if (heal.kind === 'heal') return `${healAmount(cl, mythic)} pg`;
  const m = healMath(heal, { cl, healersBlessing: heal.kind === 'cure', blessedTouch: heal.kind === 'cure' || heal.kind === 'breath_of_life' });
  return `≈ ${m.avg} pg (${m.formula})`;
}

/** Libro de conjuros interactivo: ranuras por nivel, lanzar/convertir/preparar, presets e Inspired Spell. */
export function SpellBook({ snapshot }: { snapshot: StateSnapshot }) {
  initSnapshot(snapshot);
  const snap = useStore($snapshot) ?? snapshot;
  const busy = useStore($busy);
  const [mode, setMode] = useState<Mode>(null);
  const [presetConfirm, setPresetConfirm] = useState<string | null>(null);
  const [inspiredPick, setInspiredPick] = useState('');
  const pm = snap.resources.mythic_power?.current ?? 0;

  return (
    <div class="stack spellbook">
      <section class="card card--tint">
        <div class="row-between">
          <h2 class="section-title">Preparación del día</h2>
          <span class="badge">CL 11 · Wis 27{snap.settings.headbandNew24h ? ' (diadema < 24 h: 23)' : ''}</span>
        </div>
        <div class="btn-row">
          {presets.map((p) => (
            <button key={p.id} type="button" class="btn" disabled={busy} title={p.description} onClick={() => setPresetConfirm(p.id)}>{p.name}</button>
          ))}
        </div>
        <p class="help">Aplicar un preset re-prepara TODAS las ranuras (las gastadas vuelven a estar preparadas). Tocá una ranura para lanzar, convertir en cure o cambiar el conjuro.</p>
      </section>

      {LEVELS.map((lvl) => {
        const slots = snap.slots.filter((s) => s.level === lvl).sort((a, b) => a.idx - b.idx);
        const left = slots.filter((s) => (s.status === 'prepared' || s.status === 'free') && !s.disabled).length;
        return (
          <section key={lvl} class="card">
            <div class="row-between level-head">
              <h3>
                {lvl === 0 ? 'Orisons' : `Nivel ${lvl}`}
                <span class="muted"> · {lvl === 0 ? 'no se gastan' : `${left}/${slots.filter((s) => !s.disabled).length} disponibles`}</span>
              </h3>
              {lvl > 0 && (
                <span class="row">
                  <span class="badge" title="DC de salvación">DC {spellDc(lvl)}</span>
                  <span class="badge" title="Probabilidad de lanzar a la defensiva (concentración +19)">def. {Math.round(defensiveCastChance(lvl) * 100)} %</span>
                </span>
              )}
            </div>
            <ul class="slots">
              {slots.map((s) => <SlotChip key={s.id} slot={s} onOpen={() => setMode({ kind: 'slot', slot: s })} />)}
            </ul>
          </section>
        );
      })}

      <section class="card">
        <div class="row-between">
          <h3><Term k="inspired-spell">Inspired Spell</Term> <span class="muted">(−1 poder mítico, CL 13, sin ranura)</span></h3>
          <span class={`badge ${pm === 0 ? 'badge--alert' : ''}`}>PM {pm}</span>
        </div>
        <div class="reserve-grid">
          {inspiredReserve.map((r) => {
            const sp = spellById[r.spellId]!;
            return (
              <button key={r.spellId} type="button" class="reserve-btn" disabled={busy || pm < 1} onClick={() => setMode({ kind: 'inspired', spellId: r.spellId })}>
                <b>{sp.name}</b>
                <small>{r.note}</small>
              </button>
            );
          })}
        </div>
        <div class="row" style="margin-top: var(--s3)">
          <select class="input" value={inspiredPick} onChange={(e) => setInspiredPick((e.target as HTMLSelectElement).value)} aria-label="Otro conjuro para Inspired Spell">
            <option value="">Otro conjuro de la lista…</option>
            {catalog.filter((sp) => sp.level >= 1 && sp.level <= 6 && !sp.tags.includes('fuera-de-alcance')).sort((a, b) => a.level - b.level || a.name.localeCompare(b.name)).map((sp) => (
              <option key={sp.id} value={sp.id}>{sp.level}.º · {sp.name}</option>
            ))}
          </select>
          <button type="button" class="btn" disabled={busy || !inspiredPick || pm < 1} onClick={() => setMode({ kind: 'inspired', spellId: inspiredPick })}>Lanzar</button>
        </div>
      </section>

      <CastSheet mode={mode} snap={snap} onClose={() => setMode(null)} />

      <Sheet open={!!presetConfirm} title={presetConfirm ? `Aplicar "${presets.find((p) => p.id === presetConfirm)?.name}"` : ''} onClose={() => setPresetConfirm(null)}>
        <div class="stack">
          <p>{presets.find((p) => p.id === presetConfirm)?.description}</p>
          <p class="help">Todas las ranuras quedan preparadas según el preset (las gastadas también). Se puede deshacer.</p>
          <button type="button" class="btn btn--primary" disabled={busy} onClick={async () => { const r = await runAction(actions.spells.applyPreset, { preset: presetConfirm as 'combate' }); if (r) setPresetConfirm(null); }}>Aplicar</button>
        </div>
      </Sheet>
    </div>
  );
}

function SlotChip({ slot, onOpen }: { slot: Slot; onOpen: () => void }) {
  const sp = slot.spellId ? spellById[slot.spellId] : null;
  const used = slot.status !== 'prepared' && slot.status !== 'free';
  const heal = sp ? healSummary(sp) : null;
  return (
    <li>
      <button
        type="button"
        class={`slot ${slot.isDomain ? 'slot--domain' : ''} ${slot.status === 'free' ? 'slot--free' : ''} ${used ? 'slot--used' : ''} ${slot.disabled ? 'slot--disabled' : ''}`}
        onClick={onOpen}
        disabled={slot.disabled}
        title={slot.disabled ? 'Deshabilitada: diadema puesta hace menos de 24 h' : sp?.tip}
      >
        {slot.isDomain && <span class="badge badge--domain">[D]</span>}
        <span class="slot-body">
          <span class={`slot-name ${used ? 'is-spent' : ''}`}>{sp ? sp.name : '[libre]'}</span>
          <span class="slot-meta">
            {sp ? `${rangeAt(sp.range).label} · ${durationAt(sp.duration).label}${heal ? ` · ${heal}` : ''}` : 'cure espontáneo o preparar en 15 min'}
            {used && ` · ${STATUS_LABEL[slot.status]}${slot.spentOn?.startsWith('cure:') ? ` en ${spellById[slot.spentOn.slice(5)]?.name ?? ''}` : ''}`}
          </span>
        </span>
      </button>
    </li>
  );
}

function CastSheet({ mode, snap, onClose }: { mode: Mode; snap: StateSnapshot; onClose: () => void }) {
  const busy = useStore($busy);
  const [mythic, setMythic] = useState(false);
  const [augmented, setAugmented] = useState(false);
  const [extend, setExtend] = useState(false);
  const [activateBuff, setActivateBuff] = useState(true);
  const [targets, setTargets] = useState<(number | 'self')[]>([]);
  const [energy, setEnergy] = useState('fire');
  const [prepPick, setPrepPick] = useState('');
  const [tab, setTab] = useState<'cast' | 'convert' | 'prepare'>('cast');

  if (!mode) return <Sheet open={false} title="" onClose={onClose}>{null}</Sheet>;

  const slot = mode.kind === 'slot' ? (mode.slot as SlotLike & Slot) : null;
  const spellId = mode.kind === 'slot' ? mode.slot.spellId : mode.spellId;
  const sp = spellId ? spellById[spellId] : null;
  const cl = mode.kind === 'inspired' ? 13 : 11;
  const def = sp?.buff ? buffByKey[sp.buff.buffKey] : undefined;
  const pm = snap.resources.mythic_power?.current ?? 0;
  const allies = snap.allies.filter((a) => a.active);
  const plan = sp ? castPlan(sp, { cl, mythic, augmented }) : null;
  const castChk = mode.kind === 'inspired' ? (sp ? canInspire(sp, pm) : { ok: false as const, reason: 'Elegí un conjuro' }) : slot ? canCast(slot) : { ok: false as const, reason: '' };
  const extendChk = def ? canExtend(def, snap.resources.rod_extend?.current ?? 0) : { ok: false as const, reason: 'Sin duración' };
  const mythicCost = augmented ? sp?.mythic?.augmented?.cost ?? 0 : sp?.mythic?.cost ?? 0;
  const totalPm = (mode.kind === 'inspired' ? 1 : 0) + (mythic ? mythicCost : 0);
  const title = mode.kind === 'inspired' ? `Inspired Spell: ${sp?.name ?? ''}` : slot ? `${slot.level === 0 ? 'Orisón' : `${slot.level}.º${slot.isDomain ? ' [D]' : ''}`}: ${sp?.name ?? '[libre]'}` : '';
  const toggleTarget = (t: number | 'self') => setTargets((ts) => (ts.includes(t) ? ts.filter((x) => x !== t) : [...ts, t]));
  const reset = () => { setMythic(false); setAugmented(false); setExtend(false); setActivateBuff(true); setTargets([]); setPrepPick(''); setTab('cast'); };
  const close = () => { reset(); onClose(); };

  async function cast() {
    const common = { targets: def && def.targets !== 'self' ? targets : [], mythic, augmented, extend, activateBuff, energy: def?.energyChoice ? energy : undefined };
    const r = mode!.kind === 'inspired' ? await runAction(actions.spells.inspired, { spellId: spellId!, ...common }) : await runAction(actions.spells.cast, { slotId: slot!.id, ...common });
    if (r) close();
  }
  async function copyDiscord(text: string) {
    try { await navigator.clipboard.writeText(text); toast('info', 'Copiado', text); } catch { toast('error', 'No se pudo copiar', text); }
  }

  const showTabs = mode.kind === 'slot' && slot!.level > 0;
  const canConvertAny = slot ? canConvert(slot, 1).ok : false;

  return (
    <Sheet open={!!mode} title={title} onClose={close} wide>
      <div class="stack">
        {showTabs && (
          <div class="segmented" role="tablist">
            {sp && <button type="button" role="tab" aria-checked={tab === 'cast'} onClick={() => setTab('cast')}>Lanzar</button>}
            {canConvertAny && <button type="button" role="tab" aria-checked={tab === 'convert'} onClick={() => setTab('convert')}>Convertir en cure</button>}
            <button type="button" role="tab" aria-checked={tab === 'prepare'} onClick={() => setTab('prepare')}>{slot!.status === 'prepared' || slot!.status === 'free' ? 'Cambiar' : 'Recuperar'}</button>
          </div>
        )}

        {tab === 'cast' && sp && (
          <>
            <p class="cast-tip">{sp.tip} <a href={sp.aon.url} target="_blank" rel="noopener noreferrer">AoN ↗</a></p>
            <dl class="kv">
              <dt>Alcance</dt><dd>{rangeAt(sp.range).label}</dd>
              <dt>Duración</dt><dd>{durationAt(sp.duration, cl, extend).label}</dd>
              {sp.save && <><dt>Salvación</dt><dd>{sp.save}</dd></>}
              {plan && (plan.fixed !== null || plan.dice) && <><dt>Curación</dt><dd>{plan.fixed !== null ? `${plan.fixed} pg (fija)` : `${plan.dice!.n}d${plan.dice!.sides}+${plan.dice!.bonus}${plan.empower ? ' ×1,5' : ''}${plan.flatAfter ? ` +${plan.flatAfter}` : ''} ≈ ${Math.round(expectedValue(plan.dice!, { empower: plan.empower, flatAfter: plan.flatAfter }) * 100) / 100}`}</dd></>}
              {sp.components && <><dt>Componentes</dt><dd>{sp.components}</dd></>}
            </dl>
            {sp.mythic && (
              <label class="check">
                <input type="checkbox" checked={mythic} disabled={pm < (mode.kind === 'inspired' ? 1 : 0) + sp.mythic.cost} onChange={(e) => { setMythic((e.target as HTMLInputElement).checked); if (!(e.target as HTMLInputElement).checked) setAugmented(false); }} />
                <span><b>Versión mítica</b> (−{sp.mythic.cost} PM): {sp.mythic.effect}</span>
              </label>
            )}
            {mythic && sp.mythic?.augmented && (
              <label class="check">
                <input type="checkbox" checked={augmented} disabled={pm < (mode.kind === 'inspired' ? 1 : 0) + sp.mythic.augmented.cost} onChange={(e) => setAugmented((e.target as HTMLInputElement).checked)} />
                <span><b>Augmented</b> (−{sp.mythic.augmented.cost} PM en total): {sp.mythic.augmented.effect}</span>
              </label>
            )}
            {def && (
              <>
                <label class="check">
                  <input type="checkbox" checked={activateBuff} onChange={(e) => setActivateBuff((e.target as HTMLInputElement).checked)} />
                  <span>Registrar el buff en la Mesa ({(() => { const d = durationAt(def.duration, cl, extend); return d.unit === 'minutes' ? formatMinutes(d.amount) : d.label; })()})</span>
                </label>
                {def.targets !== 'self' && def.targets !== 'area' && activateBuff && (
                  <div class="field">
                    <span>Objetivos</span>
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
                {def.source.kind === 'spell' && (def.spellLevel ?? 99) <= 3 && def.duration.kind !== 'permanent' && def.duration.kind !== 'instant' && (
                  <label class={`check ${!extendChk.ok ? 'is-disabled' : ''}`}>
                    <input type="checkbox" checked={extend} disabled={!extendChk.ok} onChange={(e) => setExtend((e.target as HTMLInputElement).checked)} />
                    <span>×2 con la Rod of Extend (lesser) · quedan {snap.resources.rod_extend?.current ?? 0}{!extendChk.ok ? ` · ${extendChk.reason}` : ''}</span>
                  </label>
                )}
              </>
            )}
            {plan?.dice && (
              <p class="help discord">
                Discord: <code>{discordCommand(plan.dice, snap.settings.discordPrefix)}</code>
                <button type="button" class="btn btn--sm btn--ghost" onClick={() => copyDiscord(discordCommand(plan.dice!, snap.settings.discordPrefix))}>Copiar</button>
                {plan.empower && <span> · ×1,5 y +1 a mano</span>}
              </p>
            )}
            <button type="button" class="btn btn--primary" disabled={busy || !castChk.ok} title={castChk.ok ? '' : castChk.reason} onClick={cast}>
              {mode.kind === 'inspired' ? `Lanzar con Inspired Spell (−${totalPm} PM)` : `Lanzar${totalPm ? ` (−${totalPm} PM)` : ''}${slot!.level > 0 ? ' · gasta la ranura' : ''}`}
            </button>
            {!castChk.ok && castChk.reason && <p class="error">{castChk.reason}</p>}
          </>
        )}

        {tab === 'cast' && !sp && slot && (
          <p class="help">Ranura libre: convertila en un cure o preparale un conjuro.</p>
        )}

        {tab === 'convert' && slot && (
          <div class="stack">
            <p class="help">Conversión espontánea (×1,5 por Healer's Blessing, +1 por Blessed Touch){sp ? `. Perdés ${sp.name}.` : '.'}</p>
            {cureOptionsFor(slot.level).map((c) => (
              <button key={c.level} type="button" class="cure-btn" disabled={busy} onClick={async () => { const r = await runAction(actions.spells.convertToCure, { slotId: slot.id, cureLevel: c.level }); if (r) close(); }}>
                <span><b>{c.spell.name}</b> <small>({c.level}.º)</small></span>
                <span class="mono">{c.formula} ≈ {c.avg}</span>
              </button>
            ))}
          </div>
        )}

        {tab === 'prepare' && slot && (
          <div class="stack">
            {slot.status === 'prepared' || slot.status === 'free' ? (
              <>
                <label class="field"><span>Conjuro de nivel {slot.level}{slot.isDomain ? ' (ranura de dominio)' : ''}</span>
                  <select class="input" value={prepPick} onChange={(e) => setPrepPick((e.target as HTMLSelectElement).value)}>
                    <option value="">Elegí…</option>
                    {catalog.filter((x) => x.level === slot.level && !x.tags.includes('fuera-de-alcance') && (!x.domainOnly || slot.isDomain)).sort((a, b) => a.name.localeCompare(b.name)).map((x) => (
                      <option key={x.id} value={x.id}>{x.name}</option>
                    ))}
                  </select>
                </label>
                <div class="btn-row">
                  <button type="button" class="btn btn--primary" disabled={busy || !prepPick} onClick={async () => { const r = await runAction(actions.spells.prepare, { slotId: slot.id, spellId: prepPick }); if (r) close(); }}>Preparar</button>
                  {slot.spellId && <button type="button" class="btn" disabled={busy} onClick={async () => { const r = await runAction(actions.spells.prepare, { slotId: slot.id, spellId: null }); if (r) close(); }}>Dejar libre</button>}
                </div>
                <p class="help">Preparar lleva 15 min de rezo por ranura (fuera de combate).</p>
              </>
            ) : (
              <>
                <p class="help">La ranura está {STATUS_LABEL[slot.status]}. Recuperala si fue un error de carga o con la Pearl of Power (solo 1.º, {snap.resources.pearl_1st?.current ?? 0} uso).</p>
                <div class="btn-row">
                  {slot.level === 1 && slot.spellId && <button type="button" class="btn btn--primary" disabled={busy || (snap.resources.pearl_1st?.current ?? 0) < 1} onClick={async () => { const r = await runAction(actions.spells.restore, { slotId: slot.id, usePearl: true }); if (r) close(); }}>Pearl of Power (−1 uso)</button>}
                  <button type="button" class="btn" disabled={busy} onClick={async () => { const r = await runAction(actions.spells.restore, { slotId: slot.id }); if (r) close(); }}>Marcar como no gastada</button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </Sheet>
  );
}
export default SpellBook;
