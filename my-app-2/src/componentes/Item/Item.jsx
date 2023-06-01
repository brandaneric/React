import React from 'react'
import './Item.css'

//recibo por prod
const Item = ({ id, nombre, precio, img }) => {
    return (
        <div className="cardProductos">
            <img className="imgProductos" src={img} alt="hola" />
            <h3>Nombre: {nombre} </h3>
            <p>Precio: {precio} </p>
            <p>ID: {id} </p>
            <button className="btnProducto">Ver detalles </button>
        </div>
    )
}

export default Item