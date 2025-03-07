// Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
// obtenidos en la consola.

fetch('/Js/json/ejercicio15_json.json')//obtenemos los datos con fetch 
    .then(resultado => {// se espera una respuesta 
        return resultado.json(); // aqui se convierte lo que hay dentro del Json tambien se devuelve una promesa 
        })
    .then(datos=> {// necesitamos otro then obtener los datos y  mostrarlos en la consola 
        console.log("Datos obtenidos:", datos); // se imprime los datos 
    })
    .catch(error => {// aqui se captuta se hay algun error 
        console.error("Error al obtener los datos:", error);
    });