import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from './components/button/button';
import Header from './components/header/header';

function App() {
  
  function evento(){
    alert('O Evento foi disparado')
  }

  window.addEventListener('scroll', () => console.log('Evento aconteceu'))


  return (
    <div style={{height: '200vh'}}>
    <Button onClick={() => evento()} name='Botão 1' active />
    <Button name= 'Botão 2' />
    <Button name='Botão 3' active={true}/>
    <span onClick={() => evento()}>Qualquer</span>
    </div>
  )
}

export default App;
