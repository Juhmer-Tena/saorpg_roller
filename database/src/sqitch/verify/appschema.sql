-- Verify roller_db:appschema on pg

BEGIN;

SELECT pg_catalog.has_schema_privilege('sao_roller', 'usage');

ROLLBACK;
