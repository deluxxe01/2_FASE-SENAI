import React from 'react'
import './StarUberPt2.css'
import { useState } from 'react' 

function StarUberPt2(){
    const [resultado, setResultado] = useState()
    function tempoViagem(){
        let distancia = Number(prompt("Digite a distância em km/s até ao planeta destinado:  "))
        let velocidadeLuz = 300000

        let tempoSegundos = distancia / velocidadeLuz
     
        setResultado (tempoSegundos)
    }
    return (
        <div className="StarUberPt2-container">
          <h2>StarUber Part 2 </h2>
          <div>Calculando quanto tempo leva a você chegar ao seu destino em (s/min/hr/dias/meses/anos)</div>
          <button onClick={tempoViagem}>Processar</button>
          <div>
            Resultado: {resultado}
          </div>
          
        </div>
      )
    }
    
    export default StarUberPt2