package repository

import fixtures.{DataFixtures, PostgresRunnableFixture}
import org.floxx.repository.{cfpRepository, userRepository}
import zio._
import zio.test.Assertion.equalTo
import zio.test._

object CfpRepositoryTest extends ZIOSpecDefault with PostgresRunnableFixture with DataFixtures {
  import cfpRepository._
  import userRepository.insertUsers

  override def spec = suite("Postgres UserRepository")(
      test("Get all Mappings") {
        for {
          _ <- insertUsers(users)
          _ <- insertSlots(slots)
          _ <- addMapping(userSlots1)
          _ <- addMapping(userSlots2)
          actual <- mappingUserSlot
        } yield assert(actual.size)(equalTo(3))
      }
    ).provide(Scope.default, dbLayer, userRepository.layer, cfpRepository.layer)
}
