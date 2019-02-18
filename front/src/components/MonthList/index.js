import React, { Component } from 'react';
import './index.scss';
import FlowerList from '../FlowerList/index';

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
  {
    key: 7,
  },
  {
    key: 8,
  },
  {
    key: 9,
  },
  {
    key: 10,
  },
  {
    key: 11,
  },
  {
    key: 12,
  },
];

class MonthList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const months = table.map(elem => (
      <FlowerList column={elem.key} />
    ));
    return (
      <ul className="month-list">
        {months}
      </ul>
    );
  }
}

export default MonthList;
