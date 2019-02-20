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
  currentColor: state.reducer.currentColor,
  amount: state.reducer.amount,
  currentPreview: state.reducer.currentPreview,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ changeColor }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(Flower);
