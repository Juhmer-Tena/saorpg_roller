-- Deploy roller_db:character_index to pg
-- requires: rolls

BEGIN;

CREATE INDEX character_index
    ON sao_roller.rolls
 USING HASH
       (character);

COMMIT;
