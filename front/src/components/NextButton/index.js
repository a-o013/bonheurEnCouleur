import React, { Component } from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nextStep } from '../../actions/actions';
import next from '../../assets/images/arrow-right.svg';

class NextButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick() {
    this.props.next();
  }

  render() {
    return (
      <NavLink to={`/${this.props.section}/${this.props.step}`} className="next" onClick={this.props.nextStep}><img src={next} className="arrow" alt="next" /></NavLink>
    );
  }
}

const mapStateToProps = state => ({
  step: state.step,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ nextStep }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NextButton);
