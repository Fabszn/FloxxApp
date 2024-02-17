package org.floxx.repository

import org.floxx.domain.User.SimpleUser
import org.floxx.domain._
import org.floxx.configuration.config.Configuration
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
    def saveInfo(information: Information): Task[Information.Id]
    def updateInfo(information: Information): Task[Long]
    def archiveInfo(infoId: Information.Id): Task[Long]
    def infoHasRead(userid: SimpleUser.Id, infoId: Information.Id): Task[Long]
    def selectInfos(): Task[Seq[Information]]
    def selectUnReadInfosByUserId(userId: SimpleUser.Id): Task[Seq[Information.Id]]
    def markAsReadForUser(userId: SimpleUser.Id, infoId: Information.Id): Task[Long]

  }

  private final case class InformationRepoService(dataSource: DataSource, configuration: Configuration) extends InformationRepo {

    import QuillContext._
    override def saveInfo(info: Information): Task[Information.Id] =
      transaction {
        for {
          r <- run(
            quote(
              information.insertValue(lift(info)).returning(_.id)
            )
          )
          users <- run(quote(user))
          _ <- run(
            quote(
              liftQuery(users.map(u => InformationReadStatus(u.userId, r)))
                .foreach(irs => informationReadStatus.insertValue(irs))
            )
          )
        } yield r
      }.provideEnvironment(ZEnvironment(dataSource))

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
      transaction {
        for {
          n <- run(
            quote(
              information
                .filter(_.id == lift(infoId))
                .update(
                  _.isArchived -> lift(true)
                )
            )
          )
          _ <- run(quote(informationReadStatus.filter(_.infoId == lift(infoId)).delete))
        } yield n
      }.provideEnvironment(ZEnvironment(dataSource))

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

    override def selectUnReadInfosByUserId(userId: SimpleUser.Id): Task[Seq[Information.Id]] =
     run(
        quote(
          informationReadStatus.filter(_.userId == lift(userId)).map(_.infoId)
        )
      ).provideEnvironment(ZEnvironment(dataSource))

    override def markAsReadForUser(userId: SimpleUser.Id, infoId: Information.Id): Task[Long] =
      run(
        quote(
          informationReadStatus.filter(l => l.userId == lift(userId) && l.infoId == lift(infoId)).delete
        )
      ).provideEnvironment(ZEnvironment(dataSource))
  }

}
