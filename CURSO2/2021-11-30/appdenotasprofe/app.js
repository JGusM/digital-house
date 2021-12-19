
console.log("Aplicacion de tareas");
console.log("---------------------/n");
 
// let tareas = [
// {
//     titulo: "practicar el switch",
//     descripcion: "entender donde pudo utilizarlo",
//     estado: "pendiente",
// },
// {
//     titulo: "practicar el for",
//     estado:"terminado"
// },
// {
//     titulo:"ver json",
//     estado:"pendiente"
// }
// ]
// /* 
// console.log(tareas);
// console.log(tareas[0]);
// console.log(tareas[0].titulo);
// console.log(tareas.length);
//  */
// for(let i = 0; i < tareas.length; i++){
// //console.log(tareas[i].titulo);
// // console.log(i);
// // console.log(tareas);
// // console.log(tareas[i].titulo);
// //console.log(i);
// if(tareas[i].estado === "terminado"){
//     console.log(tareas[i].titulo + " - " + "esta terminado");
// }
// }


const fs = require('fs')

//console.log(fs);

let tareasJson = fs.readFileSync("./tareas.json", 'utf-8');
let tarea = JSON.parse(tareasJson)
console.log(tarea[0].titulo);

for (let i = 0 ; i < tareasJson.length ; i++){

}



console.log(process.argv);

























