import React, { Component } from 'react';
import './index.css';
import { withRouter } from 'react-router';
import LeftSide from '../LeftSide/index';
import StepBar from '../StepBar/index';
import NextButton from '../NextButton/index';
import PreviousButton from '../PreviousButton/index';

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

  previous() {
    this.setState(prevState => ({
      current: prevState.current - 1,
    }));
  }

  render() {
    if (this.props.location.pathname === '/calendrier/1') {
      return (
        <div>
          <p>1</p>
          <StepBar />
          <LeftSide />
          <NextButton next={() => this.next()} current={this.state.current} />
          <PreviousButton previous={() => this.previous()} />
        </div>
      );
    }
    if (this.props.location.pathname === '/calendrier/2') {
      return (
        <div>
          <p>2</p>
          <NextButton next={() => this.next()} current={this.state.current} />
          <PreviousButton previous={() => this.previous()} />
        </div>
      );
    }
    if (this.props.location.pathname === '/calendrier/3') {
      return (
        <div>
          <p>3</p>
          <PreviousButton previous={() => this.previous()} />
        </div>
      );
    }
    return (
      <p>ERREUR</p>
    );
  }
}

export default withRouter(Simulator);
