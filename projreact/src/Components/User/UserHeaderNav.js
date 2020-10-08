import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import {ReactComponent as MinhasFotos} from '../'

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  return (
    <nav>
      <NavLink to="/conta">Minhas fotos</NavLink>
      <NavLink to="/conta/estatisticas">Estatisticas</NavLink>
      <NavLink to="/conta/postar">Adicionar foto</NavLink>
      <button onClick={userLogout}>Sair</button>
    </nav>
  )
}

export default UserHeaderNav
