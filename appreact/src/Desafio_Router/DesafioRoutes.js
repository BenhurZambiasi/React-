import React from 'react'
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Produtos from './Components/Produtos';
import Contato from './Components/Contato';
import Produto from './Components/Produto';




const DesafioRoutes = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default DesafioRoutes
