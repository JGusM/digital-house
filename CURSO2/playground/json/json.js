/*---------JSON.parse-----------------
-----------de JSON a OBJETO----------*/
/*
let datosEnJson = '[{ "name":"Argentina", "capital":"Buenos Aires", "region":"Americas" }]'
let datosConvertidos = JSON.parse(datosEnJson);

console.log(datosConvertidos);//este console.log muestra el ojbeto
*/


/*---------JSON.stringify-----------------
-----------de OBJETO a JSON--------------*/
/*
let datosEnObjeto = {
    nombre: 'Juana',
    apellido: ' De Arco',
    pais: 'Francia'
}

let datosConvertidos = JSON.stringify(datosEnObjeto);

console.log(datosConvertidos);//este console.log muestra el JSON
*/

/*---------------De Array a JSON y de JSON a Array-----------------

let amigos = [ "Coco", "Pablito", "Sus", "Franco"];//esto es un Array

let amigosJSON = JSON.stringify(amigos); //aca lo convierte a JSON

let amigosOriginal = JSON.parse(amigosJSON); //aca lo convierte a Array

console.log(amigosJSON); //aca muestra un Array
console.log(amigosOriginal); //aca muestra un JSON
*/

/*--------Aca convierte de Objeto a JSON y de JSON a Objeto---------
let persona = {
    nombre: "Carli",
    edad: 26,
    domicilio: "Calle Falsa 123"
}

//console.log(persona); //aca muestra el objeto persona
let personaJSON = JSON.stringify(persona);//aca convierte de Objeto a JSON
//console.log(personaJSON); //aca muestra el objeto persona convertido a JSON
let personaOriginal = JSON.parse(personaJSON);// aca convierte de JSON a Objeto
console.log(personaOriginal);//aca muestra el JSON convertido a Objeto
*/