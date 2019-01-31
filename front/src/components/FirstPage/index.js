import React, { Component } from 'react';
import './index.scss';
import logo1 from '../../assets/images/logo_fleur.png';
import logo2 from '../../assets/images/logo_calendrier.png';

class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container">
        <div className="fond">
          <div className="text">
            <p className="text_p">Calendrier d’anniversaires</p>
            <p className="text_p">100 % personalisable</p>
          </div>
          <div className="logo">
            <img src={logo1} alt="fond" className="logo1" />
            <img src={logo2} alt="fond" className="logo2" />
          </div>
        </div>
      </div>
    );
  }
}

export default FirstPage;
