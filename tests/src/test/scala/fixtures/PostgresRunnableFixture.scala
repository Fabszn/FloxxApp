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
import zio.test.environment.TestEnvironment
import zio.blocking.{ effectBlocking, Blocking }
import javax.sql.DataSource

trait PostgresRunnableFixture {

  lazy val containerLayer: ZLayer[Blocking, Throwable, Has[PostgreSQLContainer]] =
    ZManaged.make {
      effectBlocking {
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
      effectBlocking(container.stop()).orDie
    }.toLayer

  lazy val containerConfigLayer: ZLayer[Blocking, Throwable, Has[Configuration]] =
    containerLayer.map { a =>
      val container = a.get
      Has(new Configuration {
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

        override def getRooms: Task[Map[String, Option[String]]] = IO.succeed(rooms.roomsMapping)
      })
    }

  lazy val dbLayer: URLayer[ZEnv, TestEnvironment with Has[Configuration] with Has[DataSource]] =
    (TestEnvironment.live >+> containerConfigLayer >+> QuillContext.dataSourceLayer.tap { ds =>
      Task {
        val fw = Flyway
          .configure()
          .dataSource(ds.get)
          .load()
        fw.clean()
        fw.migrate()
      }
    }).orDie
}
