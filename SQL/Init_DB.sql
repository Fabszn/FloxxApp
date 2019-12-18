
CREATE TABLE slot (
    slotid        varchar CONSTRAINT pk_slot PRIMARY KEY,
    roomid       varchar NOT NULL,
    fromTime         varchar NOT NULL,
    toTime         varchar NOT NULL,
    talk varchar,
    day         varchar NOT NULL

);

CREATE TABLE hit (

hitid        varchar CONSTRAINT pk_hit PRIMARY KEY,
hitslotid        varchar,
percentage int not null,
datetime bigint not null,
FOREIGN KEY (hitslotid) REFERENCES slot(slotid)
);

CREATE TABLE auth (

userid        varchar CONSTRAINT pk_auth PRIMARY KEY,
login        VARCHAR not null,
mdp int not null
);