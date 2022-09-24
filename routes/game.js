const gameController = require("../controllers/game");
const express = require("express");
const router = express.Router();

router.post('/games', userController.createGame);

module.exports = router;