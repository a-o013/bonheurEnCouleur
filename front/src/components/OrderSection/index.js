import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

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

const mapDispatchToProps = dispatch => ({
  nextStep: () => dispatch({ type: 'NEXTSTEP' }),
});

export default connect(null, mapDispatchToProps)(OrderSection);
