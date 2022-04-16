import org.floxx.domain._
import org.floxx.env.api.adminApi.Mapping
import org.floxx.env.repository.{userRepository, cfpRepository}
import org.floxx.model.AuthUser
import zio.test.Assertion.equalTo
import zio.test.environment.TestEnvironment
import zio.test.{Spec, TestFailure, TestSuccess, assert}

object CfpRepositoryTest extends PostgresRunnableSpec {
  import userRepository.insertUsers
  import cfpRepository._
  val users = Seq(
    AuthUser(Option("aheritier"),"Arnaud","Heritier","aheritier@gmail.com", "123", true),
    AuthUser(Option("fsznaj"),"fabrice","Sznajderman","fabszn@pm.me", "123"),
    AuthUser(Option("mpierre"),"Michel","Pierre","mpierre@pm.me", "123")
  )

  val userSlots1 = Mapping(Option(User.SimpleUser.Id("fsznaj")), Slot.Id("wednesday_neu253_t_09:30-12:30"))
  val userSlots2 = Mapping(Option(User.SimpleUser.Id("mpierre")), Slot.Id("wednesday_b_amphi_13:30-16:30"))

  val slots = Seq(
    Slot(
      Slot.Id("wednesday_neu253_t_09:30-12:30"),
      Room.Id("neu253_t"),
      Slot.FromTime("09:30"),
      Slot.ToTime("12:30"),
      Option(Talk("test1", "test1")),
      Slot.Day("monday")
    ),
    Slot(
      Slot.Id("wednesday_b_amphi_13:30-16:30"),
      Room.Id("b_amphi"),
      Slot.FromTime("13:30"),
      Slot.ToTime("16:30"),
      Option(Talk("test2", "test2")),
      Slot.Day("monday")
    )
  )

  override def spec: Spec[TestEnvironment, TestFailure[Any], TestSuccess] =
    suite("Postgres UserRepository")(
      testM("Get all Mappings") {
        for {
          _ <- insertUsers(users)
          _ <- insertSlots(slots)
          _ <- addMapping(userSlots1)
          _ <- addMapping(userSlots2)
          actual <- mappingUserSlot
        } yield assert(actual.size)(equalTo(2))
      }
    ).provideCustomLayerShared((dbLayer >+> userRepository.layer >+> cfpRepository.layer).orDie)
}
