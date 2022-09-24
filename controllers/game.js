const gameModel = require('../models/game.js')

module.exports.createGame = async (req,res) => {
    const new_game = new gameModel({
        time1 : req.body.time1,
        time2 : req.body.time2,
        date: req.body.date,
        hours_minutes : req.body.hours_minutes
    })
    
    await new_game.save();
    return res.status("201").send("Jogo adicionado")

}