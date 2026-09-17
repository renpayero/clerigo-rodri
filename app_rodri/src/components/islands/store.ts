import { atom, computed } from 'nanostores';
import type { StateSnapshot } from '@/lib/snapshot';
import type { RollResult } from '@/lib/rules/dice';

/** Estado compartido entre islas (misma instancia del módulo en el bundle cliente). */
export const $snapshot = atom<StateSnapshot | null>(null);
export const $busy = atom(false);
export const $offline = atom(false);

export type Toast = { id: number; kind: 'ok' | 'error' | 'info'; title: string; detail?: string; roll?: RollResult | null; at: number };
export const $toasts = atom<Toast[]>([]);

let toastSeq = 0;
export function toast(kind: Toast['kind'], title: string, detail?: string, roll?: RollResult | null) {
  const t: Toast = { id: ++toastSeq, kind, title, detail, roll, at: Date.now() };
  $toasts.set([...$toasts.get().slice(-3), t]);
  const ttl = kind === 'error' ? 8000 : roll ? 12000 : 5000;
  setTimeout(() => dismissToast(t.id), ttl);
}
export function dismissToast(id: number) {
  $toasts.set($toasts.get().filter((t) => t.id !== id));
}

/** Inicializa el store con el snapshot SSR si todavía no hay uno más nuevo. */
export function initSnapshot(initial: StateSnapshot) {
  const cur = $snapshot.get();
  if (!cur || initial.version > cur.version) $snapshot.set(initial);
}

export function setSnapshot(next: StateSnapshot) {
  const cur = $snapshot.get();
  if (!cur || next.version >= cur.version) $snapshot.set(next);
}

export const $character = computed($snapshot, (s) => s?.character ?? null);
export const $resources = computed($snapshot, (s) => s?.resources ?? {});

let pollTimer: ReturnType<typeof setInterval> | null = null;

/** Sincroniza con otros dispositivos: GET /api/state?v= cada 5 s con la pestaña visible. */
export function startPolling(intervalMs = 5000) {
  if (pollTimer || typeof window === 'undefined') return;
  const tick = async () => {
    if (document.visibilityState !== 'visible' || $busy.get()) return;
    const cur = $snapshot.get();
    try {
      const res = await fetch(`/api/state?v=${cur?.version ?? ''}`, { cache: 'no-store' });
      if (res.status === 401) {
        window.location.href = '/login?next=' + encodeURIComponent(location.pathname);
        return;
      }
      if (!res.ok) throw new Error(String(res.status));
      const body = await res.json();
      $offline.set(false);
      if (body.changed && body.snapshot) setSnapshot(body.snapshot);
    } catch {
      $offline.set(true);
    }
  };
  pollTimer = setInterval(tick, intervalMs);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') tick();
  });
}
