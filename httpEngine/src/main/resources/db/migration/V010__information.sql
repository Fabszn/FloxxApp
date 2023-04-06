CREATE  SEQUENCE info_seq;


CREATE TABLE informations (
pkid_information  BIGINT PRIMARY KEY default nextval('info_seq'),
title varchar(35) not null,
content varchar not null,
datecreate timestamp with time zone not null,
isarchived boolean default false
);

CREATE TABLE information_read_status (
fkid_information  BIGINT ,
userid  varchar  ,
FOREIGN KEY (fkid_information) REFERENCES informations(pkid_information),
FOREIGN KEY (userid) REFERENCES users(userid),
PRIMARY KEY (fkid_information,userid)
);


