import React from 'react'
import styles from './Contato.module.css';
import foto from '../img/contato.jpg'
import Head from './Head';

const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"} >
      <Head title="Ranek |  Contato" description="Entre em contato" />
      <img src={foto} alt="máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>benhur_zambiasi@hotmail.com</li>
          <li>9.9363-7334</li>
          <li>Rua Dom João Becker 1852</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato
