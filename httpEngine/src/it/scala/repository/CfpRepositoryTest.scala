package repository

import engine.EngineTest.appTestEnvironment
import fixtures.{DataFixtures, PostgresRunnableFixture}
import org.floxx.env.repository.{cfpRepository, userRepository}
import zio.Scope
import zio.test.Assertion.equalTo
import zio.test.TestEnvironment
import zio.test._

object CfpRepositoryTest extends ZIOSpecDefault with PostgresRunnableFixture with DataFixtures {
  import cfpRepository._
  import userRepository.insertUsers

  override def spec: Spec[TestEnvironment with Scope, Throwable] =
    suite("Postgres UserRepository")(
      test("Get all Mappings") {
        for {
          _ <- insertUsers(users)
          _ <- insertSlots(slots)
          _ <- addMapping(userSlots1)
          _ <- addMapping(userSlots2)
          actual <- mappingUserSlot
        } yield assert(actual.size)(equalTo(3))
      }
    ).provideLayerShared(appTestEnvironment ++ testEnvironment)
}
