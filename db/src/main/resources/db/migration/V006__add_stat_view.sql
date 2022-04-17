
DROP VIEW IF EXISTS stats_hit;

CREATE VIEW stats_hit
AS SELECT hl.slotId,
    s.talk,
    hh.percentage,
    s.roomid,
    s.fromtime,
    s.totime,
    s.day
FROM hit_latest hl
INNER JOIN hit_history hh ON hl.fkid_hit=hh.hitid
INNER JOIN slot s ON s.slotid=hh.hitslotid
;
