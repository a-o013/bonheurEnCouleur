import React, { Component } from 'react';
import './index.scss';
import Flower from '../Flower/index';

const table = [
  {
    key: 1,
    img: 'empty-flower',
  },
  {
    key: 2,
    img: 'empty-flower',
  },
  {
    key: 3,
    img: 'empty-flower',
  },
  {
    key: 4,
    img: 'empty-flower',
  },
  {
    key: 5,
    img: 'empty-flower',
  },
  {
    key: 6,
    img: 'empty-flower',
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
      <Flower key={elem.key} flower={this.props.column[elem.key - 1]} clear={elem.img} />
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
