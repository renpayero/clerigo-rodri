import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

export type Db = ReturnType<typeof createDb>;

/** Crea un cliente Drizzle. Los scripts (migrate/seed) lo llaman con process.env.DATABASE_URL. */
export function createDb(url: string | undefined = process.env.DATABASE_URL) {
  if (!url) throw new Error('DATABASE_URL no está definida');
  const sql = postgres(url, { max: 5, idle_timeout: 30, connect_timeout: 10 });
  return drizzle(sql, { schema });
}

export { schema };
