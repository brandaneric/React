import React from 'react'

const Promesas = () => {

    //Ejemplo de programacion sincronica
    console.log ("tarea A");
    console.log ("tarea B");

    //Programacion asincronica 

    //setTimeout : recibe una funcion y un tiempo 
    //que va a esperar para ejucutar ese proceso . 

    setTimeout(() => {
        console.log ("tarea 1")
    },3000);

    setTimeout(() => {
        console.log ("tarea 2")
    },1000);

    //setInterval : Le pasamos una funcio ny el intervalo 
    //en tiempo para la ejecucion . 
    
    //Promesas : Una es un objeto que representa
    // un evento a futuro , en general represente el resutaldo
    // de una peticion asincrona . 

    // las promesas tienen 3 estados : rechazado , pendiente y cumplido.

    const tusPromesas = (estado) => {
        return new Promise((resolve,reject) =>{
            if (estado) {
                resolve("Promesa cumplida");
            }
            else {
                reject("Promesa rechazada");
            }
        })

    }

    console.log (tusPromesas(true)); 

    //then y catch :
    // podemos concatenar dos metodos que nos permiten concatenar una funcion para
    // cuando el pedido se cumple o se rechaza

    //Then : se ejecuta cuando la promesa se cumple .
    //catch : Se ejecuta cuando la promesa se rechaza. 
    //finally : se ejecuta siempre. 

    //implementacion : 
    tusPromesas(true)
        .then((respuesta) => {
            console.log(respuesta)
        })
        .catch((error) => {
            console.log(error)
        })
        .finally()

        // Ahora practicamos con un array de atomos , min : 3:09:25

        const array = ["uno","dos","tres","cuatro"];

        const solicitarTeletubbies = (estado) => {
            return new Promise ((resolve,reject) => {
                if (estado){
                    resolve(array);
                }else{
                    reject("No ahi teletubbies");
                }
            })
        }

        //implementacion 
        solicitarTeletubbies (true)
            .then (resolve =>  {
                console.table(respuesta)
            })
            .catch (error => console.error(error));
            //.finally((error) => console.log("Proceso terminado."))

    return (
    <div>Promesas</div>
  )
}

export default Promesas