import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <nav className="navigation-bar">
        <ul>
          <li className="nav-list"><a href="#welcome" nav-section="welcome">Welcome</a></li>
          <li className="nav-list"><a href="#concept" nav-section="concept">Concept</a></li>
          <li className="nav-list"><a href="#mon-calendrier" nav-section="mon-calendreir">Mon calendrier</a></li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
