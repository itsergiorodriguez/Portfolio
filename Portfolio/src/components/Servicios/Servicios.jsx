import React from 'react';
import Styles from './Servicios.module.css';

const Servicios = () => {
  return (
    <div className={Styles['servicios-container']}>
      <h2>Nuestros Servicios</h2>
      <div className={Styles.servicio}>
        <h3>Desarrollo Web</h3>
        <p>
          Ofrecemos una amplia gama de servicios de desarrollo web, desde sitios web sencillos de una sola página hasta aplicaciones web escalables y complejas. Nuestro equipo de Full Stack Developers está listo para hacer realidad tu proyecto utilizando las últimas tecnologías y las mejores prácticas de desarrollo.
        </p>
      </div>
      {/* Puedes agregar más servicios aquí */}
    </div>
  );
}

export default Servicios;
