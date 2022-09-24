const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    time1: String,
    time2: String,
    date: Date,
    hours_minutes: String

})

module.exports = mongoose.model('game', gameSchema);