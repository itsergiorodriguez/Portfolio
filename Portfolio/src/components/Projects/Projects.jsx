import React from 'react';
import Styles from './Projects.module.css';
import MMarket from './Imagenes/MMarket.png';
import Perros from './Imagenes/Perros.png';
import { NavLink } from 'react-router-dom'; 
const Projects = () => {
  const projects = [
    {
      title: 'M-Market',
      image: getImagen('M-Market'),
      link: 'https://m-market-iota.vercel.app',
    },
    {
      title: 'Perros-Razas',
      image: getImagen('Perros-Razas'),
      link: 'https://pi-dogs-lime.vercel.app/',
    },
   
  ];

  return (
    <div className={Styles.Container}>
      {projects.map((project, index) => (
        <div key={index} className={Styles.Card}>
          <h2>{project.title}</h2>
          <div className={Styles.Image}>
            <img src={project.image} alt={project.title} />
          </div>
          <div className={Styles.Info}>
              
          <NavLink
              to={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={Styles.Button} // Agrega una clase CSS para el botón
            >
              Visitar proyecto
              
            </NavLink>
           </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;


function getImagen(title) {
  switch (title) {
    case 'M-Market':
      return MMarket;
     case 'Perros-Razas':
      return Perros;
   
    default:
      return ''; 
  }
}
