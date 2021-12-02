//let fechaActual = new Date();
//let fechaActual = new Date(1972, 5, 12); //Aca muestra el 12 de Junio de 1972
/* 
console.log(fechaActual); //Fecha completa
console.log(fechaActual.toUTCString()); //Fecha completa mejor presentada
console.log(fechaActual.getYear());//Año contando desde el 1900
console.log(fechaActual.getFullYear());//Año actual
console.log(fechaActual.getMonth());//Mes en numero menos 1
console.log(fechaActual.getDay());//Nro de dia de la semana lunes 1, martes 2
console.log(fechaActual.getDate());//Nro del dia actual
*/


//-------Como mostrar Fecha actual------------------

/* 
let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth();
let dia = fechaActual.getDate();

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
 "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];//Creo un array con todos los meses
 
 console.log("Hoy es el " + dia + " de " + (mes + 1) + " de " + anio);//aca muestra la fecha actual con el mes con formato nro
 console.log("Hoy es el " + dia + " de " + meses[mes] + " de " + anio);//Al array meses le pido la var mes porque es la que almacena el nro que necesito
 */

//-----------Ejercicio Date ----------------

/* 
Date
Date un tiempo.
En este ejercicio ya vamos a tener disponible la fecha en la variable fecha y, utilizándola, debemos imprimir el siguiente mensaje:
"Hoy es el día XX del mes YY del año ZZZZ", donde XX es el número del día, YY es el número del mes y ZZZZ es el número del año. 
Ejemplo de cómo podría verse una fecha con este formato:
"Hoy es el día 0 del mes 4 del año 2019"
Funciones de Date que nos van a ayudar:
getDate()
getMonth()
getFullYear()

// console.log("Día: "+fecha.getDate())
// console.log('Hoy es el día '+????+' del mes '+????+' del año '+????)

 let fecha = new Date();

let anio = fecha.getFullYear();
let mes = fecha.getMonth();
let dia = fecha.getDate();

console.log('Hoy es el día '+ dia +' del mes '+mes+' del año '+anio)

console.log("Hoy es el día " + dia + " del mes " + (mes + 1) + " del año " + anio);

 */



















