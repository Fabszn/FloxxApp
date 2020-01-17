package org.floxx.model

import io.circe.parser._
import org.floxx.model.jsonModel.Slot
import org.scalatest.{Matchers, WordSpec}

import scala.io.Source

class jsonModelTest extends WordSpec with Matchers {

  "A slots' list" when {
    "json is parsed" should {
      "should works" in {
        val json = Source.fromURL(getClass.getResource("/test.json"))
        println("----")
        //println(json.mkString)
        println("----")
        parse(json.mkString) match {
          case Left(e) => fail(s"Slots' Json file cannot be parsed ${e.message} ${e.getCause}")
          case Right(j) => {
            j.hcursor.downField("slots").as[Seq[Slot]] match {
              case Right(l) => l.size shouldEqual 2
              case Left(e) => {
                fail(s"decode to List[slot] doesn't work ${e.getMessage} - ${e.getCause}")
              }
            }
          }
        }

      }
    }
  }

}
