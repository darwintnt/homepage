import React from 'react';
import css from '../assets/img/css3.svg'
import html5 from '../assets/img/html-5.svg'
import js from '../assets/img/javascript.svg'
import laravel from '../assets/img/laravel.svg'
import reactbrand from '../assets/img/react.svg'
import angular from '../assets/img/angular.svg'
import mysql from '../assets/img/mysql-logo.svg'
import mongo from '../assets/img/mongodb.svg'
import uikit from '../assets/img/uikit.svg'
import bootstrap from '../assets/img/bootstrap.svg'
import php from '../assets/img/php.svg'



function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="uk-child-width-1-2@m uk-grid uk-grid-large" data-uk-grid>

        <div className="experience-body">
          <h2>Tecnologias</h2>
          <p className="uk-text-center">
            Durante mi experiencia profesional he manejado una gran variedad de herramientas entre las que destaco:
          </p>
        </div>

        <div className="uk-child-width-1-3@m uk-grid uk-grid-small uk-flex-center" data-uk-grid>
          <div>
            <img src={html5} alt="HTML 5" />
          </div>
          <div>
            <img src={css} alt="CCS 3" />
          </div>
          <div>
            <img src={js} alt="Javascript" />
          </div>
          <div>
            <img src={laravel} alt="Laravel Framework" width="96" />
          </div>
          <div className="uk-flex uk-flex-middle">
            <img src={php} alt="PHP" width="96" />
          </div>
          <div>
            <img src={reactbrand} alt="React" width="96" />
          </div>
          <div>
            <img src={angular} alt="React" width="96" />
          </div>
          <div>
            <img src={mysql} alt="MySql" width="96" />
          </div>
          <div>
            <img src={mongo} alt="MongoDB" width="96" />
          </div>
          <div>
            <img src={uikit} alt="Uikit" width="96" />
          </div>
          <div>
            <img src={bootstrap} alt="MongoDB" width="96" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;