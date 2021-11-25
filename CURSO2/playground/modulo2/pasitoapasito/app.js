function anterior (n){
    return n - 1
}
console.log(anterior(6));
function triple (n){
    return n * 3
}
console.log(triple(6));
function anteriorDelTriple(n){
    return (triple(n)-anterior())
}
console.log(anteriorDelTriple(6));

/*
function salario(horasTrabajadas){
    return (horasTrabajadas * 20)
}
function conBono (horasTrabajadas){
        return(salario(horasTrabajadas) + 50)
}
console.log(conBono(10));*/