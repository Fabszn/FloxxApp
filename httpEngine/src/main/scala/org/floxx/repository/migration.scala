package org.floxx.repository

import org.flywaydb.core.Flyway
import zio._

import javax.sql.DataSource

object migration {

  val layer: URLayer[DataSource, MigrationService] = ZLayer {
    for {
      ds <- ZIO.service[DataSource]
    } yield MigrationServiceImpl(ds)
  }

  trait MigrationService {
    def migrate: Task[Unit]
  }

  final case class MigrationServiceImpl(datasource: DataSource) extends MigrationService {
    override def migrate: Task[Unit] = 
      ZIO.attempt {
      val fw = Flyway.configure().dataSource(datasource).load()
      fw.migrate()
    }
  }

  def migration:RIO[MigrationService, Unit] = ZIO.serviceWithZIO[MigrationService](_.migrate)
}
