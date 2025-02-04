# Database configuration for the SAO Roller v2

The database configuration for the SAO Roller v2 including tests for creating the schema. Uses
sqitch for migration-based schemas and pgtap to ensure that the schemas are created properly.

## Creating the Devcontainer

The devcontainer should be able to be created without much problems. There are some files that must
be filled out in the `.devcontainer/database` such as:

* `POSTGRES_PASSWORD`
* `sqitch.conf`

There are template files (filetype suffix `.template`) with information that should be filled out
marked by angled brackets (i.e., `<>`).

## Running Tests

Once the devcontainer is created, a terminal session to the database container can be opened and the
following command should be executed:

`pg_prove -U postgres -d postgres /usr/local/src/postgresql/test/*.sql`

After putting in the password generated in `.devcontainer/database/POSTGRES_PASSWORD` when prompted,
the tests will execute and display the results.
