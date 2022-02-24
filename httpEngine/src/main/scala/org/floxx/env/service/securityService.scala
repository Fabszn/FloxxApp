package org.floxx.env.service

import io.circe.generic.auto._
import io.circe.parser._
import io.circe.syntax.EncoderOps
import org.floxx.env.api.ApiTask
import org.floxx.env.configuration.config.{Configuration, GlobalConfig}
import org.floxx.env.repository.userRepository.AuthRepo
import org.floxx.{AuthentificationError, UserInfo}
import org.http4s.circe.jsonOf
import org.slf4j.{Logger, LoggerFactory}
import pdi.jwt.{Jwt, JwtAlgorithm}
import zio.{Has, RLayer, Task, _}
import org.http4s.circe.CirceEntityCodec.circeEntityEncoder
import zio.interop.catz._

import scala.util.{Failure, Success}

object securityService {


  //utilisateur déjà identifier TODO à renommer !! par AuthenticatedUSer <- mettre dans le token en enlevant des champs et ajoutant d'autres
  case class AuthenticatedUser(login: String, token: String, isAdmin: Boolean = false)

  object AuthenticatedUser {

    implicit val format = jsonOf[ApiTask, AuthenticatedUser]
  }

  trait SecurityService {

    def authentification(user: String, mdp: String): Task[AuthenticatedUser]
    def checkAuthentification(token: String): Task[Option[UserInfo]]

  }

  case class SecurityServiceImpl(securityRepo: AuthRepo, conf: Configuration) extends SecurityService {
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
            case Some(_) => Task.fail(AuthentificationError("login or pass is invalid"))
            case None => Task.fail(AuthentificationError("login or pass is invalid"))
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

  def layer:RLayer[Has[AuthRepo] with Has[Configuration], Has[SecurityService]] = (SecurityServiceImpl(_,_)).toLayer

  def authentification(user: String, mdp: String):RIO[Has[SecurityService], AuthenticatedUser] = ZIO.serviceWith[SecurityService](_.authentification(user, mdp))
  def checkAuthentification(token: String):RIO[Has[SecurityService], Option[UserInfo]] = ZIO.serviceWith[SecurityService](_.checkAuthentification(token))


}
