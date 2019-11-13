package org.floxx.service

import cats.effect.IO
import cats.instances.future._
import org.floxx.config.Config
import org.floxx.repository.postgres.AuthRepoPg
import org.floxx.repository.redis.SecurityRepo
import org.floxx.utils.floxxUtils._
import org.floxx.{AuthentificationError, BusinessVal, IOVal, Token}
import org.slf4j.{Logger, LoggerFactory}
import pdi.jwt.{Jwt, JwtAlgorithm}

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future
import org.floxx.utils.floxxUtils._

import scala.util.{Failure, Success, Try}
sealed trait SecurityUser {
  def isAuthenticated: Boolean
  def token: Option[Token]
}

case class UserAuthenticated(login: String, token: Option[Token]) extends SecurityUser {
  override def isAuthenticated: Boolean = true

}

case object UserUnAuthenticated extends SecurityUser {
  override def isAuthenticated: Boolean = false

  override def token: Option[Token] = None
}

trait SecurityService[F[_]] {

  def authentification(user: String, mdp: String): F[IOVal[SecurityUser]]
  def checkAuthentification(token: String): Option[String]

}

class SecurityServiceImpl(securityRepo: AuthRepoPg) extends SecurityService[IO] with WithTransact {
  val logger: Logger = LoggerFactory.getLogger(this.getClass)

  override def checkAuthentification(token: String): Option[String] =
    Try(
      Jwt.validate(
        token,
        Config.floxx.security.secret,
        Seq(JwtAlgorithm.HS256)
      )
    ) match {
      case Failure(e) => {
        logger.error(s"Authentification error : ${e.getMessage}")
        None
      }
      case Success(value) => {
        logger.info(s"Authentification Success")
        Some("Success")
      }
    }

  override def authentification(user: String, mdp: String): IO[IOVal[SecurityUser]] = {
    //logger.debug(s"${securityRepo._key}:$user")
    (for {
      userFound <- run(securityRepo.userByLogin(user)).eitherT
      auth <- {
        logger.debug(s"user found $userFound")
       IO(userFound match {
          case Some(u) if u.mdp == mdp => Right(UserAuthenticated(u.login, Some(tokenGenerator(u.login))))
          case None => Left((new SecurityException("login or pass is invalid")))
        })

      }.eitherT

    } yield auth).value
  }

  private def tokenGenerator(user: String): Token =
    Jwt.encode(
      s"""{"user":$user}""",
      Config.floxx.security.secret,
      JwtAlgorithm.HS256
    )

}