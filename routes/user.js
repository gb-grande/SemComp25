const userController = require("../controllers/user");
const express = require("express");
const router = express.Router();

router.post('/user', userController.createUser);
router.post('/user/auth', userController.authUser);

module.exports = router;