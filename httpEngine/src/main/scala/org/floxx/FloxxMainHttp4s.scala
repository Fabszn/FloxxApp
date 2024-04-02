package org.floxx

import cats.syntax.all._
import org.floxx.api._
import org.floxx.configuration.config
import org.floxx.configuration.config.{Configuration, GlobalConfig, getConf}
import org.floxx.domain.jwt.UserInfo
import org.floxx.processors.pipelines.shareHitPipeline
import org.floxx.processors.pipelines.shareHitPipeline.ShareHitPipeline
import org.floxx.processors.shareHitProcessor.ShareHitProcessor
import org.floxx.processors.{pipelines, shareHitProcessor}
import org.floxx.repository._
import org.floxx.service._
import org.floxx.service.http.Http
import org.floxx.service.trackService.TrackService
import org.http4s.blaze.server.BlazeServerBuilder
import org.http4s.implicits._
import org.http4s.server.{AuthMiddleware, Router}
import org.joda.time.DateTimeZone
import zio._
import zio.interop.catz._

object FloxxMainHttp4s extends zio.ZIOAppDefault {

  type AppEnvironment =
    Configuration
      with TrackService
      with hitService.HitService
      with securityService.SecurityService
      with statService.StatsService
      with adminService.AdminService
      with informationService.InformationService
      with ShareHitPipeline
      with ShareHitProcessor
      with Http
      with Scope

  val app: ZIO[AppEnvironment, Throwable, Unit] = {
    ZIO.runtime[AppEnvironment].flatMap { _ =>
      {
        for {
          conf <- getConf
          server <- (BlazeServerBuilder[ApiTask]
            .bindHttp(conf.floxx.port, "0.0.0.0")
            .withHttpApp(floxxApp(conf))
            .serve
            .compile
            .drain).fork
          shareHitPipeline <- pipelines.shareHitPipeline.run.fork
          _ <- server.join <*> shareHitPipeline.join
        } yield {
          ()
        }
      }
    }
  }

  DateTimeZone.setDefault(DateTimeZone.forID("Europe/Paris"))

  def floxxServices(conf: GlobalConfig) = {
    val authMiddleware: AuthMiddleware[ApiTask, UserInfo] = AuthMiddleware(authUser(conf))

    authMiddleware(
      hitApi.api <+>
      slotApi.api <+>
      informationApi.api <+> adminApi.api
    )

  }

  def floxxAdminServices(conf: GlobalConfig) = {

    val adminAuthMiddleware: AuthMiddleware[ApiTask, UserInfo] = AuthMiddleware(authAdmin(authUser(conf)))

    adminAuthMiddleware(
      statsApi.api <+>
      adminApi.api
    )

  }

  def floxxApp(conf: GlobalConfig) =
    Router[ApiTask](
      "/" -> entriesPointApi.api,
      "/api/admin" -> floxxAdminServices(conf),
      "/api" -> floxxServices(conf),
      "/" -> staticApi.api,
      "/assets" -> staticApi.api
    ).orNotFound

  override def run =
    migration.migration.provide(
      Scope.default,
      config.layer,
      QuillContext.dataSourceLayer,
      migration.layer
    ) *> app
      .provide(
        Scope.default,
        config.layer,
        shareHitPipeline.layer,
        shareHitProcessor.layer,
        QuillContext.dataSourceLayer,
        hitRepository.layer,
        cfpRepository.layer,
        statsRepository.layer,
        userRepository.layer,
        adminService.layer,
        trackService.layer,
        hitService.layer,
        securityService.layer,
        statService.layer,
        informationRepository.layer,
        informationService.layer,
        http.backend.layer,
        http.layer
      )
      .fold[ExitCode](
        _ => {
          ExitCode.failure
        },
        _ => {
          ExitCode.success
        }
      )
}
