import React, { Component } from 'react';
import './index.scss';
import Flower from '../Flower/index';

const table = [
  {
    key: 1,
  },
  {
    key: 2,
  },
  {
    key: 3,
  },
  {
    key: 4,
  },
  {
    key: 5,
  },
  {
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
      <Flower key={elem.key} flower={this.props.column[elem.key - 1]} />
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
