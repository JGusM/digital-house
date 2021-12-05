const autos = require("./autos");


const concesionaria = {
    autos: autos,
    buscarAuto: function (patente){
        for (let i = 0 ; i < autos.length ; i++){
            if (autos[i].patente == patente) {
                return autos[i]
            }
        }
        return null
    }
};

console.log(concesionaria.buscarAuto('APL123'));

//console.log(concesionaria);














