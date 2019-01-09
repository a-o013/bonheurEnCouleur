import React, { Component } from 'react';
import './index.css';

class SimulatorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
    };
  }


  render() {
    return (
      <ul>
        {console.log(this.state)}
      </ul>
    );
  }
}

export default SimulatorList;
