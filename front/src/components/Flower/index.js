import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeColor, reCount } from '../../actions/actions';

class Flower extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  send(data) {
    this.props.changeColor(data);
    if (this.props.flower) {
      this.props.reCount();
    }
  }

  render() {
    return (
      <li className="preview-item">
        <button className="preview-button" type="button" onClick={() => this.send({ column: this.props.column, flower: this.props.flower })}>
          <img className="preview-image" src={`/flowers/${this.props.currentPreview[this.props.column][this.props.flower - 1]}.png`} alt="" />
        </button>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  currentColor: state.Reducer.currentColor,
  amount: state.Reducer.amount,
  currentPreview: state.Reducer.currentPreview,
  regulator: state.Reducer.regulator,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ changeColor, reCount }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(Flower);
