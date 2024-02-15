package org.floxx.repository

import org.floxx.domain.AuthUser
import org.floxx.domain.AuthUser.Login
import org.floxx.domain.User.SimpleUser
import org.floxx.domain.error.DatabaseError
import zio._

import javax.sql.DataSource

@SuppressWarnings(Array("org.wartremover.warts.Product"))
object userRepository {

  trait UserRepo {
    def userByUserId(login: SimpleUser.Id): IO[DatabaseError,Option[AuthUser]]
    def allUsers: Task[Seq[SimpleUser]]
    def insertUsers(users: Seq[AuthUser]): Task[Long]
  }

  final case class UserRepoService(dataSource: DataSource) extends UserRepo {
    import QuillContext._

    override def userByUserId(login: SimpleUser.Id): IO[DatabaseError,Option[AuthUser]] =
      run(quote(authUser.filter(_.userId.contains(lift(login)))))
        .map(_.headOption)
        .provideEnvironment(ZEnvironment(dataSource))
        .mapError(err => DatabaseError(err.getMessage))

    override def allUsers: Task[Seq[SimpleUser]] =
      run(quote(simpleUser)).provideEnvironment(ZEnvironment(dataSource))

    override def insertUsers(users: Seq[AuthUser]): Task[Long] =
      run(quote(liftQuery(users).foreach(u => authUser.insertValue(u)))).provideEnvironment(ZEnvironment(dataSource)).map(_.sum)
  }

  val layer: RLayer[DataSource, UserRepo] =
    ZLayer {
      for {
        datasource <- ZIO.service[DataSource]
      } yield UserRepoService(datasource)
    }

  def allUser: RIO[UserRepo, Seq[SimpleUser]] =
    ZIO.serviceWithZIO[UserRepo](_.allUsers)

  def insertUsers(users: Seq[AuthUser]): RIO[UserRepo, Long] =
    ZIO.serviceWithZIO[UserRepo](_.insertUsers(users))
}
