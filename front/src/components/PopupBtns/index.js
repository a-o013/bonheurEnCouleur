import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { popUpColors, popUpPackage } from '../../actions/actions';

const mapDispatchToProps = dispatch => (
  bindActionCreators({ popUpColors, popUpPackage }, dispatch)
);

class PopupBtns extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="popUp">
        <button type="button" className="popUp_btn">Reset</button>
        <button type="button" onClick={() => this.props.popUpPackage()} className="popUp_btn popUp_btn_mobile">Packages</button>
        <button type="button" onClick={() => this.props.popUpColors()} className="popUp_btn popUp_btn_mobile">Couleurs</button>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(PopupBtns);
