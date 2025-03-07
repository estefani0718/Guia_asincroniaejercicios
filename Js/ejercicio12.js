// 12. Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
// diga "Operación completada". Utiliza async/await.

async function funciona() {
    await  new Promise((resolve) => setTimeout(resolve, 1000));
}
funciona().then(()=> alert("Operacion completada"));