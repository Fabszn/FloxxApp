package org.floxx.model

import doobie.util.{ Get, Put }
import io.circe.generic.semiauto._
import io.circe.{ Decoder, Encoder, HCursor }

object jsonModel {

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

  @deprecated
  case class Slot(slotId: SlotId, roomId: String, fromTime: String, toTime: String, talk: Option[Talk], day: String)

  object Slot {

    implicit val decodeFoo: Decoder[Slot] = new Decoder[Slot] {
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

    implicit val enc: Encoder[Slot] = deriveEncoder[Slot]

  }

}
