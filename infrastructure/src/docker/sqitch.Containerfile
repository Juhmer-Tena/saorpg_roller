FROM debian:bookworm-slim

ARG DEBIAN_FRONTEND=noninteractive

WORKDIR /opt/sqitch

RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install --assume-yes \
    sqitch \
    libdbd-pg-perl \
    postgresql-common \
    && YES="yes" /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh \
    && apt-get update && apt-get install --assume-yes \
    postgresql-client-17 \
    && rm -rf /var/lib/apt/lists/* \
    && sqitch config --user engine.pg.client /usr/bin/psql

COPY database/src/sqitch .

CMD sqitch deploy --db-host "${DATABASE_CONTAINER}" --db-user saorpg
