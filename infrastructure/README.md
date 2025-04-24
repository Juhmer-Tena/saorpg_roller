# SAO-RPG Roller "Infrastructure"

Infrastructure is used as a loose term here.

## Deploying the application

1. Change your working directory to `infrastructure/src/docker`
2. Run `docker compose up -d` (or if you're using podman do `podman compose up -d`)

List of containers that should now be deployed:

* database
* backend
* proxy
* frontend

You should now be able to access the application by visiting <http://localhost:8080>.
