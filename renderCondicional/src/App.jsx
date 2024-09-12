import { useState } from 'react'
import './App.css'
import Home from './assets/pages/Home'
import Home2 from './assets/pages/Home2'
import Home3 from './assets/pages/Home3'
import Render from './assets/pages/Render'

function App() {
  const[pagina,setPagina] = useState(<Home />)
  
function mostrarHome(){
  setPagina(<Home />)
}  
function mostrarHome2(){
  setPagina(<Home2 />)
}
function mostrarHome3(){
  setPagina(<Home3 />)
}
  return (
    <>
    <nav>
      <button onClick={mostrarHome}>Home</button>
      <button onClick={mostrarHome2}>Home2</button>
      <button onClick={mostrarHome3}>Home3</button>
      <button onClick={() => {setPagina(<Render />)}}>Render</button>
    </nav>
    {pagina}
    
    </>
  )
}

export default App
