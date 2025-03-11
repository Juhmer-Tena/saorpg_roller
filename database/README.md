# Database configuration for the SAO Roller v2

The database configuration for the SAO Roller v2 including tests for creating the schema and uses
sqitch for migration-based schemas and pgtap to ensure that the schemas are created properly. The
database in the PostgreSQL instance should be in the `saorpg` database.

## Creating the Devcontainer

### Volume Creation

A volume called `postgres-data` should be created in whatever you use to manage containers (e.g.,
podman or docker). This will be shared and used between multiple projects.

### File Configuration

There are some files that must be filled out in the `.devcontainer` for secrets:

* `common/POSTGRES_PASSWORD`
* `database/sqitch.conf`

There are template files (filetype suffix `.template`) with information that should be filled out
marked by angled brackets (i.e., `<>`).

## Running Tests

Once the devcontainer is created, a terminal session to the database container can be opened and the
following command should be executed:

`pg_prove -U postgres -d postgres /usr/local/src/postgresql/test/*.sql`

After putting in the password generated in `.devcontainer/database/POSTGRES_PASSWORD` when prompted,
the tests will execute and display the results.

Alternatively, the unit tests can be run on a dedicated staging (or production if there is no
staging) PostgreSQL system with the schema deployed.
