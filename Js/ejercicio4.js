// Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro".

let nombre = ["estefani", "zaray", "hemel", "stiven"];

let nuevo = nombre.filter((nombre) => nombre.length > 5 ? true : false)

function filter(nombre, callback) {
  let nuevoE = [];
  nombre.forEach(n => {
    nuevoE.push(callback(nombre[n]));
  });
  return nuevoE;
}
console.log(nuevo);