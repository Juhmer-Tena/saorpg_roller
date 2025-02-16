SET client_min_messages to warning;
CREATE EXTENSION IF NOT EXISTS pgtap;
RESET client_min_messages;

BEGIN;
--- insert plan statement
SELECT plan(25);

--- insert test statements
SELECT schemas_are(ARRAY[ 'sao_roller' ], 'schemas match');

-- begin testing sao_roller schema
SET search_path = sao_roller,public
SELECT tables_are(ARRAY[ 'rolls' ], 'tables in roller match');

SELECT columns_are('rolls', ARRAY['id', 'version', 'post', 'timestamp', 'purpose', 'character', 'battle', 'craft', 'loot', 'mob' ], 'columns in rolls match');

SELECT col_type_is ('rolls', 'id', 'serial');
SELECT col_not_null('rolls', 'id');
SELECT col_is_pk   ('rolls', 'id');

SELECT col_type_is ('rolls', 'version', 'varchar');
SELECT col_not_null('rolls', 'version');

SELECT col_type_is ('rolls', 'post', 'varchar');
SELECT col_not_null('rolls', 'post');

SELECT col_type_is    ('rolls', 'timestamp', 'timestamp with time zone');
SELECT col_not_null   ('rolls', 'timestamp');
SELECT col_has_default('rolls', 'timestamp');
SELECT col_default_is ('rolls', 'timestamp', 'now()');

SELECT col_type_is ('rolls', 'character', 'varchar');
SELECT col_not_null('rolls', 'character');
SELECT has_index   ('rolls', 'character_index', 'character', 'index exists to quickly search by character');

SELECT col_type_is ('rolls', 'battle', 'integer');
SELECT col_not_null('rolls', 'battle');

SELECT col_type_is ('rolls', 'craft', 'integer');
SELECT col_not_null('rolls', 'craft');

SELECT col_type_is ('rolls', 'loot', 'integer');
SELECT col_not_null('rolls', 'loot');

SELECT col_type_is ('rolls', 'mob', 'integer');
SELECT col_not_null('rolls', 'mob');

SELECT * FROM finish(true);
ROLLBACK;
