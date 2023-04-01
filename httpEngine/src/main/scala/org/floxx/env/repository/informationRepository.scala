package org.floxx.env.repository

import org.floxx.domain.User.SimpleUser
import org.floxx.domain._
import org.floxx.env.configuration.config.Configuration
import zio._

import javax.sql.DataSource

@SuppressWarnings(Array("org.wartremover.warts.Product"))
object informationRepository {

  val layer: RLayer[DataSource with Configuration, InformationRepo] =
    ZLayer {
      for {
        dataSource <- ZIO.service[DataSource]
        conf <- ZIO.service[Configuration]
      } yield InformationRepoService(dataSource, conf)
    }

  trait InformationRepo {
    def saveInfo(information: Information): Task[Long]
    def updateInfo(information: Information): Task[Long]
    def archiveInfo(infoId: Information.Id): Task[Long]
    def infoHasRead(userid: SimpleUser.Id, infoId: Information.Id): Task[Long]
    def selectInfos(): Task[Seq[Information]]

  }

  private final case class InformationRepoService(dataSource: DataSource, configuration: Configuration) extends InformationRepo {

    import QuillContext._
    override def saveInfo(info: Information): Task[Long] =
      run(
        quote(
          information.insertValue(lift(info))
        )
      ).provideEnvironment(ZEnvironment(dataSource))

    override def updateInfo(info: Information): Task[Long] =
      run(
        quote(
          information
            .filter(_.id == lift(info.id))
            .update(
              _.title -> lift(info.title),
              _.content -> lift(info.content)
            )
        )
      ).provideEnvironment(ZEnvironment(dataSource))

    override def archiveInfo(infoId: Information.Id): Task[Long] =
      run(
        quote(
          information
            .filter(_.id == lift(infoId))
            .update(
              _.isArchived -> lift(true)
            )
        )
      ).provideEnvironment(ZEnvironment(dataSource))

    override def infoHasRead(userid: SimpleUser.Id, infoId: Information.Id): Task[Long] =
      run(
        quote(
          informationReadStatus
            .filter(irs => irs.infoId == lift(infoId) && irs.userId == lift(userid))
            .delete
        )
      ).provideEnvironment(ZEnvironment(dataSource))

    override def selectInfos(): Task[Seq[Information]] =
      run(
        quote(
          information.filter(_.isArchived == lift(false))
        )
      ).provideEnvironment(ZEnvironment(dataSource))
  }

}
