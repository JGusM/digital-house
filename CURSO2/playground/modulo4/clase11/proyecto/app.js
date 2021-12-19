const express = require ('express');
//3) se requiere path para unificar las rutas de los distintos sistemas operativos
const path = require('path');

const app = express();

//4) usa resolve para determinar la ubicacion de la ruta
//5) con __dirname hace referencia a mi ubicacion actual 
//6) desde ahi que vaya atras y busque la carpeta public
const publicPath = path.resolve(__dirname, './public');


//1)aca app usa la funcion static que esta adentro de express
//2)static recibe como parametro la ruta donde esta la ruta de archivos publicos
//7)luego copio la const publicPath dentro de static
app.use( express.static(publicPath));

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})