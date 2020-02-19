
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



CREATE table user_slots (
	slotid varchar not null,
	userid varchar not null,
	FOREIGN KEY (slotid) REFERENCES slot(slotid),
	FOREIGN KEY (userid) REFERENCES users(userid)
	primary key PK_Mapping references (slotid,userid)
)



CREATE TABLE users (

userid        varchar CONSTRAINT pk_user PRIMARY KEY,
firstname VARCHAR not null,
lastname VARCHAR not null,
login        VARCHAR not null,
mdp int not null
);