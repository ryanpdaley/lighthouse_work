DROP TABLE IF EXISTS fleet CASCADE;
DROP TABLE IF EXISTS ships CASCADE;
DROP TABLE IF EXISTS sailors CASCADE;
DROP TABLE IF EXISTS duties CASCADE;
DROP TABLE IF EXISTS ranks CASCADE;

CREATE TABLE fleet (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50)
);

CREATE TABLE ships (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50),
  date_built DATE,
  fleet_id INTEGER
);

CREATE TABLE sailors (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50),
  birthdate DATE
);

CREATE TABLE duties (
  id SERIAL PRIMARY KEY NOT NULL,
  start_date DATE,
  end_date DATE,
  ship_id INTEGER,
  sailor_id INTEGER,
  rank_id INTEGER
);

CREATE TABLE ranks (
  id SERIAL PRIMARY KEY NOT NULL,
  rank_name VARCHAR(50)
);

INSERT INTO "fleet" (name) VALUES('fleet 1');
INSERT INTO "fleet" (name) VALUES('fleet 2');

INSERT INTO "ships" (name, date_built, fleet_id) VALUES('ship 1', '2001-09-28', 1);
INSERT INTO "ships" (name, date_built, fleet_id) VALUES('ship 2', '2002-09-28', 2);
INSERT INTO "ships" (name, date_built, fleet_id) VALUES('ship 3', '2003-09-28', 1);
INSERT INTO "ships" (name, date_built, fleet_id) VALUES('ship 4', '2004-09-28', 2);
INSERT INTO "ships" (name, date_built, fleet_id) VALUES('ship 5', '2005-09-28', 2);
INSERT INTO "ships" (name, date_built, fleet_id) VALUES('boat 1', '2006-09-28', 1);
INSERT INTO "ships" (name, date_built, fleet_id) VALUES('boat 2', '2007-09-28', 2);
INSERT INTO "ships" (name, date_built, fleet_id) VALUES('boat 3', '2008-09-28', 1);
INSERT INTO "ships" (name, date_built, fleet_id) VALUES('kayak', '2009-09-28', 2);

INSERT INTO "sailors" (name, birthdate) VALUES('sailor Jerry', '1920-12-25');
INSERT INTO "sailors" (name, birthdate) VALUES('Sally', '1976-11-02');
INSERT INTO "sailors" (name, birthdate) VALUES('James', '1982-09-04');
INSERT INTO "sailors" (name, birthdate) VALUES('Heidi', '1951-07-06');
INSERT INTO "sailors" (name, birthdate) VALUES('Peter', '1956-10-08');

INSERT INTO "duties" (start_date, end_date, ship_id, sailor_id, rank_id) VALUES('2017-01-01', '2017-03-17', 1, 1, 2);
INSERT INTO "duties" (start_date, end_date, ship_id, sailor_id, rank_id) VALUES('2017-01-01', '2017-03-17', 2, 2, 1);
INSERT INTO "duties" (start_date, end_date, ship_id, sailor_id, rank_id) VALUES('2017-01-01', '2017-02-17', 9, 3, 3);
INSERT INTO "duties" (start_date, end_date, ship_id, sailor_id, rank_id) VALUES('2017-01-01', '2017-03-17', 5, 4, 1);
INSERT INTO "duties" (start_date, end_date, ship_id, sailor_id, rank_id) VALUES('2017-01-01', '2017-03-17', 4, 5, 2);
INSERT INTO "duties" (start_date, end_date, ship_id, sailor_id, rank_id) VALUES('2017-02-18', '2017-03-17', 8, 3, 3);

INSERT INTO "ranks" (rank_name) VALUES('Sailor');
INSERT INTO "ranks" (rank_name) VALUES('Captain');
INSERT INTO "ranks" (rank_name) VALUES('Swimmer');


SELECT sailors.name, birthdate, rank_name, ships.name FROM sailors, ranks, duties, ships WHERE sailors.id = duties.sailor_id AND ranks.id = duties.rank_id AND duties.ship_id = ships.id;


