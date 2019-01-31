import React, { Component } from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import calendrier from '../../assets/images/calendrier.png';
import recharge from '../../assets/images/recharge.png';

class OrderSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="card">
        <div className=" card_holder">
          <NavLink to="/calendrier/1" className="card_holder_text">
            <div className="card_holder_border">
              Calendrier
              <img src={calendrier} alt="icone calendrier" className="icone" />
            </div>
          </NavLink>
        </div>

        <div className=" card_holder">
          <NavLink to="/recharge/1" className="card_holder_text">
            <div className="card_holder_border">
              Recharge
              <img src={recharge} alt="icone recharge" className="icone" />
            </div>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default OrderSection;
