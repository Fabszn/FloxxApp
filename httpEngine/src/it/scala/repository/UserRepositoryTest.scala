package repository

import engine.EngineTest.appTestEnvironment
import fixtures.{DataFixtures, PostgresRunnableFixture}
import org.floxx.env.repository.userRepository
import zio.test.Assertion.equalTo
import zio.test.TestEnvironment
import zio.test._

object UserRepositoryTest extends ZIOSpecDefault with PostgresRunnableFixture with DataFixtures {
  import userRepository._

  override def spec: Spec[TestEnvironment, Throwable] =
    suite("Postgres UserRepository")(
      test("Get all Users") {
        for {
          _ <- insertUsers(users)
          actual <- allUser
        } yield assert(actual.size)(equalTo(users.size))
      }
    ).provideLayerShared(testEnvironment ++ appTestEnvironment)
}
