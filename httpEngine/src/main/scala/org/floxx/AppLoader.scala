package org.floxx

import org.floxx.controller.{ CfpApi, HitApi }
import org.floxx.repository.repo.{ CfpRepo, HitRepo }
import org.floxx.service.{ CfpService, CfpServiceImpl, HitService, HitServiceImpl }

object AppLoader {

  trait AppContext {
    def cfpApi: CfpApi
    def hitApi:HitApi
  }

  private case class ApplicationContext(
      cfpApi: CfpApi,
      hitApi: HitApi
  ) extends AppContext

  final def initialize: AppContext = {

    val r                      = new CfpRepo()
    val h                      = new HitRepo()
    val cfpService: CfpService = new CfpServiceImpl(r)
    val hitService: HitService = new HitServiceImpl(h)

    ApplicationContext(
      controller.CfpApi(cfpService),
      controller.HitApi(hitService)
    )
  }

}
