import React, { Component } from 'react';
import './index.scss';
import Logomenu from './logomenu.png';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <nav className="navbar">
        <ul className="navbar_tableau">
          <li className="navbar_tableau_welcome">
            <img className="logomenu" src={Logomenu} alt="fleur logo" />
          </li>
          <li className="navbar_tableau_welcome">
            <a className="navbar_tableau_welcome_link" href="#welcome" alt="welcome" Title="Welcome">WELCOME</a>
          </li>
        </ul>
        <ul className="navbar_tableau">
          <li className="navbar_tableau_concept"><a href="#calendrier">Calendrier</a></li>
          <li className="navbar_tableau_concept navbar_tableau_concept--padding"><a href="#concept">Concept</a></li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
