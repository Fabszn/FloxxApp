CREATE TABLE informations (
pkid_information  BIGINT PRIMARY KEY,
title varchar(35) not null,
content varchar not null,
date_create timestamp with time zone not null,
is_archived boolean default false
);

CREATE TABLE information_read_status (
fkid_information  BIGINT ,
userid  varchar  ,
FOREIGN KEY (fkid_information) REFERENCES informations(pkid_information),
FOREIGN KEY (userid) REFERENCES users(userid),
PRIMARY KEY (fkid_information,userid)
);


