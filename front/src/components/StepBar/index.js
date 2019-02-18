import React, { Component } from 'react';
import './index.scss';
import { withRouter } from 'react-router';

const table = [{
  key: 1,
},
{
  key: 2,
},
{
  key: 3,
}];

let total = '';

class StepBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    if (this.props.match.params.section === 'calendrier') {
      total = 3;
    } else {
      total = 2;
    }
  }

  render() {
    const limit = this.props.match.params.step;

    const steps = table.slice(limit - 1, limit).map(elem => (
      <li className="step-item" key={elem.key}>{`${elem.key} / ${total}`}</li>
    ));
    return (
      <ul className="step-list">
        {steps}
      </ul>
    );
  }
}

export default withRouter(StepBar);
