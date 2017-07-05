create database burgers_db;
use burgers_db;

create table burgers (
id integer (9) auto_increment not null,
burger_name varchar(20) Character set UTF8,
devoured bool,
createdAt TIMESTAMP NOT NULL,
primary key(id)
);

