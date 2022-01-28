const path = require("path")

const productos = [
    {
       plato: "Carpaccio fresco",
       descripcion: "Entrada Carpaccio de salmón con cítricos",
       precio: "U$S 65.50"
    },

    {
        plato: "Risotto de berenjena",
       descripcion: "Risotto de berenjena y queso de cabra",
       precio: "U$S 47.00"
    },
    { 
        plato: "Mousse de arroz",
       descripcion: "Mousse de arroz con leche y aroma de azahar",
       precio: "U$S 27.50"
    },
    {
          plato: "Espárragos blancos",
          descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
          precio: "U$S 37.50"
    }
]

const main = {
    index: (req,res) => {
        // res.sendFile(path.resolve(__dirname, '../views/index.html'));
        res.render('index', {dato: "soy un dato", productosEnviados: productos})
    },
    mostrarDetalle: (req,res) => {
        const parametro = req.params.idLibro
        const libroParaEnviar = libros.find( libro => libro.id == parametro)
        res.render('detalle', {libro: libroParaEnviar})
    }
}

module.exports = main