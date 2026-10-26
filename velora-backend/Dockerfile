# =========================================================================
# Stage 1: Build JAR using lightweight Maven Alpine with Java 21
# =========================================================================
FROM maven:3.9.9-eclipse-temurin-21-alpine AS builder

WORKDIR /app

# Cache dependencies
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy source and package
COPY src ./src
RUN mvn clean package -DskipTests -B

# =========================================================================
# Stage 2: Ultra-lightweight Alpine JRE runtime for micro-VPS & Free Tiers
# =========================================================================
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

# Create unprivileged application user
RUN addgroup -S velora && adduser -S velora -G velora
USER velora

# Copy the generated fat jar
COPY --from=builder /app/target/velora-backend-1.0.0.jar app.jar

# JVM flags optimized for minimal memory footprint:
# - Serial Garbage Collector (least RAM overhead)
# - Reduced stack size (512k per thread)
# - Container-aware memory capping
ENV JAVA_OPTS="-XX:+UseSerialGC -Xss512k -XX:MaxRAMPercentage=75 -Djava.security.egd=file:/dev/./urandom"

EXPOSE 8080

ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]

