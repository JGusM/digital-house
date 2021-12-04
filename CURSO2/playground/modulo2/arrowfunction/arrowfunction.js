//---------------- Arrow Functions -----------------

//-------------------No necesita ni return ni llaves--------------------



/* 
let suma = (num1, num2) => {return num1 + num2};//No hace falta return, ni llaves, pero lleva parentesis en los params
console.log(suma(6,4));//Muestra 10

let dividir = (numeroA, numeroB) => numeroA / numeroB;//No hace falta return, ni llaves, pero lleva parentesis en los params
console.log(dividir(20,4));//Muestra 5
 */



//-------------------Si recibe un solo params no necesita parentesis--------------------




/* 
let dobleDe = numero => numero * 2;//1 solo params: no hace falta parenteses y el return esta implicito
console.log(dobleDe(4));//Muestra 8

let laMitad = numero => numero / 2;   //recibe un solo params y no necesita parentesis
console.log(laMitad(8));   //muestra 4
*/




//-----------------Con llaves y return porque lleva mas de una linea-----------



/* 
let tengoQueTrabajar = dia => {
    if(dia == 'Sábado' || dia == 'Domingo'){
        return 'No tenes que trabajar';
    }else{
        return 'Si, Nacho, tenes que ir a trabajar'
    }
}
console.log(tengoQueTrabajar('Lunes'));;
 */

/* 
let esMultiplo = (a, b) => {
    let resto = a % b;
    return resto == 0;
}
console.log(esMultiplo(24,4));   //muestra true Sino es multiplo muestra false
 */

/* 
let horaActual = () => {
    let fecha = new Date();
    return fecha.getHours() + ':' + 
    fecha.getMinutes();
}
console.log(horaActual());//muestra la hora actual
*/




//------------------Sin params lleva solo parentesis------------------



/* 
let saludo = () => 'Hola Mundo'; //sin params: requiere parentesis y el return esta implicito
console.log(saludo());// Muestra Hola Mundo
*/



// let dameCinco = () => [1,2,3,4,5];
// console.log(dameCinco());

// let multiplicarPorDos = (a) => a*2;
// console.log(multiplicarPorDos(123));

// function multiplicarPorDos() {
//     return 123 * 2 ;
// }
//  console.log(multiplicarPorDos(123, 2));




// ----------------------Ejercicios Playground---------------



/* 
Convertir a arrow function
Empecemos por practicar la sintaxis de una arrow function que no recibe parámetros.
Para este ejercicio vamos a dar tres funciones ya definidas. Nuestro trabajo será cambiarle la sintaxis y volver a escribirlas para que sean funciones de tipo arrow.

function dameCinco() {
    return [1,2,3,4,5];
}

function multiplicarPorDos() {
  return 123 * 2 ;
}

function mostrarNombre() {
  return "Mi nombre es Hernán";
}

let dameCinco = () => [1,2,3,4,5];

let multiplicarPorDos = () => 123*2;

let mostrarNombre = () => 'Mi nombre es Hernán';
 */



/* 
Arrow function con parámetro
Ahora nuestro trabajo será refactorizar la función saludar() que recibe un parámetro, es decir, escribirla con la sintaxis necesaria para convertirla en una arrow function.

function saludar(nombre) {
    return 'Hola, ' + nombre + '!';
}
let saludar = nombre => 'Hola, ' + nombre + '!'
console.log(saludar('Gustavo'));
 */



/* 
Ahora probemos con más de uno
¡Vamos a pasar nuestra función declarada a una arrow!
Y sí, solo nos falta practicar la sintaxis de una arrow function que reciba más de un parámetro. Tomemos la función saludar(), que esta vez recibe un nombre y un apellido, y veamos de convertirla en una arrow function.

function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' +  apellido + '!';
}

let saludar = (nombre, apellido) => 'Hola, ' + nombre + ' ' + apellido + '!';
 */




