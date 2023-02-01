import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Button from './components/button/button';
import Header from './components/header/header';
import { isDisabled } from '@testing-library/user-event/dist/utils';

function App() {
  
  const [carregando, setCarregando] = useState(true)
  

  return (
    <div>
      {carregando ? <span>Carregando...</span> : <div>
        <Button name='Botão 1' active /><button onClick={() => setCarregando(true)}>Voltar</button>
        </div>}
        {carregando ? <button onClick={() => setCarregando(false)}>
        {carregando ? <span>Carregar Site</span> : <hidden></hidden> }</button> : <button hidden></button>
      }
    </div>
  )

}

// resolução simples

function App() {
  
    const [carregando, setCarregando] = useState(true)
    
  
    return (
      <div>
        {carregando ? <span>Carregando...</span> : <Button name='Botão 1' active />}
        <button onClick={() => setCarregando(!carregando)}>{carregando ? 'Carregar Site' : 'Voltar' }</button>
          
      </div>
    )
  
  }

export default App;