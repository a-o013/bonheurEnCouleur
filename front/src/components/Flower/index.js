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
  regulator: state.regulator,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ changeColor, reCount }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(Flower);
