FROM eclipse-temurin:21-jdk AS jre-build

RUN $JAVA_HOME/bin/jlink \
    --add-modules=ALL-MODULE-PATH,jdk.random \
    --strip-debug \
    --no-man-pages \
    --no-header-files \
    --compress=2 \
    --output /javaruntime


FROM gradle:8-jdk21 AS builder

WORKDIR /home/gradle/project

COPY backend .

RUN gradle bootJar


FROM debian:bookworm-slim

ENV JAVA_HOME=/opt/java/openjdk
ENV PATH="${JAVA_HOME}/bin:${PATH}"

COPY --from=jre-build /javaruntime $JAVA_HOME

ARG ROLLER_VERSION=0.0.1-SNAPSHOT
COPY --from=builder /home/gradle/project/build/libs/roller-$ROLLER_VERSION.jar /opt/app/roller.jar

CMD ["java", "-jar", "/opt/app/roller.jar"]
