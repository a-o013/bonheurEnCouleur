import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeColor } from '../../actions/actions';

class Flower extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
        <button className="preview-button" type="button" onClick={() => this.props.changeColor({ column: this.props.column, flower: this.props.flower })}>
          <img className="preview-image" src={`http://localhost:3000/flowers/${this.props.currentPreview[this.props.column][this.props.flower - 1]}.png`} alt="" />
        </button>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  currentColor: state.currentColor,
  amount: state.amount,
  currentPreview: state.currentPreview,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ changeColor }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(Flower);
