package org.floxx.env.service

import org.floxx.domain.ConfDay.DayIndex
import org.floxx.domain.Mapping.UserSlot
import org.floxx.domain.{ ConfDay, Planning, PlanningDayItem }
import org.floxx.env.api.adminApi.Mapping
import org.floxx.env.configuration.config.Configuration
import org.floxx.env.repository.cfpRepository.SlotRepo
import org.floxx.env.repository.userRepository.UserRepo
import org.floxx.model.SimpleUser
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
      conf.getConf >>= (config => slotRepo.mappingUserSlot >>= groupBy >>= order(config.cfp.days))

    override def mappingUserSlot: Task[Seq[UserSlot]] = slotRepo.mappingUserSlot
  }
  private def groupBy(us: Seq[UserSlot]): Task[Seq[Planning]] =
    Task(
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
    Task {
      val ps: Seq[(DayIndex, Planning)] =
        plannings.map(p => confDays.find(_.dayValue.value == p.day.value).fold((DayIndex(-1), p))(cd => (cd.dayIndex, p)))
      ps.sortBy(_._1.value).map(_._2)
    }

  val layer: RLayer[Has[SlotRepo] with Has[UserRepo] with Has[Configuration], Has[AdminService]] =
    (AdminServiceImpl(_, _, _)).toLayer

  def insertUserSlotMapping(mapping: Mapping): RIO[Has[AdminService], Long] =
    ZIO.serviceWith[AdminService](_.insertUserSlotMapping(mapping))

  def loadUsers: RIO[Has[AdminService], Seq[SimpleUser]] =
    ZIO.serviceWith[AdminService](_.loadUsers)

  def mappingUserSlot: RIO[Has[AdminService], Seq[UserSlot]] =
    ZIO.serviceWith[AdminService](_.mappingUserSlot)

  def planning: RIO[Has[AdminService], Seq[Planning]] =
    ZIO.serviceWith[AdminService](_.planning)
}
