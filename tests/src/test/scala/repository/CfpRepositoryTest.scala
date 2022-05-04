package repository

import fixtures.{DataFixtures, PostgresRunnableFixture}
import org.floxx.env.repository.{cfpRepository, userRepository}
import zio.test.Assertion.equalTo
import zio.test.environment.TestEnvironment
import zio.test._

object CfpRepositoryTest extends DefaultRunnableSpec with PostgresRunnableFixture with DataFixtures {
  import cfpRepository._
  import userRepository.insertUsers

  override def spec: Spec[TestEnvironment, TestFailure[Any], TestSuccess] =
    suite("Postgres UserRepository")(
      testM("Get all Mappings") {
        for {
          _ <- insertUsers(users)
          _ <- insertSlots(slots)
          _ <- addMapping(userSlots1)
          _ <- addMapping(userSlots2)
          actual <- mappingUserSlot
        } yield assert(actual.size)(equalTo(3))
      }
    ).provideCustomLayerShared((dbLayer >+> userRepository.layer >+> cfpRepository.layer).orDie)
}
