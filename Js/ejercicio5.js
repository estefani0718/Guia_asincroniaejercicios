// Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si todas las llamadas al callback devolvieron true

let numeros = [20,30,40,10,20];

function esMayorA30(numero) {
    return numero  < 30;
  }

function every(numeros,callback) {
 for(let i=0; i <numeros.length;i++){
    if (!callback(numeros[i])) { 
        return false; 
    }
    return true ;
 }  

}
console.log(every(numeros, esMayorA30)); 