import React, { Component } from 'react';
import './index.css';

const table = [
  {
    image: 1,
    key: 1,
  },
  {
    image: 2,
    key: 2,
  },
  {
    image: 3,
    key: 3,
  },
  {
    image: 4,
    key: 4,
  },
];

class ModelsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const models = table.map(elem => (
      <li key={elem.key}><img src={elem.image} alt="" /></li>
    ));
    return (
      <ul>
        {models}
      </ul>
    );
  }
}

export default ModelsList;
