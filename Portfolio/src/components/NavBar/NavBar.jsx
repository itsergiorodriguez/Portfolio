import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './NavBar.module.css';
import Perfil from '../../assets/img/Perfil01.jpg';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const NavBar = () => {



  return (
    <div className={Styles.container}>
      <div className={Styles.logo}>
        <img src={Perfil} alt="Logo" className={Styles.logoImage} />
      </div>
     
      <ul className={Styles.navLinks}>
        <li className={Styles.textoIluminado}>
          <NavLink to="/" activeClassName={Styles.activeLink}>
            Inicio
          </NavLink>
        </li>
        <li className={Styles.textoIluminado}>
          <NavLink to="/about" activeClassName={Styles.activeLink}>
            Quien Soy?
          </NavLink>
        </li>
        <li className={Styles.textoIluminado}>
          <NavLink to="/services" activeClassName={Styles.activeLink}>
            Proyectos
          </NavLink>
        </li>
      </ul>

      <div className={Styles.socialLinks}>
        <a href={'https://github.com/itsergiorodriguez'} target="_blank" rel="noopener noreferrer" className={Styles.githubLink}>
          <AiFillGithub className={Styles.icon} />
          GitHub
          <span className={Styles.arrow}></span>
        </a>
        <a href={'https://www.linkedin.com/in/sergio-martin-rodriguez-401853a3/'} target="_blank" rel="noopener noreferrer" className={Styles.linkedinLink}>
          <AiFillLinkedin className={Styles.icon} />
          LinkedIn
          <span className={Styles.arrow}></span>
        </a>
      </div>

      
    </div>
  );
};

export default NavBar;
