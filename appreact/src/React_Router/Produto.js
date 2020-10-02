import React from 'react'
import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';
import ProdutoDescricao from './ProdutoDescricao';

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Descrição</NavLink>
        <NavLink to="customizado">Descrição</NavLink>
      </nav>
      <Routes>
        <Route path='' element={<ProdutoDescricao />} />
        <Route path='avaliacao' element={<ProdutoAvaliacao />} />
        <Route path='customizado' element={<ProdutoCustomizado />} />
      </Routes>
    </div>
  )
}

export default Produto
