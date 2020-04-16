import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import * as moment from 'moment'



function Footer() {

  let now = moment().format('Y');

  return (
    <footer id="contact" className="uk-navbar footer">
      <div className="uk-navbar-left brand-name">
        <ul className="uk-navbar-nav">
        <li>© { now } Darwin Gómez | All rights reserved</li>
        </ul>
      </div>
      <div className="uk-navbar-center brand-links">
        <ul className="uk-navbar-nav">
          <li>
            <a href="https://twitter.com/darwintnt" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="3x" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/darwintnt" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
          </li>
          <li>
            <a href="https://github.com/darwintnt" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
          </li>
        </ul>
      </div>
      <div className="uk-navbar-right brand-email">
        <ul className="uk-navbar-nav">
        <li>darwintnt@hotmail.com</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;