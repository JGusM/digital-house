const express = require('express');
const router = express.Router(); 
const clienteController = require('../controllers/cliente.controller') 


router.get('/', clienteController.getcliente ); /* GET - home page  */

router.get('/asistencia', (req, res) => {
    res.send('Asistencia de clientes')
}); 

module.exports = router; //Exportamos todo el contenido de la ruta para hacerlo visible