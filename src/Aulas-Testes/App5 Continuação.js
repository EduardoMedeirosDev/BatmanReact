import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Button from './components/button/button';
import Header from './components/header/header';
import { isDisabled } from '@testing-library/user-event/dist/utils';

function App() {
  
  const [carregando, setCarregando] = useState(true)
  const [contador, setContador] = useState(3)

  return (
    <div>
      {carregando ? <span>Carregando...</span> 
      :
      <div>
      <button onClick={() => setContador(contador + 1)}>Adicionar</button>
      <span>{contador}</span><Button active name='Alterar Valor' onClick={setContador} />
      </div>
      }
      <button onClick={() => setCarregando(!carregando)}>{carregando ? 'Carregar Site' : 'Voltar' }</button>
        
    </div>
  )
  
}

export default App;
