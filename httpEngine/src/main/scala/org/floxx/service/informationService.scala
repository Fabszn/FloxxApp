package org.floxx.service

import org.floxx.domain.Information
import org.floxx.domain.User.SimpleUser
import org.floxx.repository.informationRepository.InformationRepo
import zio.{ RIO, RLayer, Task, ZIO, ZLayer }

object informationService {

  val layer: RLayer[InformationRepo, InformationService] =
    ZLayer {
      for {
        infoRepo <- ZIO.service[InformationRepo]
      } yield InformationServiceImpl(infoRepo)
    }

  trait InformationService {

    def addInfo(title: Information.Title, content: Information.Content): Task[Information.Id]
    def archiveInfo(infoId: Information.Id): Task[Long]
    def allInformation(): Task[Seq[Information]]
    def majInfo(info: Information): Task[Long]
    def setInfoHasBeenRead(userid: SimpleUser.Id, infoId: Information.Id): Task[Long]
    def unreadByUserId(userId: SimpleUser.Id): Task[Seq[Information.Id]]
    def markAsRead(userId: SimpleUser.Id, infoId: Information.Id): Task[Seq[Information.Id]]
  }

  private final case class InformationServiceImpl(informationRepo: InformationRepo) extends InformationService {
    override def addInfo(title: Information.Title, content: Information.Content): Task[Information.Id] =
      informationRepo.saveInfo(Information(title = title, content = content))

    override def archiveInfo(infoId: Information.Id): Task[Long] = informationRepo.archiveInfo(infoId)

    override def allInformation(): Task[Seq[Information]] = informationRepo.selectInfos()

    override def majInfo(info: Information): Task[Long] = informationRepo.updateInfo(info)

    override def setInfoHasBeenRead(userid: SimpleUser.Id, infoId: Information.Id): Task[Long] =
      informationRepo.infoHasRead(userid, infoId)

    override def unreadByUserId(userId: SimpleUser.Id): Task[Seq[Information.Id]] =
      informationRepo.selectUnReadInfosByUserId(userId)

    override def markAsRead(userId: SimpleUser.Id, infoId: Information.Id): Task[Seq[Information.Id]] =

      informationRepo.markAsReadForUser(userId, infoId) *> informationRepo.selectUnReadInfosByUserId(userId)
  }

  def allInformation: RIO[InformationService, Seq[Information]]      = ZIO.serviceWithZIO[InformationService](_.allInformation())
  def archiveInfo(id: Information.Id): RIO[InformationService, Long] = ZIO.serviceWithZIO[InformationService](_.archiveInfo(id))
  def unreadByUserId(userid: SimpleUser.Id): RIO[InformationService, Seq[Information.Id]] =
    ZIO.serviceWithZIO[InformationService](_.unreadByUserId(userid))
  def markAsRead(userid: SimpleUser.Id, infoId:Information.Id): RIO[InformationService, Seq[Information.Id]] =
    ZIO.serviceWithZIO[InformationService](_.markAsRead(userid, infoId))
  def addInformation(title: Information.Title, content: Information.Content): RIO[InformationService, Information.Id] =
    ZIO.serviceWithZIO[InformationService](_.addInfo(title, content))

}
