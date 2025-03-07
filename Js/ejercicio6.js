// Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true

let  apellido=["estupiñan ","lazaro","ascencio","torres"];

function tamaño(nombre) {
   return nombre.length > 5;
 }

function some(apellido,callback){
   for(let i=0;i <apellido.length;i++){
       if(callback(apellido[i])) return true ; else return false;

   }
}
console(some(apellido,tamaño));