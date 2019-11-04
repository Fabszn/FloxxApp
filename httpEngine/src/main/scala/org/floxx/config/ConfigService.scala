package org.floxx.config

import com.typesafe.config.ConfigFactory

import scala.collection.JavaConversions._

object ConfigService {

  private val configName = "application.conf"
  lazy val configuration = ConfigFactory.load(configName)

  object cfp {
    lazy val url: String        = configuration.getString("cfp.url")
    lazy val days: List[String] = configuration.getStringList("cfp.days").toList
  }

  object redis {
    lazy val host: String     = configuration.getString("redis.host")
    lazy val port: String     = configuration.getString("redis.port")
    lazy val password: String = configuration.getString("redis.password")
  }

  object postgres {
    lazy val driver: String   = configuration.getString("postgres.driver")
    lazy val url: String      = configuration.getString("postgres.url")
    lazy val user: String     = configuration.getString("postgres.user")
    lazy val password: String = configuration.getString("postgres.password")
  }

  object floxx {
    lazy val floxxPort: Int = configuration.getInt("floxx.port")
    object security {
      lazy val secret: String = configuration.getString("floxx.security.secret")
    }
  }

  case class RoomConf(name: String)

  object rooms {

    lazy val roomsMapping = Map(
      "a_hall" -> None,
      "x_hall_a" -> Some("openDataCamp"),
      "b_amphi" -> Some("Amphi bleu"),
      "c_maillot" -> Some("Maillot"),
      "d_par241" -> Some("241"),
      "e_neu252" -> Some("252"),
      "par242A" -> Some("242A"),
      "par242B" -> Some("242B"),
      "par243" -> Some("243"),
      "par243_t" -> Some("243"),
      "neu253" -> Some("253"),
      "neu253_t" -> Some("253"),
      "par202_203" -> Some("202_203"),
      "par221M-222M" -> Some("221_222"),
      "par224M-225M" -> Some("224_225"),
      "par242AB" -> Some("242"),
      "neu_232_232" -> Some("232"),
      "neu_234_235" -> Some("234_235"),
      "neu_212_213" -> Some("212_213"),
      "par204" -> Some("204"),
      "par201" -> Some("201"),
      "lobby_neuilly" -> None,
      "f_neu251" -> Some("251")
    )
  }

}
