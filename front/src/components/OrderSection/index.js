import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nextStep } from '../../actions/actions';

class OrderSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div>
          <NavLink to="/calendrier/1" onClick={this.props.nextStep}>Calendrier</NavLink>
        </div>
        <div>
          <NavLink to="/recharge/1" onClick={this.props.nextStep}>Recharge</NavLink>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ nextStep }, dispatch)
);

export default connect(null, mapDispatchToProps)(OrderSection);
