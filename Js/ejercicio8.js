// Crear una función findIndex que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el índice del elemento pasado como argumento del primer callback que
// devuelva true
// • sí ningún callback devuelve true, devuelva undefined

let nombres = ["Ana", "Juan", "Carlos", "Beatriz", "Pedro"];

let indice = nombres.findIndex((nombre) => nombre.length  < 4);


function findIndex(nombres, callback) {
    for (let i = 0; i < nombres.length; i++) {
        if (callback(nombres[i])) {
            return i; 
        }
    }
    return undefined; 
}

console.log(indice); 
