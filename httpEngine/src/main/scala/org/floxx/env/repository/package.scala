package org.floxx.env


import doobie.hikari.HikariTransactor
import org.floxx.DatabaseError
import org.floxx.env.configuration.config.getConf
import zio._
import zio.blocking.Blocking
import zio.clock.Clock
import zio.interop.catz._

package object repository {

  object DbTransactor {

    val postgres: ZLayer[Clock with Blocking, Throwable, Has[TxResource]] = {

      ZLayer.fromManaged(
        ZIO.runtime[Clock with Blocking].toManaged_.flatMap { implicit rt =>
          for {
            conf <- getConf.toManaged_
            trans <- HikariTransactor.newHikariTransactor[Task](
              conf.db.driver,
              conf.db.url,
              conf.db.user,
              conf.db.password,
              rt.platform.executor.asEC
            ).toManaged
          } yield new TxResource {
            override val xa: HikariTransactor[Task] = trans
          }
        })
    }

    trait TxResource {
      val xa: HikariTransactor[Task]
    }
  }

}
