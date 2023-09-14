import React from 'react';
import styles from './Footer.module.css';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
         
          <div className={styles.footerLinks}>
            <ul>
              <li>
                <NavLink to="/inicio" >
                    Inicio
               </NavLink></li>
              <li>
              <NavLink to="/servicios" >
                  Servicios
              </NavLink>
              </li>
              <li>
              <NavLink to="/contacto" >
                  Contacto
              </NavLink>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
