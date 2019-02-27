import React, { Component } from 'react';
import './index.scss';
import logo1 from '../../assets/images/logo_fleur.png';

class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="welcome">
        <div className="background">
          <div className="background__text">
            <p className="background__text__p">Calendrier d’anniversaires</p>
            <img src={logo1} alt="fleur" className="background__text__image" />
            <p className="background__text__p">100 % personnalisable</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstPage;
