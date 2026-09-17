/**
 * Limitador de intentos de login en memoria (un solo proceso, un solo usuario).
 * Por IP: 5 fallos → bloqueo de 15 minutos. Global: 20 intentos por minuto.
 */

const MAX_FAILS = 5;
const LOCK_MS = 15 * 60 * 1000;
const GLOBAL_MAX_PER_MINUTE = 20;

type Entry = { fails: number; lockedUntil: number };

const byIp = new Map<string, Entry>();
const globalStamps: number[] = [];

function pruneGlobal(now: number) {
  while (globalStamps.length && globalStamps[0]! < now - 60_000) globalStamps.shift();
}

export function isBlocked(ip: string, now = Date.now()): { blocked: boolean; retryAfterSeconds?: number } {
  pruneGlobal(now);
  if (globalStamps.length >= GLOBAL_MAX_PER_MINUTE) return { blocked: true, retryAfterSeconds: 60 };
  const e = byIp.get(ip);
  if (e && e.lockedUntil > now) return { blocked: true, retryAfterSeconds: Math.ceil((e.lockedUntil - now) / 1000) };
  return { blocked: false };
}

export function recordAttempt(ip: string, success: boolean, now = Date.now()) {
  pruneGlobal(now);
  globalStamps.push(now);
  if (success) {
    byIp.delete(ip);
    return;
  }
  const e = byIp.get(ip) ?? { fails: 0, lockedUntil: 0 };
  e.fails += 1;
  if (e.fails >= MAX_FAILS) {
    e.lockedUntil = now + LOCK_MS;
    e.fails = 0;
  }
  byIp.set(ip, e);
}

/** Solo para tests. */
export function _resetRateLimit() {
  byIp.clear();
  globalStamps.length = 0;
}
