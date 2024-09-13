import { useState } from 'react'
import './App.css'
import MaiorIdade from './components/MaiorIdade'
import MenorIdade from './components/MenorIdade'

function App() {
  const [inputIdade, setInputIdade] = useState(0)
  const [maiorIdade, setMaiorIdade] = useState(false)
  const [menorIdade, setMenorIdade] = useState(false)

  function processarIdade(){
    if(inputIdade >= 18){
      setMaiorIdade(true)
      setMenorIdade(false)
    }else{
      setMenorIdade(true)
      setMaiorIdade(false)
    }
  }

  return (
    <>
    <div>
    <h1>INPUTS</h1>
    idade:
    <input type="number" className='formularios' 
    value={inputIdade} 
    onChange={(event) => {setInputIdade(event.target.value)}}/>
    
    
    <button onClick={processarIdade}>processar</button>
    {/* {inputIdade} */}
    {maiorIdade && <MaiorIdade />}
    {menorIdade && <MenorIdade />}
    
    </div>
    </>
  )
}

export default App
