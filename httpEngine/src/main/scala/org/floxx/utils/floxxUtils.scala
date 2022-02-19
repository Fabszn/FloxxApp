package org.floxx.utils

import cats.data.EitherT
import cats.effect.IO
import org.floxx.{FloxxError, IOVal}

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

@deprecated
object floxxUtils {

  implicit class ToFuture[A](val it: A) {
    Future
    def future: Future[A] = Future.successful(it)

    /**
      * this wrapper function is based on FastFuture from AKKA.
      * This kind if future try to optimizing the usage of the execution context when the Future is already completed
      *
      * @return EitherT[Future, BusinessError, A]
      *
      */
    def futureRightT: EitherT[Future, FloxxError, A] =
      EitherT[Future, FloxxError, A](Future.successful(Right[FloxxError, A](it)))

  }

  implicit class ToIOEitherT[A](val it: IO[IOVal[A]]) extends AnyVal {
    def eitherT: EitherT[IO, FloxxError, A] = EitherT[IO, FloxxError, A](it)
  }

  /**
    * this wrapper function is based on FastFuture from AKKA.
    * This kind if future try to optimizing the usage of the execution context when the Future is already completed
    *
    * @return Future[Left[B, A]]
    *
    */
  implicit class ToFutureLeft[B <: FloxxError](val be: B) {
    def futureLeft[A]: Future[Left[B, A]] = Future.successful(Left[B, A](be))
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

}
