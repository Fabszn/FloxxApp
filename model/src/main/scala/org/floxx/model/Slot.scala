package org.floxx.model

import java.util.Date

import play.api.libs.functional.syntax._
import play.api.libs.json.Reads._
import play.api.libs.json.{ JsPath, Json, Reads, Writes }

object jsonModel {

  case class Talk(talkType: String, title: String)
  object Talk {
    implicit val w = Json.writes[Talk]
  }

  case class Slot(slotId: String, roomId: String, timeToStart: String, timeToEnd: String, talk: Option[Talk])
  object Slot {
    implicit val w = Json.writes[Slot]
  }

  object readers {

    implicit val TalkReader: Reads[Talk] = (
      (JsPath \ "talkType").read[String] and
      (JsPath \ "title").read[String]
    )(Talk.apply _)

    implicit val SlotReader: Reads[Slot] = (
      (JsPath \ "slotId").read[String] and
      (JsPath \ "roomId").read[String] and
      //(JsPath \ "speaker").read[String] and
      (JsPath \ "fromTime").read[String] and
      (JsPath \ "toTime").read[String] and
      (JsPath \ "talk").readNullable[Talk]
    )(Slot.apply _)

  }

}
