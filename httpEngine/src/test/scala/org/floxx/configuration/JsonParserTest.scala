package org.floxx.configuration

import io.circe
import io.circe.generic.semiauto.{deriveDecoder, deriveEncoder}
import io.circe.parser._
import io.circe.{Decoder, Encoder}
import org.floxx.api.entriesPointApi.LoginRequest
import org.floxx.domain
import org.floxx.domain.AuthUser.{Login, Mdp}
import org.floxx.domain.User.SimpleUser
import org.floxx.domain.{CfpSlot, Slot, jwt}
import org.floxx.processors.shareHitProcessor.VoxxrinJsonBody
import org.scalatest.funsuite.AnyFunSuite
import org.scalatest.matchers.should.Matchers.convertToAnyShouldWrapper

import java.time.ZonedDateTime
import scala.io.{BufferedSource, Source}

class JsonParserTest extends AnyFunSuite {

  case class LoginRequestToto(login: String, mdp: String)
  object LoginRequestToto {
    implicit val dec: Decoder[LoginRequestToto]  = deriveDecoder[LoginRequestToto]
    implicit val encc: Encoder[LoginRequestToto] = deriveEncoder[LoginRequestToto]
  }
  test("test Decode LoginRequest") {

    val source: BufferedSource = Source.fromResource("./loginBody.json")
    val msgJson: String        = source.mkString

    val ref = LoginRequest(login = SimpleUser.Id("fab-szn"), mdp = Mdp("123"))

    val result = decode[LoginRequest](msgJson) //msgJson.asJson.as[LoginRequestToto]

    result match {
      case Left(err) => fail(s"${err.getMessage} - ${err.getCause}")
      case Right(r) => r shouldEqual ref
    }
    source.close()
  }

  test("test Encode UserInfo") {

    val source: BufferedSource = Source.fromResource("./tokencontent.json")
    val msgJson: String        = source.mkString
    source.close()

    val ref = domain.jwt.UserInfo(
      userId    = SimpleUser.Id("fab-szn"),
      firstname = Login("fabszn@test.com"),
      isAdmin   = true
    )

    val result = decode[jwt.UserInfo](msgJson)

    result match {
      case Left(err) => fail(err.getMessage)
      case Right(r) => r shouldEqual ref
    }

  }

  test("test Encode payload Cfp 2024") {

    val source: BufferedSource = Source.fromResource("./cfpDevoxx24.json")
    val msgJson: String        = source.mkString
    source.close()

    val result: Either[circe.Error, Seq[CfpSlot]] = decode[Seq[CfpSlot]](msgJson)

    result match {
      case Left(err) => fail(err.getMessage)
      case Right(r) => {

        assert(r.nonEmpty)
        assert(r.filter(_.cfpSlotId == CfpSlot.Id(1790)).map(_.title) == Seq(Slot.Title("High-Speed DDD (revisited)")))
        assert(r.filter(_.cfpSlotId == CfpSlot.Id(1790)).flatMap(_.speakers).size == 1)

      }

    }
  }

  test("test Encode payload Voxxrin") {

    val source: BufferedSource = Source.fromResource("./voxxrin.json")
    val msgJson: String        = source.mkString
    source.close()

    val result: Either[circe.Error, VoxxrinJsonBody] = decode[VoxxrinJsonBody](msgJson)

    result match {
      case Left(err) => fail(err.getMessage)
      case Right(r) => {

        assert(r.recordedAt == ZonedDateTime.parse("2024-04-17T06:57:00Z"))
        assert(r.capacityFillingRatio == 0.5f)

      }

    }
  }

  test("test Decode payload Voxxrin") {

    val source: BufferedSource = Source.fromResource("./voxxrin.json")
    val msgJson: String        = source.mkString
    source.close()

    val ref = VoxxrinJsonBody(0.5f, ZonedDateTime.parse("2024-04-17T06:57:00Z"))

    val result: Either[circe.Error, VoxxrinJsonBody] = decode[VoxxrinJsonBody](msgJson)

    result match {
      case Left(err) => fail(err.getMessage)
      case Right(r) =>
        assert(r == ref)

    }

  }

}
