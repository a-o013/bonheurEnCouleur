import React, { Component } from 'react';
import OrderSection from '../OrderSection/index';
import NavBar from '../NavBar/index';
import FirstPage from '../FirstPage/index';
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
        <NavBar />
        <FirstPage />
        <Concept />
        <OrderSection />
      </div>
    );
  }
}

export default Home;
