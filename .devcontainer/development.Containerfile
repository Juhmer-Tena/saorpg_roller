FROM mcr.microsoft.com/devcontainers/base:debian-12

RUN UBUNTU_CODENAME=jammy && \
    wget -O- "https://keyserver.ubuntu.com/pks/lookup?fingerprint=on&op=get&search=0x6125E2A8C77F2818FB7BD15B93C4A3FD7BB9C367" | sudo gpg --dearmour -o /usr/share/keyrings/ansible-archive-keyring.gpg && \
    echo "deb [signed-by=/usr/share/keyrings/ansible-archive-keyring.gpg] http://ppa.launchpad.net/ansible/ansible/ubuntu $UBUNTU_CODENAME main" | sudo tee /etc/apt/sources.list.d/ansible.list && \
    apt-get update && apt-get install --assume-yes \
    ansible \
    python3-kubernetes \
    sqitch \
    libdbd-pg-perl \
    postgresql-common \
    && wget -q -O - https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash \
    && YES="yes" /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh \
    && apt-get update && apt-get install --assume-yes \
    postgresql-client-17 \
    postgresql-17-pgtap \
    && wget -q -O - https://github.com/helmfile/helmfile/releases/download/v1.1.4/helmfile_1.1.4_linux_amd64.tar.gz | tar -C /usr/local/bin -zxvf - helmfile \
    && rm -rf /var/lib/apt/lists/* \
    && sqitch config --user engine.pg.client /usr/bin/psql
