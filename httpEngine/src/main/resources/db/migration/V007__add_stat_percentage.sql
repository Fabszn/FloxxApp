
DROP VIEW IF EXISTS stats_percentage_by_day;
DROP VIEW IF EXISTS stats_percentage_global;

CREATE VIEW stats_percentage_by_day
AS select count(*) as nbhit,
    hh.percentage, s."day"  from
    hit_history hh inner join
    hit_latest hl
    on hh.hitid =hl.fkid_hit
    inner join slot s on s.slotid = hh.hitslotid
    group by hh.percentage, s."day" order by percentage, s."day" ;

CREATE VIEW stats_percentage_global
AS select count(*) as nbhit,
    hh.percentage  from
    hit_history hh inner join
    hit_latest hl
    on hh.hitid =hl.fkid_hit
    inner join slot s on s.slotid = hh.hitslotid
    group by hh.percentage order by percentage ;
