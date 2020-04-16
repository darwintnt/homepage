import React from 'react';
import banner from '../assets/img/banner.svg'
import profile from '../assets/img/profile.jpg'


function About() {
  return (
    <section id="about_me" className="uk-container">
      <div className="about-body">
        <img class="uk-border-circle" width="150" height="150" src={profile}></img>
        <h2>Acerca de mí</h2>
        <p>
          Soy ingeniero de sistemas de la Escuela Tecnologica - Instituto Tecnico Central de la ciudad de Bogotá, trabajo actualmente para Intelligent Software Architecture <a href="https://www.insoftar.com/" target="_blank" rel="noopener noreferrer">Insoftar Inc, </a> 
          como lider de operaciones para uno de los proyectos de la compañia. Llevo mas de dos años en el area del desarrollo web tanto de manera autodidacta como profesional, creando aplicaciones a medida para empresas del sector privado en las area de la salud y de empaques flexibles.
        </p>
        <p>Mi pasión es contruir aplicaciones de calidad usando las mejores practicas de la industria, es un proceso de aprendizaje constante pero muy gratificante.</p>
        <p>Me gustan mucho los planes al aire libre, la lectura, la musica rock y la salsa <span role="img" aria-label="rock">🤘</span></p>
      </div>
    </section>
  );
}

export default About;