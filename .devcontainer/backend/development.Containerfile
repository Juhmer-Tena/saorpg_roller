FROM mcr.microsoft.com/devcontainers/java:21-bookworm

# Now why don't you use features since the README for this image says to use a
# feature to install gradle? Because the devcontainer-cli is broken and doesn't
# support podman correctly because of gh issue 863: https://github.com/devcontainers/cli/issues/863

ARG GRADLE_VERSION=8.13

COPY install-gradle.sh /tmp/install-gradle.sh

RUN /tmp/install-gradle.sh "${GRADLE_VERSION}" && rm /tmp/install-gradle.sh
