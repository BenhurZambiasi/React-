import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav>
      <NavLink to='/' end>Home</NavLink> |
      <NavLink to='sobre'>Sobre</NavLink> |
    </nav>
  )
}

export default Header
