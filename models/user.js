const mongoose = require('moongose')

const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    idade: Number,
    genero: String,
    preferencias: {type: mongoose.Schema.Types.ObjectId, ref: 'preferencias'},
    telefone: String,
})

module.exports = mongoose.model('usuario', UserSchema);