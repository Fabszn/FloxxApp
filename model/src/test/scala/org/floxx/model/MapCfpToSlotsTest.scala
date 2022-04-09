package org.floxx.model

import io.circe.parser._
import org.floxx.domain.Slot
import org.scalatest.matchers.should.Matchers
import org.scalatest.wordspec.AnyWordSpec

import scala.io.{BufferedSource, Source}

class MapCfpToSlotsTest extends AnyWordSpec with Matchers {

  "A slots' list" when {
    "json is parsed" should {
      "works" in {
        val json = Source.fromResource("test.json")

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
