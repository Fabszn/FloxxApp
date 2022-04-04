package org.floxx.env.service

import org.floxx.domain.Mapping.UserSlot
import org.floxx.domain.Slot.Day
import org.floxx.domain.{Planning, PlanningDayItem, Room}
import org.floxx.env.api.adminApi.Mapping
import org.floxx.env.repository.cfpRepository.SlotRepo
import org.floxx.env.repository.userRepository.UserRepo
import org.floxx.model.jsonModel.Slot
import org.floxx.model.{SimpleUser, SlotId}
import zio._

import scala.collection.immutable

object adminService {

  trait AdminService {
    def updateEnv(days: Map[String, String]): Task[Int]
    def insertUserSlotMapping(mapping: Mapping): Task[Int]
    def loadUsers: Task[Seq[SimpleUser]]
    def mappingUserSlot: Task[Seq[UserSlot]]
    def planning: Task[Seq[Planning]]
  }

  case class AdminServiceImpl(slotRepo: SlotRepo, userRepo: UserRepo) extends AdminService {
    override def updateEnv(days: Map[String, String]): Task[Int] =
      for {
        slots <- slotRepo.allSlots
        updatedSlots <- updateSlots(slots, days)
        _ <- slotRepo.drop
        r <- slotRepo.addSlots(updatedSlots.toList)
      } yield r

    override def insertUserSlotMapping(mapping: Mapping): Task[Int] = slotRepo.addMapping(mapping)

    override def loadUsers: Task[Seq[SimpleUser]] =
      userRepo.allUsers

    private def updateSlots(slots: Seq[Slot], env: Map[String, String]): Task[Seq[Slot]] = {

      def updateId(id: SlotId, oldDay: String, newDay: String): SlotId =
        SlotId(id.id.replace(oldDay, newDay))

      Task(slots.map(s => {
        val oldDay = s.day
        val newDay = env(oldDay)
        s.copy(
          slotId = updateId(s.slotId, oldDay, newDay),
          day    = newDay
        )
      }))
    }

    override def planning: Task[Seq[Planning]] =
      slotRepo.mappingUserSlot >>= (m => groupBy(m))

    override def mappingUserSlot: Task[Seq[UserSlot]] = slotRepo.mappingUserSlot
  }
  private def groupBy(us: Seq[UserSlot]): Task[Seq[Planning]] =
    Task(us.groupBy(_.slot.day).map {
      case (d, slot) =>
        Planning(
          d,
          slot.groupBy(_.slot.roomId).toSeq.map(f => PlanningDayItem(f._1, f._2.sortBy((slot) => slot.slot.fromTime.value)))
        )

    }.toSeq)

  val layer: RLayer[Has[SlotRepo] with Has[UserRepo], Has[AdminService]] = (AdminServiceImpl(_, _)).toLayer

  def updateEnv(days: Map[String, String]): RIO[Has[AdminService], Int] =
    ZIO.serviceWith[AdminService](_.updateEnv(days))

  def insertUserSlotMapping(mapping: Mapping): RIO[Has[AdminService], Int] =
    ZIO.serviceWith[AdminService](_.insertUserSlotMapping(mapping))

  def loadUsers: RIO[Has[AdminService], Seq[SimpleUser]] =
    ZIO.serviceWith[AdminService](_.loadUsers)

  def mappingUserSlot: RIO[Has[AdminService], Seq[UserSlot]] =
    ZIO.serviceWith[AdminService](_.mappingUserSlot)

  def planning: RIO[Has[AdminService], Seq[Planning]] =
    ZIO.serviceWith[AdminService](_.planning)
}
