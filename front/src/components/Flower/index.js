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

  componentDidUpdate(prevProps, prevState) {
    console.log('update', prevProps, this.props)

    if(prevState.switch !== this.state.switch && this.state.switch === 'empty-flower'){
      this.updateState()
    }
    if(prevProps.flower !== this.props.flower){
      this.clearState();
    }
    if (prevProps.reboot !== this.props.reboot && this.props.reboot === 'on') {
      this.updateProps();
    }
  }

  updateState() {
    this.setState({
      switch: this.props.flower,
    });
  }

  clearState() {
    this.setState({
      switch: this.props.clear,
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
    console.log('ok', this.props.flower);
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
  reboot: state.reboot,
});

export default connect(mapStateToProps)(Flower);
