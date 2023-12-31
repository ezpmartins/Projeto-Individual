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

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45));

create table quiz (
idQuiz int primary key auto_increment,
pontuacao int,
fkUsuarioQuiz int, 
constraint fkUsuarioQuiz foreign key (fkUsuarioQuiz) references usuario(idUsuario));

create table sugestao(
idSugestao int primary key ,
nome varchar(45),
email varchar(45),
assunto varchar(45),
descricao text,
fkUsuarioSugest int , 
constraint fkUsuarioSugest foreign key (fkUsuarioSugest) references usuario (idUsuario));

--  Abaixo confira alguns Select's 

-- Exibindo os Usuários Cadastrados

select*from usuario;

-- Exibindo Pontuação dos Usuários 

select*from quiz;

-- Exibindo a Quantidade de Usuarios Cadastrados 

select count(idUsuario) usuariosTotal from usuario;

-- Exibindo as Sugestões dos Usuários 

select *from sugestao;

-- Exibindo a Quantidade de Usuários que estão acima da média

select
count(idUsuario) QtdUsuarios
from usuario
join quiz
 on usuario.idUsuario = quiz.fkUsuarioQuiz
where quiz.pontuacao > 5;

-- Exibindo a Quantidade de Usuários que estão abaixo da média

select
count(idUsuario) QtdUsuarios
from usuario
join quiz
 on usuario.idUsuario = quiz.fkUsuarioQuiz
where quiz.pontuacao < 6;
 
 
-- Exibindo os Usuários com a Pontuação Máxima

select
count(idUsuario) QtdUsuarios
from usuario
join quiz
 on usuario.idUsuario = quiz.fkUsuarioQuiz
where quiz.pontuacao = 12;


-- Exibindo o a pontuação por ordem decrescente de todos cadastrados (Ranking) no Painel 

select 
nome Nome,
quiz.pontuacao "Pontuação" from usuario
join
quiz on
idUsuario = fkUsuarioQuiz
where pontuacao order by pontuacao desc limit 10;

-- Exibindo a pontuação por ordem decrescente de todos os usuarios cadastrados (Ranking)

select 
nome Nome,
quiz.pontuacao "Pontuação" from usuario
join
quiz on
idUsuario = fkUsuarioQuiz
where pontuacao order by pontuacao desc;