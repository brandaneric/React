import React from 'react'
//useRef retorna un objeto
import { useRef } from 'react'


//UseRef es un hook que me permite crear una 
// referencia mutable que puede ser actualizada
// sin provocar una nueva renderizacion 
// del componente. 


//referencia mutable significa que puede cambiar
// el valor de un objeto sin que se vuelva a 
// renderizar

//EJ : Cantidad de productos en un carrito de compras . 

const UseRefe = () => {

    //Este hook retorna un objeto con una propiedad
    // llamada current la cual podemos mutar 
    const contadorCarrito = useRef(0);

    function agregarAlCarrito() {
        contadorCarrito.current = contadorCarrito.current + 1;
        console.log(contadorCarrito.current);
    }
    
    return (
        <div>
            <h2>Productos marolio en el carrito</h2>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    )
}


export default UseRefe