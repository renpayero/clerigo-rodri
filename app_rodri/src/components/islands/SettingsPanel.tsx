import { useState } from 'preact/hooks';
import { actions } from 'astro:actions';
import { useStore } from '@nanostores/preact';
import { $snapshot, $busy, initSnapshot, toast } from './store';
import { runAction } from './useAction';
import { Sheet } from './Sheet';
import { EventLog } from './EventLog';
import type { StateSnapshot } from '@/lib/snapshot';
import type { AllyRow } from '@/db/schema';

const OPTIONS = {
  mythicPowerReset: { label: 'Cuándo se recarga el poder mítico', hint: 'El DM confirmó que se recarga con el descanso. "Con el rezo" = junto con los conjuros (8 h + 1 h). "Manual" = solo con el botón de Ajustes.', values: [['prayer', 'Con el rezo (descanso)'], ['rest8h', 'A las 8 h de descanso'], ['manual', 'Manual']] },
  recuperationRestoresDomain: { label: 'Recuperation recupera los usos de dominio', hint: 'Recuperation devuelve "class features con usos por día": Rebuke Death, Touch of Glory y la aura entran; el poder mítico no.', bool: true },
  blessedTouchInAverages: { label: 'Sumar el +1 de Blessed Touch en los promedios', hint: 'Solo cambia cómo se muestran las tablas (43,5 → 44,5). Las tiradas reales siempre lo suman.', bool: true },
  mythicDomainRechargeMode: { label: 'Recarga de Mythic Domain', hint: 'El DM dijo que recarga todo como si hubieses dormido: "reset" al máximo.', values: [['reset', 'Al máximo (DM)'], ['add', 'Suma sobre lo que queda']] },
  relentlessVsDeathEffects: { label: 'Relentless Healing revive muertes por efecto de muerte', hint: 'Conservador: no. Para esas está Mythic Breath of Life.', bool: true },
  amazingInitiativeAllows: { label: 'Qué permite la estándar extra de Amazing Initiative', hint: 'La regla excluye conjuros. Channel sí; varita y Rebuke Death son discutibles.', values: [['channel', 'Solo channel'], ['channel_wand', 'Channel y varita'], ['channel_wand_rebuke', 'Channel, varita y Rebuke Death']] },
  bolThresholdMythic: { label: 'Umbral de Breath of Life en aliados míticos', hint: 'Hard to Kill: mueren a −2 × Con. ¿BoL/Relentless usan ese umbral o el normal (−Con)?', values: [['con', '−Con (conservador)'], ['twice_con', '−2 × Con (Hard to Kill)']] },
  headbandNew24h: { label: 'Diadema puesta hace menos de 24 h', hint: 'Sin las 24 h, el +4 no da conjuros extra: se deshabilita la última ranura de 3.º y 4.º (Wis 23 efectiva).', bool: true },
  discordPrefix: { label: 'Prefijo del comando de dados en Discord', hint: 'El bot solo acepta /roll dice:NdM. Reroll y ×1,5 se hacen a mano.', text: true },
} as const;

/** Página Ajustes: reglas ambiguas, aliados, notas, descansos, historial, copia de seguridad, sesión. */
export function SettingsPanel({ snapshot }: { snapshot: StateSnapshot }) {
  initSnapshot(snapshot);
  const snap = useStore($snapshot) ?? snapshot;
  return (
    <div class="settings">
      <RestCard snap={snap} />
      <AlliesEditor snap={snap} />
      <SettingsForm snap={snap} />
      <NotesEditor snap={snap} />
      <EventLog snap={snap} full limit={60} />
      <BackupPanel />
    </div>
  );
}

function RestCard({ snap }: { snap: StateSnapshot }) {
  const busy = useStore($busy);
  const [confirm, setConfirm] = useState<null | 'full' | 'newSession' | 'mythicPowerManual'>(null);
  const texts = {
    full: { title: 'Descanso completo (8 h + rezo)', body: 'Pg al máximo (Recuperation pasiva), channels, usos de dominio, aura, objetos diarios y todas las ranuras. El poder mítico según el ajuste. Los buffs por asaltos y "hasta descansar" expiran; a los de minutos se les restan 8 h.' },
    newSession: { title: 'Nueva sesión', body: 'Suma 1 al número de sesión y recupera las acciones por asalto. No cambia pg ni recursos: usá "Descanso completo" si la sesión arranca descansados.' },
    mythicPowerManual: { title: 'Recargar poder mítico', body: 'Vuelve el poder mítico a 9. Usalo si el ajuste está en "manual" o si el DM lo recarga por otra razón.' },
  };
  return (
    <section class="card" id="descanso">
      <h2 class="section-title">Descanso y sesión</h2>
      <p class="help">Sesión {snap.character.sessionNumber} · último descanso {snap.character.lastFullRestAt ? new Date(snap.character.lastFullRestAt).toLocaleString('es-AR', { dateStyle: 'short', timeStyle: 'short' }) : 'nunca'}.</p>
      <div class="btn-row">
        <button type="button" class="btn btn--primary" disabled={busy} onClick={() => setConfirm('full')}>Descanso completo</button>
        <button type="button" class="btn" disabled={busy} onClick={() => setConfirm('newSession')}>Nueva sesión</button>
        <button type="button" class="btn" disabled={busy} onClick={() => setConfirm('mythicPowerManual')}>Recargar poder mítico</button>
      </div>
      <Sheet open={!!confirm} title={confirm ? texts[confirm].title : ''} onClose={() => setConfirm(null)}>
        {confirm && (
          <div class="stack">
            <p>{texts[confirm].body}</p>
            <button type="button" class="btn btn--primary" disabled={busy} onClick={async () => { const r = await runAction(actions.rest.apply, { kind: confirm }); if (r) setConfirm(null); }}>Confirmar</button>
          </div>
        )}
      </Sheet>
    </section>
  );
}

function SettingsForm({ snap }: { snap: StateSnapshot }) {
  const busy = useStore($busy);
  const s = snap.settings;
  const save = (patch: Record<string, unknown>) => runAction(actions.settings.update, patch as never);
  return (
    <section class="card" id="reglas">
      <h2 class="section-title">Reglas ambiguas (defaults conservadores)</h2>
      <div class="settings-list">
        {(Object.keys(OPTIONS) as (keyof typeof OPTIONS)[]).map((key) => {
          const o = OPTIONS[key] as { label: string; hint: string; bool?: boolean; text?: boolean; values?: readonly (readonly [string, string])[] };
          const val = (s as unknown as Record<string, unknown>)[key];
          return (
            <div key={key} class="setting">
              <div class="setting-text">
                <b>{o.label}</b>
                <span class="help">{o.hint}</span>
              </div>
              {o.bool ? (
                <button type="button" role="switch" aria-checked={!!val} class={`switch ${val ? 'is-on' : ''}`} disabled={busy} onClick={() => save({ [key]: !val })}>
                  <span class="switch-knob" />
                  <span class="sr-only">{val ? 'Sí' : 'No'}</span>
                </button>
              ) : o.text ? (
                <input class="input" value={String(val ?? '')} disabled={busy} onChange={(e) => save({ [key]: (e.target as HTMLInputElement).value })} />
              ) : (
                <select class="input" value={String(val)} disabled={busy} onChange={(e) => save({ [key]: (e.target as HTMLSelectElement).value })}>
                  {o.values!.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                </select>
              )}
            </div>
          );
        })}
        <div class="setting">
          <div class="setting-text"><b>Tema en este dispositivo</b><span class="help">Automático sigue al sistema. Se guarda solo en este navegador.</span></div>
          <ThemePicker />
        </div>
      </div>
    </section>
  );
}

function ThemePicker() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('rodri.theme') ?? 'auto'; } catch { return 'auto'; }
  });
  const apply = (t: string) => {
    setTheme(t);
    try { if (t === 'auto') localStorage.removeItem('rodri.theme'); else localStorage.setItem('rodri.theme', t); } catch {}
    if (t === 'auto') delete document.documentElement.dataset.theme; else document.documentElement.dataset.theme = t;
  };
  return (
    <div class="segmented" role="radiogroup" aria-label="Tema">
      {[['auto', 'Auto'], ['light', 'Claro'], ['dark', 'Oscuro']].map(([v, l]) => (
        <button key={v} type="button" role="radio" aria-checked={theme === v} onClick={() => apply(v!)}>{l}</button>
      ))}
    </div>
  );
}

const EMPTY_ALLY = { name: '', role: '', maxHp: '', con: '', isMythic: true, hpCurrent: '', adjacent: false, frontLine: true, sortOrder: 0, notes: '' };

function AlliesEditor({ snap }: { snap: StateSnapshot }) {
  const busy = useStore($busy);
  const [edit, setEdit] = useState<(typeof EMPTY_ALLY & { id?: number }) | null>(null);
  const allies = snap.allies.filter((a) => a.active).sort((a, b) => a.sortOrder - b.sortOrder || a.id - b.id);
  const open = (a?: AllyRow) => setEdit(a ? { id: a.id, name: a.name, role: a.role ?? '', maxHp: a.maxHp?.toString() ?? '', con: a.con?.toString() ?? '', isMythic: a.isMythic, hpCurrent: a.hpCurrent?.toString() ?? '', adjacent: a.adjacent, frontLine: a.frontLine, sortOrder: a.sortOrder, notes: a.notes ?? '' } : { ...EMPTY_ALLY, sortOrder: allies.length });
  const num = (v: string) => (v.trim() === '' ? null : Number(v));
  async function save(e: Event) {
    e.preventDefault();
    if (!edit) return;
    const r = await runAction(actions.allies.upsert, { id: edit.id, name: edit.name.trim(), role: edit.role.trim() || null, maxHp: num(edit.maxHp), con: num(edit.con), isMythic: edit.isMythic, hpCurrent: num(edit.hpCurrent) ?? num(edit.maxHp), adjacent: edit.adjacent, frontLine: edit.frontLine, sortOrder: edit.sortOrder, notes: edit.notes.trim() || null });
    if (r) setEdit(null);
  }
  const set = (k: keyof typeof EMPTY_ALLY, v: unknown) => setEdit((x) => (x ? { ...x, [k]: v } : x));
  return (
    <section class="card" id="aliados">
      <div class="row-between">
        <h2 class="section-title">Aliados</h2>
        <button type="button" class="btn btn--sm" disabled={busy} onClick={() => open()}>+ Agregar</button>
      </div>
      <p class="help">Pg máximos y Con no están en la ficha: cargalos cuando los sepas. Con ellos la app detecta "bajo 40 %" y el umbral de Breath of Life (−Con).</p>
      <div class="table-wrap">
        <table class="table">
          <thead><tr><th>Nombre</th><th>Rol</th><th class="num">Pg máx</th><th class="num">Con</th><th>Mítico</th><th /></tr></thead>
          <tbody>
            {allies.map((a) => (
              <tr key={a.id}>
                <td><b>{a.name}</b></td><td>{a.role ?? '—'}</td><td class="num">{a.maxHp ?? '—'}</td><td class="num">{a.con ?? '—'}</td><td>{a.isMythic ? 'sí' : 'no'}</td>
                <td class="num"><button type="button" class="btn btn--sm btn--ghost" disabled={busy} onClick={() => open(a)}>Editar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Sheet open={!!edit} title={edit?.id ? `Editar ${edit.name}` : 'Nuevo aliado'} onClose={() => setEdit(null)}>
        {edit && (
          <form class="stack" onSubmit={save}>
            <label class="field"><span>Nombre</span><input class="input" required maxLength={40} value={edit.name} onInput={(e) => set('name', (e.target as HTMLInputElement).value)} /></label>
            <label class="field"><span>Rol (tanque, DPS, apoyo…)</span><input class="input" maxLength={20} value={edit.role} onInput={(e) => set('role', (e.target as HTMLInputElement).value)} /></label>
            <div class="grid-2">
              <label class="field"><span>Pg máximos</span><input class="input" type="number" inputMode="numeric" min={1} value={edit.maxHp} onInput={(e) => set('maxHp', (e.target as HTMLInputElement).value)} /></label>
              <label class="field"><span>Constitución</span><input class="input" type="number" inputMode="numeric" min={1} value={edit.con} onInput={(e) => set('con', (e.target as HTMLInputElement).value)} /></label>
            </div>
            <label class="field"><span>Pg actuales (vacío = máximos)</span><input class="input" type="number" inputMode="numeric" value={edit.hpCurrent} onInput={(e) => set('hpCurrent', (e.target as HTMLInputElement).value)} /></label>
            <label class="check"><input type="checkbox" checked={edit.isMythic} onChange={(e) => set('isMythic', (e.target as HTMLInputElement).checked)} /><span>Es mítico (Hard to Kill: muere a −2 × Con)</span></label>
            <label class="check"><input type="checkbox" checked={edit.frontLine} onChange={(e) => set('frontLine', (e.target as HTMLInputElement).checked)} /><span>Primera línea (recibe más daño)</span></label>
            <label class="field"><span>Orden</span><input class="input" type="number" inputMode="numeric" min={0} max={99} value={edit.sortOrder} onInput={(e) => set('sortOrder', Number((e.target as HTMLInputElement).value))} /></label>
            <label class="field"><span>Notas</span><input class="input" maxLength={300} value={edit.notes} onInput={(e) => set('notes', (e.target as HTMLInputElement).value)} /></label>
            <div class="btn-row">
              <button type="submit" class="btn btn--primary" disabled={busy || !edit.name.trim()}>Guardar</button>
              {edit.id && <button type="button" class="btn btn--danger" disabled={busy} onClick={async () => { const r = await runAction(actions.allies.remove, { id: edit.id! }); if (r) setEdit(null); }}>Quitar</button>}
            </div>
          </form>
        )}
      </Sheet>
    </section>
  );
}

function NotesEditor({ snap }: { snap: StateSnapshot }) {
  const kinds = [['session', 'Sesión'], ['shopping', 'Compras'], ['narrative', 'Narrativo'], ['free', 'Libre']] as const;
  const [kind, setKind] = useState<(typeof kinds)[number][0]>('session');
  const current = snap.notes.find((n) => n.kind === kind)?.body ?? '';
  const [body, setBody] = useState(current);
  const [loadedKind, setLoadedKind] = useState(kind);
  if (loadedKind !== kind) { setLoadedKind(kind); setBody(current); }
  const [saving, setSaving] = useState(false);
  async function save() {
    setSaving(true);
    const { error } = await actions.notes.update({ kind, body });
    setSaving(false);
    if (error) toast('error', 'No se guardó la nota', error.message); else toast('ok', 'Nota guardada');
  }
  return (
    <section class="card" id="notas">
      <div class="row-between">
        <h2 class="section-title">Notas</h2>
        <div class="segmented" role="radiogroup" aria-label="Tipo de nota">
          {kinds.map(([k, l]) => <button key={k} type="button" role="radio" aria-checked={kind === k} onClick={() => setKind(k)}>{l}</button>)}
        </div>
      </div>
      <textarea class="textarea" value={body} onInput={(e) => setBody((e.target as HTMLTextAreaElement).value)} maxLength={20000} placeholder="Notas de la sesión, cosas a comprar, NPC…" />
      <div class="btn-row"><button type="button" class="btn btn--primary" disabled={saving || body === current} onClick={save}>Guardar nota</button></div>
    </section>
  );
}

function BackupPanel() {
  const busy = useStore($busy);
  const [json, setJson] = useState('');
  const [exported, setExported] = useState('');
  async function exportNow() {
    const { data, error } = await actions.backup.export();
    if (error || !data) { toast('error', 'No se pudo exportar', error?.message); return; }
    const text = JSON.stringify(data, null, 2);
    setExported(text);
    try { await navigator.clipboard.writeText(text); toast('ok', 'Copia exportada', 'JSON copiado al portapapeles (también abajo).'); } catch { toast('ok', 'Copia exportada', 'Copiá el JSON del cuadro.'); }
  }
  return (
    <section class="card" id="backup">
      <h2 class="section-title">Copia de seguridad</h2>
      <p class="help">Exportá antes de cada sesión. La importación pisa personaje, recursos y ranuras (queda registrada y se puede deshacer).</p>
      <div class="btn-row">
        <button type="button" class="btn" disabled={busy} onClick={exportNow}>Exportar JSON</button>
      </div>
      {exported && <textarea class="textarea mono" readOnly value={exported} rows={6} />}
      <details class="stack" style="margin-top: var(--s3)">
        <summary>Importar</summary>
        <textarea class="textarea mono" value={json} onInput={(e) => setJson((e.target as HTMLTextAreaElement).value)} placeholder="Pegá acá el JSON exportado" rows={6} />
        <button type="button" class="btn btn--danger" disabled={busy || !json.trim()} onClick={async () => { const r = await runAction(actions.backup.import, { json }); if (r) setJson(''); }}>Importar y pisar el estado</button>
      </details>
    </section>
  );
}

export default SettingsPanel;
