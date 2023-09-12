import React from 'react'
import Styles from './About.module.css'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const About = () => {
  

  return (
    <div className={Styles.aboutContainer}>
      <h1 className={Styles.title}>Sergio - Full Stack Developer Web</h1>
      <div className={Styles.presentation}>
        <p>
          Hola, soy Sergio, un apasionado Full Stack Developer con un enfoque en el desarrollo web. Mi pasión por la tecnología y la programación me ha llevado a explorar y crear soluciones innovadoras en el mundo digital. Con una sólida formación en desarrollo tanto en el frontend como en el backend, estoy comprometido en ofrecer experiencias web excepcionales.
        </p>
        <h2>Sobre Mí:</h2>
        <p>
          Como Full Stack Developer, tengo la capacidad de llevar una visión desde la concepción hasta la implementación. Mi experiencia abarca la creación de interfaces de usuario atractivas y funcionales, así como el desarrollo de sólidas arquitecturas de servidor y bases de datos. Me apasiona trabajar en equipo y colaborar con diseñadores y otros profesionales para lograr resultados sobresalientes.
        </p>
        <h2>Mis Habilidades:</h2>
        <ul className={Styles.skillsList}>
          <li>Desarrollo Frontend: Utilizo tecnologías como HTML, CSS y JavaScript para crear interfaces de usuario interactivas y atractivas. Estoy familiarizado con marcos de trabajo modernos como React.</li>
          <li>Desarrollo Backend: Tengo experiencia en la creación de servidores y la lógica de negocio utilizando Node.js, Express y otras tecnologías backend.</li>
          <li>Bases de Datos: Trabajo con bases de datos SQL y NoSQL para almacenar y gestionar datos de manera eficiente.</li>
          <li>Colaboración: Disfruto trabajando en equipos multidisciplinarios y contribuyendo a proyectos que hacen la diferencia en el mundo digital.</li>
          <li>Resolución de Problemas: Abordo desafíos técnicos con creatividad y eficacia, siempre buscando las mejores soluciones.</li>
        </ul>
        <h2>Mis Proyectos:</h2>
        <p>
          A lo largo de mi carrera, he tenido el privilegio de trabajar en una variedad de proyectos emocionantes. Estos incluyen aplicaciones web interactivas, sistemas de gestión de contenido personalizados y soluciones de comercio electrónico de alto rendimiento. Cada proyecto representa un desafío único que he abordado con entusiasmo y dedicación.
        </p>
        <h2>Mi Visión:</h2>
        <p>
          Creo firmemente en el poder de la tecnología para transformar la vida de las personas y simplificar procesos. Mi objetivo es seguir explorando nuevas tecnologías y tendencias para desarrollar soluciones que marquen la diferencia y mejoren la experiencia digital de los usuarios.
        </p>
        <h2>Contáctame:</h2>
        <p>
          Si estás interesado en colaborar en un proyecto o simplemente quieres charlar sobre desarrollo web, ¡estaré encantado de escucharte! Puedes contactarme a través de <u>it.sergiorodriguez@gmail.com </u> o conectarte conmigo en:
        </p>
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
    </div>
  )
}

export default About
