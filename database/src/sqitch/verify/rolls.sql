-- Verify roller_db:rolls on pg

BEGIN;

SELECT id, version, post, character, timestamp, character, battle,
       mob, craft, loot
  FROM sao_roller.rolls
 WHERE FALSE;

ROLLBACK;
