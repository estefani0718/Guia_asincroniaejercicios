// 21. Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
// try/catch para mostrar un mensaje de error en caso de fallo.

//  creamos una funcion asincrona para la espera de la peticion como promesa 
async function manejo() {
    try {// el try catch  se envuelve nuestro codigo para si hay errores en el se envia el mensaje al bloque catch
       let respuesta =  await fetch(`/Js/json/ejercicio_21.json`)// se realiza una peticio y se espera aque se cumpla 
        let datos = await respuesta.json();// se convierte a formato json y tambien se espera a que  se cumpla 
        console.log("datos del json",datos);// imprimos en consola los dato sque hay en el archivo json 
        
    } catch (error) {// se controla con catch si hay errores 
        {console.log('Hubo un problema al cargar el archivo JSON:', error);  }
    }  
}
// se llama la funcion 
manejo();