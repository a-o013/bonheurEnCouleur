import React, { Component } from 'react';
import './index.scss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import previous from '../../assets/images/arrow-left.svg';

class PreviousButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  navigateBack() {
    this.props.history.goBack();
    this.props.previousStep();
  }

  render() {
    return (
      <button type="button" className="previous" onClick={() => this.navigateBack()}><img src={previous} className="arrow" alt="previous" /></button>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  previousStep: () => dispatch({ type: 'PREVIOUSSTEP' }),
});

export default withRouter(connect(null, mapDispatchToProps)(PreviousButton));
