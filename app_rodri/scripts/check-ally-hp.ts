export {};
const BASE = process.env.BASE_URL ?? 'http://localhost:4321'; const PASSWORD = process.env.APP_PASSWORD!;
let cookie = ''; let failed = 0;
const step = (n: string, ok: boolean, d = '') => { console.log(`${ok ? '✓' : '✗'} ${n}${d ? ` — ${d}` : ''}`); if (!ok) failed++; };
const call = async (name: string, input: unknown) => { const r = await fetch(`${BASE}/_actions/${name}`, { method: 'POST', headers: { 'content-type': 'application/json', origin: BASE, cookie }, body: JSON.stringify(input) }); return { status: r.status, text: await r.text() }; };
const st = async () => ((await (await fetch(`${BASE}/api/state`, { headers: { cookie } })).json()) as any).snapshot;
async function main() {
  const login = await fetch(`${BASE}/_actions/auth.login`, { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded', origin: BASE }, body: new URLSearchParams({ password: PASSWORD }), redirect: 'manual' });
  const m = /rodri_session=([^;]+)/.exec(login.headers.get('set-cookie') ?? ''); if (!m) { console.log('sin login'); process.exit(1); } cookie = `rodri_session=${m[1]}`;
  const a0 = (await st()).allies.filter((x: any) => x.active)[0];
  step('aliado con pg máximos para la prueba', !!a0?.maxHp, `${a0?.name} ${a0?.hpCurrent}/${a0?.maxHp}`);
  const hp = async () => (await st()).allies.find((x: any) => x.id === a0.id);
  let undo = 0;
  // fijar
  await call('allies.adjustHp', { id: a0.id, delta: 40, set: true }); undo++;
  step('fijar 40', (await hp()).hpCurrent === 40, String((await hp()).hpCurrent));
  // sumar
  await call('allies.adjustHp', { id: a0.id, delta: 7 }); undo++;
  step('+7 → 47', (await hp()).hpCurrent === 47, String((await hp()).hpCurrent));
  // restar
  await call('allies.adjustHp', { id: a0.id, delta: -12 }); undo++;
  step('−12 → 35', (await hp()).hpCurrent === 35, String((await hp()).hpCurrent));
  // tope en el máximo
  await call('allies.adjustHp', { id: a0.id, delta: 500 }); undo++;
  step('sumar de más no pasa del máximo', (await hp()).hpCurrent === a0.maxHp, `${(await hp()).hpCurrent}/${a0.maxHp}`);
  // fijar por encima del máximo: el servidor lo acepta tal cual (pg temporales del DM)
  await call('allies.adjustHp', { id: a0.id, delta: a0.maxHp + 20, set: true }); undo++;
  step('fijar por encima del máximo queda como se escribió', (await hp()).hpCurrent === a0.maxHp + 20, String((await hp()).hpCurrent));
  // caer a 0 marca el estado
  await call('allies.adjustHp', { id: a0.id, delta: 0, set: true }); undo++;
  step('fijar 0 marca ≤ 0 (indefenso)', (await hp()).downState === 'zero', (await hp()).downState);
  // negativo
  await call('allies.adjustHp', { id: a0.id, delta: -8 }); undo++;
  step('restar desde 0 deja negativo y sigue en ≤ 0', (await hp()).hpCurrent === -8 && (await hp()).downState === 'zero', `${(await hp()).hpCurrent} ${(await hp()).downState}`);
  // volver arriba de 0 lo levanta
  await call('allies.adjustHp', { id: a0.id, delta: 30, set: true }); undo++;
  step('volver a pg positivos lo devuelve a "en pie"', (await hp()).downState === 'ok', (await hp()).downState);
  // límites del input del servidor
  const big = await call('allies.adjustHp', { id: a0.id, delta: 501 });
  step('delta fuera de rango (501) rechazado y no deja evento', big.status === 400, String(big.status));
  for (let i = 0; i < undo; i++) await call('log.undoLast', {});
  const fin = await hp();
  step('deshacer todo deja los pg como estaban', fin.hpCurrent === a0.hpCurrent && fin.downState === a0.downState, `${fin.hpCurrent}/${a0.hpCurrent} ${fin.downState}`);
  console.log(failed ? `\n${failed} fallos` : '\nPg de aliados OK'); process.exit(failed ? 1 : 0);
}
main().catch((e) => { console.error(e); process.exit(1); });
