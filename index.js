const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}));

const PORT = 1234;

app.use(require('./routes/user'));
app.use(require('./routes/games'));

mongoose.connect(process.env.CON_STR, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

// Uso apenas como teste
app.get('/', (req, res) => {
    res.send("aua");
})


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    app.listen(PORT, () => {
        console.log(`Rodando em http://localhost:${PORT}`);
    });
});