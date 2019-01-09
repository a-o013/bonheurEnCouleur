import React, { Component } from 'react';
import './index.css';
import LeftSide from '../LeftSide/index';
import StepBar from '../StepBar/index';

class Simulator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <StepBar />
        <LeftSide />
      </div>
    );
  }
}

export default Simulator;
