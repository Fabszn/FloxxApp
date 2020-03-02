package org.floxx.service

import cats.effect.IO
import io.circe.generic.auto._
import io.circe.parser._
import io.circe.syntax._
import org.floxx.config.Config
import org.floxx.repository.postgres.AuthRepoPg
import org.floxx.utils.floxxUtils._
import org.floxx.{ AuthentificationError, IOVal, UserInfo }
import org.slf4j.{ Logger, LoggerFactory }
import pdi.jwt.{ Jwt, JwtAlgorithm }

import scala.util.{ Failure, Success, Try }

//utilisateur déjà identifier TODO à renommer !! par AuthenticatedUSer <- mettre dans le token en enlevant des champs et ajoutant d'autres
case class AuthenticatedUser(login: String, token: String, isAdmin: Boolean = false)

object AuthenticatedUser {
  import io.circe.generic.auto._
  import org.http4s.circe.jsonOf

  implicit val format = jsonOf[IO, AuthenticatedUser]
}

trait SecurityService[F[_]] {

  def authentification(user: String, mdp: String): F[IOVal[AuthenticatedUser]]
  def checkAuthentification(token: String): Option[UserInfo]

}

class SecurityServiceImpl(securityRepo: AuthRepoPg) extends SecurityService[IO] with WithTransact {
  val logger: Logger = LoggerFactory.getLogger(this.getClass)

  override def checkAuthentification(token: String): Option[UserInfo] =
    Try(
      Jwt.decode(
        token,
        Config.floxx.security.secret,
        Seq(JwtAlgorithm.HS256)
      )
    ) match {
      case Failure(e) => {
        logger.error(s"Authentification error : ${e.getMessage}")
        Option.empty[UserInfo]
      }
      case Success(jw) => {
        jw.fold(
          _ => Option.empty[UserInfo],
          c => {
            decode[UserInfo](c.content).fold(_ => Option.empty[UserInfo], Some(_))
          }
        )
      }

    }

  override def authentification(user: String, mdp: String): IO[IOVal[AuthenticatedUser]] =
    (for {
      userFound <- run(securityRepo.userByLogin(user)).eitherT
      auth <- {
        logger.debug(s"user found $userFound")
        IO(userFound match {
          case Some(u) if u.mdp == mdp =>
            Right(
              AuthenticatedUser(
                u.login,
                tokenGenerator(UserInfo(u.userId.getOrElse("no ID"), u.login, u.isAdmin)),
                u.isAdmin
              )
            )
          case Some(_) => Left(new AuthentificationError("login or pass is invalid"))
          case None => Left(new AuthentificationError("login or pass is invalid"))
        })

      }.eitherT

    } yield auth).value

  private def tokenGenerator(info: UserInfo): String =
    Jwt.encode(
      info.asJson.noSpaces,
      Config.floxx.security.secret,
      JwtAlgorithm.HS256
    )

}
