package fixtures

import com.dimafeng.testcontainers.PostgreSQLContainer
import org.floxx.env.configuration.config.{ rooms, Configuration, GlobalConfig }
import org.floxx.env.repository.QuillContext
import org.flywaydb.core.Flyway
import org.testcontainers.utility.DockerImageName
import pureconfig.ConfigSource
import pureconfig.error.ConfigReaderException
import pureconfig.generic.auto._

import zio._
import zio.test.TestEnvironment

import javax.sql.DataSource

trait PostgresRunnableFixture {

  lazy val containerLayer: ZLayer[Scope, Throwable, PostgreSQLContainer] = {
    ZLayer {
      ZIO.acquireRelease {
        ZIO.attemptBlocking {
          val c = new PostgreSQLContainer(
            dockerImageNameOverride = Option(DockerImageName.parse("postgres:12.7-alpine"))
          ).configure { a =>
            a.withCommand(
              "postgres",
              "-c",
              "log_statement=all",
              "-c",
              "log_line_prefix=%t[%a][%p]"
            )
            ()
          }
          c.start()
          c
        }
      } { container =>
        ZIO.attemptBlocking(container.stop()).orDie
      }
    }
  }

  lazy val containerConfigLayer: URLayer[PostgreSQLContainer, Configuration] = {
    ZLayer {
      for {
        container <- ZIO.service[PostgreSQLContainer]

      } yield {
        new Configuration {
          override def getConf: Task[GlobalConfig] = ZIO.fromEither(
            ConfigSource.default.load[GlobalConfig] match {
              case Left(e) => Left(ConfigReaderException(e))
              case Right(value) =>
                Right(
                  value.copy(
                    db = value.db.copy(
                      driver   = "org.postgresql.Driver",
                      url      = container.jdbcUrl,
                      user     = container.username,
                      password = container.password
                    )
                  )
                )
            }
          )

          override def getRooms: Task[Map[String, Option[String]]] = ZIO.succeed(rooms.roomsMapping)
        }
      }

    }

  }

  lazy val dbLayer =
     containerLayer >>> containerConfigLayer >+> QuillContext.dataSourceLayer.tap { ds =>
      ZIO.attempt {
        val fw = Flyway
          .configure()
          .dataSource(ds.get)
          .load()
        fw.clean()
        fw.migrate()
      }
    }.orDie

}
