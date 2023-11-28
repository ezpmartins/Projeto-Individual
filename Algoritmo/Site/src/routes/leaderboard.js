var express = require("express");
var router = express.Router();

var leaderboardController = require("../controllers/leaderboardController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js

router.post("/coletarQtdUsuarios", function (req, res) {
    leaderboardController.coletarQtdTotal(req, res);
});
// Dados Coletados  coletados da pontuação do usuário essa função é chamada no arquivo quiz.html
router.post("/inserirPontuacaoUsuario", function (req, res) {
    leaderboardController.inserirPontuacaoUsuario(req, res);
});

router.post("/mediaAlta/:idUsuario", function (req, res) {
    leaderboardController.mediaAlta(req, res);
});

router.post("/mediaBaixa/:idUsuario", function (req, res) {
    leaderboardController.mediaBaixa(req, res);
});

router.post("/taxaAcertoTotal/:idUsuario", function (req, res) {
    leaderboardController.taxaAcertoTotal(req, res);
});

router.post("/mostrarRanking/:idUsuario", function (req, res) {
    leaderboardController.mostrarRanking(req, res);
});

module.exports = router;