-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

-- Criação do Database 
                            
create database tlou;
use tlou;

-- Criação das Tabelas

create table quiz (
idQuiz int primary key auto_increment,
qtdAcertos char (2),
qtdErros char (2));

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45));
alter table usuario add column fkQuiz int;
alter table usuario add constraint fkQuiz foreign key (fkQuiz) references quiz(idQuiz);

create table sugestao(
idSugestao int primary key auto_increment,
dt date,
descricao text,
fkUsuario int, 
constraint fkUsuario foreign key  (fkUsuario) references usuario (idUsuario));


-- Exibindo os Usuários Cadastrados

select*from usuario;