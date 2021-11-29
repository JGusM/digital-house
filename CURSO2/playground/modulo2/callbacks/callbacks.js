/* 
let sumar = (numero1, numero2) => numero1 + numero2;
let restar = (numero1, numero2) => numero1 - numero2;
let multiplicar = (numero1, numero2) => numero1 * numero2;
let dividir = (numero1, numero2) => numero1 / numero2;

let calculadora = (numero1, numero2, operacion) => operacion(numero1, numero2);

console.log(calculadora(18, 3, sumar));
console.log(calculadora(18, 3, restar));
console.log(calculadora(18, 3, multiplicar));
console.log(calculadora(18, 3, dividir)); 
*/

/* 
setTimeout ( function(){
    console.log('Hola Mundo!');
}, 1000)

let miCallback = () => console.log('Hola mundo!');
setTimeout(miCallback, 1000)
 */

/* 
function nombreCompleto(nombre, apellido){
    return nombre + ' ' + apellido;
};
//console.log(nombreCompleto('Gustavo', 'Mei'));

function saludar(nombre, apellido, callback){
    return  '¡Hola ' + callback(nombre, apellido) + '!';
};

saludar('Juanito', 'Sanchez', nombreCompleto);


function iniciales(nombre, apellido){
    return nombre[0] + apellido[0];
};
console.log(saludar('Juanito', 'Sanchez', iniciales));

 */
/* 
Pasar un callback
Vamos a crear tres funciones y ver cómo empezar a trabajar con callbacks.
La primera función se llamará doble. Esta recibirá un número y retornará el doble.
La segunda función se llamará triple. Esta recibirá un número y retornará el triple.
La tercera función se llamará aplicarCallback y recibirá por parámetro un numero y una función. Esta retornará el valor de aplicar dicha función al valor que recibió.
Ejemplo:
aplicarCallBack(2, doble); // 4
aplicarCallBack(4, triple); // 12

function doble (numero){
    return numero * 2
    }
    function triple (numero){
    return numero * 3
    }
    function aplicarCallback (numero, callback){
    return callback(numero);
    }
 */    

/* 
    Hagamos una calculadora
    Vamos a ver cómo podemos crear una función que nos sirva como calculadora. Empecemos con algo sencillo...
        Creemos cuatro funciones que realicen las operaciones principales de una calculadora. Nuestro trabajo será definir la función suma, resta, multiplicacion y division. Cada una de ellas recibirá dos parámetros y deberá realizar la operación matemática según corresponda. Por ejemplo, la función suma deberá retornar la suma de ambos parámetros; la función resta, la resta de ambos parámetros, y así sucesivamente.
    Ahora sí, con esas funciones ya definidas, creemos la función calculadora. Esta función recibirá dos parámetros numéricos y una función, que será nuestro callback.

    function suma (numeroA, numeroB){
        return numeroA + numeroB;
        }
        function resta (numeroA, numeroB){
        return numeroA - numeroB;
        }
        function multiplicacion (numeroA, numeroB){
        return numeroA * numeroB;
        }
        function division (numeroA, numeroB){
        return numeroA / numeroB;
        }
        function calculadora(numeroA, numeroB, callback){
        return callback(numeroA, numeroB);
        }
*/

/* 
Pasar un callback reloaded
Vamos a ejecutar una función que recibimos por parámetro a cada uno de los elementos de un array. 
Para esto debemos completar la función procesar. Esta recibe dos parámetros:
1. El primer parámetro es un array.
2. El segundo parámetro que recibe es una función (al que solemos llamar callback).
La función deberá retornar un array donde cada elemento es el resultado de aplicar la función pasada a un elemento del array pasado.
Dejamos unas funciones para comprender y probar con el ejemplo:

  let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
  console.log(urlCompletas); // imprime [ 'http://www.google.com', 'http://www.yahoo.com' ]
  let largoDeElmentos = procesar(["www.google.com","www.yahoo.com"],largoString)
  console.log(largoDeElmentos); // imprime [ 14, 13 ]

let arrayDeWebs = ['www.google.com', 'www.yahoo.com', 'wwww.xataka.com,']

function agregarHttp(url) {
    return "http://" + url
}

function procesar(urlArray, callback){
    let urlCompletas = []
    for (let i = 0; i < urlArray.length; i++) {
       urlCompletas.push(callback(urlArray[i]))
    }
    return urlCompletas
};
console.log(procesar(arrayDeWebs, agregarHttp));
 */
