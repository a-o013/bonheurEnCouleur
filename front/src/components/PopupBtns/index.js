import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { popUpColors, popUpPackage, delet } from '../../actions/actions';

const mapDispatchToProps = dispatch => (
  bindActionCreators({ popUpColors, popUpPackage, delet }, dispatch)
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
        <div className="popUp_btn_div">
          <button type="button" onClick={() => this.props.popUpPackage()} className="popUp_btn popUp_btn_mobile">Packages</button>
          <button type="button" onClick={() => this.props.popUpColors()} className="popUp_btn popUp_btn_mobile">Couleurs</button>
        </div>
        <button className="popUp_btn" type="button" onClick={this.props.delet}>Réinitialiser</button>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(PopupBtns);
