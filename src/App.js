import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/home';
import Contato from './pages/contato/index';
import Fotos from './pages/fotos';
import Comentarios from './pages/comentarios';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contato' element={<Contato/>} />
        <Route path='/fotos' element={<Fotos/>}/>
        <Route path='/comentarios' element={<Comentarios/>}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App;
