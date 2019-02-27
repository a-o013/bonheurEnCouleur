import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  to30,
  to40,
  to50,
  to60,
} from '../../actions/actions';

class AmountButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="amount-container">
        <button className={(this.props.amount === 30 ? 'amount-selected' : 'amount-button')} type="button" onClick={this.props.to30}>30</button>
        <button className={(this.props.amount === 40 ? 'amount-selected' : 'amount-button')} type="button" onClick={this.props.to40}>40</button>
        <button className={(this.props.amount === 50 ? 'amount-selected' : 'amount-button')} type="button" onClick={this.props.to50}>50</button>
        <button className={(this.props.amount === 60 ? 'amount-selected' : 'amount-button')} type="button" onClick={this.props.to60}>60</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.Reducer.amount,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    to30,
    to40,
    to50,
    to60,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AmountButton);
