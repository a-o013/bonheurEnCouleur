import React, { Component } from 'react';
import OrderSection from '../OrderSection/index';
import Footer from '../Footer/index';

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
        <Footer />
      </div>
    );
  }
}

export default Home;
