const express = require('express');
const app = express();
const path = require('path');
const rutaHome = require('./routers/main');
const rutaAbout = require('./routers/about');

app.use(express.static(path.join(__dirname, './public')));

app.set('views', path.resolve(__dirname, './views'))
app.set('view engine', 'ejs')

app.use('/', rutaHome);
app.use('/about', rutaAbout);


app.listen(3000, () => {
    console.log('Servidor funcionando en puerto 3000');
});