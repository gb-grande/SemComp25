const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

module.exports.createUser = async(req, res) => {
    // verificar se existe
    const u = await userModel.exists({'username': req.body.username});

    if (u) {
        return res.status(409).send();
    }

    const salt = await bcrypt.genSalt(10);

    const user = new userModel({
        username: req.body.username,
        password: await bcrypt.hash(req.body.password, salt),
        idade:  parseInt(req.body.idade),
        genero: req.body.genero,
        preferencias: {
            time: req.body.time,
            bebida: parseInt(req.body.bebida),
            animacao: parseInt(req.body.animacao),
        },
        telefone: req.body.telefone,
    })

    await user.save();

    return res.status(201).redirect('../login.html');telefone
}

module.exports.authUser = async(req, res) => {
    const user = await userModel.findOne({"username": req.body.username});

    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            const token = jwt.sign({'user': user._id}, process.env.ACCESS_KEY);
            res.cookie('token', token);
            return res.status(201).redirect('../home.html');
        }
        return res.status(404).send("Usuario ou senha não encontrado");
    }

    return res.status(404).send("Usuario ou senha não encontrado");
}