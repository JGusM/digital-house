/* 
const fs = require("fs");
const nombre = "tareas.json"

let tareas = fs.readFileSync(__dirname + '/tareas.json', 'utf-8')
console.log(tareas);
 */


console.log("Aplicacion de tareas");
console.log("---------------------/n");

let tarea = {
    titulo: "practicar el switch",
    descripcion: "entender donde pudo utilizarlo",
    estado: "pendiente",
}

console.log(tarea);