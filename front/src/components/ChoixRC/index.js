import React, { Component } from 'react';

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
          <div className="img_calendrier">
            <img src="calendrier" alt="img" />
          </div>
          <div className="btn-choixCR">
            <button type="button">Calendrier</button>
          </div>
        </div>
        <div className="container_recharge">
          <div className="img_recharge">
            <img src="recharge" alt="img" />
          </div>
          <div className="btn-choixCR">
            <button type="button">Recharge</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ChoixRC;
