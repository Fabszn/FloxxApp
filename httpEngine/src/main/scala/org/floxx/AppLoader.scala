package org.floxx

import org.floxx.controller.{ HitApi, TrackApi }
import org.floxx.repository.repo.{ CfpRepo, HitRepo }
import org.floxx.service.{ HitService, HitServiceImpl, TrackService, TrackServiceImpl }

object AppLoader {

  trait AppContext {
    def cfpApi: TrackApi
    def hitApi: HitApi
  }

  private case class ApplicationContext(
      cfpApi: TrackApi,
      hitApi: HitApi
  ) extends AppContext

  final def initialize: AppContext = {

    val r                          = new CfpRepo()
    val h                          = new HitRepo()
    val trackService: TrackService = new TrackServiceImpl(r)
    val hitService: HitService     = new HitServiceImpl(trackService, h)

    ApplicationContext(
      controller.TrackApi(trackService),
      controller.HitApi(hitService)
    )
  }

}
