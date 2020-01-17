package org.floxx.service

import cats.effect.IO
import org.floxx.model.jsonModel.{ Slot, Talk }
import org.floxx.repository.postgres.CfpRepoPg
import org.floxx.{ FloxxError, IOVal }
import org.joda.time.format.DateTimeFormat
import org.scalamock.scalatest.MockFactory
import org.scalatest.{ Matchers, OneInstancePerTest, WordSpec }

class TrackServiceImplTest extends WordSpec with Matchers with MockFactory with OneInstancePerTest {

  val cfpRepoMock = mock[CfpRepoPg]

  (cfpRepoMock.allSlotIds _).expects().returning(initData.slots)

  val trackService = new TrackServiceImpl(cfpRepoMock)

  "A slot" when {
    "day and time minus 30mn is wednesday (9h00)" should {

      "have one occurence" in {
        val results: IO[IOVal[Set[Slot]]] = trackService.loadActiveSlotIds(
          timeUtils.extractDayAndStartTime(
            "wednesday",
            DateTimeFormat.forPattern("kk:mm:ss").parseDateTime("9:00:00").toLocalTime
          )
        )

        results.unsafeRunSync() match {
          case Right(slots) => {
            println(slots)
            slots.map(_.slotId).contains("wednesday_Amphi bleu_09:30-12:30") shouldEqual true
          }
          case _ => fail("one slot should be found")
        }

      }

    }

    "day and time oclock is wednesday (9h30)" should {

      "have also one occurence" in {
        val results: IO[IOVal[Set[Slot]]] = trackService.loadActiveSlotIds(
          timeUtils.extractDayAndStartTime(
            "wednesday",
            DateTimeFormat.forPattern("kk:mm:ss").parseDateTime("9:30:00").toLocalTime
          )
        )

        results.unsafeRunSync() match {
          case Right(slots) => {
            slots.map(_.slotId).contains("wednesday_Amphi bleu_09:30-12:30") shouldEqual true
          }
          case _ => fail("one slot should be found")
        }

      }

    }
  }

}

object initData {

  import cats.implicits._
  import doobie._
  import doobie.implicits._

  def slots: ConnectionIO[IOVal[Set[Slot]]] = {
    Either
      .right[FloxxError, Set[Slot]](
        Set(
          Slot(
            "wednesday_Amphi bleu_09:30-12:30",
            "Amphi bleu",
            "09:30",
            "12:30",
            Some(Talk("University", "Java keeps throttling up!")),
            "wednesday"
          ),
          Slot(
            "wednesday_Maillot_09:30-12:30",
            "Maillot",
            "09:30",
            "12:30",
            Some(Talk("University", "Apache Kafka, de haut en bas.")),
            "wednesday"
          ),
          Slot(
            "wednesday_251_09:30-12:30",
            "251",
            "09:30",
            "12:30",
            Some {
              Talk(
                "University",
                "GraphQL in Java World, let's go for a dive"
              )
            },
            "wednesday"
          ),
          Slot(
            "wednesday_241_09:30-12:30",
            "241",
            "09:30",
            "12:30",
            Some(
              Talk(
                "University",
                "FaaS and Furious : 3h pour devenir une star du serverless !"
              )
            ),
            "wednesday"
          ),
          Slot(
            "wednesday_252_09:30-12:30",
            "252",
            "09:30",
            "12:30",
            Some(
              Talk(
                "University",
                "Microservices: Infinity War! Spring vs MicroProfile"
              )
            ),
            "wednesday"
          ),
          Slot(
            "wednesday_242_09:30-12:30",
            "242",
            "09:30",
            "12:30",
            Some(
              Talk(
                "University",
                "Cycle de vie des applications dans Kubernetes"
              )
            ),
            "wednesday"
          ),
          Slot(
            "wednesday_243_09:30-12:30",
            "243",
            "09:30",
            "12:30",
            Some(
              Talk(
                "University",
                "Highway to Elm – pour un meilleur front-end"
              )
            ),
            "wednesday"
          ),
          Slot(
            "wednesday_253_09:30-12:30",
            "253",
            "09:30",
            "12:30",
            Some(
              Talk(
                "University",
                "Deep Learning pour le traitement du Langage avec Pytorch"
              )
            ),
            "wednesday"
          ),
          Slot(
            "wednesday_202_203_09:30-12:30",
            "202_203",
            "09:30",
            "12:30",
            Some(
              Talk(
                "Hands-on Labs",
                "Learn Micronaut: a reactive microservices framework for the JVM"
              )
            ),
            "wednesday"
          ),
          Slot(
            "wednesday_221_222_09:30-12:30",
            "221_222",
            "09:30",
            "12:30",
            Some(
              Talk(
                "Hands-on Labs",
                "Rescue game : Il faut sauver LoRa"
              )
            ),
            "wednesday"
          ),
          Slot(
            "wednesday_224_225_09:30-12:30",
            "224_225",
            "09:30",
            "12:30",
            Some(
              Talk(
                "Hands-on Labs",
                "Apprends le CSS et sauve ton ordi !"
              )
            ),
            "wednesday"
          ),
          Slot(
            "wednesday_212_213_09:30-12:30",
            "212_213",
            "09:30",
            "12:30",
            Some(Talk("Hands-on Labs", "Jenkins-X is the new black")),
            "wednesday"
          ),
          Slot(
            "wednesday_232_09:30-12:30",
            "232",
            "09:30",
            "12:30",
            Some(
              Talk(
                "Hands-on Labs",
                "Lab React, prenez le train en marche"
              )
            ),
            "wednesday"
          ),
          Slot(
            "wednesday_234_235_09:30-12:30",
            "234_235",
            "09:30",
            "12:30",
            Some(
              Talk(
                "Hands-on Labs",
                "Découvrez pourquoi Elixir sera votre prochain langage!"
              )
            ),
            "wednesday"
          ),
          Slot(
            "wednesday_Amphi bleu_13:30-16:30",
            "Amphi bleu",
            "13:30",
            "16:30",
            Some(
              Talk(
                "University",
                "Quarkus: Pourquoi & Comment faire une appli Java Cloud Native avec Graal VM"
              )
            ),
            "wednesday"
          ),
          Slot(
            "wednesday_Maillot_13:30-16:30",
            "Maillot",
            "13:30",
            "16:30",
            Some(
              Talk(
                "University",
                "Applying (D)DDD and CQ(R)S to Cloud Architectures with Java, Spring Boot, Kafka and Docker"
              )
            ),
            "wednesday"
          ),
          Slot(
            "wednesday_251_13:30-16:30",
            "251",
            "13:30",
            "16:30",
            Some(
              Talk(
                "University",
                "Dynamique de groupes et structuration du temps : la théorie organisationnelle de Berne, une autre approche agile"
              )
            ),
            "wednesday"
          )
        )
      )
      .pure[ConnectionIO]
  }
}
