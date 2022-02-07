package org.floxx.env.repository

import doobie.implicits._
import org.floxx.FloxxError
import org.floxx.env.repository.DbTransactor.TxResource
import org.floxx.model.AuthUser
import zio._
import zio.interop.catz._

object userRepo {

  trait AuthRepo {

    def userByLogin(login: String):IO[FloxxError, Option[AuthUser]]

  }

  case class AuthRepoPg(r: TxResource) extends AuthRepo {
    override def userByLogin(login: String): IO[FloxxError,Option[AuthUser]] =
      sql"SELECT userid, login, mdp, isAdmin from users where login=$login".query[AuthUser].option.transact(r.xa)
        .mapError(errorProc)
  }

  val layer: RLayer[Has[TxResource], Has[AuthRepo]] = (AuthRepoPg(_)).toLayer

  def userByLogin(login: String): URIO[Has[AuthRepo], Option[AuthUser]] =
    ZIO.serviceWith[AuthRepo](_.userByLogin(login))

}
