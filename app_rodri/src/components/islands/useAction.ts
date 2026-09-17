import { $busy, setSnapshot, toast } from './store';
import type { ActionOutcome } from '@/lib/snapshot';

type SafeResult<T> = { data: T; error: undefined } | { data: undefined; error: { code: string; message: string } };

/**
 * Ejecuta una action de Astro que devuelve ActionOutcome: bloquea la UI, aplica el snapshot y avisa.
 * Devuelve el resultado o null si falló.
 */
export async function runAction<I>(
  fn: (input: I) => Promise<SafeResult<ActionOutcome>>,
  input: I,
  opts: { silent?: boolean } = {},
): Promise<ActionOutcome | null> {
  if ($busy.get()) return null;
  $busy.set(true);
  try {
    const { data, error } = await fn(input);
    if (error) {
      const title = error.code === 'CONFLICT' ? 'No se puede' : error.code === 'UNAUTHORIZED' ? 'Sesión vencida' : 'Error';
      toast('error', title, error.message);
      if (error.code === 'UNAUTHORIZED') window.location.href = '/login?next=' + encodeURIComponent(location.pathname);
      return null;
    }
    setSnapshot(data.snapshot);
    if (!opts.silent) {
      const title = data.event?.label ?? data.message ?? 'Listo';
      toast('ok', title, data.event && data.message ? data.message : undefined, data.roll);
    }
    return data;
  } catch (e) {
    toast('error', 'Sin conexión', e instanceof Error ? e.message : String(e));
    return null;
  } finally {
    $busy.set(false);
  }
}
