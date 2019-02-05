import React, { Component } from 'react';
import './index.scss';
import Flower from '../Flower/index';

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
];

class FlowerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const flowers = table.map(elem => (
      <Flower key={elem.key} image={elem.image} />
    ));
    return (
      <li>
        <ul className="preview-flower-list">
          {flowers}
        </ul>
      </li>
    );
  }
}

export default FlowerList;
