import React, { Component } from 'react';
import './index.css';

const table = [
  {
    image: 'grey.png',
    key: 1,
  },
  {
    image: 'grey.png',
    key: 2,
  },
  {
    image: 'grey.png',
    key: 3,
  },
  {
    image: 'grey.png',
    key: 4,
  },
  {
    image: 'grey.png',
    key: 5,
  },
  {
    image: 'grey.png',
    key: 6,
  },
  {
    image: 'grey.png',
    key: 7,
  },
  {
    image: 'grey.png',
    key: 8,
  },
  {
    image: 'grey.png',
    key: 9,
  },
  {
    image: 'grey.png',
    key: 10,
  },
];

class FlowerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const flowers = table.map(elem => (
      <li key={elem.key}><img src={elem.image} alt="" /></li>
    ));
    return (
      <li>
        <ul>
          {flowers}
        </ul>
      </li>
    );
  }
}

export default FlowerList;
