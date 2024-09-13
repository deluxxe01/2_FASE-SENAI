// Dia da Semana: Peça ao usuário que insira um número de 1 a 7 e, em seguida,
//  mostre o dia da semana correspondente (por exemplo, 1 = Domingo, 2 = Segunda, etc.).

import React from 'react'
import './DiaSemana.css'
import { useState } from 'react'

function DiaSemana() {
   
    const [diaSemana, setDiaSemana] = useState ()
    const [resultado, setResultado] = useState()
  
function processarDiaSemana (){

    switch (diaSemana) {

        case '1':   
          setResultado('Domingo')
            break;

        case '2':
          setResultado('Segunda-feira')
            break;

        case '3':
          setResultado("Terça-feira")
            break;

        case '4':
          setResultado("Quarta-feira")
            break;

        case '5':
          setResultado("Quinta-feira")
            break;

        case '6':
          setResultado("Sexta-feira")
            break;

        case '7': 
          setResultado("Sábado")
            break;

        default:
            setResultado("Insira um número de 1-7")
            break;
    }

}

  return (
    <div className='DiaSemana-container'>
        <h2>Dia da semana</h2>

        <div>Descobrir em qual dia da semana está de 1-7 </div>
        <input type="number" className='formularios'
        value={diaSemana}
        onChange= {(event) => {setDiaSemana(event.target.value)}}/>

        <button onClick={processarDiaSemana}>Processar</button>
        <div>
            Resultado: {resultado}
        </div>
    </div>
  )
}

export default DiaSemana
