const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();


app.use(express.json())


const PORT = 1234;

mongoose.connect(process.env.CON_STR);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    app.listen(PORT, () => {
        console.log(`Rodando em http://localhost:${PORT}`);
    });
});