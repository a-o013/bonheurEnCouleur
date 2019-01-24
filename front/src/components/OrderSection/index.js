import React, { Component } from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';

class OrderSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div>
          <NavLink to="/calendrier/1">Calendrier</NavLink>
        </div>
        <div>
          <NavLink to="/recharge/1">Recharge</NavLink>
        </div>
      </div>
    );
  }
}

export default OrderSection;
