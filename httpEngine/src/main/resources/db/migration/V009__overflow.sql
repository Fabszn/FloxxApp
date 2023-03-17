CREATE TABLE overflow (
fkslotid        varchar CONSTRAINT pkid_overflow PRIMARY KEY,
level bigint not null default 0,
datetime timestamp with time zone not null,
affectedroom varchar null,
FOREIGN KEY (fkslotid) REFERENCES slot(slotid)
);
