package org.floxx.env.repository

import org.floxx.env.repository.DbTransactor.TxResource
import zio._

object repository {

  trait TechnicalRepo {}

  case class TechnicalRepository(r: TxResource) extends TechnicalRepo {
    println("Register ShutDownHook for HikariResource")
    val releaseResourceHook = new Thread(() => {
      println("Release Hikari Datasource")
      println("Release Hikari Datasource")
      println("Release Hikari Datasource")
      println("Release Hikari Datasource")
      println("Release Hikari Datasource")
      println("Release Hikari Datasource")
      println("Release Hikari Datasource")
      println("Release Hikari Datasource")
      println("Release Hikari Datasource")
      println("Release Hikari Datasource")
      r.xa.kernel.close()
    })
    java.lang.Runtime.getRuntime.addShutdownHook(releaseResourceHook)
    println("Registered .....")

  }

  val layer: RLayer[Has[TxResource], Has[TechnicalRepo]] = (TechnicalRepository(_)).toLayer

}
