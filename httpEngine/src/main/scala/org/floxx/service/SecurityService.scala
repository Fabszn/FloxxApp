package org.floxx.service

import cats.instances.future._
import org.floxx.config.ConfigService
import org.floxx.repository.redis.SecurityRepo
import org.floxx.utils.floxxUtils._
import org.floxx.{ AuthentificationError, BusinessVal, Token }
import org.slf4j.{ Logger, LoggerFactory }
import pdi.jwt.{ Jwt, JwtAlgorithm }

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future
import org.floxx.utils.floxxUtils._

import scala.util.{ Failure, Success, Try }
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

trait SecurityService {

  def authentification(user: String, mdp: String): Future[BusinessVal[SecurityUser]]
  def checkAuthentification(token: String): Option[String]

}

class SecurityServiceImpl(securityRepo: SecurityRepo) extends SecurityService {
  val logger: Logger = LoggerFactory.getLogger(this.getClass)

  override def checkAuthentification(token: String): Option[String] =
    Try(
      Jwt.validate(
        token,
        ConfigService.floxx.security.secret,
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

  override def authentification(user: String, mdp: String): Future[BusinessVal[SecurityUser]] = {
    logger.debug(s"${securityRepo._key}:$user")
    (for {
      userFound <- Option("sd").futureRightT //securityRepo.getDefault(user).eitherT //TODO /!\/!\/!\
      auth <- {
        logger.debug(s"user found $userFound")
        val s = userFound match {
          case Some(u) => Right(UserAuthenticated(u, Some(tokenGenerator(u))))
          case None => Left(AuthentificationError("login or pass is invalid"))
        }
        s.future.eitherT
      }

    } yield auth).value
  }

  private def tokenGenerator(user: String): Token =
    Jwt.encode(
      s"""{"user":$user}""",
      ConfigService.floxx.security.secret,
      JwtAlgorithm.HS256
    )

}
