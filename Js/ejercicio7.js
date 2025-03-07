// Crear una función find que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined


let frutas = ["Banana", "Manzana", "Pera", "Mango", "Durazno"]; 
let frutaconB=frutas.find((frutas) => frutas[0]==="B"  );

function find(frutas, callback) {
    for (let i = 0; i < frutas.length; i++) { 
        if (callback(frutas[i])) return  frutas[i]; else return undefined;
    }

}
console.log(frutaconB);
