import React, { Component } from 'react';
import ChoixRC from '../ChoixRC/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <ChoixRC />
      </div>
    );
  }
}

export default Home;
