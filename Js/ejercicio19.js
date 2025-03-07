// Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
// Promise.allSettled() para obtener información sobre el estado de todas las Promises.

let numeros=[18,40,30,50];
let cosas =["papel","lapiz","zacaputas"];
let escribir=["libros","cartas","notas"];
// cada funcion tiene allgo distinto a cual sera mostrado al final 
function cumplida(numeros) {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(numeros)// solo puede recibir un argumento 
        }, 2000);
    });
}
function rechazada(cosas) {
    return new Promise((_,reject)=>{
        setTimeout(() => {
            reject("rechazada",cosas.join(","))// esta se convierte e una sola cadena de texto para no hayan errores , para eso el join 
        }, 3000);
    });
}

function otraCumplida(escribir) {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(escribir);
        }, 4000);
    });
}
// promise allSettled esta espera a que todas las promesas terminen asi esten rechazadas o resueltas 
Promise.allSettled([cumplida(numeros),rechazada(cosas),otraCumplida(escribir)])
.then(resultados=>{
    resultados.forEach((resultado,index)=> {
        if (resultado.status === "fulfilled") {
            console.log(` Promesa ${index + 1} cumplida :`, resultado.value);
        } else {
            console.log(` Promesa ${index + 1} rechazada de cosas :`, resultado.reason);
        }
    });
});