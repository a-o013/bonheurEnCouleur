import React, { Component } from 'react';
import OrderSection from '../OrderSection/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <OrderSection />
      </div>
    );
  }
}

export default Home;
