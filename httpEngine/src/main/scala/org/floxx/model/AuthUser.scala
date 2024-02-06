package org.floxx.model

@deprecated("use domain.AuthUser")
final case class AuthUser(
    userId: Option[String],
    login: String,
    firstName: String,
    lastName: String,
    mdp: String,
    isAdmin: Boolean = false
)

