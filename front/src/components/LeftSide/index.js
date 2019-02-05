import React, { Component } from 'react';
import './index.scss';
import { withRouter } from 'react-router';
import ModelsList from '../ModelsList/index';
import ListeCouleurs from '../ListeCouleurs/index';

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
          <p className="bold-item">1. Choisissez un package</p>
          <ModelsList />
          <ListeCouleurs />
        </div>
      );
    }
    if (this.props.location.pathname === '/calendrier/3') {
      return (
        <div className="left-container">Formulaire</div>
      );
    }
    if (this.props.location.pathname === '/recharge/1') {
      return (
        <div className="left-container">Couleurs</div>
      );
    }
    if (this.props.location.pathname === '/recharge/2') {
      return (
        <div className="left-container">Formulaire</div>
      );
    }
    return (
      <div className="left-container">ERREUR</div>
    );
  }
}

export default withRouter(LeftSide);
