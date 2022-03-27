package org.floxx.env.service

import org.floxx.domain.Mapping.UserSlot
import org.floxx.env.api.adminApi.Mapping
import org.floxx.env.repository.cfpRepository.SlotRepo
import org.floxx.env.repository.userRepository.UserRepo
import org.floxx.model.jsonModel.Slot
import org.floxx.model.{MappingUserSlot, SimpleUser, SlotId, UserId}
import zio._

object adminService {

  trait AdminService {
    def updateEnv(days: Map[String, String]): Task[Int]
    def insertUserSlotMapping(mapping: Mapping): Task[Int]
    def loadUsers: Task[Seq[SimpleUser]]
    def mappingUserSlot:Task[Seq[UserSlot]]
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

    override def mappingUserSlot: Task[Seq[UserSlot]] = slotRepo.mappingUserSlot
  }

  val layer: RLayer[Has[SlotRepo] with Has[UserRepo], Has[AdminService]] = (AdminServiceImpl(_, _)).toLayer

  def updateEnv(days: Map[String, String]): RIO[Has[AdminService], Int] =
    ZIO.serviceWith[AdminService](_.updateEnv(days))

  def insertUserSlotMapping(mapping: Mapping): RIO[Has[AdminService], Int] =
    ZIO.serviceWith[AdminService](_.insertUserSlotMapping(mapping))

  def loadUsers: RIO[Has[AdminService], Seq[SimpleUser]] =
    ZIO.serviceWith[AdminService](_.loadUsers)

  def mappingUserSlot: RIO[Has[AdminService], Seq[UserSlot]] =
    ZIO.serviceWith[AdminService](_.mappingUserSlot)
}
