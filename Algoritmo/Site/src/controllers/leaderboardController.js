var leaderboardModel = require("../models/leaderboardModel");

function coletarQtdTotal(req, res) {
var idUsuario = req.query.idUsuario;
    leaderboardModel.coletarQtdUsuarios(idUsuario)
        .then(result => {
            console.log(result)
            res.status(200).json(result);
        })
        .catch(error => {
            console.error("Erro ao processar a solicitação:", error);
            res.status(500).json({ error: "Erro interno do servidor" });
        });
};

function inserirPontuacaoUsuario(req,res){
    var idUsuario = req.body.idUsuario;
    var pontuacao = req.body.pontuacao;
    leaderboardModel.inserirPontuacaoUsuario(idUsuario,pontuacao)
    .then(result => {
        console.log(result)
        res.status(200).json(result);
    })
    .catch(error => {
        console.error("Erro ao processar a solicitação:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    });
}

module.exports = {
    coletarQtdTotal,
    inserirPontuacaoUsuario
}