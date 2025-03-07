// Crear un objeto proxy usando la clase Proxy
// target es el objeto original :tiene 3 propiedades 
const target={
    nombre:"estefani",
    edad:"20",
    casa:"hogar"
}

const hadler={// el hadler intercepta el acceso con el get 
    get:function(target,prop){// intercepta el acceso y tiene dos argumentos 
        return `nombre de la persona :${target[prop] }`;// se retorna el mensaje y accede al objeto y al nombre del objeto 
    }
}
const persona=new Proxy(target,hadler);// se crea el objeto proxy : nombre del objeto ; hadler intercepta las operaciones 
console.log("Objeto proxy ")

console.log(persona.nombre);// se accede al objeto y se imprime el consola 