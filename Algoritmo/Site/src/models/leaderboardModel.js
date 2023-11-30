var database = require("../database/config");

function coletarQtdUsuarios() {
    var instrucaoColetarQtdUsuarios =
        `select count(idUsuario)  usuariosTotal from usuario;`
    console.log("Executando a instrução coletando qtd Usuários: \n " + (database.executar(instrucaoColetarQtdUsuarios)));
    return database.executar(instrucaoColetarQtdUsuarios);
};

function inserirPontuacaoUsuario(idUsuario, pontuacao) {
    var instrucaoPontuacao =
        `insert into quiz (pontuacao,fkUsuarioQuiz) values ("${pontuacao}","${idUsuario}"); `
    console.log("Executando a instrução coletando Pontuação: \n " + instrucaoPontuacao);
    return database.executar(instrucaoPontuacao);
};

function mediaAlta() {
    var MediaAlta =
        `select
        count(idUsuario) QtdUsuarios
        from usuario
        join quiz
         on usuario.idUsuario = quiz.fkUsuarioQuiz
        where quiz.pontuacao > 5;`
    console.log("Executando a instrução de usuarios acima da média: \n " + (database.executar(MediaAlta)));
    return database.executar(MediaAlta);
};

function mediaBaixa() {
    var MediaBaixa =
        `select
        count(idUsuario) QtdUsuarios
        from usuario
        join quiz
         on usuario.idUsuario = quiz.fkUsuarioQuiz
        where quiz.pontuacao < 6;`
    console.log("Executando a instrução de usuarios abaixo da média: \n " + (database.executar(MediaBaixa)));
    return database.executar(MediaBaixa);
};

function taxaAcertoTotal() {
    var taxadeAcerto =
        `select
        count(idUsuario) QtdUsuarios
        from usuario
        join quiz
         on usuario.idUsuario = quiz.fkUsuarioQuiz
        where quiz.pontuacao = 12;`
    console.log("Executando a instrução de usuarios com taxa de acerto 100%: \n " + (database.executar(taxadeAcerto)));
    return database.executar(taxadeAcerto);
};

function mostrarRanking() {
    var ranking = `select nome Nome,
    quiz.pontuacao "Pontuação" from usuario
    join
    quiz on
    idUsuario = fkUsuarioQuiz
    where pontuacao order by pontuacao desc limit 10;`
    console.log("Executando a instrução de mostrar usuários no ranking: \n " + (database.executar(ranking)));
    return database.executar(ranking);
}

function inserirSugestao(nome,email,assunto,descricao,fkUsuarioSugest){
    var sugestao = `insert into sugestao(idSugestao,nome,email,assunto, descricao,fkUsuarioSugest) values(${fkUsuarioSugest},"${nome}","${email}","${assunto}","${descricao}",${fkUsuarioSugest});`
    console.log("Executando a instrução de mostrar usuários no ranking: \n " + sugestao);
    return database.executar(sugestao);
}


module.exports = {
    coletarQtdUsuarios,
    inserirPontuacaoUsuario,
    mediaAlta,
    mediaBaixa,
    taxaAcertoTotal,
    mostrarRanking,
    inserirSugestao
};