package org.floxx

import cats.effect.IO
import io.circe.Decoder.Result
import io.circe._
import io.circe.generic.extras.semiauto._
import io.circe.generic.semiauto.{deriveDecoder, deriveEncoder}
import org.floxx.domain.AuthUser._
import org.floxx.domain.ConfDay.{DayIndex, DayValue}
import org.floxx.domain.HitShare.{DateCreation, Percentage, Response, Status}
import org.floxx.domain.Information.{Content, DateCreate, Title}
import org.floxx.domain.Mapping.UserSlot
import org.floxx.domain.Overflow.{AffectedRoom, DateTime, Level}
import org.floxx.domain.Slot.Day
import org.floxx.domain.User.SimpleUser
import org.floxx.utils.CirceValueClassCustomAuto._
import org.http4s.EntityDecoder
import org.http4s.circe.jsonOf

import java.time.{OffsetDateTime, ZoneId, ZoneOffset, ZonedDateTime}
import java.util.UUID
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
    object Login {
      implicit val enc: Encoder[Login] = deriveUnwrappedEncoder[Login]
      implicit val dec: Decoder[Login] = deriveUnwrappedDecoder[Login]
    }
    final case class Firstname(value: String) extends AnyVal
    final case class Lastname(value: String) extends AnyVal
    final case class Mdp(value: String) extends AnyVal
    object Mdp {
      implicit val MdpIdDecoder: Decoder[Mdp] = deriveUnwrappedDecoder[Mdp]
      implicit val MdpIdEncoder: Encoder[Mdp] = deriveUnwrappedEncoder[Mdp]
    }
  }

  final case class CurrentYear(value: Int) extends AnyVal

  object CurrentYear {
    implicit val currentYearDecoder: Decoder[CurrentYear] = deriveUnwrappedDecoder[CurrentYear]
  }

  final case class ConfDay(dayIndex: DayIndex, dayValue: DayValue)

  object ConfDay {

    final case class DayIndex(value: Int) extends AnyVal
    object DayIndex {
      implicit val dayIndexDecoder: Decoder[DayIndex] = deriveUnwrappedDecoder[DayIndex]
    }
    object DayIndexVar {
      def unapply(s: String): Option[DayIndex] =
        if (s.nonEmpty) {
          Try(DayIndex(s.toInt)).toOption
        } else {
          Option.empty[DayIndex]
        }

    }
    final case class DayValue(value: String) extends AnyVal
    object DayValue {
      implicit val dayValueDecoder: Decoder[DayValue] = deriveUnwrappedDecoder[DayValue]
    }
    implicit val confDayDecoder: Decoder[ConfDay] = deriveDecoder[ConfDay]

  }

  final case class AggPercentageItem(percentage: Int, label: Int)

  final case class AggregatePercenteItem(percentage: Int, label: Int, day: DayValue, year: Int)

  final case class GlobalAggregatePercenteItem(percentage: Int, label: Int, year: Int)

  object GlobalAggregatePercenteItem {

    implicit val dec: Decoder[GlobalAggregatePercenteItem] = deriveDecoder[GlobalAggregatePercenteItem]
    implicit val enc: Encoder[GlobalAggregatePercenteItem] = deriveEncoder[GlobalAggregatePercenteItem]

  }

  case class StatItem(
      slotId: Option[Slot.Id],
      kind: Slot.Kind,
      title: Slot.Title,
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
      object Id {
        implicit val dec: Decoder[SimpleUser.Id] = deriveUnwrappedDecoder[SimpleUser.Id]
        implicit val enc: Encoder[SimpleUser.Id] = deriveUnwrappedEncoder[SimpleUser.Id]
      }
      final case class Nom(value: String) extends AnyVal
      final case class Prenom(value: String) extends AnyVal
    }

  }

  case class Room(id: Room.Id, name: Room.Name, capacity: Room.Capacity)

  object Room {

    final case class Id(value: Long) extends AnyVal

    final case class Name(value: String) extends AnyVal
    final case class Capacity(value: Int) extends AnyVal

    object Id {
      implicit val ordering: Ordering[Room.Id] = (x: Room.Id, y: Room.Id) => x.value.compareTo(y.value)
    }

    implicit val roomdecoder: Decoder[Room] = deriveDecoder[Room]

  }

  final case class Speaker(
      id: Speaker.Id,
      slotId: Slot.Id,
      firstname: Speaker.Firstname,
      lastname: Speaker.Lastname,
      fullname: Speaker.Fullname,
      imageUrl: Option[Speaker.ImageUrl]
  )

  object Speaker {
    final case class Id(value: Long) extends AnyVal
    final case class Firstname(value: String) extends AnyVal
    final case class Lastname(value: String) extends AnyVal
    final case class Fullname(value: String) extends AnyVal
    final case class ImageUrl(value: String) extends AnyVal

  }

  final case class Slot(
      slotId: Slot.Id,
      roomName: Room.Name,
      roomId: Room.Id,
      fromTime: Slot.FromTime,
      toTime: Slot.ToTime,
      kind: Slot.Kind,
      title: Slot.Title,
      day: Slot.Day,
      yearSlot: CurrentYear
  )

  final case class CfpSpeaker(
      id: Speaker.Id,
      firstName: Speaker.Firstname,
      lastName: Speaker.Lastname,
      fullName: Speaker.Fullname,
      imageUrl: Option[Speaker.ImageUrl]
  )
  object CfpSpeaker {
    def handleSpeakerInfo(c: HCursor): Result[Seq[CfpSpeaker]] =
      if (c.downField("proposal").downField("speakers").succeeded) {
        c.downField("proposal")
          .downField("speakers")
          .focus
          .fold(Right(Seq.empty[CfpSpeaker]).withLeft[DecodingFailure])(
            _.as[Seq[CfpSpeaker]]
          )
      } else {
        Right(Seq.empty[CfpSpeaker])
      }

  }

  final case class CfpSlot(
      cfpSlotId: CfpSlot.Id,
      roomId: domain.CfpSlot.RoomId,
      roomName: domain.Room.Name,
      fromDate: CfpSlot.FromDate,
      toDate: CfpSlot.ToDate,
      kind: Slot.Kind,
      title: Slot.Title,
      speakers: Seq[CfpSpeaker]
  )

  object CfpSlot {

    final case class Id(value: Long) extends AnyVal

    object Id {
      implicit val idDecoder: Decoder[Id] = deriveUnwrappedDecoder[Id]
    }

    final case class RoomId(value: Long) extends AnyVal
    object RoomId {
      implicit val roomIdDecoder: Decoder[RoomId] = deriveUnwrappedDecoder[RoomId]
    }
    final case class FromDate(value: OffsetDateTime) extends AnyVal
    object FromDate {
      implicit val fromDateDecoder: Decoder[FromDate] = deriveUnwrappedDecoder[FromDate]
    }
    final case class ToDate(value: OffsetDateTime) extends AnyVal
    object ToDate {
      implicit val toDateDecoder: Decoder[ToDate] = deriveUnwrappedDecoder[ToDate]
    }

    implicit val cfpSlotDecoder: Decoder[CfpSlot] = (c: HCursor) => {
      for {
        cfpslotId <- c.downField("id").as[CfpSlot.Id]
        roomId <- c.downField("room").downField("id").as[RoomId]
        roomName <- c.downField("room").downField("name").as[Room.Name]
        fromDate <- c.downField("fromDate").as[FromDate]
        toDate <- c.downField("toDate").as[ToDate]
        kind <- c.downField("sessionType").downField("name").as[Slot.Kind]
        title <- handleTitle(c)
        speakers <- CfpSpeaker.handleSpeakerInfo(c)

      } yield {
        CfpSlot(
          cfpslotId,
          roomId,
          roomName,
          fromDate,
          toDate,
          kind,
          title,
          speakers
        )
      }
    }

    private def handleTitle(c: HCursor): Result[Slot.Title] =
      if (c.downField("proposal").succeeded) {
        c.downField("proposal")
          .downField("title")
          .focus
          .fold(Right(Slot.Title("---")).withLeft[DecodingFailure])(
            _.as[Slot.Title]
          )
      } else {
        Right(Slot.Title("---"))
      }

  }

  object Slot {

    final case class Id(value: String) extends AnyVal
    object Id {
      implicit val idDecoder: Decoder[Id] = deriveUnwrappedDecoder[Id]

    }
    final case class FromTime(value: String) extends AnyVal
    object FromTime {
      implicit val idDecoder: Decoder[FromTime] = deriveUnwrappedDecoder[FromTime]
    }
    final case class ToTime(value: String) extends AnyVal
    object ToTime {
      implicit val idDecoder: Decoder[ToTime] = deriveUnwrappedDecoder[ToTime]
    }
    final case class Day(value: String) extends AnyVal

    final case class Kind(value: String) extends AnyVal
    object Kind {
      implicit val dec: Decoder[Slot.Kind] = deriveUnwrappedDecoder[Slot.Kind]
    }
    final case class Title(value: String) extends AnyVal
    object Title {
      implicit val dec: Decoder[Slot.Title] = deriveUnwrappedDecoder[Slot.Title]
    }
    object Day {
      implicit val dec: Decoder[Day]       = deriveUnwrappedDecoder[Day]
      implicit val ordering: Ordering[Day] = (x: Day, y: Day) => x.value.compareTo(y.value)
    }

    implicit val ordering: Ordering[Slot] = (x: Slot, y: Slot) =>
      s"${x.fromTime.value}-${x.roomId}".compareTo(s"${y.fromTime.value}-${y.roomId}")

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

    implicit val trackHitInfoDecoder: Decoder[TrackHitInfo] = deriveDecoder[TrackHitInfo]
    implicit val format: EntityDecoder[IO, TrackHitInfo]    = jsonOf[IO, TrackHitInfo]
  }

  final case class Overflow(
      slotId: Slot.Id,
      level: Level,
      datetime: DateTime                 = DateTime(ZonedDateTime.now(defaultZoneId)),
      affectedRoom: Option[AffectedRoom] = Option.empty[AffectedRoom]
  )

  object Overflow {

    final case class Level(value: Int) extends AnyVal
    object Level {
      implicit val levelDecoder: Decoder[Level] = deriveUnwrappedDecoder[Level]
    }
    final case class DateTime(value: ZonedDateTime) extends AnyVal
    object DateTime {
      implicit val dateTimeDecoder: Decoder[DateTime] = deriveUnwrappedDecoder[DateTime]
    }
    final case class AffectedRoom(value: String) extends AnyVal
    object AffectedRoom {
      implicit val affectedRoomDecoder: Decoder[AffectedRoom] = deriveUnwrappedDecoder[AffectedRoom]
    }

    implicit val overflowDecoder: Decoder[Overflow] = deriveDecoder[Overflow]
  }

  case class Hit(
      hitid: Option[String] = None,
      hitSlotId: String,
      percentage: Int,
      dateTime: Long = System.currentTimeMillis(),
      userId: domain.User.SimpleUser.Id
  )
  object Hit {
    implicit val hitDecoder: Decoder[Hit] = deriveDecoder[Hit]
  }

  final case class HitLatest(hitSlotId: String, hitid: String)

  case class Information(
      id: Information.Id = Information.Id(-1),
      title: Title,
      content: Content,
      dateCreate: DateCreate = DateCreate.now(),
      isArchived: Boolean    = false
  )

  object Information {
    final case class Id(value: Long) extends AnyVal
    object Id {
      implicit val idDecoder: Decoder[Id] = deriveUnwrappedDecoder[Id]

    }
    final case class Title(value: String) extends AnyVal
    object Title {
      implicit val titleDecoder: Decoder[Title] = deriveUnwrappedDecoder[Title]

    }
    final case class Content(value: String) extends AnyVal
    object Content {
      implicit val contentDecoder: Decoder[Content] = deriveUnwrappedDecoder[Content]

    }
    final case class DateCreate(value: ZonedDateTime) extends AnyVal

    object DateCreate {
      implicit val dateCreateDecoder: Decoder[DateCreate] = deriveUnwrappedDecoder[DateCreate]
      def now(): DateCreate                               = DateCreate(ZonedDateTime.now())
    }

    implicit val informationDecoder: Decoder[Information] = deriveDecoder[Information]
    implicit val format: EntityDecoder[IO, Information]   = jsonOf[IO, Information]

  }

  case class HitShare(
      id: HitShare.Id,
      slotId: Slot.Id,
      roomId: Room.Id,
      perc: Percentage,
      status: Status,
      dateCreation: DateCreation,
      response: Option[Response] = Option.empty[Response]
  )

  object HitShare {
    final case class Id(value: UUID) extends AnyVal
    final case class Percentage(value: Long) extends AnyVal
    final case class Status(value: Boolean) extends AnyVal
    final case class DateCreation(value: ZonedDateTime) extends AnyVal
    final case class Response(value: String) extends AnyVal
    object DateCreation {
      def now(): DateCreation = DateCreation(ZonedDateTime.now(ZoneOffset.UTC))
    }

  }

  final case class InformationReadStatus(userId: SimpleUser.Id, infoId: Information.Id)

  object jwt {

    case class UserInfo(userId: SimpleUser.Id, firstname: Login, isAdmin: Boolean)

    object UserInfo {

      implicit val enc: Encoder[UserInfo] = deriveEncoder[UserInfo]
      implicit val dec: Decoder[UserInfo] = deriveDecoder[UserInfo]

      def empty: UserInfo = UserInfo(SimpleUser.Id("-"), Login("-"), isAdmin = false)
    }

  }

  object error {

    sealed trait FloxxError extends Exception {
      def msg: String
    }
    final case class LoadCfpDataError(msg: String) extends FloxxError

    final case class AuthentificationError(msg: String) extends FloxxError

    final case class ParsingError(msg: String) extends FloxxError

    final case class DatabaseError(msg: String) extends FloxxError

    final case class ConfigurationError(msg: String) extends FloxxError
    final case class ShareItError(msg: String) extends FloxxError

  }

}
