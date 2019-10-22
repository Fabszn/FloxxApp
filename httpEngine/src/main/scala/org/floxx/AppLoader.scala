package org.floxx

import org.floxx.controller.{ HitApi, SecurityApi, TrackApi }
import org.floxx.repository.repo.{ CfpRepo, HitRepo, SecurityRepo }
import org.floxx.service.{ HitService, HitServiceImpl, SecurityService, SecurityServiceImpl, TrackService, TrackServiceImpl }

object AppLoader {

  trait AppContext {
    def cfpApi: TrackApi
    def hitApi: HitApi
    def securityApi: SecurityApi
  }

  private case class ApplicationContext(
      cfpApi: TrackApi,
      hitApi: HitApi,
      securityApi: SecurityApi
  ) extends AppContext

  final def initialize: AppContext = {

    val r                                = new CfpRepo()
    val h                                = new HitRepo()
    val s                                = new SecurityRepo()
    val trackService: TrackService       = new TrackServiceImpl(r)
    val hitService: HitService           = new HitServiceImpl(trackService, h)
    val securityService: SecurityService = new SecurityServiceImpl(s)

    ApplicationContext(
      controller.TrackApi(trackService, securityService),
      controller.HitApi(hitService, securityService),
      controller.SecurityApi(securityService)
    )
  }

}
