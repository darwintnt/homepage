import React from 'react';
import banner from '../assets/img/banner.svg'


function Banner() {
  return (
    <section id="#banner" className="uk-container">
      <div className="uk-child-width-1-2@m uk-grid uk-grid-large banner" data-uk-grid>

        <div className="banner-body">
          <h1 className="uk-text-center">Hola, Soy Darwin</h1>
          <p className="uk-text-center">
            Ingeniero de sistemas - desarrollador web, me encanta mi trabajo, resolver problemas es mi pasión.
          </p>
          <p className="uk-text-center">En constante aprendizaje.</p>
        </div>

        <img src={banner} alt="banner" className="uk-text-center" />
      </div>
    </section>
  );
}

export default Banner;