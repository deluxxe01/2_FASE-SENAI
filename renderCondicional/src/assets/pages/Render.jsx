import React from 'react'
import { useState } from 'react'
import PainelAdm from '../components/PainelAdm'
import ProdutoMaiores from '../components/ProdutoMaiores'
import UsuarioLogado from '../components/UsuarioLogado'
import Login from '../components/Login'
import './Render.css'

function Render(){
    const [adm, setAdm] = useState(true)
    const [idade, setIdade] = useState(0)
    const [usuario, setUsuario] = useState(false)

    return(
    <div>
     <h1>Renderizações Condiconais</h1>
     <div className="render-container">
        <button onClick={() => {setAdm(true)}}>ADM</button>
        <button onClick={() => {setAdm(false)}}>VIADO</button>
       { adm && <PainelAdm />}
     </div>

     <div className='render-container'>
        <button onClick={() => {setIdade(idade-1)}}>-</button>
        {idade}
        <button onClick={() => {setIdade(idade+1)}}>+</button>
        { idade >= 18 && <ProdutoMaiores />}
     </div>

     <div className='render-container'>
     <button onClick={() => {setUsuario(true)}}>Logar</button>
     <button onClick={() => {setUsuario(false)}}>Sair</button>
     {usuario ? <UsuarioLogado /> : <Login />}
     </div>

    </div>
    )
}

export default Render