// En el siguiente código hay una llamada programada setTimeout, luego se ejecuta un cálculo
// pesado que demora más de 100 ms en finalizar.
// ¿Cuándo se ejecutará la función programada y por qué se ejecutará?
// a) Después del bucle.
// b) Antes del bucle.
// c) Al comienzo del bucle.
// ¿Qué va a mostrar alert()?

let i = 0;

setTimeout(() => alert(i), 100);

for (let j = 0; j < 10000000; j++){
  i++
}
alert("SetTimeout se ejecuta despues del bucle. ");
alert("el alert , mostrara lo que i almacena en el bucle for , en este caso es 10000000")