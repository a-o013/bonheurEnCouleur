import React, { Component } from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
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
      <NavLink to={`${this.props.section}${this.props.step}`} className="next" onClick={() => this.handleClick()}><img src={next} className="arrow" alt="next" /></NavLink>
    );
  }
}

export default NextButton;
