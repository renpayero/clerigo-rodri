import { DATABASE_URL } from 'astro:env/server';
import { createDb, schema, type Db } from './client';

let _db: Db | undefined;

/** Instancia compartida para el servidor de Astro (lee DATABASE_URL de astro:env). */
export function db(): Db {
  if (!_db) _db = createDb(DATABASE_URL);
  return _db;
}

export { schema };
export type { Db };
