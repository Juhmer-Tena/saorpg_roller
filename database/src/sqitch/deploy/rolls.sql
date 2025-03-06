-- Deploy roller_db:rolls to pg
-- requires: appschema

BEGIN;

CREATE TABLE sao_roller.rolls (
    id        integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    version   varchar NOT NULL,
    post      varchar NOT NULL,
    timestamp timestamp with time zone NOT NULL DEFAULT NOW(),
    purpose   varchar NOT NULL,
    character varchar NOT NULL,
    battle    smallint NOT NULL,
    mob       smallint NOT NULL,
    craft     smallint NOT NULL,
    loot      smallint NOT NULL
);

COMMIT;
