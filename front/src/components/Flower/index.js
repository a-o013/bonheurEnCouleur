import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';

class Flower extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: this.props.flower,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.flower !== this.props.flower) {
      this.updateProps();
    }
  }

  updateProps() {
    this.setState({
      switch: this.props.flower,
    });
  }

  changeColor() {
    if (this.state.switch === this.props.currentColor) {
      this.setState({
        switch: 'empty-flower',
      });
    } else {
      this.setState({
        switch: this.props.currentColor,
      });
    }
  }

  render() {
    return (
      <li className="preview-item">
        <button className="preview-button" type="button" onClick={ev => this.changeColor(ev)}>
          <img className="preview-image" src={`http://localhost:3000/flowers/${this.state.switch}.png`} alt="" />
        </button>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  currentColor: state.currentColor,
});

export default connect(mapStateToProps)(Flower);
