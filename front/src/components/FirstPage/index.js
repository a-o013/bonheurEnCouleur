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
      <div>
        <div className="background">
          <div className="background__text">
            <p className="background__text__p">Calendrier d’anniversaires</p>
            <img src={logo1} alt="fleur" className="background__text__image" />
            <p className="background__text__p">100 % personnalisable</p>
          </div>
        </div>
        <div className="container2">
          <img src={logo2} alt="calendrier" className="container2__image" />
        </div>
      </div>
    );
  }
}

export default FirstPage;
