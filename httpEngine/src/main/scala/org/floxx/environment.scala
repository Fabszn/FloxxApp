package org.floxx

import org.floxx.env.configuration.config
import org.floxx.env.configuration.config.Configuration
import org.floxx.env.repository._
import org.floxx.env.service._
import org.floxx.env.service.trackService.TrackService
import zio._



object environment {

  val dbTransactor = {
    config.layer >>> QuillContext.dataSourceLayer
  }



  //repository
  val hitRepo   = dbTransactor >>> hitRepository.layer
  val cfpRepo   = dbTransactor >>> cfpRepository.layer
  val statsRepo = dbTransactor >>> statsRepository.layer
  val userRepo  = dbTransactor >>> userRepository.layer

  //services
  val adminSer    = userRepo ++ cfpRepo ++ config.layer >>> adminService.layer
  val trackSer    = (cfpRepo ++ config.layer) >>> trackService.layer
  val hitSer      = (trackSer ++ hitRepo ++ config.layer) >>> hitService.layer
  val securitySer = (userRepo ++ config.layer) >>> securityService.layer
  val statsSer    = config.layer ++ statsRepo >>> statService.layer

  type AppEnvironment =
      Configuration
      with TrackService
      with hitService.HitService
      with securityService.SecurityService
      with statService.StatsService
      with adminService.AdminService

  val appEnvironnement =
    config.layer ++
    hitSer ++
    securitySer ++
    statsSer ++
    trackSer ++
    adminSer

}
