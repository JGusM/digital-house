// let curso = {
//     cantidadDeAlumnos: 32,
//     docentes: ['Nacho', 'Javier'],
//     horario: 'de 19 a 21 hs.',
//     notificaciones: function(){
//         return 'El horario de la cursada es ' + this.horario;
//     }
// }

//console.log(curso);//muestra el objeto literal

//console.log('La cantidad de alumnos de este curso es de ' + curso.cantidadDeAlumnos );

//console.log(curso.notificaciones());


//------------Este es un OBJETO CONSTRUCTOR ------------
// function Curso(cantidadDeAlumnos, docentes, horario){
//     this.cantidadDeAlumnos = cantidadDeAlumnos;
//     this.docentes = docentes;
//     this.horario = horario;
// }

// let cursoDeProgramacion = new Curso(50, ['Javier', 'Gerardo'], "de 19 a 21 hs.");
// let cursoDeMarketing = new Curso(45, ['Diego', 'Debbie'], "de 17 a 19 hs.");

// console.log(cursoDeProgramacion);
// console.log(cursoDeMarketing);
// console.log(curso);

//---------------Ejercicios de PLAYGROUNMD------------

// Crear un objeto literal
// Vamos a ver cómo crear nuestro objeto "perro":
// Declarar una variable llamada perro de tipo objeto literal.
// Esa variable debe tener 3 propiedades:
// 1. nombre, con un valor de tipo String.
// 2. edad, con un valor de tipo Number.
// 3. vacunado, con un valor de tipo Boolean.

// let perro = {
//     nombre: 'Tanya',
//     edad: 7,
//     vacunado: true
// }


// Utilizando los métodos de los objetos
// Vamos a reforzar el concepto de un objeto literal tratando de representar un deportista y pedirle que entrene.
// Para este ejercicio contamos con un objeto literal deportista ya definido, que tiene los siguientes atributos: nombre, energia, experiencia.
// Queremos poder pedirle al deportista que entrene. Para esto, nuestro trabajo va a ser completar la función entrenarHoras.
// La función entrenarHoras tiene las siguientes tres características:
// Recibe por parámetro la cantidad de horas.
// Resta a su energía (this.energia) la cantidad de horas x 5.
// Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
// Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía y experiencia del deportista por consola.


// let deportista = {
// 	energia: 100,
//     experiencia: 10,
//     nombre: "Aimar",
//     entrenarHoras: function(cantHoras){
//         this.energia = this.energia-(5*cantHoras);
//         this.experiencia = this.experiencia+(2*cantHoras);
//     }
// };

// console.log("==Antes de comenzar entrenamiento==");
// console.log("Deportista energia: "+deportista.energia);
// console.log("Deportista experiencia: "+deportista.experiencia);
// console.log("==ENTRENANDO==");
// deportista.entrenarHoras(5);
// console.log("==FIN ENTRENAMIENTO==");
// console.log("Deportista energia: "+deportista.energia);
// console.log("Deportista experiencia: "+deportista.experiencia);


