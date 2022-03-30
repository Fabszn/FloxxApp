package org.floxx

import cats.effect.IO
import doobie.util.{ Get, Put, Read }
import io.circe.generic.semiauto.{ deriveDecoder, deriveEncoder }
import io.circe.generic.auto._
import io.circe.{ Decoder, Encoder }
import org.floxx.domain.User.SimpleUser
import org.floxx.domain.User.SimpleUser._
import org.http4s.circe.jsonOf

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

      implicit val enc: Encoder[SimpleUser.Id] = deriveEncoder[SimpleUser.Id]
      implicit val dec: Decoder[SimpleUser.Id] = deriveDecoder[SimpleUser.Id]

    }

  }

  case class Room(id: Room.Id, name: Room.Name, capacity: Room.Capacity, setup: Room.Setup)

  object Room {

    final case class Id(value: String) extends AnyVal
    final case class Name(value: String) extends AnyVal
    final case class Capacity(value: Int) extends AnyVal
    final case class Setup(value: String) extends AnyVal



    implicit val format = jsonOf[IO, Room]
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

    implicit val fooDecoder: Decoder[Talk] = deriveDecoder[Talk]
    implicit val fooEncoder: Encoder[Talk] = deriveEncoder[Talk]

  }

  case class Slot(slotId: Slot.Id, roomId: Room.Id, fromTime: Slot.FromTime, toTime: Slot.ToTime, talk: Option[Talk], day: Slot.Day)

  object Slot {
    final case class Id(value: String) extends AnyVal
    final case class FromTime(value: String) extends AnyVal
    final case class ToTime(value: String) extends AnyVal
    final case class Day(value: String) extends AnyVal

    implicit val enc: Encoder[Slot.Id] = deriveEncoder[Slot.Id]
    implicit val dec: Decoder[Slot.Id] = deriveDecoder[Slot.Id]
  }
  /*implicit val decodeFoo: Decoder[Slot] = new Decoder[Slot] {
      final def apply(c: HCursor): Decoder.Result[Slot] =
        for {
          slotId <- c.downField("slotId").as[String]
          roomId <- c.downField("roomId").as[String]
          fromTime <- c.downField("fromTime").as[String]
          toTime <- c.downField("toTime").as[String]
          talk <- c.downField("talk").as[Option[Talk]]
          day <- c.downField("day").as[String]
        } yield {
          new Slot(SlotId(slotId), roomId, fromTime, toTime, talk, day)
        }
    }

    implicit val enc: Encoder[Slot] = deriveEncoder[Slot]*/

}
