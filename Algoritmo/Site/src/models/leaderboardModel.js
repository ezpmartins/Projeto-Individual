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
}

function coletarDadosQuiz() {
    var instrucao =
        `select idUsuario ID,
    nome Usuario from usuario
    join
    quiz on
    idQuiz =fkQuiz;`
    console.log("Executando a instrução coletar fluxo: \n " + (database.executar(instrucao)));
    return database.executar(instrucao);
}

module.exports = {
    coletarQtdUsuarios,
    inserirPontuacaoUsuario,
    coletarDadosQuiz
};