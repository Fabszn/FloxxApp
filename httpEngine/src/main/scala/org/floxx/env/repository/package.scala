package org.floxx.env

import cats.effect.Blocker
import doobie.hikari.HikariTransactor
import org.floxx.env.configuration.config.{Configuration, getConf}
import zio._
import zio.blocking.Blocking
import zio.interop.catz._

package object repository {

  object DbTransactor {

    val postgres: ZLayer[Blocking with Has[Configuration], Throwable, Has[Resource]] = {

      ZLayer.fromManaged(
        ZIO.runtime[Blocking].toManaged_.flatMap { implicit rt =>
          for {
            blockingEC <- Managed.succeed(
              rt.environment
                .get[Blocking.Service]
                .blockingExecutor
                .asEC
            )
            connectEC = rt.platform.executor.asEC
            conf <- getConf.toManaged_
            trans <- HikariTransactor.newHikariTransactor[Task](
              conf.db.driver,
              conf.db.url,
              conf.db.user,
              conf.db.password,
              connectEC,
              Blocker.liftExecutionContext(blockingEC)
            ).toManaged
          } yield new Resource {
            override val xa: HikariTransactor[Task] =trans
          }
        })
    }

    trait Resource {
      val xa: HikariTransactor[Task]
    }
  }

}
