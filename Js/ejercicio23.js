/* Usar un proxy para la validación de los valores de propiedades
• Cuando declaremos que el atributo es numérico solo perimimos que ingresen
números
• Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen
letras
• Cuando declaremos que el atributo es un email, solo permitimos que ingresen
correos
• Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen
fechas
• Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
al final de estos y se debe mostrar el error personalizado por consola
*/

let objeto = {}; // Crear un objeto vacío.

let handler = {
  set(target, propiedad, valor) {// el set intercepta y tiene tres parametros objeto , propiedad y el valor 
    try {
      if (propiedad === 'numero') {// validamos que sea estrictamente numerico 
        if (!/^\d+$/.test(valor)) {
          throw new Error("El valor ingresado debe ser un número sin espacios ni letras.");
        }
      } else if (propiedad === 'texto') {// validamos que sea texto 
        if (!/^[a-zA-Z]+$/.test(valor)) {
          throw new Error("El valor ingresado debe contener solo letras del alfabeto.");
        }
      } else if (propiedad === 'correo') {// validamos el correo 
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
          throw new Error("El valor ingresado no tiene el formato de un correo electrónico válido.");
        }
      } else if (propiedad === 'fecha') {// validamos que se la fecha 
        if (!/^\d{4}-\d{2}-\d{2}$/.test(valor)) {
          throw new Error("La fecha ingresada debe estar en el formato 'yyyy-mm-dd'.");
        }
      } else {
        throw new Error(`La propiedad '${propiedad}' no es válida.`);
      }

      // Asignar el valor convertido si es número, de lo contrario asignar el valor tal cual
      target[propiedad] = propiedad === 'numero' ? Number(valor) : valor;
      return true;
    } catch (error) {// captura el error 
      console.error(`Error al asignar la propiedad '${propiedad}': ${error.message}`);
      return false;
    }
  }
};

objeto = new Proxy(objeto, handler);// creamos el objeto proxy 

//ingreso de los datos al objeto proxy
objeto.numero = "123";               
objeto.texto = "ejemploTexto";       
objeto.correo = "ejemplo@correo";  //invalido 
objeto.fecha = "2023-12-31";         


console.log(objeto); // Imprimir el objeto proxy en la consola

