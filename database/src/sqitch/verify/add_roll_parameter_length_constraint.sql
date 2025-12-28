-- Verify roller_db:add_roll_parameter_length_constraint on pg

BEGIN;

SELECT has_function_privilege('sao_roller.check_if_constraint_exists(varchar)', 'execute');

DO $$
BEGIN
ASSERT (SELECT sao_roller.check_if_constraint_exists('sao_roller_rolls_character_max_length'));
END $$;

DO $$
BEGIN
ASSERT (SELECT sao_roller.check_if_constraint_exists('sao_roller_rolls_purpose_max_length'));
END $$;

DO $$
BEGIN
ASSERT (SELECT sao_roller.check_if_constraint_exists('sao_roller_rolls_purpose_max_length'));
END $$;

DO $$
BEGIN
ASSERT NOT (SELECT sao_roller.check_if_constraint_exists('a constraint that will not ever reasonably exist'));
END $$;

ROLLBACK;
