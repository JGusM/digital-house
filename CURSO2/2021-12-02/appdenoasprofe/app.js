let archivoTareas = require("./funcionesDeTareas");

//Si desea investigar un poco más sobre este módulo nativo de NodeJs
//https://nodejs-es.github.io/api/process.html#process_es_process
let accion = process.argv[2];

switch (accion) {
  case "listar":
    console.log("Listado de tareas");
    console.log("------------------");
    let tareas = archivoTareas.leerArchivo();

    //microdesafio 1 //cambiar la forma de mostrar. de un for a un forEach

    tareas.forEach((tarea, i) => {
      console.log(i + 1 + ". " + tarea.titulo + " - " + tarea.estado);
    });

    //fin cambiar
    console.log();
    break;

  //case verifique si quiero la opcion de "crear"

  case "crear":
    console.log("Creando tarea");
    console.log("------------------");
    //tomar el valor de la tarea proccess.argv[3] (guardarlo en una variable)
    let tarea = {
      titulo: process.argv[3],
      estado: "pendiente",
    };
    //ejecutar la funcion guardarTarea y enviarle como parámetro el valor de la tarea
    archivoTareas.guardarTarea(tarea);
    console.log(tarea.titulo + " -> " + tarea.estado);
    console.log("------------------");
    break;

  //micro desafio 3
  //agrear la opcion de filtrar por estado
  case "filtrar":
    console.log("Filtro de tareas");
    console.log("------------------");
    //recibir el estado a filtrar
    let filtro = process.argv[3]

    console.log("------------------");
    console.log(filtro)
    console.log("------------------");

    //ejecutar el filtro que hice anteriormente

    let tareasFiltradas = archivoTareas.filtrarPorEstado(filtro)

    //mostrar las tareas filtradas
    tareasFiltradas.forEach((tarea, i) => {
        console.log(i + 1 + ". " + tarea.titulo + " - " + tarea.estado);
      });

    break;
  //fin de agregar opcion filtrar

  case undefined:
    console.log();
    console.log("Atención - Tienes que pasarme una acción");
    console.log("Las acciones disponibles son: listar");
    console.log("----------------------------------------");
    break;

  default:
    console.log("------------------------------------");
    console.log("No entiendo qué quieres hacer");
    console.log("Las acciones disponibles son: listar");
    console.log("------------------------------------");
    break;
}
