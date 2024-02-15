package org.floxx.configuration


import io.circe.generic.semiauto.{deriveDecoder, deriveEncoder}
import io.circe.parser._
import io.circe.{Decoder, Encoder}
import org.floxx.domain
import org.floxx.domain.AuthUser.{Login, Mdp}
import org.floxx.domain.User.SimpleUser
import org.floxx.domain.jwt
import org.floxx.api.entriesPointApi.LoginRequest
import org.scalatest.funsuite.AnyFunSuite
import org.scalatest.matchers.should.Matchers.convertToAnyShouldWrapper

import scala.io.{BufferedSource, Source}


class JsonParserTest extends AnyFunSuite {


  case class LoginRequestToto(login: String, mdp: String)
  object LoginRequestToto{
    implicit val dec:Decoder[LoginRequestToto] = deriveDecoder[LoginRequestToto]
    implicit val encc:Encoder[LoginRequestToto] = deriveEncoder[LoginRequestToto]
  }
  test("test Decode LoginRequest") {

    val source: BufferedSource = Source.fromResource("./loginBody.json")
    val msgJson: String        = source.mkString

    val ref = LoginRequest(login=SimpleUser.Id("fab-szn"), mdp= Mdp("123"))



    val result = decode[LoginRequest](msgJson)//msgJson.asJson.as[LoginRequestToto]


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
      userId = SimpleUser.Id("fab-szn"),
      firstname =  Login("fabszn@test.com"),
      isAdmin = true
    )

    val result = decode[jwt.UserInfo](msgJson)

    result match {
      case Left(err) => fail(err.getMessage)
      case Right(r) => r shouldEqual ref
    }



  }

}
