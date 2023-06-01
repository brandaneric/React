import React from 'react'
import { useEffect, useState } from 'react'
import { getProductos } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import './ItemListConteiner.css'




const ItemListConteiner = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        //metodo que usa promesas
        getProductos()
            // si la coneccion es exitosa
            .then (res => setProductos(res))
            //si la coneccion falla
            .catch (error => console.error(error))

    },[])

    return (
        <div className="contenedor">
            <h2>Productos</h2>
            <ItemList productos={productos}/> 
        </div>
    )
}

export default ItemListConteiner