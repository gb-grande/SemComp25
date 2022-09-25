const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();
require('dotenv').config();

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const PORT = 1234;

app.use(require('./routes/user'));
app.use(require('./routes/game'));

mongoose.connect(process.env.CON_STR, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

// Uso apenas como teste
app.get('/', (req, res) => {
    const cookie = req.cookies.token;
    console.log(cookie);
    if (cookie === undefined || cookie === "") {
        res.redirect('/login.html');
    } else {
        res.redirect('/home.html');
    }
})


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    app.listen(PORT, () => {
        console.log(`Rodando em http://localhost:${PORT}`);
    });
});