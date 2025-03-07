// Crea una función asincrónica que realice una llamada a un archivo local en formato json y
// luego manipule los datos recibidos para mostrar información específica. 

let mayor =0;
let menor=0;
async function procesar() {
    
    const r=await fetch(`/Js/json/ejercicio_17.json`)
    const datos=await r.json();
    let proceso=datos.filter((persona)=>{
        if(parseInt(persona.edad) <=18){
            mayor++;
            return true;
        }
        else{
            menor++;
            return false;
        }
    });
    console.log("proceso",proceso);
    console.log("mayores:",mayor);
    console.log("menor:",menor)
}
procesar();
