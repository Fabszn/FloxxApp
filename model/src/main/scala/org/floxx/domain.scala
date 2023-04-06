package org.floxx

import cats.effect.IO
import io.circe._
import io.circe.generic.auto._
import org.http4s.circe.jsonOf
import io.circe.generic.semiauto.{deriveDecoder, deriveEncoder}
import org.floxx.domain.AuthUser.{Firstname, Id, Lastname, Login, Mdp}
import org.floxx.domain.ConfDay.{DayIndex, DayValue}
import org.floxx.domain.Information.{Content, DateCreate, Title}
import org.floxx.domain.Mapping.UserSlot
import org.floxx.domain.Overflow.{AffectedRoom, DateTime, Level}
import org.floxx.domain.Slot.Day
import org.floxx.domain.User.SimpleUser

import java.text.SimpleDateFormat
import java.time.{ZoneId, ZonedDateTime}
import scala.util.Try

object domain {

  val defaultZoneId: ZoneId = ZoneId.of("Europe/Paris")

  final case class AuthUser(
      userId: Option[SimpleUser.Id],
      login: Login,
      firstName: Firstname,
      lastName: Lastname,
      mdp: Mdp,
      isAdmin: Boolean = false
  )

  object AuthUser {
    final case class Id(value: String) extends AnyVal
    final case class Login(value: String) extends AnyVal
    final case class Firstname(value: String) extends AnyVal
    final case class Lastname(value: String) extends AnyVal
    final case class Mdp(value: String) extends AnyVal
  }

  final case class CurrentYear(value: Int) extends AnyVal

  final case class ConfDay(dayIndex: DayIndex, dayValue: DayValue)

  object ConfDay {

    final case class DayIndex(value: Int) extends AnyVal
    object DayIndexVar {
      def unapply(s: String): Option[DayIndex] =
        if (s.nonEmpty)
          Try(DayIndex(s.toInt)).toOption
        else
          Option.empty[DayIndex]
    }
    final case class DayValue(value: String) extends AnyVal

  }

  final case class AggPercentageItem(percentage: Int, label: Int)

  final case class AggregatePercenteItem(percentage: Int, label: Int, day: DayValue)

  object AggregatePercenteItem {

    implicit val dec: Decoder[AggregatePercenteItem] = deriveDecoder[AggregatePercenteItem]
    implicit val enc: Encoder[AggregatePercenteItem] = deriveEncoder[AggregatePercenteItem]

  }

  final case class GlobalAggregatePercenteItem(percentage: Int, label: Int)

  object GlobalAggregatePercenteItem {

    implicit val dec: Decoder[GlobalAggregatePercenteItem] = deriveDecoder[GlobalAggregatePercenteItem]
    implicit val enc: Encoder[GlobalAggregatePercenteItem] = deriveEncoder[GlobalAggregatePercenteItem]

  }

  case class StatItem(
      slotId: Option[Slot.Id],
      talk: Talk,
      percentage: Option[Int],
      roomid: String,
      fromtime: String,
      totime: String,
      day: String
  )

  object Mapping {
    case class UserSlot(user: Option[User.SimpleUser], slot: Slot)

    object UserSlot {

      implicit val ordering: Ordering[UserSlot] = (x: UserSlot, y: UserSlot) =>
        x.slot.fromTime.value.compareTo(y.slot.fromTime.value)
    }
  }

  object User {

    case class SimpleUser(userId: SimpleUser.Id, nom: SimpleUser.Nom, prenom: SimpleUser.Prenom)
    object SimpleUser {

      final case class Id(value: String) extends AnyVal
      final case class Nom(value: String) extends AnyVal
      final case class Prenom(value: String) extends AnyVal


    }

  }

  case class Room(id: Room.Id, name: Room.Name, capacity: Room.Capacity, setup: Room.Setup)

  object Room {
    import io.circe.generic.semiauto._

    final case class Id(value: String) extends AnyVal

    final case class Name(value: String) extends AnyVal
    final case class Capacity(value: Int) extends AnyVal
    final case class Setup(value: String) extends AnyVal

    object Id {
      implicit val enc: Encoder[Room.Id] = deriveEncoder[Room.Id]
      implicit val dec: Decoder[Room.Id] = deriveDecoder[Room.Id]

      implicit val ordering: Ordering[Room.Id] = (x: Room.Id, y: Room.Id) => x.value.compareTo(y.value)

    }
    object Name {
      implicit val enc: Encoder[Room.Name] = deriveEncoder[Room.Name]
      implicit val dec: Decoder[Room.Name] = deriveDecoder[Room.Name]

    }
  }

  case class Talk(talkType: String, title: String)
  object Talk {

    def fromString(t: Talk): String = s"${t.talkType}%${t.title}"
    def toString(t: String): Talk = {
      val vs = t.split("%")
      Talk(vs(0), vs(1))
    }
  }

  final case class Slot(
      slotId: Slot.Id,
      roomId: Room.Id,
      fromTime: Slot.FromTime,
      toTime: Slot.ToTime,
      talk: Option[Talk],
      day: Slot.Day,
      yearSlot: CurrentYear
  )

  object Slot {

    private def millis2Year(m: Long): CurrentYear = {
      val ldt = new SimpleDateFormat("yyyy")
      CurrentYear(ldt.format(m).toInt)
    }

    final case class Id(value: String) extends AnyVal
    final case class FromTime(value: String) extends AnyVal
    final case class ToTime(value: String) extends AnyVal
    final case class Day(value: String) extends AnyVal
    object Day {
      implicit val ordering: Ordering[Day] = (x: Day, y: Day) => x.value.compareTo(y.value)
    }

    implicit val ordering: Ordering[Slot] = (x: Slot, y: Slot) =>
      s"${x.fromTime.value}-${x.roomId}".compareTo(s"${y.fromTime.value}-${y.roomId}")

    implicit val decodeSlot: Decoder[Slot] = (c: HCursor) => {
      for {
        slotId <- c.downField("slotId").as[String]
        roomId <- c.downField("roomId").as[String]
        fromTime <- c.downField("fromTime").as[String]
        toTime <- c.downField("toTime").as[String]
        talk <- c.downField("talk").as[Option[Talk]]
        day <- c.downField("day").as[String]
        currentYear <- c.downField("fromTimeMillis").as[Long]
      } yield {
        new Slot(
          Slot.Id(slotId),
          Room.Id(roomId),
          FromTime(fromTime),
          ToTime(toTime),
          talk,
          Slot.Day(day),
          millis2Year(currentYear)
        )
      }
    }

  }

  final case class PlanningDayItem(roomId: Room.Id, slots: Seq[UserSlot])
  final case class Planning(day: Day, rooms: Seq[PlanningDayItem])

  case class TrackHitInfo(
      hitSlotId: Slot.Id,
      slot: Slot,
      hitInfo: Option[Hit],
      overflow: Option[Overflow] = Option.empty[Overflow]
  )

  object TrackHitInfo {

    implicit val format = jsonOf[IO, TrackHitInfo]
  }

  final case class Overflow(
      slotId: Slot.Id,
      level: Level,
      datetime: DateTime = DateTime(ZonedDateTime.now(defaultZoneId)),
      affectedRoom: Option[AffectedRoom] = Option.empty[AffectedRoom]
  )

  object Overflow {

    final case class Level(value: Int) extends AnyVal
    final case class DateTime(value: ZonedDateTime) extends AnyVal
    final case class AffectedRoom(value: String) extends AnyVal

  }

  case class Hit(
      hitid: Option[String] = None,
      hitSlotId: String,
      percentage: Int,
      dateTime: Long = System.currentTimeMillis(),
      userId: domain.User.SimpleUser.Id
  )

  case class Information(id:Information.Id = Information.Id(-1), title:Title, content:Content, dateCreate:DateCreate=DateCreate.now(), isArchived:Boolean=false)

  object Information {
    final case class Id(value:Long) extends AnyVal
    final case class Title(value:String) extends AnyVal
    final case class Content(value:String) extends AnyVal
    final case class DateCreate(value: ZonedDateTime) extends AnyVal
    object DateCreate{
      def now():DateCreate = DateCreate(ZonedDateTime.now())
    }

    implicit val format = jsonOf[IO, Information]

  }

  final case class InformationReadStatus(userId:SimpleUser.Id, infoId:Information.Id)

}
