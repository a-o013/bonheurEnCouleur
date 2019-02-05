import React, { Component } from 'react';
import './index.scss';
import { withRouter } from 'react-router';
import ModelsList from '../ModelsList/index';
import FormContainer from '../FormContainer/index';

class LeftSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    if (this.props.location.pathname === '/calendrier/1') {
      return (
        <div className="left-container">Planches</div>
      );
    }
    if (this.props.location.pathname === '/calendrier/2') {
      return (
        <div className="left-container">
          <ModelsList />
        </div>
      );
    }
    if (this.props.location.pathname === '/calendrier/3') {
      return (
        <div className="left-container"><FormContainer /></div>
      );
    }
    if (this.props.location.pathname === '/recharge/1') {
      return (
        <div className="left-container">Couleurs</div>
      );
    }
    if (this.props.location.pathname === '/recharge/2') {
      return (
        <div className="left-container"><FormContainer /></div>
      );
    }
    return (
      <div className="left-container">ERREUR</div>
    );
  }
}

export default withRouter(LeftSide);
