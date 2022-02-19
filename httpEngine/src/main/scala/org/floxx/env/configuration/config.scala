package org.floxx.env.configuration

import pureconfig._
import pureconfig.generic.auto._
import zio._

object config {

  final case class Cfp(url: String, days: List[String])
  final case class Db(driver: String, url: String, user: String, password: String)
  final case class Floxx(port: Int, secret: String)
  final case class Track(delayBefore: Int, delayAfter: Int)

  case class GlobalConfig(cfp: Cfp, db: Db, floxx: Floxx, track: Track, roomsMapping:Map[String,String])

  final case class RoomConf(name: String) extends AnyVal

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

  trait Configuration {
    def getConf: Task[GlobalConfig]
    def getRooms: Task[Map[String, Option[String]]]
  }

  case class ConfigurationImpl() extends Configuration {
    override def getConf: Task[GlobalConfig] = IO.effect(
      ConfigSource.default.loadOrThrow[GlobalConfig]
    )

    override def getRooms: Task[Map[String, Option[String]]] = IO.succeed(rooms.roomsMapping)
  }

  val layer: ULayer[Has[Configuration]] = ZLayer.succeed(ConfigurationImpl())

  def getConf: RIO[Has[Configuration], GlobalConfig] = ZIO.serviceWith[Configuration](_.getConf)

  def getRooms:RIO[Has[Configuration],Map[String, Option[String]]]= ZIO.serviceWith[Configuration](_.getRooms)

}
