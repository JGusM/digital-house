const path = require("path");

const productos = [
  {
    id: 1,
    plato: "Carpaccio fresco",
    descripcion: "Entrada Carpaccio de salmón con cítricos",
    precio: "U$S 65.50",
    imagen: "../public/images/Carpaccio-de-salmon.jpg"
  },

  {
    id: 2,
    plato: "Risotto de berenjena",
    descripcion: "Risotto de berenjena y queso de cabra",
    precio: "U$S 47.00",
  },
  {
    id: 3,
    plato: "Mousse de arroz",
    descripcion: "Mousse de arroz con leche y aroma de azahar",
    precio: "U$S 27.50",
  },
  {
    id: 4,
    plato: "Espárragos blancos",
    descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
    precio: "U$S 37.50",
  },
];

const main = {
  index: (req, res) => {
    // res.sendFile(path.resolve(__dirname, '../views/index.html'));
    res.render("index", { dato: "soy un dato", productos: productos });
  },
  detalleMenu: (req, res) => {
    const id = req.params.id  
    let producto
    for (let i = 0 ; i < productos.length ; i++){
        if (productos[i].id == id) {
            producto = productos[i]
        }
    }
    res.render("detalleMenu", { producto});
  },
};

module.exports = main;
