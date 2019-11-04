package org.floxx.service

import cats.effect.{ IO, IOApp }
import doobie.{ ConnectionIO, Transactor }
import org.floxx.config.ConfigService

import scala.concurrent.ExecutionContext

object globalService {

  case class Message(message: String) extends AnyVal

}

import doobie._
import doobie.implicits._
import cats.effect.IO

trait WithTransact {

  implicit val cs = IO.contextShift(ExecutionContexts.synchronous)

  val xa = Transactor.fromDriverManager[IO](
    ConfigService.postgres.driver,
    ConfigService.postgres.url,
    ConfigService.postgres.user,
    ConfigService.postgres.password
  )

  def run[A](r: ConnectionIO[A]): IO[A] =
    r.transact(xa)

}
