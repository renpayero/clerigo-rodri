import type { APIRoute } from 'astro';
import { db } from '@/db';
import { loadSnapshot } from '@/db/repo/snapshot';

/** Snapshot del estado para sincronizar dispositivos. ?v=N devuelve {changed:false} si la versión no cambió. */
export const GET: APIRoute = async ({ url }) => {
  const snap = await loadSnapshot(db());
  const v = Number(url.searchParams.get('v') ?? NaN);
  if (!Number.isNaN(v) && v === snap.version) {
    return new Response(JSON.stringify({ changed: false, version: snap.version }), { headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
  }
  return new Response(JSON.stringify({ changed: true, snapshot: snap }), { headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
};
