var database = require("../database/config");

function coletarQtdUsuarios() {
    var instrucao =
        `select count(idUsuario)  usuariosTotal from usuario;`
    console.log("Executando a instrução coletar fluxo: \n " + (database.executar(instrucao)));
    return database.executar(instrucao);
};

function coletarDadosQuiz(){
    var instrucao= 
    `select idUsuario ID,
    nome Usuario from usuario
    join
    quiz on
    idQuiz =fkQuiz;`
}

module.exports = {
    coletarQtdUsuarios
};