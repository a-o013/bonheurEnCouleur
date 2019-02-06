import React, { Component } from 'react';
import './index.scss';

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
          <p className="footer__link__bec">Le bonheur en couleurs</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
