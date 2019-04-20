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

From the root on the projet, run the following command : **sbt httpEngine/run** (sbt should be installed) 
