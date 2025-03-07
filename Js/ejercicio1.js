//Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
// comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.

// se crea las variables para ingreso de los datos 
let desde = parseInt(prompt("Ingrese un número (desde):"));
let hasta = parseInt(prompt("Ingrese un número (hasta):"));
// se crea una funcion , donde se recibe dos parametros las cuales son las variables
function imprimirNumeros(desde, hasta){
    console.log("setInterval")// se envia una mensaje por consola 
   let id = setInterval(() => {// se crea una variable que almacena el setInterval 
     console.log(desde++);// se incrementa el numero  y se imprime
     if (desde > hasta) clearInterval(id);// la condicion if nos ayuda a detener el setInterval
     // con clearInterval y llamando la variable , se detiene cuando 
   }, 1000);//  envia cada sengundo un numero hasta llegar al numero que se recibio anteriormente  
    
  }
  imprimirNumeros(desde, hasta);// se llama la funcion ay se envia dos argumentos 
  
  // se crea otra funcion la cual tambien se recibe dos parametros 
  
 function imprimirNumerosDos(desde, hasta) {// esta funcion tendra un seTTimeout 
    console.log("setTimeout");// se imprime un mensaje que empieza setTimeout
    setTimeout(function rep() {// se declara la funcion setTimeout la cual tiene una fucnion dentro de ella 
        // se incrementa el numero 
      console.log(desde++);// y se imprime
      if (desde<=hasta) {//   en la condicion if si el numero ingresado de inicio sigue siendo menor o igual al numero final 
        // se llama a si misma con retraso de un segundo 
        setTimeout(rep,1000)
      }
    }, 1000);// se define el tiempo el cual se demora el primer setTimeout 
  
  }
  
// con ayuda de otro setTimeOut ,dentro de ella llamamos la segunda funcion 
  setTimeout(() => {
    imprimirNumerosDos(desde,hasta);
  }, 5*2000 );// la cual se predeterminara el tiempo la cual se imprimira la funcion ,
  //  esta sera despues del set interval , este es el  objetivo de este  setTimeout adicional 






