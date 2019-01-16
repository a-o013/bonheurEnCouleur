import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

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
      <NavLink to={`/calendrier/${this.props.current}`}><button type="button" onClick={() => this.handleClick()}>Suivant</button></NavLink>
    );
  }
}

export default NextButton;
