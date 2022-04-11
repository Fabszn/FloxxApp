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
      run(quote(authUser.filter(_.userId.contains(lift(login))))).map(_.headOption).provide(env)

    override def allUsers: Task[Seq[SimpleUser]] =
      run(quote(simpleUser)).provide(env)

    override def insertUsers(users: Seq[AuthUser]): Task[Long] =
      run(quote(liftQuery(users).foreach(u => authUser.insertValue(u)))).provide(env).map(_.sum)
  }

  val layer: RLayer[Has[DataSource], Has[UserRepo]] = (UserRepoService(_)).toLayer

  def userByLogin(login: String): RIO[Has[UserRepo], Option[AuthUser]] =
    ZIO.serviceWith[UserRepo](_.userByUserId(login))

  def allUser: RIO[Has[UserRepo], Seq[SimpleUser]] =
    ZIO.serviceWith[UserRepo](_.allUsers)

  def insertUsers(users: Seq[AuthUser]): RIO[Has[UserRepo], Long] =
    ZIO.serviceWith[UserRepo](_.insertUsers(users))
}
