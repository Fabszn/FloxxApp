package org.floxx.env.service

import org.floxx.domain.Information
import org.floxx.domain.User.SimpleUser
import org.floxx.env.repository.informationRepository.InformationRepo
import zio.{ RIO, RLayer, Task, ZIO, ZLayer }

object informationService {

  val layer: RLayer[InformationRepo, InformationService] =
    ZLayer {
      for {
        infoRepo <- ZIO.service[InformationRepo]
      } yield InformationServiceImpl(infoRepo)
    }

  trait InformationService {

    def addInfo(title: Information.Title, content:Information.Content): Task[Long]
    def archiveInfo(infoId: Information.Id): Task[Long]
    def allInformation(): Task[Seq[Information]]
    def majInfo(info: Information): Task[Long]
    def setInfoHasBeenRead(userid: SimpleUser.Id, infoId: Information.Id): Task[Long]
  }

  final case class InformationServiceImpl(informationRepo: InformationRepo) extends InformationService {
    override def addInfo(title: Information.Title, content:Information.Content): Task[Long] =
      informationRepo.saveInfo(Information(title=title, content=content))

    override def archiveInfo(infoId: Information.Id): Task[Long] = informationRepo.archiveInfo(infoId)

    override def allInformation(): Task[Seq[Information]] = informationRepo.selectInfos()

    override def majInfo(info: Information): Task[Long] = informationRepo.updateInfo(info)

    override def setInfoHasBeenRead(userid: SimpleUser.Id, infoId: Information.Id): Task[Long] =
      informationRepo.infoHasRead(userid, infoId)
  }

  def allInformation: RIO[InformationService, Seq[Information]] = ZIO.serviceWithZIO[InformationService](_.allInformation())
  def addInformation(title: Information.Title, content:Information.Content): RIO[InformationService, Long] =
    ZIO.serviceWithZIO[InformationService](_.addInfo(title, content))

}
