drop view stats_percentage_global;
CREATE VIEW stats_percentage_global
AS select count(*) as nbhit,
       hh.percentage, s.year_slot as year  from
       hit_history hh inner join
       hit_latest hl
       on hh.hitid =hl.fkid_hit
       inner join slot s on s.slotid = hh.hitslotid
       group by hh.percentage,s.year_slot order by percentage ;

drop view stats_percentage_by_day;
CREATE VIEW stats_percentage_by_day
AS select count(*) as nbhit, hh.percentage, s."day",s.year_slot as year  from
    hit_history hh inner join
    hit_latest hl
    on hh.hitid =hl.fkid_hit
    inner join slot s on s.slotid = hh.hitslotid
    group by hh.percentage, s."day",s.year_slot order by percentage, s."day",s.year_slot ;