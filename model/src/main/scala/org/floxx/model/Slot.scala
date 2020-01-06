package org.floxx.model

import doobie.util.{ Get, Put }
import play.api.libs.functional.syntax._
import play.api.libs.json.Reads._
import play.api.libs.json.{ JsPath, Json, Reads }

object jsonModel {

  case class Talk(talkType: String, title: String)
  object Talk {

    def fromString(t: Talk): String = s"${t.talkType}%${t.title}"
    def toString(t: String): Talk = {
      val vs = t.split("%")
      Talk(vs(1), vs(0))
    }

    implicit val talkGet: Get[Talk] = Get[String].map(toString)
    implicit val talkPut: Put[Talk] = Put[String].contramap(fromString)

    implicit val w = Json.writes[Talk]

    implicit val TalkReader: Reads[Talk] = (
      (JsPath \ "talkType").read[String] and
      (JsPath \ "title").read[String]
    )(Talk.apply _)

  }

  case class Slot(slotId: String, roomId: String, fromTime: String, toTime: String, talk: Option[Talk], day: String)


  object Slot {

    implicit val w = Json.writes[Slot]

    implicit val SlotReader: Reads[Slot] = (
      (JsPath \ "slotId").read[String] and
      (JsPath \ "roomId").read[String] and
      (JsPath \ "fromTime").read[String] and
      (JsPath \ "toTime").read[String] and
      (JsPath \ "talk").readNullable[Talk] and
      (JsPath \ "day").read[String]
    )(Slot.apply _)

  }

 

}
