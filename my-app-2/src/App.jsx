

import Contador from './componentes/Contador'
import Categorias from './componentes/Categorias/Categorias'
import { useState } from 'react'
import UseRefe from './componentes/UseRefe/UseRefe'
import Promesas from './componentes/promesas/Promesas'
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'

function App() {
  //logica de programacion 

  // En el return se retorna la interfaz del usuario . 
  return (
    <>
      {
        /*
          <Categorias />
          <UseRefe/>
          <Contador inicial={1} stock={10} /> 

        */
      }


      

      <ItemListConteiner/>
    </>
  )
}

export default App
