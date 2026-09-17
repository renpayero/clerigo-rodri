import { useState } from 'preact/hooks';
import { actions } from 'astro:actions';
import { useStore } from '@nanostores/preact';
import { $busy, $snapshot, toast } from './store';
import { runAction } from './useAction';
import type { StateSnapshot } from '@/lib/snapshot';
import { parseSpec, discordCommand, expectedValue, formatSpec } from '@/lib/rules/dice';

type Preset = { label: string; spec: string; rerollOnes?: boolean; empower?: boolean; flatAfter?: number; note?: string };

const PRESETS: Preset[] = [
  { label: 'Channel 8d6', spec: '8d6', rerollOnes: true, flatAfter: 1, note: 'reroll de 1 · +1' },
  { label: 'CLW', spec: '1d8+5', empower: true, flatAfter: 1, note: '×1,5 +1' },
  { label: 'CMW', spec: '2d8+10', empower: true, flatAfter: 1, note: '×1,5 +1' },
  { label: 'CSW', spec: '3d8+11', empower: true, flatAfter: 1, note: '×1,5 +1' },
  { label: 'CCW', spec: '4d8+11', empower: true, flatAfter: 1, note: '×1,5 +1' },
  { label: 'Mass CLW', spec: '1d8+11', empower: true, flatAfter: 1, note: '×1,5 +1 c/u' },
  { label: 'Breath of Life', spec: '5d8+11', flatAfter: 1, note: '+1' },
  { label: 'Mythic BoL', spec: '5d12+11', flatAfter: 1, note: '+1' },
  { label: 'Rebuke Death', spec: '1d4+7' },
  { label: 'Cleanse', spec: '4d8+11' },
  { label: 'Surge', spec: '1d6' },
  { label: 'd20', spec: '1d20' },
  { label: 'Concentración', spec: '1d20+19' },
  { label: 'Wand CLW', spec: '1d8+1', empower: true, flatAfter: 1, note: 'CL 1 ×1,5 +1' },
];

/** Dados en la app (RNG del servidor, queda en el historial) + comando /roll para Discord. */
export function DiceRoller({ snap: initial }: { snap: StateSnapshot }) {
  const busy = useStore($busy);
  const snap = useStore($snapshot) ?? initial;
  const [spec, setSpec] = useState('1d20');
  const [reroll, setReroll] = useState(false);
  const [empower, setEmpower] = useState(false);
  const [flat, setFlat] = useState(0);
  const prefix = snap.settings.discordPrefix;
  let parsed: ReturnType<typeof parseSpec> | null = null;
  try { parsed = parseSpec(spec); } catch { parsed = null; }
  const ev = parsed ? Math.round(expectedValue(parsed, { rerollOnes: reroll, empower, flatAfter: flat }) * 100) / 100 : null;

  async function copy(text: string) {
    try { await navigator.clipboard.writeText(text); toast('info', 'Copiado para Discord', text); } catch { toast('error', 'No se pudo copiar', text); }
  }
  const rollPreset = (p: Preset) => runAction(actions.dice.roll, { spec: p.spec, rerollOnes: !!p.rerollOnes, empower: !!p.empower, flatAfter: p.flatAfter ?? 0, label: p.label });
  const applyPreset = (p: Preset) => { setSpec(p.spec); setReroll(!!p.rerollOnes); setEmpower(!!p.empower); setFlat(p.flatAfter ?? 0); };

  return (
    <section class="card" aria-labelledby="dice-title">
      <h2 id="dice-title" class="section-title">Dados</h2>
      <div class="dice-presets">
        {PRESETS.map((p) => (
          <div key={p.label} class="dice-preset">
            <button type="button" class="btn btn--sm dice-roll" disabled={busy} title={`Tirar ${p.spec}${p.note ? ` (${p.note})` : ''}`} onClick={() => rollPreset(p)}>
              <span>{p.label}</span>
              <span class="cost">{p.spec}{p.note ? ` · ${p.note}` : ''}</span>
            </button>
            <button type="button" class="btn btn--sm btn--ghost btn--icon" title={`Copiar ${discordCommand(parseSpec(p.spec), prefix)}`} aria-label={`Copiar comando de Discord para ${p.label}`} onClick={() => copy(discordCommand(parseSpec(p.spec), prefix))}>⧉</button>
          </div>
        ))}
      </div>
      <form class="dice-custom" onSubmit={(e) => { e.preventDefault(); if (parsed) runAction(actions.dice.roll, { spec: formatSpec(parsed), rerollOnes: reroll, empower, flatAfter: flat }); }}>
        <input class="input mono" value={spec} onInput={(e) => setSpec((e.target as HTMLInputElement).value)} aria-label="Dados (NdM+B)" placeholder="4d8+11" />
        <label class="check"><input type="checkbox" checked={reroll} onChange={(e) => setReroll((e.target as HTMLInputElement).checked)} /><span>reroll 1</span></label>
        <label class="check"><input type="checkbox" checked={empower} onChange={(e) => setEmpower((e.target as HTMLInputElement).checked)} /><span>×1,5</span></label>
        <label class="check"><input type="checkbox" checked={flat === 1} onChange={(e) => setFlat((e.target as HTMLInputElement).checked ? 1 : 0)} /><span>+1</span></label>
        <button type="submit" class="btn btn--primary btn--sm" disabled={busy || !parsed}>Tirar{ev !== null ? ` (≈ ${ev})` : ''}</button>
        {parsed && <button type="button" class="btn btn--sm btn--ghost" onClick={() => copy(discordCommand(parsed!, prefix))}>Discord: {discordCommand(parsed, prefix)}</button>}
      </form>
      <p class="help">El bot de Discord solo acepta <code>{prefix}NdM</code>: el reroll de los 1, el ×1,5 y el +1 se hacen a mano. Las tiradas de la app quedan en el historial.</p>
      <details style="margin-top: var(--s2)"><summary class="help">Presets ↔ formulario</summary>
        <div class="btn-row" style="margin-top: var(--s2)">{PRESETS.map((p) => <button key={p.label} type="button" class="btn btn--sm btn--ghost" onClick={() => applyPreset(p)}>{p.label}</button>)}</div>
      </details>
    </section>
  );
}
export default DiceRoller;
