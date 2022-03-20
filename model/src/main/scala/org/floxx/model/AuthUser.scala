package org.floxx.model

case class AuthUser(
    userId: Option[String],
    login: String,
    firstName: String,
    lastName: String,
    mdp: String,
    isAdmin: Boolean = false
)
