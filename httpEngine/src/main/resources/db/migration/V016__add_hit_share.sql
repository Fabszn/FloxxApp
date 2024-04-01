DROP SEQUENCE IF EXISTS  seq_hit_share;



CREATE TABLE IF NOT EXISTS hit_share (
pkid_hit_share        UUID CONSTRAINT pkid_hit_share PRIMARY KEY ,
fkid_slot  varchar not null,
fkid_room varchar not null,
perc int not null,
status boolean default false,
date_creation timestamp not null,
response varchar null,
FOREIGN KEY (fkid_slot) REFERENCES slot(slotid),
FOREIGN KEY (fkid_room) REFERENCES room(pkid_room)
);