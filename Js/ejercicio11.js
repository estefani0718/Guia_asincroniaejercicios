// 11. Crea una Promesa que se resuelva después de 3 segundos y luego imprima "Promisa
// resuelta" cuando se cumpla.


let s=parseInt(prompt("ingrese cuantos segundos quiere que se ejecute la promesa :"));
let deseo=prompt("cual es tu deseo :");

function Nuevapromesa(s) {
    return new Promise((resolve)=>{
        setTimeout(resolve,s);
    });
}
Nuevapromesa(s*1000).then(()=>alert(`¡¡¡Promisa resuelta !!!\n pero se cumplio tu deseo : ${deseo}?`));