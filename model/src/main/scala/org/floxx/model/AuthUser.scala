package org.floxx.model

case class AuthUser(userId: Option[String], login: String, mdp: String, isAdmin: Boolean = false)
