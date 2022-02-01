package org.floxx.repository.postgres

import doobie.free.connection.ConnectionIO
import doobie.implicits._
import org.floxx.IOVal
import org.floxx.model.AuthUser

@deprecated
trait AuthRepo[F[_]] {

  def userByLogin(login: String): F[IOVal[Option[AuthUser]]]

}
@deprecated
class AuthRepoPg extends AuthRepo[ConnectionIO] {
  override def userByLogin(login: String): ConnectionIO[IOVal[Option[AuthUser]]] =
    sql"SELECT userid, login, mdp, isAdmin from users where login=$login".query[AuthUser].option.map(Right(_))
}
