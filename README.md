# floxxBackendApp


# Words

 - Slot : this is a conference with title, kind, start time, end time, day, room
 - TrackInfo : Is more than slot. In track slot information plus hit information
 - Hit :  unique id of the slot, percentage and date time of when hit has been down

# Deployment

On clever-cloud, 

    CC_JAVA_VERSION="11"
    CC_SBT_TARGET_DIR="httpEngine"
    FLOXX_PORT="8080"
    PORT="8080"
    POSTGRESQL_ADDON_PASSWORD=**to be completed**
    POSTGRESQL_ADDON_USER=**to be completed**
    POSTGRESQL_MAX_POOL_SIZE=**to be completed**
    POSTGRESQL_URI="jdbc:postgresql://**to be completed: Host**/**to be completed USER**"
      
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


# roll out

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
 

# Makefile and ASDF

If you are using ASDF (http://asdf-vm.com/) you can just call `make setup` to install all the required software (java, sbt, node, yarn ...). The only pre-requisite not managed by ASDF is docker (compose).

You can start the backend with `make launch-backend` and you access to the application from http://localhost:8081 (postgresql is automatically started with `docker compose` if needed)

You can start the frontend with a mock of the backend with `make launch-frontend` and access to the application from http://localhost:8082

Makefile targets are:

```
clean                          Clean build output
clean-docker                   Clean docker data
docker-backend-restart         Restart Postgres DB
docker-backend-start           Start Postgres DB
docker-backend-stop            Stop Postgres DB
help                           Describe all available targets.
launch-backend                 Start the application backend
launch-frontend                Start the application frontend
setup                          install (and configure) all the tools using ASDF ( http://asdf-vm.com/ )
```
