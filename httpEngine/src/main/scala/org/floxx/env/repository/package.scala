package org.floxx.env


import com.zaxxer.hikari.HikariConfig
import doobie.hikari.HikariTransactor
import org.floxx.env.configuration.config.{Configuration, getConf}
import zio._
import zio.blocking.Blocking
import zio.clock.Clock
import zio.interop.catz._

import java.util.Properties

package object repository {

  object DbTransactor {


    val postgres: RLayer[Has[Configuration] with Clock with Blocking, Has[TxResource]] = {

      ZLayer.fromManaged(
        ZIO.runtime[Has[Configuration] with Clock with Blocking].toManaged_.flatMap { implicit rt =>
          for {
            conf <- getConf.toManaged_
            hikariConf <- ZIO.effect{
              import com.zaxxer.hikari.HikariConfig
              val config = new HikariConfig
              config.setJdbcUrl(conf.db.url)
              config.setUsername(conf.db.user)
              config.setPassword(conf.db.password)
              config.setDriverClassName(conf.db.driver)
              config.setMaximumPoolSize(conf.db.maximumPoolSize)
              config.setMinimumIdle(conf.db.minimumIdleSize)
              config
            }.toManaged_
            trans <- HikariTransactor.fromHikariConfig[Task](hikariConf,rt.platform.executor.asEC
              /*conf.db.driver,
              conf.db.url,
              conf.db.user,
              conf.db.password,*/
            ).toManagedZIO
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
