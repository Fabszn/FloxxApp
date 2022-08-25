alter table slot add column year_slot INT null;

update slot set year_slot=2022;

alter table slot alter column year_slot SET not null;

