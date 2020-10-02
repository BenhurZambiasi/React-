import React from 'react'
import styles from './Slide.css';

const Slide = ({ slides }) => {



  return (
    <section className={styles.container}>
      <div className={styles.conteudo}>
        {slides.map((slide) => (
          <div key={slide.id} className={styles.item}>{slide}</div>
        ))}
      </div>

      <nav className={styles.nav}>
        <button>Anterior</button>
        <button>Próximo</button>
      </nav>
    </section>
  )
}

export default Slide
