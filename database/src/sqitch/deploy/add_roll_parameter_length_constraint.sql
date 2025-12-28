-- Deploy roller_db:add_roll_parameter_length_constraint to pg
-- requires: rolls
-- requires: appschema

BEGIN;

CREATE OR REPLACE FUNCTION sao_roller.check_if_constraint_exists(c_name varchar)
    RETURNS boolean
    LANGUAGE SQL
    STABLE STRICT
    AS $$
    SELECT EXISTS (
        SELECT constraint_name
        FROM information_schema.constraint_column_usage
        WHERE constraint_name = c_name);
$$;

DO $$
BEGIN
    IF NOT sao_roller.check_if_constraint_exists('sao_roller_rolls_character_max_length') THEN
        EXECUTE 'ALTER TABLE sao_roller.rolls ADD CONSTRAINT sao_roller_rolls_character_max_length CHECK (char_length(character) <= 64)';
    END IF;
END $$;

DO $$
BEGIN
    IF NOT sao_roller.check_if_constraint_exists('sao_roller_rolls_purpose_max_length') THEN
        EXECUTE 'ALTER TABLE sao_roller.rolls ADD CONSTRAINT sao_roller_rolls_purpose_max_length CHECK (char_length(purpose) <= 64)';
    END IF;
END $$;

DO $$
BEGIN
    IF NOT sao_roller.check_if_constraint_exists('sao_roller_rolls_post_max_length') THEN
        EXECUTE 'ALTER TABLE sao_roller.rolls ADD CONSTRAINT sao_roller_rolls_post_max_length CHECK (bit_length(post) <= 8192)';
    END IF;
END $$;

COMMIT;
