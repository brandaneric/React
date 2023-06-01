
import { useEffect, useState } from 'react'

const Categorias = () => {

    const [categoria, setCategoria] = useState("")

    //Las funciones que se usan para cambiar 
    //el valor de los estados comienzan con el nombre
    //Handle

    const HandleClick = (categoria) => {
        setCategoria(categoria);
    }

    useEffect(() => {
        document.title = `Categoria ${categoria}`;
    }, [categoria])

    return (
        <div>
            <h2>Categorias de productos</h2>
            <button onClick={() => HandleClick("Frutas")}>Frutas</button>
            <button onClick={() => HandleClick("Carne")}>Carnes</button>
            <button onClick={() => HandleClick("Lacteos")}>Lacteos</button>
            <button onClick={() => HandleClick("Limpieza")}>Limpieza</button>
        </div>
    )
}
export default Categorias