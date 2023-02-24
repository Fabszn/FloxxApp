CREATE TABLE overflow (
fkslotid        varchar CONSTRAINT pkid_overflow PRIMARY KEY,
level bigint not null default 0,
datetime bigint not null,
FOREIGN KEY (fkslotid) REFERENCES slot(slotid)
);
