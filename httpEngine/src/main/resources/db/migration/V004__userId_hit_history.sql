ALTER TABLE hit_history add COLUMN fkuserId varchar null references users(userid);

update hit_history set fkuserId=source.userid from (select us.userid,us.slotid from hit_latest hl join hit_history hh on hl.fkid_hit=hh.hitid join user_slots us on hh.hitslotid=us.slotid ) source where hit_history.hitslotid=source.slotid;

update hit_history set fkuserId='fab-szn' where fkuserId is null;

ALTER TABLE hit_history alter COLUMN fkuserId set not null;