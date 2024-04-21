# Requierments

 Java 11
 sbt
 Yarn  

## Nix shell
   
   You can use nix shell to 


# floxxBackendApp


# Words

 - Slot : this is a conference with title, kind, start time, end time, day, room
 - TrackInfo : Is more than slot. In track slot information plus hit information
 - Hit :  unique id of the slot, percentage and date time of when hit has been down

# Deployment

Variables that must be positioned on target environment :  

    FLOXX_PORT=8080
    POSTGRESQL_ADDON_PASSWORD=**to be completed**
    POSTGRESQL_ADDON_USER=**to be completed**
    POSTGRESQL_MAX_POOL_SIZE=**to be completed**
    POSTGRESQL_URI="jdbc:postgresql://**to be completed: Host**/**to be completed USER**"
    VOXXRIN_TOKEN=**to be completed**
    VOXXRIN_URL=**to be completed**
      
Locally : 

 ## Work with backend

1) from the root directory run docker-compose up (should start postgres DB)
2) sbt runDev
   2.1) Front part will be build 
   2.2) app will connect to DB and create shema database automaticaly if doesn't exists
3) from browser : http://localhost:8081

## Work on UI

` "yarn install" should be run before`

1) go to front directory
2) Run  'yarn dev'
3) from browser : http://localhost:5372 

`Some route are mmocked in 'front/mock-api.ts' file`


# roll out

1) ensure that your index is clean and fully pushed.
2) checkout release branch
2) Run `sbt goToProd` 
   1) Process il plugged on remote origin, So take care that remote corresponding to prod target environment
3) and then just follow the process


 

