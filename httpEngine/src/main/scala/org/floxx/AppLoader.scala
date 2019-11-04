package org.floxx

import org.floxx.controller.{ HitApi, SecurityApi, TrackApi }
import org.floxx.repository.postgres.CfpRepoPg
import org.floxx.repository.redis.{ CfpRepo, HitRepo, SecurityRepo }
import org.floxx.service.{ HitService, HitServiceImpl, SecurityService, SecurityServiceImpl, TrackService, TrackServiceImpl }
import cats.effect.IO

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
    val rpg                              = new CfpRepoPg()
    val h                                = new HitRepo()
    val s                                = new SecurityRepo()
    val trackService: TrackService[IO]   = new TrackServiceImpl(rpg, r)
    val hitService: HitService           = new HitServiceImpl(trackService, h)
    val securityService: SecurityService = new SecurityServiceImpl(s)

    ApplicationContext(
      controller.TrackApi(trackService, securityService),
      controller.HitApi(hitService, securityService),
      controller.SecurityApi(securityService)
    )
  }

}
