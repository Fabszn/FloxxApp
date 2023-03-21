package fixtures

import org.floxx.domain.{CurrentYear, Room, Slot, Talk, User}
import org.floxx.env.api.adminApi.Mapping
import org.floxx.domain.AuthUser
import org.floxx.domain.AuthUser.{Firstname, Lastname, Login, Mdp}
import org.floxx.domain.User.SimpleUser

trait DataFixtures {
  val users = Seq(
    AuthUser(
      userId = Option(SimpleUser.Id("aheritier")),
      login = Login("aheritier@gmail.com"),
      firstName =Firstname( "Arnaud"),
      lastName = Lastname( "Heritier"),
      mdp = Mdp("123"),
      isAdmin = true
    ),
    AuthUser(
      userId = Option(SimpleUser.Id("fsznaj")),
      login = Login("fabszn@pm.me"),
      firstName = Firstname("fabrice"),
      lastName = Lastname("Sznajderman"),
      mdp = Mdp("123")
    ),
    AuthUser(
      userId = Option(SimpleUser.Id("mpierre")),
      login = Login("mpierre@pm.me"),
      firstName = Firstname("Michel"),
      lastName = Lastname("Pierre"),
      mdp = Mdp("123")
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
