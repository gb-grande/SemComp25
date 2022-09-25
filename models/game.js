const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    time1: String,
    time2: String,
    date: Date,
})

module.exports = mongoose.model('game', gameSchema);