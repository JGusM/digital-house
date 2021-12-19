//----------Metodo Filter---------------


let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(p){
    return p.aprobado == true
})
let desaprobados = estudiantes.filter(function(estudiantes){
    return estudiantes.aprobado == false
})


// let aprobados = estudiantes.filter(p => p.aprobado == true);
// let desaprobados = estudiantes.filter(p => p.aprobado == false);

console.log(aprobados);
console.log(desaprobados);


//----------Metodo Map---------------
/* 
let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map(function(n){
    return n - 1
})
console.log(horariosAtrasados);
*/

//----------Metodo Reduce---------------
/* 
let vueltas = [5, 8, 12, 3, 22]

let totalVueltas = vueltas.reduce(function(acum, num){
    return acum + num
})
console.log(totalVueltas);
*/

//----------Metodo forEach---------------
/* 
let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

listaDeSuperMercado.forEach(function(item){
    console.log(item);
})
 */

//-------------------------------------------------
/* 
let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]


let autoEncontrado = estudiantes.filter(function(p){
    return p.promedio < 5
})

console.log(autoEncontrado);
 */

/* 
let autos = [
    {
        marca: 'Ford',
        modelo: 'Fiesta',
        color: 'Azul',
        anio: 2019,
        km: 200,
        precio: 150000,
        cuotas: 12,
        patente: 'APL123',
        vendido: false
    },
    {
        marca: 'Toyota',
        modelo: 'Corolla',
        color: 'Blanco',
        anio: 2019,
        km: 0,
        precio: 100000,
        cuotas: 14,
        patente: 'JJK116',
        vendido: false
    }
]



let autoEncontrado = autos.filter(function(p){
    return p.patente == 'JJK116'
})

console.log(autoEncontrado);
 */















