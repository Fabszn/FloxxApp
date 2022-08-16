
DROP VIEW IF EXISTS stats_percentage;

CREATE VIEW stats_percentage
AS select count(*) as nbhit,
 hh.percentage  from
 hit_history hh inner join
 hit_latest hl
 on hh.hitid =hl.fkid_hit
 group by hh.percentage order by percentage ;
