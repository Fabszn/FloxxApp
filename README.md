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

 ## Work with backend

1) from the root directory run docker-compose up (should start postgres DB)
2) sbt runDev
3) from browser : http://localhost:8081

## Work on UI

1) go to front directory
2) Run  'yarn start-dev'
3) from browser : http://localhost:8082 

`Some route are mmocked in webpack.config.js file`


# Mise en prod

1) ensure that your master index is clean and fully pushed.
2) Run `sbt goToProd` 
   1) Process il plugged on remote origin, So take care that remote corresponding to prod target environment
3) and then just follow the process

-----


## Todo 

 - Refactoring 
   - Finalize migration model -> Domain
   - Move from doobie to quill
 - Upgrade version on front-end side 
 

