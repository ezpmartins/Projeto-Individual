create database tlou;
use tlou;
create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45));

create table loginStatus(
idLogStats int primary key auto_increment,
diaHorario datetime);

create table quiz (
idQuiz int primary key auto_increment,
qtdAcertos char (2),
qtdErros char (2));

select*from usuario;
