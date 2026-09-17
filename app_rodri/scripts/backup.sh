#!/bin/sh
# Copia de seguridad de la base (pg_dump comprimido) con rotación de 14 días.
# Uso en el VPS (desde la carpeta de la app):  sh scripts/backup.sh
# Cron sugerido (todos los días a las 4:00):
#   0 4 * * * cd /opt/rodri && sh scripts/backup.sh >> backups/backup.log 2>&1
set -eu
cd "$(dirname "$0")/.."
DIR="${BACKUP_DIR:-backups}"
KEEP_DAYS="${KEEP_DAYS:-14}"
SERVICE="${DB_SERVICE:-db}"
USER="${POSTGRES_USER:-rodri}"
DB="${POSTGRES_DB:-rodri}"
mkdir -p "$DIR"
STAMP="$(date +%Y%m%d-%H%M%S)"
OUT="$DIR/rodri-$STAMP.sql.gz"
docker compose exec -T "$SERVICE" pg_dump -U "$USER" -d "$DB" --no-owner --no-privileges | gzip -9 > "$OUT"
echo "$(date -Iseconds) backup $OUT ($(du -h "$OUT" | cut -f1))"
find "$DIR" -name 'rodri-*.sql.gz' -mtime +"$KEEP_DAYS" -delete
# Restaurar:  gunzip -c backups/rodri-AAAAMMDD-HHMMSS.sql.gz | docker compose exec -T db psql -U rodri -d rodri
