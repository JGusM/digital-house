//---------push--------
/* 
let nombres = [ "Juana", "Mariana", "Pablo" ];
let elPrimero = nombres.push("Gustavo");
console.log(nombres);
console.log(elPrimero);
 */
//---------pop--------
/*
let nombres = [ "Juana", "Mariana", "Pablo" ];
let elPrimero = nombres.pop();
console.log(nombres);
console.log(elPrimero);
*/

/* ---------unshift--------
let nombres = [ "Juana", "Mariana", "Pablo" ];
let elPrimero = nombres.unshift("Gustavo");
console.log(nombres);
console.log(elPrimero);*/

/* ---------push--------
let nombres = [ "Juana", "Mariana", "Pablo" ];
let elPrimero = nombres.shift();
console.log(nombres);
console.log(elPrimero);*/

/*------------push y pop ---------
let notas = [ 3, 5, 10, 9, 7, 8, 8, 8];

notas.push(1);
notas.push(2);
notas.push(4);

let elUltimo = notas.pop()

console.log(notas);
console.log(elUltimo); */

/*----------shift y unshift-----------

let notas = [ 3, 5, 10, 9, 7, 8, 8, 8];

notas.shift();
notas.shift();

notas.unshift(1);

console.log(notas);*/

/*-------- Ejemplo de Join--------------

let nombres = [ "Juana", "Mariana", "Pablo", 3, 5, 10, 9 ];
console.log(nombres);
let lista = nombres.join();
console.log(lista);

/*----------indexOf----------------

let notas = [ 3, 5, 8, 10, 9, 7, 8, 8 ];

let posicionDelOcho = notas.indexOf(8);

console.log(notas);
console.log(posicionDelOcho);*/

/*----------lastIndexOf----------------

let notas = [ 3, 5, 8, 10, 9, 7, 8, 8 ];

let posicionDelOcho = notas.lastIndexOf(8);

console.log(notas);
console.log(posicionDelOcho);*/


/*-----------Buscar un elemento con un if-----------

let notas = [ 3, 5, 8, 10, 9, 7, 8, 8 ];

let posicionDelOcho = notas.indexOf();

if ( posicionDelOcho != -1) {
    console.log('Lo encontré');
}else{
    console.log('No lo encontré');
}*/

/*---------- join----------------
let notas = [ 3, 5, 8, 10, 9, 7, 8, 8 ];

let resultadoJuntado = notas.join(" / ");

console.log(resultadoJuntado);*/

/*-----------------includes()----------

let notas = [ 3, 5, 8, 10, 9, 7, 8, 8 ];

let prueba = notas.includes(2);

console.log(prueba);*/


/*--------EJERCICIOS DE PLAYGROUND-------------
indexOf
Veamos cómo encontrar elementos puntuales dentro de un array.
Para este ejercicio contamos con el array alumnos. Queremos saber dónde están guardados los nombres "Juan" y "Francisco". Utilicemos un método de array para averiguarlo.
Para eso, declaremos las variables indiceJuan e indiceFrancisco y almacenemos en ellas el índice correspondiente de cada uno.

let alumnos = ["Juan", "Pepe", "Jorge", "Francisco"]

let indiceJuan = alumnos.indexOf("Juan");
let indiceFrancisco = alumnos.indexOf("Francisco");


Join
Si lo juntamos, todo tiene sentido.
Tenemos un array con palabras sueltas que, juntas, forman una gran frase.
Queremos, utilizando un método de array sobre la arrayFrase , convertirlo en una oración entera, y almacenar ese String en una variable llamada fraseNueva.
Ejemplo:
console.log(fraseNueva); // "No he fracasado, simplemente me he topado con diez mil soluciones equivocadas"

let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];
  
  let fraseNueva = arrayFrase.join(" ")
  console.log(fraseNueva);

  
  Pop
¡Sí! ¡Alexis se egresó del terciario!
Para este ejercicio contamos con el array estudiantes, en donde, en cada índice, almacena un objeto con las propiedades nombre, promedio y curso.
Queremos sacar a Alexis, que acaba de egresar, y sabemos que está último en ese array.
Para eso debemos, utilizando un método de array, guardar los datos de Alexis en una variable nueva llamada alumnoEgresado.

let estudiantes = [
  {
    nombre: "Alvaro",
    promedio: 9,
    curso: "Android"
  },
  {
    nombre: "Daniel",
    promedio: 6,
    curso: "Full Stack"
  },
  {
    nombre: "Alexis",
    promedio: 3,
    curso: "iOS"
  }
];

let alumnoEgresado =  estudiantes.pop();

Push
Se inscribieron dos estudiantes nuevos y queremos agregarlos al final del array estudiantes.
Nuestro trabajo será agregar de a un alumno por vez, utilizando algún método de array.
Los valores de cada uno son:
nombre: Juan
promedio: 5
curso: iOS
------------------
nombre: Miguel
promedio: 2
curso: Android

let estudiantes = [
  {
    nombre: 'Alvaro',
    promedio : 9,
    curso : 'Android',
  },
  {
    nombre: 'Daniel',
    promedio : 6,
    curso : 'Full Stack',
  },
  {
    nombre: 'Alexis',
    promedio : 3,
    curso : 'iOS',
  },
]
estudiantes.push({nombre: "Juan", promedio: 5, curso: "iOS"})
estudiantes.push({nombre: "Miguel", promedio: 2, curso: "Android"})


shift
Se dio de baja un alumno.
Tenemos que dar de baja al primer estudiante y queremos sacarlo del array estudiantes. Para eso, debemos crear una variable llamada alumnoDeBaja y, utilizando un método de array, almacenar en ella a ese primer estudiante.

 let estudiantes = [
   {
     nombre: 'Alvaro',
     promedio : 9,
            curso : 'Android',
          },
           {
             nombre: 'Daniel',
             promedio : 6,
             curso : 'Full Stack',
            },
           {
             nombre: 'Alexis',
             promedio : 3,
             curso : 'iOS',
            },
         ]
         
         let alumnoDeBaja = estudiantes.shift();

unshift
Se reintegraron alumnos.
Tenemos la tarea de reintegrar a dos estudiantes que se habían registrado al principio de todo, se dieron de baja, ¡pero volvieron! Y para que no pierdan su lugar privilegiado queremos, utilizando un método de array, agregar al inicio del mismo a cada estudiante (de a uno a la vez).
Los datos que hay que agregar de cada uno son:
         
nombre: "Mariana",
         promedio: 9,
         curso: "Full Stack"
         -------------------------
         nombre: "Francisco",
         promedio: 2,
         curso: "Android"
         
    let estudiantes = [
        {
                nombre: 'Alvaro',
                promedio : 9,
                curso : 'Android',
              },
                {
                  nombre: 'Daniel',
                  promedio : 6,
                  curso : 'Full Stack',
                },
                {
                  nombre: 'Alexis',
                promedio : 3,
                curso : 'iOS',
                }
              ]
              estudiantes.unshift({nombre: "Mariana", promedio: 9, curso:"Full Stack"})
            estudiantes.unshift({nombre: "Francisco", promedio: 2, curso:"Android"})
            
            console.log(estudiantes);*/

            
            
            
            
            
            
            
            