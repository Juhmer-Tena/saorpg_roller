-- Revert roller_db:appschema from pg

BEGIN;

DROP SCHEMA sao_roller;

COMMIT;
