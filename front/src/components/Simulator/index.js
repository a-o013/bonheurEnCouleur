import React, { Component } from 'react';
import './index.css';
import { withRouter } from 'react-router';
import LeftSide from '../LeftSide/index';
import StepBar from '../StepBar/index';

class Simulator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    if (this.props.location.pathname === '/1') {
      return (
        <div>
          <StepBar />
          <LeftSide />
        </div>
      );
    }
    return (
      <p>NOOO</p>
    );
  }
}

export default withRouter(Simulator);
