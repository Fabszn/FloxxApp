DROP SEQUENCE IF EXISTS  seq_speaker;
CREATE SEQUENCE IF NOT EXISTS seq_speaker;


CREATE TABLE IF NOT EXISTS speaker (
pkid_speaker        bigint CONSTRAINT pkid_speaker PRIMARY KEY DEFAULT nextval('seq_speaker'),
fkid_slot  varchar not null,
firstname varchar,
lastname varchar,
fullname varchar,
imageurl varchar null,
FOREIGN KEY (fkid_slot) REFERENCES slot(slotid)
);