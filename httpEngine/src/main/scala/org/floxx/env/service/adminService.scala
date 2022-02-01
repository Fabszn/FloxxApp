package org.floxx.env.service

import org.floxx.env.repository.cfpRepository.CfpRepo
import org.floxx.model.{MappingUserSlot, SlotId, UserId}
import org.floxx.model.jsonModel.Slot
import org.floxx.service.WithTransact
import zio._
import zio.interop.catz._

object adminService {

  trait AdminService {
    def updateEnv(days: Map[String, String]): Task[Int]
    def insertUserSlotMapping(mapping: Map[UserId, Set[SlotId]]):Task[Int]
  }

  case class AdminServiceLive(cfpRepo: CfpRepo) extends AdminService with WithTransact {
    override def updateEnv(days: Map[String, String]): Task[Int] =
      for {
        slots <- cfpRepo.allSlotIds
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

    private def updateSlots(slots: Set[Slot], env: Map[String, String]): Task[Set[Slot]] = {

      def updateId(id: SlotId, oldDay: String, newDay: String): SlotId =
        SlotId(id.id.replace(oldDay, newDay))

      Task( slots.map(s => {
        val oldDay = s.day
        val newDay = env(oldDay)
        s.copy(
          slotId = updateId(s.slotId, oldDay, newDay),
          day    = newDay
        )
      }))
    }

  }

  val layer:RLayer[Has[CfpRepo], Has[AdminService]]=(AdminServiceLive(_)).toLayer


}
