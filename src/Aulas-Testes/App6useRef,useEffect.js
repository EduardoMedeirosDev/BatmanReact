import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import Button from './components/button/button';
import Header from './components/header/header';
import { isDisabled } from '@testing-library/user-event/dist/utils';

function App() {
  
  const [carregando, setCarregando] = useState(true)
  const [contador, setContador] = useState(3)

  const video = useRef();

  function callBack() {
    console.log(video.current.pause())
  } // também é póssivel chamar o useRef atravez da function callback

  useEffect(() => {
    console.log('Carregou pela primeira vez')
  } , []) // sempre que o contador for atualizado, o useEffect é executado
  // se o Array estiver vazio, só vai executar pela primeira vez

  useEffect(() => {
    console.log(video.current.pause())
  }, [])

  useEffect(() => {
    console.log('Carregando')

  

    return () => { // essa return vai fazer que quando desapareça da tela é executado

    }


  }, [carregando])


  return (
    <div>
      {carregando ? <span>Carregando...</span> 
      :
      <div>
      <button onClick={() => setContador(contador + 1)}>Adicionar</button>
      <span>{contador}</span><Button active name='Alterar Valor' onClick={setContador} />
      </div>
      }
      <button onClick={() => callBack()}>{carregando ? 'Carregar Site' : 'Voltar' }</button>
      <video ref={video} />
    </div>
  )
  
}

export default App;
