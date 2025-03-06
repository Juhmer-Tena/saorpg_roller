-- Revert roller_db:rolls from pg

BEGIN;

DROP TABLE sao_roller.rolls;

COMMIT;
