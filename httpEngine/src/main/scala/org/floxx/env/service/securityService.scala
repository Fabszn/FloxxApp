package org.floxx.env.service

import io.circe.generic.auto._
import io.circe.parser._
import io.circe.syntax.EncoderOps
import org.floxx.env.configuration.config.{Configuration, GlobalConfig}
import org.floxx.env.repository.userRepo.AuthRepo
import org.floxx.service.AuthenticatedUser
import org.floxx.{AuthentificationError, UserInfo}
import org.slf4j.{Logger, LoggerFactory}
import pdi.jwt.{Jwt, JwtAlgorithm}
import zio.Task

import scala.util.{Failure, Success}

object securityService {

  trait SecurityService {

    def authentification(user: String, mdp: String): Task[AuthenticatedUser]
    def checkAuthentification(token: String): Task[Option[UserInfo]]

  }

  class SecurityServiceImpl(securityRepo: AuthRepo, conf: Configuration) extends SecurityService {
    val logger: Logger = LoggerFactory.getLogger(this.getClass)

    override def checkAuthentification(token: String): Task[Option[UserInfo]] =
      conf.getConf >>= (
            config =>
              Task(
                Jwt.decode(
                  token,
                  config.floxx.secret,
                  Seq(JwtAlgorithm.HS256)
                )
              ).fold(
                e => {
                  logger.error(s"Authentification error : ${e.getMessage}")
                  Option.empty[UserInfo]
                }, {
                  case Failure(e) => {
                    logger.error(s"Authentification error : ${e.getMessage}")
                    Option.empty[UserInfo]
                  }
                  case Success(jw) => {
                    decode[UserInfo](jw.content).fold(_ => Option.empty[UserInfo], Some(_))
                  }

                }
              )
          )

    override def authentification(user: String, mdp: String): Task[AuthenticatedUser] =
      for {
        config <- conf.getConf
        userFound <- securityRepo.userByLogin(user)
        auth <- {
          logger.debug(s"user found $userFound")
          userFound match {
            case Some(u) if u.mdp == mdp =>
              Task.succeed(
                AuthenticatedUser(
                  u.login,
                  tokenGenerator(UserInfo(u.userId.getOrElse("no ID"), u.login, u.isAdmin),config),
                  u.isAdmin
                )
              )
            case Some(_) => Task.fail(new AuthentificationError("login or pass is invalid"))
            case None => Task.fail(new AuthentificationError("login or pass is invalid"))
          }

        }

      } yield auth

    private def tokenGenerator(info: UserInfo, conf:GlobalConfig): String =
      Jwt.encode(
        info.asJson.noSpaces,
        conf.floxx.secret,
        JwtAlgorithm.HS256
      )

  }

}
