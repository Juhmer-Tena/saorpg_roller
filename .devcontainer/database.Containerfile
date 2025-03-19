FROM postgres:17.2-bookworm

RUN apt-get update && apt-get install --assume-yes \
    postgresql-17-pgtap \
    && rm -rf /var/lib/apt/lists/*
