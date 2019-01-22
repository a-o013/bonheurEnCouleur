import React, { Component } from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import next from '../../assets/arrow-right.svg';

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
      <NavLink to={`${this.props.section}${this.props.step}`}><button type="button" className="next" onClick={() => this.handleClick()}><img src={next} className="arrow" alt="next" /></button></NavLink>
    );
  }
}

export default NextButton;
