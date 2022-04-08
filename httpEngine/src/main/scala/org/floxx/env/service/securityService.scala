package org.floxx.env.service

import io.circe.generic.auto._
import io.circe.parser._
import io.circe.syntax.EncoderOps
import org.floxx.env.api.ApiTask
import org.floxx.env.configuration.config.{Configuration, GlobalConfig}
import org.floxx.env.repository.userRepository.UserRepo
import org.floxx.{AuthentificationError, UserInfo}
import org.http4s.circe.jsonOf
import pdi.jwt.{Jwt, JwtAlgorithm, JwtClaim}
import zio.interop.catz._
import zio.logging.{Logger, Logging}
import zio.{Has, RLayer, Task, _}

object securityService {

  //utilisateur déjà identifier TODO à renommer !! par AuthenticatedUSer <- mettre dans le token en enlevant des champs et ajoutant d'autres
  case class AuthenticatedUser(name: String, token: String, isAdmin: Boolean = false)

  object AuthenticatedUser {

    implicit val format = jsonOf[ApiTask, AuthenticatedUser]
  }

  trait SecurityService {

    def authentification(user: String, mdp: String): Task[AuthenticatedUser]
    def checkAuthentification(token: String): Task[Option[UserInfo]]

  }

  case class SecurityServiceImpl(securityRepo: UserRepo, conf: Configuration, log: Logger[String]) extends SecurityService {
    // val logger: Logger = LoggerFactory.getLogger(this.getClass)

    override def checkAuthentification(token: String): Task[Option[UserInfo]] =
      conf.getConf >>= (
            config =>
              Task.fromTry(
                Jwt.decode(
                  token,
                  config.floxx.secret,
                  Seq(JwtAlgorithm.HS256)
                )
              ) >>= ((jwClaim: JwtClaim) => Task(decode[UserInfo](jwClaim.content).fold(_ => Option.empty[UserInfo], Some(_))))
          )

    override def authentification(user: String, mdp: String): Task[AuthenticatedUser] =
      for {
        config <- conf.getConf
        userFound <- securityRepo.userByUserId(user)
        auth <- {
          log.debug(s"user found $userFound") *>
          (userFound match {
            case Some(u) if u.mdp == mdp =>
              Task(
                AuthenticatedUser(
                  s"${u.firstName} ${u.lastName}",
                  tokenGenerator(
                    UserInfo(u.userId.getOrElse("no ID"), u.login, u.isAdmin),
                    config
                  ),
                  u.isAdmin
                )
              )
            case Some(_) => Task.fail(AuthentificationError("login or pass is invalid"))
            case None => Task.fail(AuthentificationError("login or pass is invalid"))
          })

        }

      } yield auth

    private def tokenGenerator(info: UserInfo, conf: GlobalConfig): String =
      Jwt.encode(
        info.asJson.noSpaces,
        conf.floxx.secret,
        JwtAlgorithm.HS256
      )
  }

  def layer: RLayer[Has[UserRepo] with Has[Configuration] with Logging, Has[SecurityService]] = (SecurityServiceImpl(_, _, _)).toLayer

  def authentification(user: String, mdp: String): RIO[Has[SecurityService], AuthenticatedUser] =
    ZIO.serviceWith[SecurityService](_.authentification(user, mdp))
  def checkAuthentification(token: String): RIO[Has[SecurityService], Option[UserInfo]] =
    ZIO.serviceWith[SecurityService](_.checkAuthentification(token))

}
