package repository

import fixtures.{DataFixtures, PostgresRunnableFixture}
import org.floxx.env.repository.userRepository
import zio.test.Assertion.equalTo
import zio.test.environment.TestEnvironment
import zio.test._

object UserRepositoryTest extends DefaultRunnableSpec with PostgresRunnableFixture with DataFixtures {
  import userRepository._

  override def spec: Spec[TestEnvironment, TestFailure[Any], TestSuccess] =
    suite("Postgres UserRepository")(
      testM("Get all Users") {
        for {
          _ <- insertUsers(users)
          actual <- allUser
        } yield assert(actual.size)(equalTo(users.size))
      }
    ).provideCustomLayerShared((dbLayer >>> userRepository.layer).orDie)
}
