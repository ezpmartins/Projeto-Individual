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
nome varchar(45),
email varchar(45),
assunto varchar(45),
descricao text,
fkUsuario int, 
constraint fkUsuario foreign key  (fkUsuario) references usuario (idUsuario));

-- Exibindo os Usuários Cadastrados

select*from usuario;

-- Exibindo a Quantidade de Usuarios Cadastrados 

select count(idUsuario) usuariosTotal from usuario;

select idUsuario ID,
nome Nome from usuario
join
quiz on
idQuiz = fkQuiz;

drop table sugestao;