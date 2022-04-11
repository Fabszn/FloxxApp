package org.floxx.env.service

import org.floxx.domain.Mapping.UserSlot
import org.floxx.domain.{ Planning, PlanningDayItem }
import org.floxx.env.api.adminApi.Mapping
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

  case class AdminServiceImpl(slotRepo: SlotRepo, userRepo: UserRepo) extends AdminService {

    override def insertUserSlotMapping(mapping: Mapping): Task[Long] = slotRepo.addMapping(mapping)

    override def loadUsers: Task[Seq[SimpleUser]] =
      userRepo.allUsers

    override def planning: Task[Seq[Planning]] =
      slotRepo.mappingUserSlot >>= (m => groupByAndOrder(m))

    override def mappingUserSlot: Task[Seq[UserSlot]] = slotRepo.mappingUserSlot
  }
  private def groupByAndOrder(us: Seq[UserSlot]): Task[Seq[Planning]] =
    Task(
      us.groupBy(_.slot.day)
        .map {
          case (d, slot) =>
            Planning(
              d,
              slot.groupBy(_.slot.roomId).toSeq.sortBy(_._1).map(f => PlanningDayItem(f._1, f._2.sortBy(identity[UserSlot])))
            )

        }
        .toSeq
    )

  val layer: RLayer[Has[SlotRepo] with Has[UserRepo], Has[AdminService]] = (AdminServiceImpl(_, _)).toLayer

  def insertUserSlotMapping(mapping: Mapping): RIO[Has[AdminService], Long] =
    ZIO.serviceWith[AdminService](_.insertUserSlotMapping(mapping))

  def loadUsers: RIO[Has[AdminService], Seq[SimpleUser]] =
    ZIO.serviceWith[AdminService](_.loadUsers)

  def mappingUserSlot: RIO[Has[AdminService], Seq[UserSlot]] =
    ZIO.serviceWith[AdminService](_.mappingUserSlot)

  def planning: RIO[Has[AdminService], Seq[Planning]] =
    ZIO.serviceWith[AdminService](_.planning)
}
