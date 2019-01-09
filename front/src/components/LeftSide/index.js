import React, { Component } from 'react';
import './index.css';
import PackageList from '../PackageList/index';

class LeftSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <PackageList />
      </div>
    );
  }
}

export default LeftSide;
