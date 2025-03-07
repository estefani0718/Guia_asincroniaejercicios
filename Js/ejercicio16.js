// Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
// para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo,
// mostrar solo los nombres que comiencen con "A").
fetch('/Js/json/ejercicio_16.json')// obtenemos los datos del Json que creamos 
    .then(respuesta => respuesta.json())  // esperamos la respuesta 
    .then(datos => {// obtenemos los datos 
        // creamos una variable dentro de ella , filtramos los datos con la funcion .filter
        //luego se la pasamos a una funcion que anonima y donde recorre los datos 
        //y el match revisa si hay considencias en el nombre que esta dentro del json que empieza con H 
        let nombres = datos.filter(persona => persona.nombre.match(/^H/));
        // luego imprimos en consola , los nombres que empiezan con h
        console.log("Personas con H:", nombres);
    })// el cath captura si hay errores y los muestra en consola igualmente 
    .catch(error => {
        console.error("Error al obtener los datos:", error);
    });
