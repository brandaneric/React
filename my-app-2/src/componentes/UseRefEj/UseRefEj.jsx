import React from 'react'




export const useRefEj = () => {

    //Este hook retorna un objeto con una propiedad
    // llamada current la cual podemos mutar 
    const contadorCarrito = useRef(0);

    function agregarAlCarrito() {
        contadorCarrito.current = contadorCarrito.current + 1 ;
        console.log(contadorCarrito.current);
    }
  return (
    <div>
        <h2>Productos marolio en el carrito</h2>
        <button onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
  )
}

export default useRef
