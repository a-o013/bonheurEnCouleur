import React, { Component } from 'react';
import './index.scss';
import Logomenu from '../../assets/images/logomenu.png';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <nav className="navbar">
        <ul className="navbar_menu">
          <li className="navbar_menu_welcome">
            <img className="logomenu" src={Logomenu} alt="fleur logo" />
          </li>
          <li className="navbar_menu_welcome">
            <a className="navbar_menu_welcome_link" href="#welcome" alt="welcome" title="Welcome">WELCOME</a>
          </li>
        </ul>
        <ul className="navbar_menu">
          <li className="navbar_menu_concept"><a href="#calendrier">Calendrier</a></li>
          <li className="navbar_menu_concept navbar_menu_concept--padding"><a href="#concept">Concept</a></li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
