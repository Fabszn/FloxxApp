package engine

import fixtures.{DataFixtures, HttpAppFixture}
import io.circe.JsonObject
import io.circe.generic.auto._
import org.floxx.domain.AuthUser.Mdp
import org.floxx.domain.User.SimpleUser
import org.floxx.api.ApiTask
import org.floxx.api.entriesPointApi.LoginRequest
import org.floxx.processors.pipelines.shareHitPipeline
import org.floxx.processors.shareHitProcessor
import org.floxx.repository._
import org.floxx.service._
import org.floxx.service.securityService.AuthenticatedUser
import org.http4s.headers.Authorization
import sttp.capabilities.fs2.Fs2Streams
import sttp.client4._
import sttp.client4.circe._
import zio._
import zio.test.Assertion._
import zio.test._

object EngineTest extends ZIOSpecDefault with HttpAppFixture with DataFixtures{

  override def spec =
    {

      suite("Engine")(
        test("login") {
          for {
            _ <- userRepository.insertUsers(users)
            backend <- ZIO.service[StreamBackend[ApiTask, Fs2Streams[ApiTask]]]
            response <- backend
              .send(
                basicRequest
                  .post(uri"/login")
                  .body(
                    LoginRequest(SimpleUser.Id("fsznaj"), Mdp("123"))
                  )
                  .response(asJson[AuthenticatedUser])
              )
          } yield assert(response.body.map(_.name))(isRight(equalTo("fabrice Sznajderman")))
        },
        test("mappingUserSlot") {
          for {
            _ <- cfpRepository.insertSlots(slots) <+>
              cfpRepository.addMapping(userSlots1) <+>
              cfpRepository.addMapping(userSlots2)
            _ <- userRepository.insertUsers(users)
            backend <- ZIO.service[StreamBackend[ApiTask, Fs2Streams[ApiTask]]]
            authResp <- backend
              .send(
                basicRequest
                  .post(uri"/login")
                  .body(
                    LoginRequest(SimpleUser.Id("aheritier"), Mdp("123"))
                  )
                  .response(asJson[AuthenticatedUser])
              )
            token <- ZIO.fromEither(authResp.body.map(_.token))
            resp <- backend
              .send(
                basicRequest
                  .header(Authorization.name.toString, token)
                  .get(uri"/api/mapping")
                  .response(asJson[List[JsonObject]])
              )
          } yield assert(resp.body.map(_.length))(isRight(equalTo(3)))
        }
      )
      }.provide(
      Scope.default,
      dbLayer,
      hitRepository.layer,
      cfpRepository.layer,
      statsRepository.layer,
      userRepository.layer,
      shareHitPipeline.layer,
      shareHitProcessor.layer,
      hitService.layer,
      securityService.layer,
      statService.layer,
      trackService.layer,
      adminService.layer,
      informationService.layer,
      informationRepository.layer,
      http.layer,
      http.backend.layer,
      backendLayer
      )
}
