package org.floxx

import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.server.Route
import akka.stream.ActorMaterializer
import com.typesafe.config.ConfigFactory
import org.floxx.AppLoader.AppContext

import scala.concurrent.ExecutionContextExecutor

object FloxxMain extends App {

  val configName                   = "application.conf"
  lazy val configuration           = ConfigFactory.load(configName)
  implicit val system: ActorSystem = ActorSystem("floxx", configuration)
  sys.addShutdownHook(system.terminate())
  implicit val materializer: ActorMaterializer            = ActorMaterializer()
  implicit val executionContext: ExecutionContextExecutor = system.dispatcher
  val context: AppContext                                 = AppLoader.initialize

  val globalRoute: Route = context.scanApi.route

  val bindingFuture = Http().bindAndHandle(globalRoute, "0.0.0.0", 8080)

}
