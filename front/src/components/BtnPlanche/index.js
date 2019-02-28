import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeGris, changeChoco } from '../../actions/actions';
import plancheChoco from '../../assets/images/planche_chocolat.png';
import plancheGrise from '../../assets/images/planche_grise.png';

const mapDispatchToProps = dispatch => (
  bindActionCreators({ changeGris, changeChoco }, dispatch)
);

const mapStateToProps = state => ({
  currentPlanche: state.Reducer.currentPlanche,
});

class BtnPlanche extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="container_btn_planches">
        <p className="bold-item">1. Choisis la couleur de ta planche</p>
        <button type="button" onClick={() => this.props.changeGris()} className={`btn_planches ${(this.props.currentPlanche === 'on' ? 'selected' : 'unselected')}`}>
          <img src={plancheGrise} alt="btn_planche_grise" className="btn_planches_image" />
        </button>
        <button type="button" onClick={() => this.props.changeChoco()} className={`btn_planches ${(this.props.currentPlanche === 'off' ? 'selected' : 'unselected')}`}>
          <img src={plancheChoco} alt="btn_planche_chocolat" className="btn_planches_image" />
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BtnPlanche);
