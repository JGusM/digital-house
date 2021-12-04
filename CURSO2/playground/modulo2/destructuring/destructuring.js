//--------Destructuring o Asignacion por Destructuración---------

//-------------Metodo tradicional para Array----------
/* 
let colores = ["blanco", "celeste", "amarillo", "rojo", "negro"];//Un Array

console.log(colores);//muestra el contenido del array
let colorBlanco = colores[0]; //Creo una var y le asigno un indice del array
let colorCeleste = colores[1];//Creo una var y le asigno un indice del array
let colorAmarillo = colores[2];//Creo una var y le asigno un indice del array
console.log(colorBlanco);//muestro el contenido de la var
console.log(colorCeleste);//muestro el contenido de la var
console.log(colorAmarillo);//muestro el contenido de la var
*/

//-------------Metodo Destructuring para Arrays----------
/* 
let [colorBlanco, colorCeleste, colorAmarillo] = colores;//Creo una var y entre corchetes le doy nombre y JS crea var
console.log(colorBlanco);//muestro el contenido de la var
console.log(colorCeleste);//muestro el contenido de la var
console.log(colorAmarillo);//muestro el contenido de la var
console.log(colores);//No modifica el array de origen
*/
/* 
let cursos = ['Programacion', 'MKT', 'UX', 'Data Science', 'UX'];

let [programacion, mkt] = cursos;
console.log(programacion);
console.log(mkt);
*/
//-------------Metodo Destructuring para Objetos----------

//-------------Metodo tradicional para Objetos----------

/* 
let persona = {
    nombre: 'Denise',
    edad: 23,
    profesion: 'Programadora',
    seriesFavoritas: ['Breaking bad', 'Game of thrones', 'Friends']
}

let nombre = persona.nombre;
let edad = persona.edad;
console.log(nombre);
console.log(edad);
 */

 /* 
let persona = {
    nombre: 'Denise',
    edad: 23,
    profesion: 'Programadora',
    seriesFavoritas: ['Breaking bad', 'Game of thrones', 'Friends']
}

let { nombre, profesion} = persona;//crea una var y entre llaves le asigno las propiedades que quiero extraer
console.log(nombre);//Muestra Denise
console.log(profesion);//Muestra Programadora
//console.log(direccion); //Muestra Undefined
console.log(persona);//No altera el objeto original
 */
/* 
let persona = {
    nombre : 'Carli',
    edad : 26,
    domicilio : 'Calle falsa 123'
}

let {nombre, edad} = persona;//crea una var y entre llaves le asigno las propiedades que quiero extraer

console.log(persona);//Muestra el objeto original
console.log(nombre);//Muestra Carli
console.log(edad);//Muestra 26
*/
/* 
let persona = {
    nombre : 'Carli',
    edad : 26,
    domicilio : 'Calle falsa 123'
}

let { nombre, edad: nacimiento} = persona;// aca reemplaze edad por nacimiento
console.log(nacimiento);//aca muestra nacimiento
console.log(edad);//y aca edad es undefined
 */


//------------Ejercicios-------------------
/* 
Destructuring
Desestructuremos.
Para este ejercicio contamos con un array de destinos del mundo ya definido.
Queremos, usando destructuramiento, definir las variables bariloche y china, y extraer del array únicamente los destinos "Bariloche" y "China".


let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [ , bariloche,  ,china] = destinosDelMundo;
 */

/* 
Destructurando objetos
Desestructuremos la Ferrari.
Para este ejercicio contamos con un objeto literal auto ya definido.
Queremos, usando desestructuramiento, definir las variables marca y color, haciendo que las mismas tengan el valor correspondiente del objeto literal.


let auto  = {marca: 'Ferrari', kilometros: 31, color: "Rojo"};
let { marca, color} = auto;
 */








