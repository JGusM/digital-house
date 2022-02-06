const express = require('express');
const router = express.Router(); 

const productsController = require('../controllers/productsController');

router.get('/', productsController.index); /* GET - home page  */

router.get('/menu/:id', productsController.detalleMenu); /* GET - detalle page  */

module.exports = router; //Exportamos todo el contenido de la ruta para hacerlo visible