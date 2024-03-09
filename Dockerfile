FROM alpine:latest

ARG POSTGRESQL_URI_ARG
ARG POSTGRESQL_ADDON_USER_ARG
ARG POSTGRESQL_ADDON_PASSWORD_ARG
ARG DELAY_AFTER_ARG
ARG POSTGRESQL_MAX_POOL_SIZE_ARG


# Mettre à jour les paquets et installer les dépendances nécessaires à SBT
RUN apk update && \
    apk add --no-cache bash wget && \
    apk add --no-cache openjdk11 && \
    apk add --no-cache --virtual=build-dependencies ca-certificates && \
    update-ca-certificates && \
    apk del build-dependencies

# Télécharger et installer SBT
RUN wget -qO - "https://github.com/sbt/sbt/releases/download/v1.5.5/sbt-1.5.5.tgz" | tar xz -C /usr/local && \
    ln -s /usr/local/sbt/bin/sbt /usr/local/bin/sbt


RUN apk add --no-cache nodejs npm yarn


WORKDIR /app

# Copie du répertoire des sources dans le conteneur
COPY ./ .


# Exécution de la commande sbt pour compiler l'application
RUN sbt build2Prod

RUN VERSION=$(cat /app/version.sbt | grep 'version :=' | sed 's/.*"\(.*\)".*/\1/')  && \
     echo ">>> current version : $VERSION" && \
      cp "/app/httpEngine/target/universal/floxxserver-${VERSION}.zip" .  && \
      unzip floxxserver-${VERSION}.zip &&\
      mv  floxxserver-${VERSION}   floxxserver-current



WORKDIR /app/floxxserver-current

ENV POSTGRESQL_URI $POSTGRESQL_URI_ARG
ENV POSTGRESQL_ADDON_USER $POSTGRESQL_ADDON_USER_ARG
ENV POSTGRESQL_ADDON_PASSWORD $POSTGRESQL_ADDON_PASSWORD_ARG
ENV DELAY_AFTER $DELAY_AFTER_ARG
ENV POSTGRESQL_MAX_POOL_SIZE $POSTGRESQL_MAX_POOL_SIZE_ARG

EXPOSE 8080

# Commande par défaut à exécuter lorsque le conteneur démarre
CMD ["bin/floxxserver"]




