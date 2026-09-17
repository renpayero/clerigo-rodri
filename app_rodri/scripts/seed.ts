import { createDb } from '../src/db/client';
import { seedIfEmpty } from '../src/db/seed';

const db = createDb();
const result = await seedIfEmpty(db);
console.log(result.created ? 'Datos iniciales creados' : 'Datos iniciales ya existían', result);
process.exit(0);
