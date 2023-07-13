FROM maven:3.6.3-openjdk-17-slim as maven

# 將 code copy 至容器內
COPY . /app

WORKDIR /app

# 編譯及打包應用程式為一個可執行的 JAR 檔
RUN mvn clean install -Dmaven.test.skip

# For Java 17
FROM openjdk:17-jdk-alpine

# 將 JAR 檔複製過去 container
COPY --from=maven /app/target/*.jar app.jar

# 指定 container 要對外開放的port
EXPOSE 8080

# run an executable JAR
ENTRYPOINT ["java","-jar","/app.jar"]