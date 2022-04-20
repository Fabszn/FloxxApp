package org.floxx

import io.circe.generic.auto._
import io.circe._
import org.floxx.domain.Mapping.UserSlot
import org.floxx.domain.Slot.{ Day, FromTime, ToTime }

object domain {

  object Mapping {
    case class UserSlot(user: Option[User.SimpleUser], slot: Slot)

    object UserSlot {

      implicit val ordering: Ordering[UserSlot] = (x: UserSlot, y: UserSlot) =>
        x.slot.fromTime.value.compareTo(y.slot.fromTime.value)
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

  case class Room(id: Room.Id, name: Room.Name, capacity: Room.Capacity, setup: Room.Setup)

  object Room {
    import io.circe.generic.semiauto._

    final case class Id(value: String) extends AnyVal

    final case class Name(value: String) extends AnyVal
    final case class Capacity(value: Int) extends AnyVal
    final case class Setup(value: String) extends AnyVal

    object Id {
      implicit val enc: Encoder[Room.Id] = deriveEncoder[Room.Id]
      implicit val dec: Decoder[Room.Id] = deriveDecoder[Room.Id]

      implicit val ordering: Ordering[Room.Id] = (x: Room.Id, y: Room.Id) => x.value.compareTo(y.value)

    }
    object Name {
      implicit val enc: Encoder[Room.Name] = deriveEncoder[Room.Name]
      implicit val dec: Decoder[Room.Name] = deriveDecoder[Room.Name]

    }
  }

  case class Talk(talkType: String, title: String)
  object Talk {

    def fromString(t: Talk): String = s"${t.talkType}%${t.title}"
    def toString(t: String): Talk = {
      val vs = t.split("%")
      Talk(vs(0), vs(1))
    }
  }

  final case class Slot(
      slotId: Slot.Id,
      roomId: Room.Id,
      fromTime: Slot.FromTime,
      toTime: Slot.ToTime,
      talk: Option[Talk],
      day: Slot.Day
  )

  object Slot {
    final case class Id(value: String) extends AnyVal
    final case class FromTime(value: String) extends AnyVal
    final case class ToTime(value: String) extends AnyVal
    final case class Day(value: String) extends AnyVal
    object Day {
      implicit val ordering: Ordering[Day] = (x: Day, y: Day) => x.value.compareTo(y.value)
    }

    implicit val ordering: Ordering[Slot] = (x: Slot, y: Slot) => s"${x.fromTime.value}-${x.roomId}".compareTo(s"${y.fromTime.value}-${y.roomId}")


  }

  final case class PlanningDayItem(roomId: Room.Id, slots: Seq[UserSlot])
  final case class Planning(day: Day, rooms: Seq[PlanningDayItem])

  implicit val decodeFoo: Decoder[Slot] = (c: HCursor) => {
    for {
      slotId <- c.downField("slotId").as[String]
      roomId <- c.downField("roomId").as[String]
      fromTime <- c.downField("fromTime").as[String]
      toTime <- c.downField("toTime").as[String]
      talk <- c.downField("talk").as[Option[Talk]]
      day <- c.downField("day").as[String]
    } yield {
      new Slot(Slot.Id(slotId), Room.Id(roomId), FromTime(fromTime), ToTime(toTime), talk, Day(day))
    }
  }
}
