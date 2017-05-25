### Schema
-- Table 1 - Users = runners
CREATE DATABASE runners_db;
USE runners_db;

CREATE TABLE runners
(
	id int NOT NULL AUTO_INCREMENT,
	first_name varchar(15) NOT NULL,
	last_name varchar(25) NOT NULL,
	zipcode int(5) NOT NULL,
	email varchar(60) NOT NULL,
	password varchar(20) NOT NULL,
	PRIMARY KEY (id)
);

-- Table 2 - Running data

CREATE TABLE running_log
(
	id int NOT NULL AUTO_INCREMENT,
	first_name varchar(15) NOT NULL,
	last_name varchar(25) NOT NULL,
	zipcode int(5) NOT NULL,
	email varchar(60) NOT NULL,
	time_results TIME NOT NULL,
	distance integer(99) NOT NULL,
	run_details text(300),
	PRIMARY KEY (id)
);