package org.floxx.repository.postgres

import cats.implicits._
import doobie.free.connection.ConnectionIO
import doobie.implicits._
import org.floxx.IOVal
import org.floxx.model.AuthUser

trait AuthRepo[F[_]] {

  def userByLogin(login: String): F[IOVal[Option[AuthUser]]]

}

class AuthRepoPg extends AuthRepo[ConnectionIO] {
  override def userByLogin(login: String): ConnectionIO[IOVal[Option[AuthUser]]] =
    sql"SELECT userid, login, mdp from users where login=$login".query[AuthUser].option.map(Right(_))
}
