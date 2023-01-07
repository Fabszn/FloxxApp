# Floxx - mobile

## Context
This application aims to manage flow of attendees during one conference.
When you are logged, you can access twice screens : 

    - conf.
    - Overflow


First one aims to choose a specifc talk and enter the room filling rate. 

Second one aims to visualise the filling rate of all rooms.

One third screen exists. Its aims is to provide to the attendees same overview as 'Overflow' screen but attendee, by clicking on each room, can see the details of the current talk. (To access to this screen, no log in is requiered.)

# Environments

Floxx is deployed has 3 environments : 

    - Developer : Local machine -> **l ocalhost:8081 **
    - Production : Devoxx clever cloud account -> ** floxx-app.cleverapps.io **

# Tools 

    - Yarn as dependencies manager
    - webpack as build

# Actions 

Install project : 

  - `yarn install` :  _is used to install all dependencies for a project. This is most commonly used when you have just checked out code for a project, or when another developer on the project has added a new dependency that you need to pick up._
  - `yarn install --global vite` : _is used to install vite tool (requiered by the project)_  
        _

Build project dev : 

 - NODE_ENV=local yarn webpack --mode=development
  
