package org.floxx

import cats.effect.{ContextShift, IO}
import cats.effect.concurrent.MVar
import fs2.concurrent.Queue
import org.floxx.controller.io.stream.WsIO
import org.floxx.controller.io.{TechnicalApi, _}
import org.floxx.repository.postgres.{AuthRepoPg, CfpRepoPg, HitRepoCfg}
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
  }

  private case class ApplicationContext(
      cfpApi: TrackApi,
      hitApi: HitApi,
      securityApi: SecurityApi,
      technicalApi: TechnicalApi,
      securityService: SecurityService[IO],
      streamApi: StreamApi
  ) extends AppContext

  final def initialize: AppContext = {

    val rpg: CfpRepoPg                       = new CfpRepoPg()
    val hrpg: HitRepoCfg                     = new HitRepoCfg()
    val srpg: AuthRepoPg                     = new AuthRepoPg()
    val trackService: TrackService[IO]       = new TrackServiceImpl(rpg)
    val hitService: HitService[IO]           = new HitServiceImpl(trackService, hrpg)
    val securityService: SecurityService[IO] = new SecurityServiceImpl(srpg)
    val adminService: AdminService[IO]       = new AdminServiceImpl((rpg))

    implicit val contextShift: ContextShift[IO] = IO.contextShift(ExecutionContext.global)
    val channel: Queue[IO, WebSocketFrame] = WsIO.wsQueue

    ApplicationContext(
      TrackApi(trackService, securityService),
      HitApi(hitService, securityService, channel),
      SecurityApi(securityService),
      TechnicalApi(adminService, securityService),
      securityService,
      StreamApi(securityService, channel)
    )
  }

}
