import React from 'react';
import Banner from './components/Banner'
import Experience from './components/Experience'
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
    <div className="main-container">
      <nav className="uk-navbar uk-navbar-container uk-margin header">
        <div className="uk-navbar-left">
          <a className="uk-navbar-item uk-logo" href="#banner">Darwin Gómez</a>
        </div>
        <div className="uk-navbar-right nav-sections">
          <ul className="uk-navbar-nav">
            <li className="uk-active"><a href="#banner">Inicio</a></li>
            <li className="uk-active"><a href="#experience">Tecnologias</a></li>
            <li className="uk-active"><a href="#about_me">Acerca de Mí</a></li>
            <li className="uk-active"><a href="#contact">Contacto</a></li>
          </ul>
        </div>
      </nav>
      <Banner />
      <Experience />
      <About />
      <Footer />
    </div>
  );
}

export default App;
