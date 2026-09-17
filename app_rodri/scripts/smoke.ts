/**
 * Prueba de humo contra un servidor en marcha (dev o Docker):
 *   login → −3 pg → recargar estado → sigue igual → deshacer → vuelve.
 * Uso: BASE_URL=http://localhost:4321 APP_PASSWORD=... npx tsx scripts/smoke.ts
 */
const BASE = (process.env.BASE_URL ?? 'http://localhost:4321').replace(/\/$/, '');
const PASSWORD = process.env.APP_PASSWORD ?? '';
if (!PASSWORD) {
  console.error('Falta APP_PASSWORD');
  process.exit(2);
}

let cookie = '';
const step = (name: string, ok: boolean, extra = '') => {
  console.log(`${ok ? '✓' : '✗'} ${name}${extra ? ` — ${extra}` : ''}`);
  if (!ok) process.exit(1);
};

async function state() {
  const r = await fetch(`${BASE}/api/state`, { headers: { cookie } });
  if (r.status !== 200) throw new Error(`/api/state → ${r.status}`);
  const j = (await r.json()) as { snapshot: { character: { hpCurrent: number }; version: number } };
  return j.snapshot;
}

async function action(name: string, input: unknown) {
  const r = await fetch(`${BASE}/_actions/${name}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', origin: BASE, cookie },
    body: JSON.stringify(input),
  });
  return r;
}

async function main() {
  const home = await fetch(`${BASE}/`, { redirect: 'manual' });
  step('/ sin sesión redirige a /login', home.status === 302 && (home.headers.get('location') ?? '').startsWith('/login'), String(home.status));

  const unauth = await fetch(`${BASE}/api/state`);
  step('/api/state sin sesión → 401', unauth.status === 401, String(unauth.status));

  const form = new URLSearchParams({ password: PASSWORD, next: '/' });
  const login = await fetch(`${BASE}/_actions/auth.login`, { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded', origin: BASE }, body: form, redirect: 'manual' });
  const setCookie = login.headers.get('set-cookie') ?? '';
  const m = /rodri_session=([^;]+)/.exec(setCookie);
  step('login devuelve cookie rodri_session HttpOnly', login.status < 400 && !!m && /httponly/i.test(setCookie), `status ${login.status}`);
  cookie = `rodri_session=${m![1]}`;

  const before = await state();
  step('snapshot cargado', typeof before.character.hpCurrent === 'number', `pg ${before.character.hpCurrent} · v${before.version}`);

  const dmg = await action('hp.adjust', { delta: 3, kind: 'damage', note: 'smoke' });
  step('hp.adjust −3 → 200', dmg.status === 200, String(dmg.status));
  const after = await state();
  step('los pg bajaron 3 y la versión subió', after.character.hpCurrent === before.character.hpCurrent - 3 && after.version > before.version, `pg ${after.character.hpCurrent} · v${after.version}`);

  const again = await state();
  step('recargar: sigue igual', again.character.hpCurrent === after.character.hpCurrent);

  const poll = await fetch(`${BASE}/api/state?v=${again.version}`, { headers: { cookie } });
  const pj = (await poll.json()) as { changed: boolean };
  step('polling con la misma versión → changed:false', pj.changed === false);

  const bad = await action('channel.use', { mode: 'quick', excluded: 5 });
  step('input inválido → 4xx', bad.status >= 400 && bad.status < 500, String(bad.status));

  const undo = await action('log.undoLast', undefined);
  step('deshacer → 200', undo.status === 200, String(undo.status));
  const restored = await state();
  step('los pg volvieron', restored.character.hpCurrent === before.character.hpCurrent, `pg ${restored.character.hpCurrent}`);

  // CSRF: Astro solo exige Origin en peticiones "de formulario" (las JSON no viajan cross-site sin preflight).
  const noOrigin = await fetch(`${BASE}/_actions/auth.logout`, { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded', cookie }, body: 'x=1', redirect: 'manual' });
  step('POST de formulario sin Origin es rechazado (CSRF)', noOrigin.status === 403, String(noOrigin.status));
  const still = await state();
  step('la sesión sigue viva tras el intento', typeof still.version === 'number');

  const health = await fetch(`${BASE}/api/health`);
  step('/api/health → 200', health.status === 200);
  console.log('Humo OK');
}

main().catch((e) => {
  console.error('✗', e);
  process.exit(1);
});
