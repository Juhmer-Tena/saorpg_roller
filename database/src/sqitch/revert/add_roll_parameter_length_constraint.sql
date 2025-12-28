-- Revert roller_db:add_roll_parameter_length_constraint from pg

BEGIN;

DROP FUNCTION IF EXISTS sao_roller.check_if_constraint_exists;

ALTER TABLE sao_roller.rolls
    DROP CONSTRAINT IF EXISTS sao_roller_rolls_character_max_length;
    
ALTER TABLE sao_roller.rolls
    DROP CONSTRAINT IF EXISTS sao_roller_rolls_purpose_max_length;

ALTER TABLE sao_roller.rolls
    DROP CONSTRAINT IF EXISTS sao_roller_rolls_post_max_length;

COMMIT;
