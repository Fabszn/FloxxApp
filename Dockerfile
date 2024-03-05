FROM alpine:latest




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

# Copie du fichier build.sbt dans le conteneur
COPY build.sbt ./

# Copie du répertoire des sources dans le conteneur
COPY . ./

# Exécution de la commande sbt pour compiler l'application
RUN sbt compile

# Commande par défaut à exécuter lorsque le conteneur démarre
CMD ["sbt", "runDev"]




