// for (let i = 1; i <= 10; i++){
//     console.log(i*7);
// }

// for (let i = 0; i < 10; i++){
//     console.log('El valor de i es igual a: ' + i);
// }

// for (let vuelta = 1; vuelta <=5 ; vuelta++){
//     console.log('Dando la vuelta número ' + vuelta);
// }


// Repetir como un loro
// Vamos a programar una función que se comporte como un loro. Sí, todo lo que "oye", ¡lo repite!
// La función debe llamarse loro y debe recibir como parámetro el texto y repetirlo 5 veces por consola.

// function loro (texto){
//     for (let i = 1 ; i <= 5 ; i ++){
//             console.log(texto)
//     }
// }
// console.log(loro('Gus'));

//---------- ESTE EJERCICIO NO ME DIO--------------
function noParesDeContarImparesHasta(numero){
    let total = 0;    
    for (let i = 0 ; i <= numero ;  i++){
        if(i % 2 != 0){
    total += 1
        }
    }console.log(total);
}
console.log(noParesDeContarImparesHasta(8)); 

