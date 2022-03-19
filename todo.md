# Points à aborder

 - Avant un début de conférence ouverture N minutes avant et M minutes après
 - Overflow -> Visualisation du taux de remplissage du slot courant


# features à finir

 - Rajouter les droits de visibilité sur les écrans admins
 - Ajouter export CSV pour extract des résultats pour chaque conf
 - Ajouter un écran pour voir affectation user / slot
 - Ajouter l'export CSV des slots/taux de remplissage

## Nice to have
 - Ajouter la possibilité de flaguer une salle en overflow -> pour que les redcoats puissent savoir si l'overflow est affecté
 - Ajouter aussi un flag de proposition de sa salle en overflow

# Compte de test

fabszn@pm.me / 123
mpierre@pm.me / 123
aheritier@gmail.com / 123



# gestion redCoat / rooms

Dans un tableau.. afficher l'ensemble des slots.. avec en correspondance une liste déroulante des readCoads

    - Ne sont affiché que les redCoad qui n'ont pas de session déjà affecté pour ce créneau là
    


# init user 
Prod

insert into users (userid,firstname, lastname, login, mdp,isadmin) values ('aheritier','Arnaud','Heritier','aheritier@gmail.com', '123', true );
insert into users (userid,firstname, lastname, login, mdp) values ('fsznaj','fabrice','Sznajderman','fabszn@pm.me', '123' )
insert into users (userid,firstname, lastname, login, mdp) values ('mpierre','Michel','Pierre','mpierre@pm.me', '123' )

INSERT INTO public.user_slots (slotid, userid) VALUES ('thursday_par242AB_13:00-13:15', 'fsznaj');
INSERT INTO public.user_slots (slotid, userid) VALUES ('thursday_e_neu252_13:00-13:15', 'mpierre');

update t_slot set fromTime='12:30',totime='13:30' where slotid in ('thursday_par242AB_13:00-13:15','thursday_e_neu252_13:00-13:15');


Dev


insert into users (userid,firstname, lastname, login, mdp,isadmin) values ('aheritier','Arnaud','Heritier','aheritier@gmail.com', '123', true );
insert into users (userid,firstname, lastname, login, mdp) values ('fsznaj','fabrice','Sznajderman','fabszn@pm.me', '123' )
insert into users (userid,firstname, lastname, login, mdp) values ('mpierre','Michel','Pierre','mpierre@pm.me', '123' )

INSERT INTO public.user_slots (slotid, userid) VALUES ('wednesday_neu253_t_09:30-12:30', 'fsznaj');
INSERT INTO public.user_slots (slotid, userid) VALUES ('wednesday_b_amphi_13:30-16:30', 'mpierre');

update t_slot set fromTime='12:30' where slotid in ('wednesday_b_amphi_13:30-16:30','wednesday_neu253_t_09:30-12:30');

# scenario : 

 - Création des users
 - Association à des slots -> MAJ des heures ..


