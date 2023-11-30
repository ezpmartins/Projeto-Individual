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
};

function mediaAlta(req,res){
    var idUsuario = req.params.idUsuario;
    leaderboardModel.mediaAlta(idUsuario)
    .then(result => {
        console.log(result)
        res.status(200).json(result);
    })
    .catch(error => {
        console.error("Erro ao processar a solicitação:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    });
    
};

function mediaBaixa(req,res){
    var idUsuario = req.params.idUsuario;
    leaderboardModel.mediaBaixa(idUsuario)
    .then(result => {
        console.log(result)
        res.status(200).json(result);
    })
    .catch(error => {
        console.error("Erro ao processar a solicitação:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    });
    
};

function taxaAcertoTotal(req,res){
    var idUsuario = req.params.idUsuario;
    leaderboardModel.taxaAcertoTotal(idUsuario)
    .then(result => {
        console.log(result)
        res.status(200).json(result);
    })
    .catch(error => {
        console.error("Erro ao processar a solicitação:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    });
    
};

function mostrarRanking(req,res){
    var idUsuario = req.params.idUsuario;
    leaderboardModel.mostrarRanking(idUsuario)
    .then(result => {
        console.log(result)
        res.status(200).json(result);
    })
    .catch(error => {
        console.error("Erro ao processar a solicitação:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    });
    
};

function inserirSugestao(req,res){
    var fkUsuarioSugest = req.body.idUsuario;
    var nome = req.body.nome;
    var email= req.body.email;
    var assunto = req.body.assunto;
    var descricao = req.body.descricao;
    
    leaderboardModel.inserirSugestao(nome,email,assunto,descricao, fkUsuarioSugest)
    .then(result => {
        console.log(result)
        res.status(200).json(result);
    })
    .catch(error => {
        console.error("Erro ao processar a solicitação:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    });
    
};


module.exports = {
    coletarQtdTotal,
    inserirPontuacaoUsuario,
    mediaAlta,
    mediaBaixa,
    taxaAcertoTotal,
    mostrarRanking,
    inserirSugestao
}