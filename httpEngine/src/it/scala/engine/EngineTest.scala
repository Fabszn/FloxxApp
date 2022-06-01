package engine

import fixtures.{DataFixtures, HttpAppFixture}
import io.circe.JsonObject
import io.circe.generic.auto._
import org.floxx.env.api.ApiTask
import org.floxx.env.api.entriesPointApi.LoginResquest
import org.floxx.env.repository._
import org.floxx.env.service.securityService.AuthenticatedUser
import org.http4s.headers.Authorization
import sttp.capabilities.fs2.Fs2Streams
import sttp.client3._
import sttp.client3.circe._
import zio._
import zio.test.Assertion._
import zio.test.TestAspect._
import zio.test.environment.TestEnvironment
import zio.test._

object EngineTest extends DefaultRunnableSpec with HttpAppFixture with DataFixtures{
  override def spec: Spec[TestEnvironment, TestFailure[Throwable], TestSuccess] =
    {
      suite("Engine")(
        testM("login") {
          for {
            backend <- ZIO.service[SttpBackend[ApiTask, Fs2Streams[ApiTask]]]
            response <- backend
              .send(
                basicRequest
                  .post(uri"/login")
                  .body(
                    LoginResquest("fsznaj", "123")
                  )
                  .response(asJson[AuthenticatedUser])
              )
          } yield assert(response.body.map(_.name))(isRight(equalTo("fabrice Sznajderman")))
        },
        testM("mappingUserSlot") {
          for {
            backend <- ZIO.service[SttpBackend[ApiTask, Fs2Streams[ApiTask]]]
            authResp <- backend
              .send(
                basicRequest
                  .post(uri"/login")
                  .body(
                    LoginResquest("aheritier", "123")
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
      ) @@ beforeAll {
        ZIO.tupled(
          userRepository.insertUsers(users),
          cfpRepository.insertSlots(slots),
          cfpRepository.addMapping(userSlots1),
          cfpRepository.addMapping(userSlots2)
        )
      }
    }.provideCustomLayerShared((appTestEnvironment >+> userRepository.layer >+> cfpRepository.layer).orDie)
}
