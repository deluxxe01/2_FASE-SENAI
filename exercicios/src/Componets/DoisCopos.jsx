// 5.30 - Dois copos meio cheios: Faça um programa para ler um número e 
// imprimir uma mensagem dizendo se o mesmo é par e positivo ao mesmo 
// tempo.

import React from 'react'
import './DoisCopos.css'
import { useState } from 'react'

function DoisCopos(){
    const [resultado, setResultado] = useState()

    function lerNumero(){
        let numero = Number(prompt("Digite um número: "))

        if(numero > 0 && numero % 2 == 0){
            setResultado("O número é positivo e par!")
        }else{
            setResultado("O número não é positivo nem par!")
        }
    }
    return (
        <div className="DoisCopos-container">
          <h2>Dois copos meio cheio</h2>
          <div>Calcular se o número é positivo e par ao mesmo tempo </div>
          <button onClick={lerNumero}>Processar</button>
          <div>
            Resultado: {resultado}
          </div>
          
        </div>
      )
    }
    
    export default DoisCopos
    
