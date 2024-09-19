import { useState } from "react";
import './Garcom.css'
import RelatorioEmprestimo from "./RelatorioEmprestimo";


function Garcom() {
     const [inputSalario, setInputSalario] = useState ('')
     const [inputEmprestimo, setInputEmprestimo] = useState ('')
     const [inputPrestacao, setInputPrestacao] = useState ('')
     const [stateRelatorio, setStateRelatorio] = useState()

     function lerSalario(){
        let limitePrestacao = inputSalario* 0.3
        let valorPrestacao = inputEmprestimo / inputPrestacao

        if(valorPrestacao < limitePrestacao){
            // alert("Seu empréstimo foi concedido!")
            let infosRelatorio = {
                situacao: "aprovado",
                maxPrestacao: limitePrestacao,
                prestacao: valorPrestacao,
                emprestimo: inputEmprestimo,
                prestacoes: inputPrestacao

            }
            setStateRelatorio(infosRelatorio)
        }
        else{
            // alert('Seu empréstimo não foi concedido!')
            let infosRelatorio = {
                situacao: "reprovado",
                maxPrestacao: limitePrestacao,
                prestacao: valorPrestacao,
                emprestimo: inputEmprestimo,
                prestacoes: inputPrestacao

            }
            setStateRelatorio(infosRelatorio)
        }
     }
     return(
        <div className="Garcom-container">

            <label htmlFor="InpSalario">SALÁRIO</label>
            <input type="text" id="inpSalario"
            value={inputSalario}
            onChange={(event) => {setInputSalario(event.target.value)}}/>

            <label htmlFor="InpEmprestimo">EMPRÉSTIMO</label>
            <input type="text" id="inpEmprestimo"
            value={inputEmprestimo}
            onChange={(event) => {setInputEmprestimo(event.target.value)}}/>

            <label htmlFor="InpPrestacao">PRESTAÇÃO</label>
            <input type="text" id="inpPrestacao"
            value={inputPrestacao}
            onChange={(event) => {setInputPrestacao(event.target.value)}}/> 

            <button onClick={lerSalario}>Autorizar empréstimo</button>

        {stateRelatorio &&
            <RelatorioEmprestimo infos={ stateRelatorio }/>
        }
        </div>
     )
}
export default Garcom