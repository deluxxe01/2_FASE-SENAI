import { useState } from "react"
import './Exemplo.css'
function Exemplo() {

    const [resultado, setResultado] = useState(0)

    function aumentar(){
        setResultado(resultado + 1)
    }
    function diminuir(){
        setResultado(resultado - 1)
    }

  return (
      <div className="Exemplo-container">
       <h2> Mini Calculadora </h2>
        <button onClick={diminuir} >-</button>
        <button onClick={aumentar}>+</button>
        <div>Resultado: {resultado}</div>
    </div>
  )
}

export default Exemplo