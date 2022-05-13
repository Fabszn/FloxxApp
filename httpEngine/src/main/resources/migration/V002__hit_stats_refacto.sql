
ALTER TABLE  hit RENAME  to hit_history;

CREATE TABLE hit_latest (
    slotid        varchar CONSTRAINT pk_slotid PRIMARY KEY,
    fkid_hit        varchar not null,
    FOREIGN KEY (fkid_hit) REFERENCES hit_history(hitid),
    FOREIGN KEY (slotid) REFERENCES slot(slotid)
);



