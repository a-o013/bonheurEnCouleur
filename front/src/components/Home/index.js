import React, { Component } from 'react';
import OrderSection from '../OrderSection/index';
import Concept from '../Concept/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Concept />
        <OrderSection />
      </div>
    );
  }
}

export default Home;
