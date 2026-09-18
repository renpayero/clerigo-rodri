# Rodri Companion

Ayuda de juego para **Rodri** (Cleric 11 / Mythic Hierophant 3, aasimar de Sarenrae) en Pathfinder 1.ª ed. Complementa la hoja de Myth-Weavers en la mesa: pg, recursos, buffs, ranuras, dados y reglas con link a aonprd.com.

- Stack: Astro 7 (SSR, `@astrojs/node`) · Preact (islas) · PostgreSQL 18 · Drizzle ORM · CSS puro.
- Fuente de verdad de los números: `FICHA-FINAL-Clerigo.md` (v3.1) → `src/data/*`. La DB solo guarda lo mutable.
- Reglas: `src/content/rules/*.md`, importadas del dossier con `npm run rules:import`.

## Desarrollo local

```sh
cp .env.example .env            # completar APP_PASSWORD, SESSION_SECRET (openssl rand -hex 32), POSTGRES_PASSWORD
docker compose up -d db         # Postgres en 127.0.0.1:5432 (override local)
npm install
npm run db:migrate && npm run db:seed
npm run dev                     # http://localhost:4321 y en la LAN (celular): http://<ip-de-la-notebook>:4321
```

Con `DATABASE_URL=postgres://rodri:<pass>@localhost:5432/rodri` en `.env` para correr fuera de Docker.

Todo en Docker (app + db): `docker compose up --build` (la app queda en `0.0.0.0:4321`).

## Comprobaciones

| Comando | Qué hace |
|---|---|
| `npm run check` | `astro check` (tipos, .astro) |
| `npm test` | Vitest: reglas puras (curación, ranuras, descansos, dados, buffs) y datos |
| `npm run smoke` | Prueba de humo contra un servidor en marcha: login → −3 pg → recargar → deshacer (`BASE_URL`, `APP_PASSWORD`) |
| `npm run aon:validate` | Verifica que cada URL de AoN de `src/data` responda y contenga el nombre |
| `npm run rules:import` | Regenera `src/content/rules` desde `../DOSSIER-Clerigo-PF1e.md` y `../FICHA-FINAL-Clerigo.md` |

## Despliegue en el VPS (Hostinger, proxy reverso en Docker)

Estado 17/09/2026: desplegado en `/root/projects/clerigo-rodri/app_rodri` del VPS (`ssh vpsren`, clon de este repo), contenedores `rodri-app` + `rodri-db-1`, unidos a la red `nginx_default` de Nginx Proxy Manager.


1. `git clone https://github.com/renpayero/clerigo-rodri.git` en `/root/projects` y, en `app_rodri/`, crear `.env` con valores reales: `POSTGRES_PASSWORD`, `APP_PASSWORD` (frase larga), `SESSION_SECRET` (`openssl rand -hex 32`), `TRUST_PROXY=true`, `SECURE_COOKIES=true`.
2. Red compartida con el proxy: en este VPS es `PROXY_NETWORK=nginx_default` (la de Nginx Proxy Manager); en otro, `docker network create proxy`.
3. Levantar: `docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build`. El contenedor se llama `rodri-app`, no expone puertos y migra + siembra al arrancar.
4. Proxy (hecho por archivo, sin la UI de NPM): `/root/NGINX/data/nginx/proxy_host/rodri.conf` (server block `rodri.dakodev.com` → `rodri-app:4321`, HTTP→HTTPS, http2, block-exploits, includes de NPM). Certificado: `docker exec nginx-app-1 certbot certonly --webroot -w /data/letsencrypt-acme-challenge -d rodri.dakodev.com --cert-name rodri` → `/root/NGINX/letsencrypt/live/rodri/`. Renovación: cron del host los lunes 04:17 (`certbot renew --cert-name rodri --deploy-hook "nginx -s reload"`, log en `certbot-renew.log`), porque NPM solo renueva los certificados de su propia base. Tras editar el conf: `docker exec nginx-app-1 nginx -t && docker exec nginx-app-1 nginx -s reload`.
   `astro.config.mjs` lleva `security.allowedDomains` con `rodri.dakodev.com` (https): sin eso Astro 7 ignora `X-Forwarded-Proto` y las actions devuelven 403 detrás del proxy.
5. Probar: `curl -I https://rodri.dakodev.com` → `302 /login`; `BASE_URL=https://rodri.dakodev.com APP_PASSWORD=... npm run smoke` desde cualquier máquina.
6. Instalar en el celular: Chrome → menú → "Agregar a pantalla de inicio" (manifest `standalone`; en LAN por HTTP no aparece el prompt automático).

Actualizar: `cd /root/projects/clerigo-rodri && git pull && cd app_rodri && docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build`. Logs: `docker compose logs -f app`.

## Copias de seguridad

- Automática: `sh scripts/backup.sh` (pg_dump gz en `backups/`, rotación 14 días). Cron: `0 4 * * * cd /opt/rodri && sh scripts/backup.sh >> backups/backup.log 2>&1`.
- Restaurar: `gunzip -c backups/rodri-X.sql.gz | docker compose exec -T db psql -U rodri -d rodri`.
- Manual antes de cada sesión: Ajustes → Copia de seguridad → Exportar JSON (se puede importar desde ahí mismo; queda como evento deshacible).

## Subir de nivel / cambiar la ficha

1. Editar `src/data/*` (atributos, dotes, conjuros, objetos, `resources.ts` para máximos nuevos) y `lib/rules/derived.ts` (`BASE`).
2. `npm test` (los tests fijan pg 125, CA 23/25/27, ranuras 4/7/7/7/6/4/3, equipo 101.728: ajustarlos con la ficha nueva).
3. Redeploy: el seed sincroniza los recursos nuevos (`syncResources`) sin borrar el estado; para un máximo temporal (boon, nivel) usar `maxOverride` desde Ajustes/Equipo (+ sobre un contador lleno).

## Estructura

```
src/data        ficha estática tipada (fuente: FICHA-FINAL v3.1) + URLs de AoN verificadas
src/lib/rules   lógica pura y testeada (curación, ranuras, descansos, dados, buffs)
src/db          schema Drizzle, seed, snapshot, patches (deshacer)
src/actions     astro:actions: cada una es una transacción con FOR UPDATE + evento deshacible
src/components  Term (tooltip + AoN), islas Preact (Mesa, Conjuros, Ajustes…)
src/content     reglas curadas del dossier (Markdown)
scripts         migrate, seed, smoke, backup, import-dossier, validate-aon, make-icons
```
