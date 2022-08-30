package fixtures

import org.floxx.domain.{CurrentYear, Room, Slot, Talk, User}
import org.floxx.env.api.adminApi.Mapping
import org.floxx.model.AuthUser

trait DataFixtures {
  val users = Seq(
    AuthUser(
      userId = Option("aheritier"),
      login = "aheritier@gmail.com",
      firstName = "Arnaud",
      lastName = "Heritier",
      mdp = "123",
      isAdmin = true
    ),
    AuthUser(
      userId = Option("fsznaj"),
      login = "fabszn@pm.me",
      firstName = "fabrice",
      lastName = "Sznajderman",
      mdp = "123"
    ),
    AuthUser(
      userId = Option("mpierre"),
      login = "mpierre@pm.me",
      firstName = "Michel",
      lastName = "Pierre",
      mdp = "123"
    )
  )

  val userSlots1 = Mapping(
    Option(User.SimpleUser.Id("fsznaj")),
    Slot.Id("wednesday_neu253_t_09:30-12:30_2022")
  )
  val userSlots2 = Mapping(
    Option(User.SimpleUser.Id("mpierre")),
    Slot.Id("wednesday_b_amphi_13:30-16:30_2022")
  )

  val slots = Seq(
    Slot(
      Slot.Id("wednesday_neu253_t_09:30-12:30_2022"),
      Room.Id("neu253_t"),
      Slot.FromTime("09:30"),
      Slot.ToTime("12:30"),
      Option(Talk("test1", "test1")),
      Slot.Day("monday"),
      CurrentYear(2022)
    ),
    Slot(
      Slot.Id("wednesday_b_amphi_13:30-16:30_2022"),
      Room.Id("b_amphi"),
      Slot.FromTime("13:30"),
      Slot.ToTime("16:30"),
      Option(Talk("test2", "test2")),
      Slot.Day("monday"),
      CurrentYear(2022)
    ),
    Slot(
      Slot.Id("wednesday_b_amphi_10:30-11:30_2022"),
      Room.Id("b_amphi"),
      Slot.FromTime("10:30"),
      Slot.ToTime("11:30"),
      Option(Talk("test3", "test3")),
      Slot.Day("monday"),
      CurrentYear(2022)
    )
  )
}
