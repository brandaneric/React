import React from 'react'
import { useState , useEffect } from 'react'

//useState tambien se puede inicializar por props.
const Contador = ({inicial,stock}) => {
  //logica de programacion 

  //los hook son funciones adicional de react.
  //usesState es un hook que contiene informacion
  //del componente que puede cambiar durante 
  //la ejecucion de la app . 

  // usesState nos permite crear un estado y poder setear (cambiar )
  // esos valores . 
  // usesState no retorna un array con dos elementos
  // el primero es el estado actual y el segundo
  // es una funcion (callback)  que me actualiza ese estado . 
  // esa respuesta se debe desestructurar

  const [contador, setContador] = useState (inicial)
  
  //Recibe dos parametros : una funcion y un array de dependencias . 

  useEffect( () => {
    console.log ("Se ejecuto el useEffect");
    document.title = `Contador: ${ contador }`;
  },[contador]);


  const aumentarContador = ( ) => {
    if (contador < stock ){
      setContador(contador + 1);

    } 
  }

  const disminuirContador = () => {
    if (contador > inicial ) {
      setContador(contador - 1);
    }
  } 

  const agregarAlCarrito = () => {
    console.log("Agregado al carrito");
  }
  


  // En el return se retorna la interfaz del usuario . 
  return (
    //Componentes que se van a renderizar. 
    <div>
      <h2>Contador</h2>

      <button onClick={ disminuirContador}> - </button>
      <strong>{ contador }</strong>
      <button onClick={ aumentarContador }> + </button>
      <br />
      <button onClick={ agregarAlCarrito }>agregar al carrito</button>
    </div>
  )
}

export default Contador