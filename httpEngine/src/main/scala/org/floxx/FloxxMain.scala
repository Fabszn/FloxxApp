package org.floxx

import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.server.Route
import akka.stream.ActorMaterializer
import org.floxx.AppLoader.AppContext
import org.floxx.config.ConfigService

import scala.concurrent.ExecutionContextExecutor

object FloxxMain extends App {


  implicit val system: ActorSystem = ActorSystem("floxx", ConfigService.configuration)
  sys.addShutdownHook(system.terminate())
  implicit val materializer: ActorMaterializer            = ActorMaterializer()
  implicit val executionContext: ExecutionContextExecutor = system.dispatcher
  val context: AppContext                                 = AppLoader.initialize

  val globalRoute: Route = context.cfpApi.route

  val bindingFuture = Http().bindAndHandle(globalRoute, "0.0.0.0", ConfigService.floxx.floxxPort)

}
