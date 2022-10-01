package org.floxx.env.repository

import org.floxx.model.{AuthUser, SimpleUser}
import zio._

import javax.sql.DataSource

@SuppressWarnings(Array("org.wartremover.warts.Product"))
object userRepository {

  trait UserRepo {
    def userByUserId(login: String): Task[Option[AuthUser]]
    def allUsers: Task[Seq[SimpleUser]]
    def insertUsers(users: Seq[AuthUser]): Task[Long]
  }

  case class UserRepoService(dataSource: DataSource) extends UserRepo {
    import QuillContext._
    val env = Has(dataSource)
    override def userByUserId(login: String): Task[Option[AuthUser]] =
      run(quote(authUser.filter(_.userId.contains(lift(login))))).map(_.headOption).provideService(env)

    override def allUsers: Task[Seq[SimpleUser]] =
      run(quote(simpleUser)).provideService(env)

    override def insertUsers(users: Seq[AuthUser]): Task[Long] =
      run(quote(liftQuery(users).foreach(u => authUser.insertValue(u)))).provideService(env).map(_.sum)
  }

  val layer: RLayer[DataSource, UserRepo] = (UserRepoService(_)).toLayer

  def userByLogin(login: String): RIO[UserRepo, Option[AuthUser]] =
    ZIO.serviceWithZIO[UserRepo](_.userByUserId(login))

  def allUser: RIO[UserRepo, Seq[SimpleUser]] =
    ZIO.serviceWithZIO[UserRepo](_.allUsers)

  def insertUsers(users: Seq[AuthUser]): RIO[UserRepo, Long] =
    ZIO.serviceWithZIO[UserRepo](_.insertUsers(users))
}
