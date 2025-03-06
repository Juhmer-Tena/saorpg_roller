-- Verify roller_db:character_index on pg

BEGIN;

SELECT 1/COUNT(*)
  FROM pg_indexes
 WHERE schemaname = 'sao_roller' AND 
       tablename  = 'rolls' AND
       indexname  = 'character_index' AND
       indexdef   = 'CREATE INDEX character_index ON sao_roller.rolls USING hash ("character")';

ROLLBACK;
