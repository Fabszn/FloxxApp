package org.floxx.model

import doobie.util.{Get, Put}
import play.api.libs.functional.syntax._
import play.api.libs.json.Reads._
import play.api.libs.json.{JsPath, Json, Reads}

object jsonModel {

  case class Talk(talkType: String, title: String)
  object Talk {
    implicit val w = Json.writes[Talk]

    implicit val TalkReader: Reads[Talk] = (
      (JsPath \ "talkType").read[String] and
      (JsPath \ "title").read[String]
    )(Talk.apply _)

  }

  case class Slot(slotId: String,
                  roomId: String,
                  fromTime: String,
                  toTime: String,
                  talk: Option[Talk],
                  day: String)

  /*case class Slot2(slotId: String,
                  roomId: String,
                  fromTime: String,
                  toTime: String,
                  day: String)*/
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

  /*object Slot2 {
    implicit val w2 = Json.writes[Slot2]

    implicit val Slot2Reader: Reads[Slot2] = (
      (JsPath \ "slotId").read[String] and
        (JsPath \ "roomId").read[String] and
        (JsPath \ "fromTime").read[String] and
        (JsPath \ "toTime").read[String] and
        (JsPath \ "day").read[String]
      )(Slot2.apply _)
  }*/

}
