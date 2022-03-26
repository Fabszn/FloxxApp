package org.floxx

import doobie.util.Read
import org.floxx.domain.User.SimpleUser
import org.floxx.domain.User.SimpleUser._

object domain {

  object Mapping {
    case class UserSlot(user: Option[User.SimpleUser], slotId: Slot.Id)

    object UserSlot {

      implicit val pointRead: Read[UserSlot] =
        Read[(Option[String], Option[String], Option[String], String)].map {
          case (Some(userId), Some(n), Some(p), slotId) =>
            UserSlot(
              Some(SimpleUser(Id(userId), Nom(n), Prenom(p))),
              Slot.Id(slotId)
            )
          case (None, None, None, slotId) =>
            UserSlot(Option.empty[SimpleUser], Slot.Id(slotId))
          case _ =>
            UserSlot(Option.empty[SimpleUser], Slot.Id("Error"))
        }
    }
  }

  object User {

    case class SimpleUser(userId: SimpleUser.Id, nom: SimpleUser.Nom, prenom: SimpleUser.Prenom)
    object SimpleUser {

      final case class Id(value: String) extends AnyVal
      final case class Nom(value: String) extends AnyVal
      final case class Prenom(value: String) extends AnyVal

    }

  }

  object Slot {
    final case class Id(value: String) extends AnyVal
  }

}
