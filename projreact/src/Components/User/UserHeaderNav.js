import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg'
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg'
import { ReactComponent as AdicionarFotos } from '../../Assets/adicionar.svg'
import { ReactComponent as Sair } from '../../Assets/sair.svg'
import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia'

const UserHeaderNav = () => {

  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width:40rem)');

  const [mobileMenu, setMobileMenu] = React.useState(false)



  return (
    <>
      {mobile && <button className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive} `} aria-label="Menu" onClick={() => setMobileMenu(!mobileMenu)}></button>}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>

        <NavLink to="/conta" end activeClassName={styles.active}>
          <MinhasFotos />  {mobile && ' Minhas fotos'}
        </NavLink>

        <NavLink to="/conta/estatisticas" activeClassName={styles.active}>  <Estatisticas />{mobile && 'Estatisticas'}
        </NavLink>

        <NavLink to="/conta/postar" activeClassName={styles.active}> <AdicionarFotos /> {mobile && 'Adicionar foto'}
        </NavLink>

        <button onClick={userLogout}> <Sair /> {mobile && 'Sair'}</button>
      </nav>
    </>
  )
}

export default UserHeaderNav
