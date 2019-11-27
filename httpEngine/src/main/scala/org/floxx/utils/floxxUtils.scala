package org.floxx.utils

import org.floxx.{FloxxError, BusinessVal, IOVal}

import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global
import akka.http.scaladsl.util.FastFuture
import cats.data.EitherT
import cats.effect.IO
import play.api.libs.json.{JsValue, Json, Writes}

object floxxUtils {

  implicit class ToFuture[A](val it: A) {
    def future: Future[A] = FastFuture.successful(it)

    /**
      * this wrapper function is based on FastFuture from AKKA.
      * This kind if future try to optimizing the usage of the execution context when the Future is already completed
      *
      * @return Future[Right[A]]
      *
      */
    def futureRight: Future[BusinessVal[A]] = FastFuture.successful(Right[FloxxError, A](it))

    /**
      * this wrapper function is based on FastFuture from AKKA.
      * This kind if future try to optimizing the usage of the execution context when the Future is already completed
      *
      * @return EitherT[Future, BusinessError, A]
      *
      */
    def futureRightT: EitherT[Future, FloxxError, A] =
      EitherT[Future, FloxxError, A](FastFuture.successful(Right[FloxxError, A](it)))

  }

  implicit class ToEitherT[A](val it: Future[BusinessVal[A]]) extends AnyVal {
    def eitherT: EitherT[Future, FloxxError, A] = EitherT[Future, FloxxError, A](it)
  }

  implicit class ToIOEitherT[A](val it: IO[IOVal[A]]) extends AnyVal {
    def eitherT: EitherT[IO, FloxxError, A] = EitherT[IO, FloxxError, A](it)
  }

  implicit class ToEitherRight[A](val it: Future[A]) {
    def mapFutureRight: Future[BusinessVal[A]] = it.map(v => Right[FloxxError, A](v))
  }

  /**
    * this wrapper function is based on FastFuture from AKKA.
    * This kind if future try to optimizing the usage of the execution context when the Future is already completed
    *
    * @return Future[Left[B, A]]
    *
    */
  implicit class ToFutureLeft[B <: FloxxError](val be: B) {
    def futureLeft[A]: Future[Left[B, A]] = FastFuture.successful(Left[B, A](be))
  }

  /**
    * This function is temporary until we implement type error system on repository layer
    *
    * @param fut
    * @tparam T
    */
  implicit class toFutureEitherT[T](val fut: Future[T]) extends AnyVal {
    def mapEitherTRight: EitherT[Future, FloxxError, T] =
      EitherT[Future, FloxxError, T](fut.map(Right[FloxxError, T](_)))
  }

  implicit class JsonTransformer[J](j: J)(implicit wr: Writes[J]) {

    def toJsonStr: String = Json.toJson(j).toString()
    def toJson: JsValue = Json.toJson(j)

  }

}
