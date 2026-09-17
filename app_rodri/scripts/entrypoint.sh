#!/bin/sh
set -e
npx tsx scripts/migrate.ts
npx tsx scripts/seed.ts
exec node ./dist/server/entry.mjs
