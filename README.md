# floxxBackendApp

# Deployment

On clever-cloud, 

  - select **sbt+scala** app.
  - Add the following environment variable : 
      - CC_SBT_TARGET_BIN=floxx
      - CC_SBT_TARGET_DIR=httpEngine
      - JAVA_VERSION=8
      - PORT=8080
      
Locally : 

1) from the root directory run docker-compose up (should start postgres DB)
2) sbt db/flywayMigrate (setup DB)
3) sbt runDev
4) from browser : http://localhost:8081

-----

