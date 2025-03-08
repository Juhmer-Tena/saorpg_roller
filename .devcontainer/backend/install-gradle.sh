#!/bin/bash

# See development.Containerfile for why this exists (spoiler: it's stupid)

readonly GRADLE_VERSION=$1

# Now for why this isn't a RUN step is because we need to be able to source
# the sdkman-init
su vscode -c 'umask 0002 && . /usr/local/sdkman/bin/sdkman-init.sh \
    && sdk install gradle "${GRADLE_VERSION}" && sdk flush archives && \
    sdk flush temp'
