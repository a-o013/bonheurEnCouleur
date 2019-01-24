import React, { Component } from 'react';
import './index.scss';
import { withRouter } from 'react-router-dom';
import previous from '../../assets/images/arrow-left.svg';

class PreviousButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  navigateBack() {
    this.props.previous();
    this.props.history.goBack();
  }

  render() {
    return (
      <button type="button" className="previous" onClick={() => this.navigateBack()}><img src={previous} className="arrow" alt="previous" /></button>
    );
  }
}

export default withRouter(PreviousButton);
