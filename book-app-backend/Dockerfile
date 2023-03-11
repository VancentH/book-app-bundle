FROM openjdk:17-jdk-alpine

# 將 jar 檔複製過去 container
COPY target/*.jar app.jar

# 指定 container 要對外開放的port
EXPOSE 8080

# run an executable JAR
ENTRYPOINT ["java","-jar","/app.jar"]