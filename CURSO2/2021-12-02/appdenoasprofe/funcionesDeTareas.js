const fs = require("fs");

let archivoTareas = {
  archivo: "tareas.json",
  leerArchivo: function () {
    return JSON.parse(fs.readFileSync(this.archivo, "utf-8"));
  },
  // microdesafio 2- a- escribirJson
  escribirJson: function (arrayDeTareas) {
    //pasar a string arrayDeTareas
    let arrayString = JSON.stringify(arrayDeTareas);
    fs.writeFileSync(this.archivo, arrayString);
  },
  //micro desafio 2 - b
  //agregar una funcion que se llama guardarTarea

  guardarTarea: function (tarea) {
    //bloque de código

    //leer el archivo tareas.json (json)
    let tareas = this.leerArchivo();
    // agregarle (al array de objetos literales) la tarea que me enviaron por parametro
    tareas.push(tarea);
    //escribir en el json --> ya hicimos una funcion
    this.escribirJson(tareas);
  },

  //agregar una funcion que se llame filtrarPorEstado -> recibe un parametro que se llama estado

  filtrarPorEstado(estadoFiltrar) {
    //leer todas las tareas (array de tareas)
    let tareas = this.leerArchivo();

    //filtrar las tareas por el estado (funciones de los array para filtrar) -> filter

    // let arrayNuevo = estudiantes.filter( function(elemento){
    //     return elemento.promedio <= 7
    // })

    let tareasFiltradas = tareas.filter(function (t) {
      return t.estado === estadoFiltrar;
    });

    //devolver una lista del array filtrado por el estado

    return tareasFiltradas;
  },
  //fin de funcion filtrarPorEstado
};

module.exports = archivoTareas;
