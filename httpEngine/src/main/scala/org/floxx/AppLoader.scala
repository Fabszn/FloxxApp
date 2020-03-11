package org.floxx

import cats.effect.{ ContextShift, IO }
import cats.effect.concurrent.MVar
import doobie.free.connection.ConnectionIO
import fs2.concurrent.Queue
import org.floxx.controller.io.stream.WsIO
import org.floxx.controller.io.{ TechnicalApi, _ }
import org.floxx.repository.postgres.{ AuthRepo, AuthRepoPg, CfpRepo, CfpRepoPg, HitRepo, HitRepoCfg, StatsRepo, StatsRepoPg }
import org.floxx.service._
import org.http4s.websocket.WebSocketFrame

import scala.concurrent.ExecutionContext

object AppLoader {

  trait AppContext {
    def cfpApi: TrackApi
    def hitApi: HitApi
    def securityApi: SecurityApi
    def technicalApi: TechnicalApi
    def securityService: SecurityService[IO]
    def streamApi: StreamApi
    def statsApi: StatsApi
  }

  private case class ApplicationContext(
      cfpApi: TrackApi,
      hitApi: HitApi,
      securityApi: SecurityApi,
      technicalApi: TechnicalApi,
      securityService: SecurityService[IO],
      streamApi: StreamApi,
      statsApi: StatsApi
  ) extends AppContext

  final def initialize: AppContext = {

    val statsRepo: StatsRepo[ConnectionIO]   = new StatsRepoPg()
    val rpg: CfpRepo[ConnectionIO]           = new CfpRepoPg()
    val hrpg: HitRepo[ConnectionIO]          = new HitRepoCfg()
    val srpg: AuthRepo[ConnectionIO]         = new AuthRepoPg()
    val trackService: TrackService[IO]       = new TrackServiceImpl(rpg)
    val hitService: HitService[IO]           = new HitServiceImpl(trackService, hrpg)
    val securityService: SecurityService[IO] = new SecurityServiceImpl(srpg)
    val adminService: AdminService[IO]       = new AdminServiceImpl(rpg)
    val statsService: StatsService[IO]       = new StatsServiceImpl(statsRepo)

    implicit val contextShift: ContextShift[IO] = IO.contextShift(ExecutionContext.global)
    val channel: Queue[IO, WebSocketFrame]      = WsIO.wsQueue

    ApplicationContext(
      TrackApi(trackService, securityService),
      HitApi(hitService, securityService, channel),
      SecurityApi(securityService),
      TechnicalApi(adminService, securityService),
      securityService,
      StreamApi(securityService, channel),
      StatsApi(statsService, securityService)
    )
  }

}
