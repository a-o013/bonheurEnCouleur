import React, { Component } from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';

class ChoixRC extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container">
        <div className="container_calendrier">
          <img src="calendrier" alt="img" />
          <NavLink to="/calendrier/1"><button type="button">Calendrier</button></NavLink>
        </div>
        <div className="container_recharge">
          <img src="recharge" alt="img" />
          <NavLink to="/recharge/1"><button type="button">Recharge</button></NavLink>
        </div>
      </div>
    );
  }
}

export default ChoixRC;
