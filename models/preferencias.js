const mongoose = require('moongose')

const PrefSchema = mongoose.Schema({
    time: String,
    bebida: Number,
    animacao: Number,
})

module.exports = mongoose.model('preferencias', PrefSchema);