package org.floxx.service

import cats.effect.IO
import org.floxx.IOVal
import org.floxx.model.jsonModel.Slot
import org.floxx.repository.postgres.CfpRepoPg
import org.floxx.utils.floxxUtils._

trait AdminService[F[_]] {
  def updateEnv(days: Map[String, String]): IO[IOVal[Int]]
}

class AdminServiceImpl(cfpRepo: CfpRepoPg) extends AdminService[IO] with WithTransact {
  override def updateEnv(days: Map[String, String]): IO[IOVal[Int]] =
    (for {
      slots <- run(cfpRepo.allSlotIds).eitherT
      updatedSlots <- updateSlots(slots, days).eitherT
      _ = println(updatedSlots.toString())
      _ <- run(cfpRepo.drop).eitherT
      r <- run(cfpRepo.addSlots(updatedSlots.toList)).eitherT
    } yield r).value

  private def updateSlots(slots: Set[Slot], env: Map[String, String]): IO[IOVal[Set[Slot]]] = {

    def updateId(id: String, oldDay: String, newDay: String): String =
      id.replace(oldDay, newDay)

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
