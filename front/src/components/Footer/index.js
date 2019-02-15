import React, { Component } from 'react';
import './index.scss';
import logofacebook from '../../assets/images/logofacebook.png';
import logowcs from '../../assets/images/logowcs.png';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer__link">

          <img className="footer__link__image" src="https://image.noelshack.com/fichiers/2019/06/2/1549385979-logo-fleur.png" alt="fleur logo" />
          <a href="https://www.lerobert.com/sites/default/files/common/CGU.pdf"><p className="footer__link__text">Conditions d’utilisation</p></a>
        </div>
        <div className="footer__facebook">
          <p className="footer__facebook__text">Suivez-moi sur Facebook</p>
          <a href="https://www.facebook.com/bonheurencouleurs/">
            <img className="footer__facebook__image" src={logofacebook} alt="logo facebook" />
          </a>
        </div>
        <div className="footer__wcs">
          <p className="footer__wcs__text">© 2019 - Made with ♡ by</p>
          <a href="https://wildcodeschool.be/"><img className="footer__wcs__image" src={logowcs} alt="logo wild code school" /></a>
        </div>
      </footer>
    );
  }
}

export default Footer;
