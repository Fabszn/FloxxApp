package org.floxx.service

import cats.effect.{ IO, IOApp }
import doobie.{ ConnectionIO, Transactor }
import org.floxx.config.Config

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
    Config.postgres.driver,
    Config.postgres.url,
    Config.postgres.user,
    Config.postgres.password
  )

  def run[A](r: ConnectionIO[A]): IO[A] =
    r.transact(xa)

  import cats.implicits._

  def run[A](r: List[ConnectionIO[A]]): IO[List[A]] =
    r.sequence.transact(xa)

}
