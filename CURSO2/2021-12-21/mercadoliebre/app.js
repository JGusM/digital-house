const express = require('express');

const app = express();

const path = require("path");
const publicPath = path.resolve(__dirname, "./public");

app.use( express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html')
})

app.listen(3000, () => {
    console.log('servidor corriendo en puerto 3000');
})