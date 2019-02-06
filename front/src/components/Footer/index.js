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
      <div className="footer">
        <ul>
          <li className="footername"><img className="imageform" src="https://image.noelshack.com/fichiers/2019/06/2/1549385979-logo-fleur.png" alt="fleur logo" /></li>
          <li className="footername nameform">Le Bonheur en couleurs</li>
        </ul>
      </div>
    );
  }
}

export default Footer;
