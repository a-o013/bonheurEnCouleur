import React, { Component } from 'react';
import './index.css';
import { withRouter } from 'react-router-dom';

class PreviousButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  navigateBack() {
    this.props.previous();
    this.props.history.goBack();
  }

  render() {
    return (
      <button type="button" onClick={() => this.navigateBack()}>Précédent</button>
    );
  }
}

export default withRouter(PreviousButton);
