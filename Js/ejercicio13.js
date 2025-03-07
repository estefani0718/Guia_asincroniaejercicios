// 13. Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
// "Error: Promise rechazada".
// creo la funcion , dentro de ella estara la promesa 
function crearPromesa() {
    return new Promise((_,reject)=>{// se inicializa la promesa , con dos parametros aunque no se utilicen
        setTimeout(()=>reject(new Error ("promise rechazada")),2000);// con el setTimeout se espera el mensaej 
        // de error despues de 2 segundos 
    });
}
// el catch resibe el error y da el mensaje esperado 
crearPromesa().catch(err=>alert(err));