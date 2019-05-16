package org.floxx.config

import java.util

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

  object floxx {
    lazy val floxxPort: Int     = configuration.getInt("floxx.port")
  }

  object rooms {

    lazy val roomsMapping = Map(
      "a_hall" -> "hall",
      "x_hall_a" -> "openDataCamp",
      "b_amphi" -> "Amphi bleu",
      "c_maillot" -> "Maillot",
      "d_par241" -> "241",
      "e_neu252" -> "252",
      "par242A" -> "242A",
      "par242B" -> "242B",
      "par243" -> "243",
      "par243_t" -> "243",
      "neu253" -> "253",
      "neu253_t" -> "253",
      "par202_203" -> "202_203",
      "par221M-222M" -> "221_222",
      "par224M-225M" -> "224_225",
      "par242AB" -> "242",
      "neu_232_232" -> "232",
      "neu_234_235" -> "234_235",
      "neu_212_213" -> "212_213",
      "par204" -> "204",
      "par201" -> "201",
      "lobby_neuilly" -> "lobby_neuilly",
      "f_neu251" -> "251"
    )
  }

}
