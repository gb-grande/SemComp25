const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    idade: Number,
    genero: String,
    preferencias: {
        time: String,
        bebida: Number,
        animacao: Number,
    },
    telefone: String,
})

module.exports = mongoose.model('usuario', UserSchema);