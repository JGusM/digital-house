var express = require('express');
const productsController = require('../controllers/productsController');

var router = express.Router(); 


router.get('/home', productsController.index); /* GET - home page  */

router.get('/menu', productsController.mostrarDetalle); /* GET - detalle page  */

module.exports = router; //Exportamos todo el contenido de la ruta para hacerlo visible