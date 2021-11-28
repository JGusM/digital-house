// if ternario

// let elMayor = 4 > 10 ? 'El 4 es mayor' : 'El 10 es mayor';
// console.log(elMayor);

//switch

// let dia = 'Lunes';
// switch (dia){
//     case 'Lunes':
//         console.log('Es lunes, se labura');
//     break;
//     case 'Sábado':
//         console.log('Es sábado, se sale');
//     break;
//     case 'Domingo':
//         console.log('Es domingo, se come asado');
//     break;
//     default:
//         console.log('No es lunes ni sábado ni domingo');
//     break;
// }

// if ternario

// let fruta = 'Manzana';

// let resultado = fruta == 'Manzana'? 'Buenisimo, me gustan las manzanas' : 'Ufa, queria manzana';
// console.log(resultado);

//switch

// let semaforo = 'Rojo';

// switch(semaforo){
//     case 'Verde':
//         console.log('Puedo cruzar');
//         break;
//     case 'Amarillo':
//         console.log('Precaucion');
//         break;
//     case 'Rojo':
//         console.log('No cruces, hay que esperar');
//         break;
//     default:
//         console.log('No funciona el semaforo');
//         break;
// }

// let edad = 19

// switch(edad){
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log('Voy al jardin de infantes');
//         break;
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//     case 11:
//     case 12:
//         console.log('Voy al primario');
//         break;
//     case 13:
//     case 14:
//     case 15:
//     case 16:
//     case 17:
//     case 18:
//         console.log('Voy al secundario');
//         break;
//     default:
//         console.log('Ya termine el colegio');
//         break;
// }

// Fin de semana
// El objetivo de este ejercicio es imprimir en consola un texto que irá variando según el día que contenga la variable dia. Para esto, ya presentamos un código hecho con if/else que tendremos que modificar y convertirlo a un switch, manteniendo el mismo resultado.

// let dia = 'jueves'
// function finDeSemana (dia) {	
// 	if (dia == 'viernes') {
//     	console.log('buen finde')
// 	} else if (dia == 'lunes') {
//     	console.log('buena semana')
// 	} else {
//     	console.log('buen dia')
// 	}
// }

// let dia = 'jueves'
// function finDeSemana (dia) {	
// switch(dia){
// 	case 'viernes':
//     	console.log('buen finde');
// 		break;
// 	case 'lunes':
//     	console.log('buena semana');
// 		break;
// 	default:
//     	console.log('buen dia');
// }
// }

// Tengo clases
//El objetivo de este ejercicio es imprimir en pantalla un texto que estará condicionado de la siguiente manera. Utilizando switch deberemos evaluar si la variable "día" es lunes, miércoles o viernes; y, en ese caso, debe imprimir el texto "tenés clases". Para cualquier otro caso debe imprimir "no tenés clases".

// function tengoClases(dia) {
// 	switch (____) {
//     	//Escribe tu código aquí
// 	}
// }

// function tengoClases(dia) {
// 	switch (dia) {
//     	case 'lunes':
// 		case 'miércoles':
// 		case 'viernes':
// 			console.log( 'tenés clases');
// 			break;
// 		default:
// 			console.log('no tenés clases')
// 	}
// }

// Practicando el if ternario
// Vamos a poner en práctica el if ternario. En este escenario vamos a contar con dos bicicletas y nos interesa saber cuál tiene el rodado más grande.
// Para esto, a la variable bicicletaConRodadoGrande debemos asignarle la bicicleta utilizando un operador ternario. El operador ternario debe comparar los rodados de ambas bicicletas y retornar la que tenga el mayor rodado.

// let bicicletaA = {
//     rodado: 18,
//     marca: "Mountain Bike"
// }
// let bicicletaB = {
//     rodado: 24,
//     marca: "Aurora"
// }

// let bicicletaConRodadoGrande = bicicletaA.rodado > bicicletaB.rodado ? bicicletaA : bicicletaB ;

// console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );

