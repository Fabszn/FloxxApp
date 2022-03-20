package org.floxx.env.repository

import doobie.implicits._
import org.floxx.env.repository.DbTransactor.TxResource
import org.floxx.model.AuthUser
import zio._
import zio.interop.catz._

object userRepository {

  trait AuthRepo {
    def userByLogin(login: String):Task[Option[AuthUser]]
  }

  case class AuthRepoPg(r: TxResource) extends AuthRepo {
    override def userByLogin(login: String): Task[Option[AuthUser]] =
      sql"SELECT userid, login, firstname, lastname, mdp, isAdmin from users where login=$login".query[AuthUser].option.transact(r.xa)
  }

  val layer: RLayer[Has[TxResource], Has[AuthRepo]] = (AuthRepoPg(_)).toLayer

  def userByLogin(login: String): RIO[Has[AuthRepo], Option[AuthUser]] =
    ZIO.serviceWith[AuthRepo](_.userByLogin(login))

}
