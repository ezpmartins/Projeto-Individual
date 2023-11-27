var express = require("express");
var router = express.Router();

var leaderboardController = require("../controllers/leaderboardController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js

router.post("/coletarQtdUsuarios", function (req, res) {
    leaderboardController.coletarQtdTotal(req, res);
});

router.post("/inserirPontuacaoUsuario", function (req, res) {
    leaderboardController.inserirPontuacaoUsuario(req, res);
});

module.exports = router;