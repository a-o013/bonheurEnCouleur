import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { popUpOffColor, popUpOffPackage, delet } from '../../actions/actions';
import LeftSide from '../LeftSide/index';
import StepBar from '../StepBar/index';
import NextButton from '../NextButton/index';
import PreviousButton from '../PreviousButton/index';
import MonthList from '../MonthList/index';
import ListeCouleurs from '../ListeCouleurs/index';
import PopupBtns from '../PopupBtns/index';
import ModelsList from '../ModelsList';
import AmountButton from '../AmountButton';
import FlowerPack from '../FlowerPack/index';

class Simulator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: '',
    };
  }

  componentDidMount() {
    this.setState({
      section: this.props.match.params.section,
    });
    if (this.props.match.params.section === 'recharge') {
      this.props.delet();
    }
  }

  render() {
    if (this.props.location.pathname === '/calendrier/1') {
      return (
        <div className="simulator-container">
          <div className="step-container">
            <StepBar />
            <PreviousButton />
            <NextButton section={this.state.section} />
          </div>
          <div className="main-container">
            <LeftSide />
            <div className="preview-container">
              planche
            </div>
          </div>
        </div>
      );
    }
    if (this.props.location.pathname === '/calendrier/2') {
      return (
        <div className="simulator-container">
          <div className="step-container">
            <StepBar />
            <PreviousButton />
            <NextButton section={this.state.section} />
          </div>
          <div className="main-container">
            <LeftSide />
            <div className="preview-container">
              <MonthList />
              <PopupBtns />
              <div className={`popUp__button_listeCouleurs_${this.props.popUpColors}`}>
                <button type="button" onClick={() => this.props.popUpOffColor()} className="close_btn">X</button>
                <ListeCouleurs />
              </div>
              <div className={`popUp__button_packages_${this.props.popUpPackages}`}>
                <button type="button" onClick={() => this.props.popUpOffPackage()} className="close_btn">X</button>
                <div className="popUp__button_packages_card">
                  <AmountButton />
                  <ModelsList />
                </div>
              </div>
              <button className="clear-button" type="button" onClick={this.props.delet}>Effacer le calendrier</button>
            </div>
          </div>
        </div>
      );
    }
    if (this.props.location.pathname === '/calendrier/3') {
      return (
        <div className="simulator-container">
          <div className="step-container">
            <StepBar />
            <PreviousButton />
          </div>
          <div className="main-container">
            <LeftSide />
            <div className="preview-container">
              <MonthList />
            </div>
          </div>
        </div>
      );
    }
    if (this.props.location.pathname === '/recharge/1') {
      return (
        <div className="simulator-container">
          <div className="step-container">
            <StepBar />
            <PreviousButton />
            <NextButton section={this.state.section} />
          </div>
          <div className="main-container">
            <LeftSide />
            <div className="preview-container">
              <FlowerPack />
            </div>
          </div>
        </div>
      );
    }
    if (this.props.location.pathname === '/recharge/2') {
      return (
        <div className="simulator-container">
          <div className="step-container">
            <StepBar />
            <PreviousButton />
          </div>
          <div className="main-container">
            <LeftSide />
            <div className="preview-container">
              zzz
            </div>
          </div>
        </div>
      );
    }
    return (
      <p>ERREUR</p>
    );
  }
}

const mapStateToProps = state => ({
  popUpColors: state.popUpColors,
  popUpPackages: state.popUpPackages,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ delet, popUpOffColor, popUpOffPackage }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Simulator);
