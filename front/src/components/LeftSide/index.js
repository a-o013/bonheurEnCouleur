import React, { Component } from 'react';
import './index.css';
import { withRouter } from 'react-router';
import PackageList from '../PackageList/index';

class LeftSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    if (this.props.location.pathname === '/calendrier/1') {
      return (
        <p>Planches</p>
      );
    }
    if (this.props.location.pathname === '/calendrier/2') {
      return (
        <div>
          <PackageList />
        </div>
      );
    }
    if (this.props.location.pathname === '/calendrier/3') {
      return (
        <p>Formulaire</p>
      );
    }
    if (this.props.location.pathname === '/recharge/1') {
      return (
        <p>Couleurs</p>
      );
    }
    if (this.props.location.pathname === '/recharge/2') {
      return (
        <p>Formulaire</p>
      );
    }
    return (
      <p>ERREUR</p>
    );
  }
}

export default withRouter(LeftSide);
