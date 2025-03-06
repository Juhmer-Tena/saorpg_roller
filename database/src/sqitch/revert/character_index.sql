-- Revert roller_db:character_index from pg

BEGIN;

DROP INDEX sao_roller.character_index;

COMMIT;
