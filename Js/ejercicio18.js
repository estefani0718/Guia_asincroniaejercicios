// Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
// utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.


function nombres() {
    return new Promise((resolve)=>{// la promesa 
        setTimeout(() => {
            console.log("primero")// visualizo si se cumple en el tiempo que propuse en predeterminado en cada una de ellas 
            resolve(["estefani","rodrigo"]);
        }, 1000);
    });
}
function apellidos() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("segundo")
            resolve(["garcia","perez"]);
        }, 3000);
    });
}
function dinero() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("tercero")
            resolve(["30000","20000"]);
        }, 4000);
    });
}
// aparecen todas juntas por que el promise all , no se respeta los tiempos de cada uno , 
// solo  espera que estas se cumpla hasta las mas lenta 
// se recibe como array y se ejcuta todas juntas una tras otra 
Promise.all([nombres(),apellidos(),dinero()])
.then(([nombres,apellidos,dinero])=>{// aqui se desglosa el array de promesas que se obtiene anteriormente 
    // accediendo a ella por cada valor 
    console.log("nombres",nombres);// se imprimen en consola 
    console.log("apellidos",apellidos);
    console.log("dinero",dinero);
})
.catch(error=>{// el catch recibe si hay algun error 
    console.log("error",error);
})