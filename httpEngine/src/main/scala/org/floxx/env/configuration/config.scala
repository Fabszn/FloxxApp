package org.floxx.env.configuration

import org.floxx.domain.{ConfDay, CurrentYear}
import pureconfig._
import pureconfig.generic.auto._
import zio._

object config {

  final case class Cfp(currentYear:CurrentYear,url: String, days: List[ConfDay])
  final case class Db(driver: String, url: String, user: String, password: String, maximumPoolSize: Int, minimumIdleSize: Int)
  final case class Floxx(port: Int, secret: String)
  final case class DevMode(isActivated:Boolean= false, currentDay:String, currentTime: String)
  final case class Track(delayBefore: Int, delayAfter: Int, devMode:DevMode)




  case class GlobalConfig(
      cfp: Cfp,
      db: Db,
      floxx: Floxx,
      track: Track,
      roomsMapping: Map[String, Option[String]] = rooms.roomsMapping
  )

  final case class RoomConf(name: String) extends AnyVal

  object rooms {

    lazy val roomsMapping = Map(
      "a_hall" -> None,
      "x_hall_a" -> Some("openDataCamp"),
      "b_amphi" -> Some("Amphi bleu"),
      "c_maillot" -> Some("Maillot"),
      "d_par241" -> Some("Paris 241"),
      "e_neu252" -> Some("Neuilly 252AB"),
      "par242A" -> Some("Paris 242A"),
      "par242B" -> Some("Paris 242B"),
      "par243" -> Some("Paris 243"),
      "par243_t" -> Some("Paris 243"),
      "neu253" -> Some("Neuilly 253"),
      "neu253_t" -> Some("Neuilly 253"),
      "par202_203" -> Some("Paris 202/203"),
      "par221M-222M" -> Some("Paris 221/222"),
      "par224M-225M" -> Some("Paris 224/225"),
      "par242AB" -> Some("Paris 242AB"),
      "neu_232_232" -> Some("Neuilly 232"),
      "neu_234_235" -> Some("Neuilly 234/235"),
      "neu_212_213" -> Some("Neuilly 212/213"),
      "par204" -> Some("Paris 204"),
      "par201" -> Some("Paris 201"),
      "lobby_neuilly" -> None,
      "f_neu251" -> Some("Neuilly 251"),
      "lab1" -> Some("Neuilly lab1"),
      "lab2" -> Some("Neuilly lab2"),
      "lab3" -> Some("Paris lab3"),
      "lab4" -> Some("Paris lab4"),
      "par201_u" -> Some("Paris 201")
    )
  }

  trait Configuration {
    def getConf: Task[GlobalConfig]
    def getRooms: Task[Map[String, Option[String]]]
  }

  private final case class ConfigurationService() extends Configuration {
    override def getConf: Task[GlobalConfig] = ZIO.attempt(
      ConfigSource.default.loadOrThrow[GlobalConfig]
    ).orDie

    override def getRooms: Task[Map[String, Option[String]]] = ZIO.succeed(rooms.roomsMapping)
  }

  val layer: ULayer[Configuration] = ZLayer.succeed(ConfigurationService())

  def getConf: RIO[Configuration, GlobalConfig] = ZIO.serviceWithZIO[Configuration](_.getConf)

  def getRooms: RIO[Configuration, Map[String, Option[String]]] = ZIO.serviceWithZIO[Configuration](_.getRooms)

}
