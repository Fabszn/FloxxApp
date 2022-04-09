package org.floxx

import doobie.util.{Get, Put, Read}
import io.circe.generic.auto._
import io.circe._
import io.circe.{Decoder, Encoder}
import org.floxx.domain.Mapping.UserSlot
import org.floxx.domain.Slot.{Day, FromTime, ToTime}
import org.floxx.domain.User.SimpleUser
import org.floxx.domain.User.SimpleUser._

object domain {

  object Mapping {
    case class UserSlot(user: Option[User.SimpleUser], slot: Slot)

    object UserSlot {

      implicit val ordering: Ordering[UserSlot] = (x: UserSlot, y: UserSlot) => x.slot.fromTime.value.compareTo(y.slot.fromTime.value)
      implicit val userSlotRead: Read[UserSlot] =
        Read[(Option[String], Option[String], Option[String], String, String, String, String, String)].map {
          case (Some(userId), Some(p), Some(n), slotId, room, fromtTime, toTime, day) =>
            UserSlot(
              Some(SimpleUser(Id(userId), Nom(n), Prenom(p))),
              Slot(
                slotId   = Slot.Id(slotId),
                roomId   = Room.Id(room),
                fromTime = Slot.FromTime(fromtTime),
                toTime   = Slot.ToTime(toTime),
                day      = Slot.Day(day),
                talk     = Option.empty[Talk]
              )
            )
          case (None, None, None, slotId, room, fromtTime, toTime, day) =>
            UserSlot(
              Option.empty[SimpleUser],
              Slot(
                slotId   = Slot.Id(slotId),
                roomId   = Room.Id(room),
                fromTime = Slot.FromTime(fromtTime),
                toTime   = Slot.ToTime(toTime),
                day      = Slot.Day(day),
                talk     = Option.empty[Talk]
              )
            )
          case _ =>
            UserSlot(
              Option.empty[SimpleUser],
              Slot(
                slotId   = Slot.Id("error"),
                roomId   = Room.Id("error"),
                fromTime = Slot.FromTime("error"),
                toTime   = Slot.ToTime("error"),
                day      = Slot.Day("error"),
                talk     = Option.empty[Talk]
              )
            )
        }
    }
  }

  object User {

    case class SimpleUser(userId: SimpleUser.Id, nom: SimpleUser.Nom, prenom: SimpleUser.Prenom)
    object SimpleUser {

      final case class Id(value: String) extends AnyVal
      final case class Nom(value: String) extends AnyVal
      final case class Prenom(value: String) extends AnyVal

      /*implicit val enc: Encoder[SimpleUser.Id] = deriveEncoder[SimpleUser.Id]
      implicit val dec: Decoder[SimpleUser.Id] = deriveDecoder[SimpleUser.Id]*/

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

    implicit val talkGet: Get[Talk] = Get[String].map(toString)
    implicit val talkPut: Put[Talk] = Put[String].contramap(fromString)

    /*implicit val fooDecoder: Decoder[Talk] = deriveDecoder[Talk]
    implicit val fooEncoder: Encoder[Talk] = deriveEncoder[Talk]*/

  }

  case class Slot(
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

    /*implicit val enc: Encoder[Slot.Id] = deriveEncoder[Slot.Id]
    implicit val dec: Decoder[Slot.Id] = deriveDecoder[Slot.Id]*/
  }

  final case class PlanningDayItem(roomId: Room.Id, slots: Seq[UserSlot])
  final case class Planning(day: Day, rooms: Seq[PlanningDayItem])


  implicit val decodeFoo: Decoder[Slot] = (c: HCursor) => {for {
    slotId <- c.downField("slotId").as[String]
    roomId <- c.downField("roomId").as[String]
    fromTime <- c.downField("fromTime").as[String]
    toTime <- c.downField("toTime").as[String]
    talk <- c.downField("talk").as[Option[Talk]]
    day <- c.downField("day").as[String]
  } yield {
    new Slot(Slot.Id(slotId), Room.Id(roomId), FromTime(fromTime), ToTime(toTime), talk, Day(day))
  }}

   // implicit val enc: Encoder[Slot] = deriveEncoder[Slot]

}
