/* //JSON -> string

let json = '{ "nobmre": "marcos", "apellido": "pirani"}';
console.log(tjson);

//Objet -> object
let objeto = JSON.parse(json)
console.log(objeto);

//metodos de string */

/* 
let stringNuevo = "hola, bienvenido a la clase 5";

console.log(stringNuevo[0]);
console.log(stringNuevo[1]);
console.log(stringNuevo[2]);
console.log(stringNuevo[3]);
console.log(stringNuevo[4]);

console.log(stringNuevo.slice(1,10));

let string2 = stringNuevo.replace("bienvenido", "vamos")
console.log(string2);
 */
/* 
function funcion1 (params){
   console.log(this);
}



let funcion2 = () => {
console.log(this);
}

funcion1();
funcion2();
 */

/* 
let sumar1 = (a) => {
    return a+1
}


let sumarUno = a => a+1

console.log(sumar1(5));
console.log(sumarUno(5));
 */

/* 
let a = 15
let b = 0;
 */
/* 
if (a >10){
    b = 20
}else{
    b = 5
}
 */

/* 
let a = 1
let b = (a>10) ? 20 : 5

console.log("variable a", a);
console.log("variable a", ab;
 */
/* 
let key = 1

switch (key) {
    case 1:
    case 2:
        console.log("bloque1");
        
        console.log("bloque2");
        break;
    case 3:
        console.log("bloque3");
        break;
    
    default:
        console.log("bloque4");
}
 */
/* 
//for
let i
for (i=0; i<4 ; i++){
console.log("me estoy repitendo", i);
}

 */

function repeticion(i){
    let contador = 0;
    for(i=0; i<100; i++){
        contador++
        if(contador === 10){
            return contador
        }
    }
}
console.log(repeticion());  





























