import React, { Component } from 'react';
import './index.css';
import { withRouter } from 'react-router';
import LeftSide from '../LeftSide/index';
import StepBar from '../StepBar/index';
import NextButton from '../NextButton/index';

class Simulator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    };
  }

  next() {
    this.setState(prevState => ({
      current: prevState.current + 1,
    }));
  }

  render() {
    if (this.props.location.pathname === '/1') {
      return (
        <div>
          <StepBar />
          <LeftSide />
          <NextButton next={() => this.next()} current={this.state.current} />
        </div>
      );
    }
    return (
      <p>NOOO</p>
    );
  }
}

export default withRouter(Simulator);
