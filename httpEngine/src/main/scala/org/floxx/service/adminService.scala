package org.floxx.service

import org.floxx.domain.ConfDay.DayIndex
import org.floxx.domain.Mapping.UserSlot
import org.floxx.domain.{ ConfDay, Planning, PlanningDayItem }
import org.floxx.api.adminApi.Mapping
import org.floxx.configuration.config.Configuration
import org.floxx.repository.cfpRepository.SlotRepo
import org.floxx.repository.userRepository.UserRepo
import org.floxx.domain.User.SimpleUser
import zio._

object adminService {

  trait AdminService {
    def insertUserSlotMapping(mapping: Mapping): Task[Long]
    def loadUsers: Task[Seq[SimpleUser]]
    def mappingUserSlot: Task[Seq[UserSlot]]
    def planning: Task[Seq[Planning]]
  }

  case class AdminServiceImpl(slotRepo: SlotRepo, userRepo: UserRepo, conf: Configuration) extends AdminService {

    override def insertUserSlotMapping(mapping: Mapping): Task[Long] = slotRepo.addMapping(mapping)

    override def loadUsers: Task[Seq[SimpleUser]] =
      userRepo.allUsers

    override def planning: Task[Seq[Planning]] =
      conf.getConf flatMap (config => slotRepo.mappingUserSlot flatMap groupBy flatMap order(config.cfp.days))

    override def mappingUserSlot: Task[Seq[UserSlot]] = slotRepo.mappingUserSlot
  }
  private def groupBy(us: Seq[UserSlot]): Task[Seq[Planning]] =
    ZIO.attempt(
      us.groupBy(_.slot.day)
        .map {
          case (d, slot) => {
            Planning(
              d,
              slot.groupBy(_.slot.roomId).toSeq.sortBy(_._1).map(f => PlanningDayItem(f._1, f._2.sortBy(identity[UserSlot])))
            )
          }
        }
        .toSeq
    )

  private def order(confDays: List[ConfDay])(plannings: Seq[Planning]): Task[Seq[Planning]] =
    ZIO.attempt {
      val ps: Seq[(DayIndex, Planning)] =
        plannings.map(p => confDays.find(_.dayValue.value == p.day.value).fold((DayIndex(-1), p))(cd => (cd.dayIndex, p)))
      ps.sortBy(_._1.value).map(_._2)
    }

  val layer: RLayer[SlotRepo with UserRepo with Configuration, AdminService] =
    ZLayer {
      for {
        slotRepo <- ZIO.service[SlotRepo]
        userRepo <- ZIO.service[UserRepo]
        conf <- ZIO.service[Configuration]
      } yield AdminServiceImpl(slotRepo, userRepo, conf)
    }



  def insertUserSlotMapping(mapping: Mapping): RIO[AdminService, Long] =
    ZIO.serviceWithZIO[AdminService](_.insertUserSlotMapping(mapping))

  def loadUsers: RIO[AdminService, Seq[SimpleUser]] =
    ZIO.serviceWithZIO[AdminService](_.loadUsers)

  def mappingUserSlot: RIO[AdminService, Seq[UserSlot]] =
    ZIO.serviceWithZIO[AdminService](_.mappingUserSlot)

  def planning: RIO[AdminService, Seq[Planning]] =
    ZIO.serviceWithZIO[AdminService](_.planning)
}
