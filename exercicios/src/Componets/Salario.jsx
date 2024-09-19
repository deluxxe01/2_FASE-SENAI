// 5.31 - Não tem garçom de cara feia: Uma empresa abriu uma linha de 
// crédito para os funcionários. O valor da prestação não pode ultrapassar 
// 30% do salário. Faça um programa que receba o salário, o valor do 
// empréstimo e o número de prestações e informe se o empréstimo pode ser 
// concedido. Nenhum dos valores informados pode ser zero ou negativo.


import React from 'react'
import './Salario.css'
import { useState } from 'react'

function Salario(){
    const [resultado, setResultado] = useState()
    function lerSalario(){    
        let salario = Number(prompt("Digite seu salário: "))
        if (salario <= 0 ){
            alert("Todos os valores devem ser positivos e diferentes de zero.")
            return
            }
        let emprestimo = Number(prompt("Digite o número do emprestimo: "))
        if (emprestimo <= 0 ){
            alert("Todos os valores devem ser positivos e diferentes de zero.")
            return
            }
        let prestacao = Number(prompt("Digite  o número de prestações: "))
        if (prestacao <= 0 ){
            alert("Todos os valores devem ser positivos e diferentes de zero.")
            return
            }

// CALCULO DA PORCENTAGEM
        let limite = 30 * salario / 100
       
// VALIDÇÃO DO EMPRESTIMO
    if(prestacao < limite){
        setResultado("Seu empréstimo foi concedido!")
    }
    else{
        setResultado('Seu empréstimo não foi concedido!')
    }
    
    }
    return (
        <div className="Salario-container">
          <h2>Linha de crédito para funcionários</h2>
          <div></div>
          <button onClick={lerSalario}>Processar</button>
          <div>
            Resultado: {resultado}
          </div>
          
        </div>
      )
    }
    
    export default Salario
    