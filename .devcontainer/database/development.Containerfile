FROM mcr.microsoft.com/devcontainers/base:debian-12

RUN apt-get update && apt-get install --assume-yes \
    pgformatter \
    sqitch \
    libdbd-pg-perl \
    postgresql-common \
    && YES="yes" /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh \
    && apt-get update && apt-get install --assume-yes \
    postgresql-client-17 \
    && rm -rf /var/lib/apt/lists/* \
    && sqitch config --user engine.pg.client /usr/bin/psql
