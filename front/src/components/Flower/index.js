import React, { Component } from 'react';
import './index.css';

class Flower extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <li>
        <img src={this.props.image} alt="" />
      </li>
    );
  }
}

export default Flower;
