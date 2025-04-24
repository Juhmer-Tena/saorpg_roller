# Database configuration for the SAO Roller v2

The database configuration for the SAO Roller v2 including tests for creating the schema and uses
sqitch for migration-based schemas and pgtap to ensure that the schemas are created properly. The
database in the PostgreSQL instance should be in the `saorpg` database.

## Deploying changes using sqitch

This section does not cover an exhaustive list of what sqitch can do (the sqitch documentation is
available for that). Instead this section what commands need to be run in order to deploy the
database schema (which can then be subsequently be used as a base for other sqitch commands).

1. Ensure that your current directory is `database/src/sqitch`
2. Identify the database's container name (typically will be `db` for the devcontainer but may also
    be `database` for the production environments)
3. Run the following command: `sqitch deploy --db-host <database container name> --db-user saorpg`

If the command fails mentioning that the `db-host` is invalid or the `saorpg` database or user does
not exist, then the postgres initialization script failed. You may need to delete the
directory/volume that backs the database and restart the container if the initialization script had
a transient error.

## Creating the Devcontainer

### Volume Creation

A volume called `postgres-data` should be created in whatever you use to manage containers (e.g.,
podman or docker). This will be shared and used between multiple projects.

### File Configuration

There are some files that must be filled out in the `.devcontainer` for secrets:

* `database/POSTGRES_PASSWORD` (unused due to peer authentication only being permitted)
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
