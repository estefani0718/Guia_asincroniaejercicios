// 14. Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
// devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
// y mostrar el resultado final.



let aux=0;// creamos una variable , quee sera como un contador 
new Promise((resolve) => {// creamos la primera  promesa 
    setTimeout(() => resolve(1), 1000);// despues de 1 segundo se resuelve la promesa 
})
.then((aux) => {// el numero enviado , se resive en el then 
    alert(aux); // se muestra en pantalla 
    return new Promise((resolve) => {  // creamos otra promesa 
        setTimeout(() => resolve(aux + 2), 1000);// se resuelve despues de 1 segundo 
        // el contador resibe el numero enviado de la primera promesa 
        // la cual hace una suma , del valor anterior por uno predeterminado 
    });
})
.then((aux) => {// se recibe la promesa y el numero 
    alert(aux); // se imprime el valor 
    return new Promise((resolve) => {  // creamos otra promesa , esta es la 3 
        setTimeout(() => resolve(aux + 2), 1000);//esta despues de 1 segundo se resuelve 
         // el contador resibe el numero enviado de la segunda promesa 
        //el valor  se suma 
    });
})// el then recibe la promesa y el valor dentro de ella , osea contador 
.then((aux) => {
    alert(aux); // se imprime el valor de la suma anterior  que esta dentro de el contador dentro de la promesa 
    // el resultado final
});

