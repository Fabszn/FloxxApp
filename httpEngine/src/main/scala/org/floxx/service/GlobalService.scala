package org.floxx.service

import cats.effect.{Blocker, Resource}
import doobie.ConnectionIO
import doobie.hikari._
import org.floxx.config.Config

object globalService {

  case class Message(message: String) extends AnyVal

}

import cats.effect.IO
import doobie._
import doobie.implicits._

trait WithTransact {

  implicit val cs = IO.contextShift(ExecutionContexts.synchronous)



  val transactor : Resource[IO, HikariTransactor[IO]] =
    for {
      ce <- ExecutionContexts.fixedThreadPool[IO](32) // our connect EC
      be <- Blocker[IO]    // our blocking EC
      xa <- HikariTransactor.newHikariTransactor[IO](
        Config.db.driver,                       // driver classname
        Config.db.url,   // connect URL
        Config.db.user,                                   // username
        Config.db.password,                                     // password
        ce,                                     // await connection here
        be                                      // execute JDBC operations here
      )
    } yield xa

  def run[A](r: ConnectionIO[A]): IO[A] = {
    transactor.use( xa => r.transact(xa))
  }

  import cats.implicits._

  def run[A](r: List[ConnectionIO[A]]): IO[List[A]] =
    transactor.use(xa => r.sequence.transact(xa))

}
