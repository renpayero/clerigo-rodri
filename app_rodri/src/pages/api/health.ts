import type { APIRoute } from 'astro';
import { sql } from 'drizzle-orm';
import { db } from '@/db';

export const GET: APIRoute = async () => {
  try {
    await db().execute(sql`select 1`);
    return new Response(JSON.stringify({ ok: true, db: true }), { headers: { 'content-type': 'application/json' } });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, db: false, error: String(err) }), {
      status: 503,
      headers: { 'content-type': 'application/json' },
    });
  }
};
