ALTER TABLE slot
RENAME COLUMN roomid TO room_name;

ALTER TABLE slot ADD COLUMN IF NOT EXISTS roomid bigint;
