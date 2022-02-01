package org.floxx.service

import cats.effect.IO
import doobie.free.connection.ConnectionIO
import org.floxx.IOVal
import org.floxx.model.jsonModel.Slot
import org.floxx.model.{MappingUserSlot, SlotId, UserId}
import org.floxx.repository.postgres.{CfpRepo, CfpRepoPg}
import org.floxx.utils.floxxUtils._

@deprecated
trait AdminService[F[_]] {
  def updateEnv(days: Map[String, String]): IO[IOVal[Int]]
  def insertUserSlotMapping(mapping: Map[UserId, Set[SlotId]]):IO[IOVal[Int]]
}


@deprecated
class AdminServiceImpl(cfpRepo: CfpRepo[ConnectionIO]) extends AdminService[IO] with WithTransact {
  override def updateEnv(days: Map[String, String]): IO[IOVal[Int]] =
    (for {
      slots <- run(cfpRepo.allSlotIds).eitherT
      updatedSlots <- updateSlots(slots, days).eitherT
      _ <- run(cfpRepo.drop).eitherT
      r <- run(cfpRepo.addSlots(updatedSlots.toList)).eitherT
    } yield r).value


  override def insertUserSlotMapping(mapping: Map[UserId, Set[SlotId]]): IO[IOVal[Int]] = {
    val transformed: List[MappingUserSlot] = mapping.flatMap { case (k, vs) => vs.map(v => MappingUserSlot(k, v)) }.toList
      (for {
        s <- run(cfpRepo.addMapping(transformed)).eitherT
      } yield s).value
  }

  private def updateSlots(slots: Set[Slot], env: Map[String, String]): IO[IOVal[Set[Slot]]] = {

    def updateId(id: SlotId, oldDay: String, newDay: String): SlotId =
      SlotId(id.id.replace(oldDay, newDay))

    val t: Set[Slot] = slots.map(s => {
      val oldDay = s.day
      val newDay = env(oldDay)
      s.copy(
        slotId = updateId(s.slotId, oldDay, newDay),
        day    = newDay
      )
    })
    IO.pure(Right(t))
  }

}
