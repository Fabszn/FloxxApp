# init user 
Prod

insert into users (userid,firstname, lastname, login, mdp,isadmin) values ('aheritier','Arnaud','Heritier','aheritier@gmail.com', '123', true );
insert into users (userid,firstname, lastname, login, mdp) values ('fsznaj','fabrice','Sznajderman','fabszn@pm.me', '123' )
insert into users (userid,firstname, lastname, login, mdp) values ('mpierre','Michel','Pierre','mpierre@pm.me', '123' )

INSERT INTO public.user_slots (slotid, userid) VALUES ('thursday_par242AB_13:00-13:15', 'fsznaj');
INSERT INTO public.user_slots (slotid, userid) VALUES ('thursday_e_neu252_13:00-13:15', 'mpierre');

update t_slot set fromTime='12h30' where slotid in ('thursday_par242AB_13:00-13:15','thursday_e_neu252_13:00-13:15');


Dev


insert into users (userid,firstname, lastname, login, mdp,isadmin) values ('aheritier','Arnaud','Heritier','aheritier@gmail.com', '123', true );
insert into users (userid,firstname, lastname, login, mdp) values ('fsznaj','fabrice','Sznajderman','fabszn@pm.me', '123' )
insert into users (userid,firstname, lastname, login, mdp) values ('mpierre','Michel','Pierre','mpierre@pm.me', '123' )

INSERT INTO public.user_slots (slotid, userid) VALUES ('wednesday_neu253_t_09:30-12:30', 'fsznaj');
INSERT INTO public.user_slots (slotid, userid) VALUES ('wednesday_b_amphi_13:30-16:30', 'mpierre');

update t_slot set fromTime='12h30' where slotid in ('wednesday_b_amphi_13:30-16:30','wednesday_neu253_t_09:30-12:30');

# scenario : 

 - Création des users
 - Association à des slots -> MAJ des heures ..


