import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

const url = process.env.DATABASE_URL;
if (!url) {
  console.error('DATABASE_URL no está definida');
  process.exit(1);
}

const attempts = Number(process.env.MIGRATE_ATTEMPTS ?? 20);
for (let i = 1; i <= attempts; i++) {
  const sql = postgres(url, { max: 1, connect_timeout: 5 });
  try {
    await migrate(drizzle(sql), { migrationsFolder: 'drizzle' });
    console.log('Migraciones aplicadas');
    await sql.end();
    process.exit(0);
  } catch (err) {
    await sql.end().catch(() => {});
    if (i === attempts) {
      console.error('No se pudieron aplicar las migraciones:', err);
      process.exit(1);
    }
    console.log(`Base de datos no disponible todavía (intento ${i}/${attempts}); reintento en 3 s`);
    await new Promise((r) => setTimeout(r, 3000));
  }
}
