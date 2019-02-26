import React, { Component } from 'react';
import OrderSection from '../OrderSection/index';
import NavBar from '../NavBar/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <NavBar />
        <OrderSection />
      </div>
    );
  }
}

export default Home;
