import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { previousStep } from '../../actions/actions';
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

const mapDispatchToProps = dispatch => (
  bindActionCreators({ previousStep }, dispatch)
);

export default withRouter(connect(null, mapDispatchToProps)(PreviousButton));
