import React from "react"

function RelatorioEmprestimo(props){
    return(
        <div>
            <p>Relatório do resultado da simulação: </p>
            <p>Resultado: {props.infos.situacao}</p>
            <p>Valor do empréstimo: R${props.infos.emprestimo}</p>
            <p>Numero de prestações: {props.infos.prestacoes}</p>
            <p>Valor de cada prestação: {props.infos.prestacao}</p>
            <p>Valor limite de cada prestação: {props.infos.maxPrestacao}</p>
        </div>
    )
}

export default RelatorioEmprestimo