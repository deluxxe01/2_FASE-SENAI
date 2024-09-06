import React from 'react'
import './StarUber.css'
import { useState } from 'react' 

function StarUber(){
    const [resultado, setResultado] = useState()
    function tempoViagem(){
        let distancia = Number(prompt("Digite a distância em km/s até ao planeta destinado:  "))
        let velocidadeLuz = 300000

        let tempoSegundos = distancia / velocidadeLuz
     
        setResultado (tempoSegundos)
    }
    return (
        <div className="StarUber-container">
          <h2>StarUber</h2>
          <div>Calculando o tempo em segundos ate ao seu destino</div>
          <button onClick={tempoViagem}>Processar</button>
          <div>
            Resultado em segundos: {resultado}
          </div>
          
        </div>
      )
    }
    
    export default StarUber
    
