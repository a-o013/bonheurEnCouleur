import React, { Component } from 'react';
import './index.scss';
import { withRouter } from 'react-router';
import LeftSide from '../LeftSide/index';
import StepBar from '../StepBar/index';
import NextButton from '../NextButton/index';
import PreviousButton from '../PreviousButton/index';

class Simulator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: '',
      step: 2,
    };
  }

  componentDidMount() {
    this.setState({
      section: this.props.location.pathname.substring(0, this.props.location.pathname.length - 1),
    });
  }

  next() {
    this.setState(prevState => ({
      step: prevState.step + 1,
    }));
  }

  previous() {
    this.setState(prevState => ({
      step: prevState.step - 1,
    }));
  }

  render() {
    if (this.props.location.pathname === '/calendrier/1') {
      return (
        <div>
          <div className="step-container">
            <StepBar />
            <PreviousButton previous={() => this.previous()} />
            <NextButton
              next={() => this.next()}
              step={this.state.step}
              section={this.state.section}
            />
          </div>
          <LeftSide />
        </div>
      );
    }
    if (this.props.location.pathname === '/calendrier/2') {
      return (
        <div>
          <div className="step-container">
            <StepBar />
            <PreviousButton previous={() => this.previous()} />
            <NextButton
              next={() => this.next()}
              step={this.state.step}
              section={this.state.section}
            />
          </div>
          <LeftSide />
        </div>
      );
    }
    if (this.props.location.pathname === '/calendrier/3') {
      return (
        <div>
          <div className="step-container">
            <StepBar />
            <PreviousButton previous={() => this.previous()} />
          </div>
          <LeftSide />
        </div>
      );
    }
    if (this.props.location.pathname === '/recharge/1') {
      return (
        <div>
          <div className="step-container">
            <StepBar />
            <PreviousButton previous={() => this.previous()} />
            <NextButton
              next={() => this.next()}
              step={this.state.step}
              section={this.state.section}
            />
          </div>
          <LeftSide />
        </div>
      );
    }
    if (this.props.location.pathname === '/recharge/2') {
      return (
        <div>
          <div className="step-container">
            <StepBar />
            <PreviousButton previous={() => this.previous()} />
          </div>
          <LeftSide />
        </div>
      );
    }
    return (
      <p>ERREUR</p>
    );
  }
}

export default withRouter(Simulator);
