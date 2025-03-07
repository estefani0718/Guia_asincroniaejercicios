// La función incorporada setTimeout utiliza callbacks. Crea una alternativa basada en
// promesas.
// La función delay(ms) debería devolver una promesa. Esa promesa debería resolverse
// después de ms milisegundos, para que podamos agregarle. then, así:


let segundos=4;
function delay(ms) {// funcion delay , con un parametro que es son los ms o segundos que se ejecutara esta 
    return new Promise((resolve) => {// la promesa se inicializa y retorna que se resolvio 
        setTimeout(resolve, ms);// el setTimeout recibira los segundos la cual se ejecuta la promesa 
    });
}

// enviamos los segundos que demorara la promesa en cumplirse 
                      // el then se ejecuta cuando secumple la promesa                                      
delay(segundos*1000).then(() => alert(`Se ejecuta después de ${segundos} segundos`));