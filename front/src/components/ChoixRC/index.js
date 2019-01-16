import React, { Component } from 'react';
import './index.scss';

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
          <button type="button">Calendrier</button>
        </div>
        <div className="container_recharge">
          <img src="recharge" alt="img" />
          <button type="button">Recharge</button>
        </div>
      </div>
    );
  }
}

export default ChoixRC;
