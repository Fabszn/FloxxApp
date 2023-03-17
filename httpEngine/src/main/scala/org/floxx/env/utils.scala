package org.floxx.env

import io.circe.{Decoder, Encoder}
import shapeless.Unwrapped



object utils {


  object json {

    object CirceValueClassCustomAuto extends io.circe.generic.AutoDerivation {

      implicit def encodeAnyVal[T <: AnyVal, U](
          implicit
          ev: T <:< AnyVal,
          unwrapped: Unwrapped.Aux[T, U],
          encoderUnwrapped: Encoder[U]
      ): Encoder[T] = Encoder.instance[T](v => encoderUnwrapped(unwrapped.unwrap(v)))

      implicit def decodeAnyVal[T <: AnyVal, U](
          implicit
          ev: T <:< AnyVal,
          unwrapped: Unwrapped.Aux[T, U],
          decoderUnwrapped: Decoder[U]
      ): Decoder[T] = Decoder.instance[T](decoderUnwrapped(_).map(unwrapped.wrap))

    }
  }

}
