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
idSugestao int primary key auto_increment,
nome varchar(45),
email varchar(45),
assunto varchar(45),
descricao text,
fkUsuarioSugest int unique , 
constraint fkUsuarioSugest foreign key (fkUsuarioSugest) references usuario (idUsuario));


-- Exibindo os Usuários Cadastrados

select*from usuario;

-- Exibindo Pontuação dos Usuários 

select*from quiz;

-- Exibindo a Quantidade de Usuarios Cadastrados 

select count(idUsuario) usuariosTotal from usuario;

-- Exibindo a Quantidade de Usuários que estão acima da média

select
count(idUsuario) QtdUsuarios
from usuario
join quiz
 on usuario.idUsuario = quiz.fkUsuarioQuiz
where quiz.pontuacao > 6;

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


-- Exibindo o a pontuação por ordem decrescente de todos cadastrados (Ranking)

select 
nome Nome,
quiz.pontuacao "Pontuação" from usuario
join
quiz on
idUsuario = fkUsuarioQuiz
where pontuacao order by pontuacao desc limit 5;

