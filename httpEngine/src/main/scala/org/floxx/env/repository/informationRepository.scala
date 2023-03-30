package org.floxx.env.repository

import org.floxx.domain.Information
import org.floxx.env.configuration.config.Configuration
import zio.{ RLayer, Task, ZIO, ZLayer }

import javax.sql.DataSource

object informationRepository {

  val layer: RLayer[DataSource with Configuration, InformationRepo] =
    ZLayer {
      for {
        dataSource <- ZIO.service[DataSource]
        conf <- ZIO.service[Configuration]
      } yield InformationRepoService(dataSource, conf)
    }

  trait InformationRepo {
    def saveInfo(information: Information): Task[Unit]
    def updateInfo(information: Information): Task[Unit]
    def archiveInfo(infoId: Information.Id): Task[Unit]

  }

  final case class InformationRepoService(dataSource: DataSource, configuration: Configuration) extends InformationRepo {

    import QuillContext._
    override def saveInfo(information: Information): Task[Unit] = run(quote())

    override def updateInfo(information: Information): Task[Unit] = ???

    override def archiveInfo(infoId: Information.Id): Task[Unit] = ???
  }

}
