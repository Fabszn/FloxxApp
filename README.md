# floxxBackendApp


# Words

 - Slot : this is a conference with title, kind, start time, end time, day, room
 - TrackInfo : Is more than slot. In track slot information plus hit information
 - Hit :  unique id of the slot, percentage and date time of when hit has been down

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

