import React from 'react'
import Produto from './Produto';
import { GlobalContext, GlobalStorage } from './GlobalContext';

const UserContext = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  )
}

export default UserContext
