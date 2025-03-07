// Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
// lista de elementos uno por uno.


// funcion declarada con un parametro que recibe un color de la funcion asincrona 
function procesarColor(color) {
    return new Promise(resolve => {// retorna la promesa 
        setTimeout(() => {// este tiene un settimeout con un timepo establecido de 1 segundo
            console.log(` color procesado: ${color}`);
            resolve();// este resolve indica que termino y pasa al mensaje 
        }, 1000);
    });
}

//funcion asincrona 
async function procesarListaColores() {
    // dentro la funcion asincrona tenemos una array de colores 
    const colores = ["Rojo", "Azul", "Verde", "Amarillo"];
 // el array se pasara a un for para qeu se recorra 
 // con cada recorrido se pasa a la funcion que tendra la promesa 
    for (let i = 0; i < colores.length; i++) {
        await procesarColor(colores[i]); // y el await espera cuando es llamda la funcion quien contiene a promesa 
    }
// mensaje en consola ded que termino la iteracion o el recorrido del array de elemntos 
    console.log(" Todos procesados ");
}

// llamamos a la funcion que asincrona y es la principal 
procesarListaColores();
