import React from 'react'
import Produto from './Produto';
import { GlobalContext, GlobalStorage } from './GlobalContext';

const Exerc = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  )
}

export default Exerc;
