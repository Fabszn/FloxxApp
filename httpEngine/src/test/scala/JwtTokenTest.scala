import io.circe.syntax.EncoderOps
import org.floxx.UserInfo
import org.scalatest.flatspec.AnyFlatSpec
import pdi.jwt.{Jwt, JwtAlgorithm}

import io.circe.generic.auto._

class JwtTokenTest extends AnyFlatSpec  {

  "Encode - Decode Jwt token" should " valid" in {

    val info = UserInfo("123","nameUSer", true)


    val f: String = Jwt.encode(
      info.asJson.noSpaces,
      "secret",
      JwtAlgorithm.HS256
    )

    println(f)

    val t = Jwt.decode(f)

    assert(true)
  }

}
