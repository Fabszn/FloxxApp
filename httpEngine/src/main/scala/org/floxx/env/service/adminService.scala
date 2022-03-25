package org.floxx.env.service

import org.floxx.env.repository.cfpRepository.SlotRepo
import org.floxx.env.repository.userRepository.UserRepo
import org.floxx.model.jsonModel.Slot
import org.floxx.model.{ MappingUserSlot, SimpleUser, SlotId, UserId }
import zio._

object adminService {

  trait AdminService {
    def updateEnv(days: Map[String, String]): Task[Int]
    def insertUserSlotMapping(mapping: Map[UserId, Set[SlotId]]): Task[Int]
    def loadUsers(): Task[Seq[SimpleUser]]
  }

  case class AdminServiceImpl(cfpRepo: SlotRepo, userRepo: UserRepo) extends AdminService {
    override def updateEnv(days: Map[String, String]): Task[Int] =
      for {
        slots <- cfpRepo.allSlots
        updatedSlots <- updateSlots(slots, days)
        _ <- cfpRepo.drop
        r <- cfpRepo.addSlots(updatedSlots.toList)
      } yield r

    override def insertUserSlotMapping(mapping: Map[UserId, Set[SlotId]]): Task[Int] = {
      val transformed: List[MappingUserSlot] = mapping.flatMap { case (k, vs) => vs.map(v => MappingUserSlot(k, v)) }.toList
      for {
        s <- cfpRepo.addMapping(transformed)
      } yield s
    }

    override def loadUsers(): Task[Seq[SimpleUser]] =
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

  }

  val layer: RLayer[Has[SlotRepo] with Has[UserRepo], Has[AdminService]] = (AdminServiceImpl(_, _)).toLayer

  def updateEnv(days: Map[String, String]): RIO[Has[AdminService], Int] =
    ZIO.serviceWith[AdminService](_.updateEnv(days))

  def insertUserSlotMapping(mapping: Map[UserId, Set[SlotId]]): RIO[Has[AdminService], Int] =
    ZIO.serviceWith[AdminService](_.insertUserSlotMapping(mapping))

  def loadUsers: RIO[Has[AdminService], Seq[SimpleUser]] =
    ZIO.serviceWith[AdminService](_.loadUsers())
}
