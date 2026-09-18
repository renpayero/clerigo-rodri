/**
 * Prueba de integración de Enduring Blessing contra un servidor levantado (dev o prod):
 *   login → Inspired Spell Freedom of Movement 24 h sobre el aliado 1 → un segundo Enduring sobre el mismo aliado
 *   termina el primero → Communal rechaza Enduring → deshacer todo.
 * Uso: BASE_URL=http://localhost:4321 APP_PASSWORD=... npx tsx scripts/check-enduring.ts
 */
export {};
const BASE = process.env.BASE_URL ?? 'http://localhost:4321';
const PASSWORD = process.env.APP_PASSWORD ?? '';
let cookie = '';
let failed = 0;
const step = (name: string, ok: boolean, detail = '') => { console.log(`${ok ? '✓' : '✗'} ${name}${detail ? ` — ${detail}` : ''}`); if (!ok) failed++; };

async function action(name: string, input: unknown) {
  const r = await fetch(`${BASE}/_actions/${name}`, { method: 'POST', headers: { 'content-type': 'application/json', origin: BASE, cookie }, body: JSON.stringify(input) });
  const text = await r.text();
  let json: any = null; try { json = JSON.parse(text); } catch { /* texto */ }
  return { status: r.status, json, text };
}
async function state() { const r = await fetch(`${BASE}/api/state`, { headers: { cookie } }); return ((await r.json()) as any).snapshot; }

async function main() {
  const form = new URLSearchParams({ password: PASSWORD });
  const login = await fetch(`${BASE}/_actions/auth.login`, { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded', origin: BASE }, body: form, redirect: 'manual' });
  const m = /rodri_session=([^;]+)/.exec(login.headers.get('set-cookie') ?? '');
  step('login', !!m, String(login.status));
  if (!m) process.exit(1);
  cookie = `rodri_session=${m[1]}`;

  const s0 = await state();
  const ally = s0.allies.find((a: any) => a.active)?.id;
  const pm0 = s0.resources.mythic_power.current;
  step('hay un aliado y poder mítico', !!ally && pm0 >= 2, `aliado ${ally}, PM ${pm0}`);
  const undo: number[] = [];

  // 1) Freedom of Movement (10 min/nivel) con Enduring → 24 h = 1440 min
  const a = await action('spells.inspired', { spellId: 'freedom-of-movement', targets: [ally], mythic: false, augmented: false, enduring: true, activateBuff: true });
  const b1 = (await state()).buffs.find((b: any) => b.buffKey === 'freedom-of-movement' && b.status === 'active');
  step('Inspired + Enduring: Freedom of Movement queda 1440 min y marcado extended', a.status === 200 && b1?.remaining === 1440 && b1?.extended === true, `${a.status} ${b1?.remaining} ${b1?.label ?? a.text.slice(0, 120)}`);
  if (a.status === 200) undo.push(1);

  // 2) Segundo Enduring sobre el mismo aliado (Resist Energy) → el primero expira
  const b = await action('spells.inspired', { spellId: 'resist-energy', targets: [ally], mythic: false, augmented: false, enduring: true, activateBuff: true, energy: 'fire' });
  const buffs = (await state()).buffs as any[];
  const fom = buffs.find((x: any) => x.buffKey === 'freedom-of-movement');
  const re = buffs.find((x: any) => x.buffKey === 'resist-energy' && x.status === 'active');
  // el snapshot solo trae buffs activos: el primero ya no tiene que estar
  step('segundo Enduring sobre el mismo aliado: el primero deja de estar activo y el nuevo queda 24 h', b.status === 200 && (!fom || fom.status !== 'active') && re?.remaining === 1440, `${b.status} fom=${fom?.status ?? 'ya no activo'} re=${re?.remaining}`);
  if (b.status === 200) undo.push(1);

  // 3) Communal no admite Enduring
  const c = await action('spells.inspired', { spellId: 'resist-energy-communal', targets: [ally], mythic: false, augmented: false, enduring: true, activateBuff: true, energy: 'fire' });
  step('Communal Resist Energy con Enduring → CONFLICT', c.status === 409 && /Enduring/.test(c.text), `${c.status} ${c.text.slice(0, 100)}`);

  // 4) Dos objetivos con Enduring → CONFLICT
  const d = await action('spells.inspired', { spellId: 'freedom-of-movement', targets: [ally, 'self'], mythic: false, augmented: false, enduring: true, activateBuff: true });
  step('dos objetivos con Enduring → CONFLICT', d.status === 409, `${d.status} ${d.text.slice(0, 100)}`);

  // 5) Fervor (asaltos) con Enduring → CONFLICT
  const e = await action('spells.inspired', { spellId: 'blessing-of-fervor', targets: [ally], mythic: false, augmented: false, enduring: true, activateBuff: true });
  step('Blessing of Fervor (asaltos) con Enduring → CONFLICT', e.status === 409, `${e.status} ${e.text.slice(0, 100)}`);

  // deshacer lo que se aplicó
  for (const _ of undo) { const u = await action('log.undoLast', {}); step('deshacer', u.status === 200, String(u.status)); }
  const s1 = await state();
  step('el poder mítico volvió', s1.resources.mythic_power.current === pm0, `${s1.resources.mythic_power.current}/${pm0}`);
  console.log(failed ? `\n${failed} fallos` : '\nEnduring OK');
  process.exit(failed ? 1 : 0);
}
main().catch((e) => { console.error(e); process.exit(1); });
