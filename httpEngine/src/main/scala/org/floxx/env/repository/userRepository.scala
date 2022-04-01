package org.floxx.env.repository

import doobie.implicits._
import org.floxx.env.repository.DbTransactor.TxResource
import org.floxx.model.{AuthUser, SimpleUser}
import zio._
import zio.interop.catz._

object userRepository {

  trait UserRepo {
    def userByUserId(login: String):Task[Option[AuthUser]]
    def allUsers:Task[Seq[SimpleUser]]
  }

  case class UserRepoService (r: TxResource) extends UserRepo {
    override def userByUserId(login: String): Task[Option[AuthUser]] =
      sql"SELECT userid, email, firstname, lastname, mdp, isAdmin from users where userId=$login".query[AuthUser].option.transact(r.xa)

    override def allUsers: Task[Seq[SimpleUser]] =
      sql"select userid, firstname, lastname from users".query[SimpleUser].to[Seq].transact(r.xa)
  }

  val layer: RLayer[Has[TxResource], Has[UserRepo]] = (UserRepoService(_)).toLayer

  def userByLogin(login: String): RIO[Has[UserRepo], Option[AuthUser]] =
    ZIO.serviceWith[UserRepo](_.userByUserId(login))

  def allUser: RIO[Has[UserRepo], Seq[SimpleUser]] =
    ZIO.serviceWith[UserRepo](_.allUsers)

}
