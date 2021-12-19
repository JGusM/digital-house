//-----------Spread Operator ----------

//-----------Spread Operator para Arrays ----------



/* 
let frutasUno = ['banana' , 'pera' , 'manzana' ];//Un array
let frutasDos = [ 'durazno' , 'ciruela' , 'naranja' ];//Otro array

let todasLasFrutas = [ ...frutasUno, ...frutasDos];//Usando los 3 puntos crea un array conteniendo los 2 anteriores

console.log(todasLasFrutas);//Muestra las 6 frutas
*/
/* 
let peliculasAccion = [ 'End Game' , 'Iron Man 3' , 'Capitan América' ];//Un array
let peliculasComedia = [ 'Mi Pobre Angelito' , '¿Que pasó ayer?' ];// otro array
console.log(peliculasAccion);//muestra un array
console.log(peliculasComedia);//muestra otro array

let peliculas = [ peliculasAccion, peliculasComedia]; //creo var con 2 array
console.log(peliculas);//muestro los 2 array separados

let peliculas = [ ...peliculasAccion, ...peliculasComedia]; // creo 2 array unidos con spread
console.log(peliculas);//muestro 2 arrays unidos
 */

/* 
let parte = ['los', 'cumplas'];
let oracion = [ 'Que', ...parte, 'feliz']
console.log(oracion);
 */




//---------------------Spread Operator para Objetos ----------------------




/* 
let cursada = {
    curso : 'Fullstack',
    turno : 'Mañana',
    sede : 'Belgrano'
};

console.log(cursada);//Muestra el Objeto cursada

let estudianteUno = {
    nombre : 'Denise',
    email : 'denise@email.com',
    ...cursada
};// con ...cursada unifico los datos de los 2 objetos

console.log(estudianteUno);//muestra la suma del objeto cursada y estudiantesUno

let estudianteDos = {
    nombre : 'Javier',
    email : 'javier@email.com',
    ...cursada
};// con ...cursada unifico los datos de los 2 objetos
console.log(estudianteDos);//muestra la suma del objeto cursada y estudiantesDos
 */

/* 
let generoComedias ={
    nombreGenero : 'Comedia',
    popularidad : 3
}
console.log(generoComedias);//Muestra el objeto generoComedias

let miPobreAngelito ={
    nobre : 'Mi pobre angelito',
    duracion : 120,
    generoComedias
}
console.log(miPobreAngelito);//Muestra el objeto miPobreAngelito INCLUI TAMBIEN EL OBJETO GENEROCOMEDIAS PARA MOSTRAR QUE SE VE COMO UN OBJETO APARTE

let quePasoAyer ={
    nobre : '¿Que paso ayer?',
    duracion : 110,
}
console.log(quePasoAyer);//Muestra el objeto quePasoAyer
 */


/* 
let generoComedias ={
    nombreGenero : 'Comedia',
    popularidad : 3
}
console.log(generoComedias);//Muestra el objeto generoComedias

let miPobreAngelito ={
    nobre : 'Mi pobre angelito',
    duracion : 120,
    ...generoComedias
}
console.log(miPobreAngelito);//Muestra el objeto miPobreAngelito

let quePasoAyer ={
    nobre : '¿Que paso ayer?',
    duracion : 110,
    ...generoComedias
}
console.log(quePasoAyer);//Muestra el objeto quePasoAyer
 */

/* 
let auto = { marca: 'Ferrari', kms: 0, anio: 2019};
console.log(auto);//muestra el objeto auto

let corredorUno = { nombre: 'Vettel', edad: 32,}
console.log(corredorUno);//muestra el objeto corredorUno

let corredorDos = { nombre: 'Leclerc', edad: 21}
console.log(corredorDos);//muestra el objeto corredorDos
 */

/* 
let auto = { marca: 'Ferrari', kms: 0, anio: 2019};
console.log(auto);//muestra el objeto auto

let corredorUno = { nombre: 'Vettel', edad: 32, ...auto}
console.log(corredorUno);//muestra el objeto corredorUno con objeto auto agregado

let corredorDos = { nombre: 'Leclerc', edad: 21, ...auto}
console.log(corredorDos);//muestra el objeto corredorDos con objeto auto agregado
 */





//-----------El spread operator usado en funciones----------






/* 
El spread operator dentro de una funcion puede ser utilizado para pasarle n cantidad de parametros a 
la funcion y estos van a ser pasados en formato array

function conVariosParametros(...params){
    codigo a ejecutar
}
conVariosParametros('a');
conVariosParametros('a', 'b');
conVariosParametros('a', 'b', 'c');
 */

/* 
function peliculasVistas(...nombresDePeliculas) {//aca uso los 3 puntos para poder recibir n cant de params
    for (let i = 0; i < nombresDePeliculas.length; i++) {//Hago un ciclo for para iterar cada uno de los params
        console.log('La persona ya vió ' + nombresDePeliculas[i]);//muestro cada uno de los elementos del array
        }
}

peliculasVistas('End Game', 'Iron Man 3', 'Mi Pobre Angelito', '¿Que pasó ayer?')//Ejecuto la funcion
 */

/* 
let notas = [9.3, 8.5, 3.2, 7, 10];
console.log(Math.min(...notas));//Devuelve 3.2(valor minimo) Y nos demuestra que a una funcion le puedo pasar un array como parametro utilizando los 3 puntos del spread
 */


//-----------------Parametro REST-------------------

/* 
function miFuncion(param1, param2, ...otros) {//Uso los 3 puntos al final y los parametros que agregue me los guarda en un array
    return otros
}

console.log(miFuncion('a', 'b' , 'c' , 'd' , 'e'));//muestra c, d y e
 */

/* 
function sumar(...numeros) {
    return numeros.reduce((acum, num) => acum += num);//reduce va a hacer la sumatoria
}
console.log(sumar(1, 4));//muestra 5
console.log(sumar(13, 6, 8, 12, 23, 37));// muestra 99
 */
