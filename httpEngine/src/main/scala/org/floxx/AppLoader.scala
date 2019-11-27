package org.floxx

import cats.effect.IO
import org.floxx.controller.{ HitApi, SecurityApi, TrackApi }
import org.floxx.repository.postgres.{ AuthRepoPg, CfpRepoPg, HitRepoCfg }
import org.floxx.service._

object AppLoader {

  trait AppContext {
    def cfpApi: TrackApi
    def hitApi: HitApi
    def securityApi: SecurityApi
    def securityService: SecurityService[IO]
  }

  private case class ApplicationContext(
      cfpApi: TrackApi,
      hitApi: HitApi,
      securityApi: SecurityApi,
      securityService: SecurityService[IO]
  ) extends AppContext

  final def initialize: AppContext = {

    val rpg                                  = new CfpRepoPg()
    val hrpg                                 = new HitRepoCfg()
    val srpg                                 = new AuthRepoPg()
    val trackService: TrackService[IO]       = new TrackServiceImpl(rpg)
    val hitService: HitService[IO]           = new HitServiceImpl(trackService, hrpg)
    val securityService: SecurityService[IO] = new SecurityServiceImpl(srpg)

    ApplicationContext(
      controller.TrackApi(trackService, securityService),
      controller.HitApi(hitService, securityService),
      controller.SecurityApi(securityService),
      securityService
    )
  }

}
