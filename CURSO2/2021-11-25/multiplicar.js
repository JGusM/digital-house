function multiplicar (a, b){
    return a * b
}

//console.log(multiplicar(0, 10));
module.exports = multiplicar;



/*--------Otra forma de hacerlo ---------------
function multiplicar (a, b){
    if ( a === 0 || b === 0){
        return 0
}else{
    return a * b
}
}
console.log(multiplicar(2, 0));
module.exports = multiplicar;
*/