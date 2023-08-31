import React from 'react'
import Styles from './NavBar.module.css'
const NavBar = () => {
  return (
    <div className={Styles.container}>
      <ul className={Styles.navLinks}>
        <li className={Styles.textoIluminado}><a href="#">Inicio</a></li>
        <li className={Styles.textoIluminado}><a href="#">Acerca de</a></li>
        <li className={Styles.textoIluminado}><a href="#">Servicios</a></li>
        <li className={Styles.textoIluminado}><a href="#">Contacto</a></li>
      </ul>
    </div>
  )
}

export default NavBar
