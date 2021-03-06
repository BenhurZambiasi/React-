import React from 'react'
import Header from './Header'
import Home from './Home'
import Produtos from './Produtos'

const Exerc = () => {
  let Pagina;
  const { pathname } = window.location;
  if (pathname === '/produtos') {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }
  return (
    <section>
      <Header />
      <Pagina />
    </section>
  )
}

export default Exerc;