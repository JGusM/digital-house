/*
// Ejemplo de length

let mensaje = 'Gran día para practicar Javascript!';
console.log(mensaje.length);// devuelve la cantidad de elementos del string

 // Ejemplo de indexOf
console.log(mensaje.indexOf('día'));//devuelve el nro de indice que se encuentra el elemento

// Ejemplo de slice
console.log(mensaje.slice(0, 24));// muestra el recorte desde el 0 al 24
console.log(mensaje); //aca muestra que el mensaje original sigue igual
*/
/*
let mensaje = 'Gran día para practicar Javascript!';
console.log(mensaje);

// Ejemplo de trim
console.log(mensaje.trim());// con trim recorta espacios iniciales si los tuviera

// Ejemplo de split
console.log(mensaje.split(" "));// aca va a devolver un array separando el string por espacios vacios

// Ejemplo de replace
console.log(mensaje.replace('Javascript', 'todo'));// aca va a reemplazar Javascript por todo
console.log(mensaje);// aca muestra que el mensaje original sigue igual

let nombre = 'gustavo';
console.log(nombre[4])//aca muestra el elemento del indice 4 que es la a
*/
/*
let frase = 'Breaking Bad Rules';
console.log(frase.length);// aca muestra la cantidad de elementos que tiene el string
console.log(frase.slice(-10, -6));// aca recorta de atras para adelante y devuelve Bad
console.log(frase.slice(13, 18));// aca recorta Rules
*/
/*
Completar URL
Debemos crear una función llamada dominio que recibirá un string como "digitalhouse.com.ar" y su función será retornar: "http://www.digitalhouse.com.ar".

function dominio (string){
return "http://www." + string
}
*/

/*
Contar los caracteres
Lo primero que necesitamos es declarar una variable llamada texto, asignándole como valor un texto (string), el que queramos. Luego, utilizando la propiedad length, tendremos que imprimir en consola el total de caracteres que contiene la frase.

let texto = ("el texto que queramos");
console.log(texto.length)
*/

/*
Reemplazo fast fast
Nuestra misión, ahora, es crear una función llamada reemplazoFastFast que va a recibir los siguientes tres parámetros:

1. Un texto.

2. La palabra que vamos a buscar para reemplazar.

3. La palabra que vamos a usar para reemplazar.

La función deberá devolver el texto con la palabra reemplazada.

Ejemplo:

let textoSinGuiones = reemplazoFastFast('Este texto es mala onda','mala','buena');
console.log(textoSinGuiones) //'Este texto es buena onda'

function reemplazoFastFast (string, buscar, reemplazar){
    return string.replace(buscar, reemplazar)
}
console.log(reemplazoFastFast("Es un dia lluvioso", "lluvioso", "hermoso"));
*/

/*

¿Están hablando de mí?
Para el siguiente ejercicio vamos a suponer que tenemos un texto que copiamos y queremos saber si el texto menciona una palabra en particular.
Para lograrlo, tendremos que crear una función llamada menciona, que recibirá dos parámetros: un texto —que es donde vamos a buscar— y una palabra —que es la que vamos a averiguar si se menciona en el texto—. La misma función retorna true en el caso de encontrar la palabra.
Ejemplo:
menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos','programación'); // true

function menciona ( string , palabra){
    return string.includes(palabra)
}
console.log(menciona("estan hablando de mi", "hablando"));//aca devuelve true porque encontro la palabra que buscaba
*/

/*
Solo el nombre
Teniendo como punto de partida la cadena de texto '¡Hola!, soy Carli', deberemos recortarla para poder obtener el nombre 'Carli' en una nueva variable llamada licenciada.
IMPORTANTE: Para la resolución tendremos que usar la función slice().

let frase = 'Hola!, soy Carli';
let licenciada = frase.slice(11, 16);// aca recorta Carli
*/