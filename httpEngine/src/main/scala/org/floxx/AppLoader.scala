package org.floxx

import org.floxx.controller.CfpApi
import org.floxx.repository.Keys.SchedulesCfp
import org.floxx.repository.repo.CfpRepo
import org.floxx.service.{ CfpService, CfpServiceImpl }

object AppLoader {

  trait AppContext {
    def cfpApi: CfpApi
  }

  private case class ApplicationContext(
      cfpApi: CfpApi
  ) extends AppContext

  final def initialize: AppContext = {

    val r                      = new CfpRepo()
    val cfpService: CfpService = new CfpServiceImpl(r)

    ApplicationContext(
      controller.CfpApi(cfpService)
    )
  }

}
