package org.floxx

import cats.syntax.all._
import org.floxx.env.api._
import org.floxx.env.configuration.config
import org.floxx.env.configuration.config.{ getConf, Configuration, GlobalConfig }
import org.floxx.env.repository._
import org.floxx.env.service.trackService.TrackService
import org.floxx.env.service.{ adminService, hitService, securityService, statService, trackService }

import org.http4s.blaze.server.BlazeServerBuilder
import org.http4s.implicits._
import org.http4s.server.{ AuthMiddleware, Router }
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
      with Scope

  val server: ZIO[AppEnvironment, Throwable, Unit] = {
    ZIO.runtime[AppEnvironment].flatMap { _ =>
      {
        for {
          conf <- getConf
          server <- BlazeServerBuilder[ApiTask]
            .bindHttp(conf.floxx.port, "0.0.0.0")
            .withHttpApp(floxxApp(conf))
            .serve
            .compile
            .drain
        } yield {
          server
        }
      }
    }
  }

  DateTimeZone.setDefault(DateTimeZone.forID("Europe/Paris"))

  def floxxServices(conf: GlobalConfig) = {
    val authMiddleware: AuthMiddleware[ApiTask, UserInfo] = AuthMiddleware(authUser(conf))

    authMiddleware(
      hitApi.api <+>
      SlotApi.api <+>
      adminApi.api <+>
      statsApi.api
    )
  }

  def floxxApp(conf: GlobalConfig) =
    Router[ApiTask](
      "/" -> entriesPointApi.api,
      "/api" -> floxxServices(conf),
      "/" -> StaticApi.api,
      "/assets" -> StaticApi.api
    ).orNotFound

  override def run =
    migration.migration.provide(Scope.default,config.layer,QuillContext.dataSourceLayer,migration.layer) *> server
      .provide(
        Scope.default,
        config.layer,
        QuillContext.dataSourceLayer,
        hitRepository.layer,
        cfpRepository.layer,
        statsRepository.layer,
        userRepository.layer,
        adminService.layer,
        trackService.layer,
        hitService.layer,
        securityService.layer,
        statService.layer
      ).fold[ExitCode](
        ex => {
          ExitCode.failure
        },
        _ => {
          ExitCode.success
        }
      )
}
