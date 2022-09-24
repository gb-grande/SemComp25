const gameController = require("../controllers/game");
const express = require("express");
const router = express.Router();

router.post('/games', gameController.createGame);

module.exports = router;