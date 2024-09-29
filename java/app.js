const miPromesa = new Promise((resolve,rejected)=>{
    setTimeout(() => {
        resolve('mensaje mosradisimo');
    },2000);
});

miPromesa.then((mensaje)=>{
    console.log(mensaje);
})

const doblanumeros = (numero)=>{
    return new Promise((resolve,rejected)=>{
        resolve(numero*2);
    })
}
doblanumeros(5).then((respuesta)=>{
    console.log(respuesta);
})
const promesa1 = new Promise ((resolve,rejected)=>{
    setTimeout(() => {
        resolve('promesa 1 resuelta ');
    }, 3000);
})
const promesa2 = new Promise ((resolve,rejected)=>{
    setTimeout(() => {
        resolve('promesa 2 resuelta ');
    }, 3000);
})

Promise.all([promesa1,promesa2]).then((mensaje)=>{
    console.log(mensaje[0]);
    console.log(mensaje[1]);
})

const simulacroHTTP = ()=>{
    return new Promise ((resolve, rejected)=>{
        setTimeout(() => {
            const persona = {
                nombre:'juan',
                edad: 11,
            }
            resolve (persona);
        }, 2000);
    })
} 
simulacroHTTP().then((pepe)=>{
    console.log(`nombre : ${pepe.nombre}`);
})

let array = [1,2,3,4,5];

function sumaArrayPromesa (arreglo){
    return new Promise ((resolve,rejected)=>{
        const suma = arreglo.reduce((acumu,acutal)=> acumu + acutal,0 );
        resolve(suma);
    })
}

sumaArrayPromesa(array).then((suma)=>{
    console.log(`la suma total es de ${suma}`);
})
const url = "httpTUREMAMAMA";

async function obtenerApi(url){
    try{
        const respuesta = await fetch(url);
        if(!respuesta.ok){
            throw new Error(`error en la solicitud ${respuesta.status}`);
        }
        const datos = await respuesta.json();
        return datos;
    }
    catch(error)
    {
        console.log("ocurrio un error",error);
        throw error;
    };
}


obtenerApi(url).then((json)=>{
    console.log(`PERFECTO ${json}`);

}).catch((error)=>{
    console.log(`ocurrio un error ${error}`);
})