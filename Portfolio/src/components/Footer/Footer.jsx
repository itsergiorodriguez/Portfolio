import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
         
          <div className={styles.footerLinks}>
            <ul>
              <li><a href="/inicio">Inicio</a></li>
              <li><a href="/servicios">Servicios</a></li>
              <li><a href="/Contacto">Contacto</a></li>
            </ul>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
