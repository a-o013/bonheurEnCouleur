import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { popUpOffColor, popUpOffPackage } from '../../actions/actions';
import LeftSide from '../LeftSide/index';
import StepBar from '../StepBar/index';
import NextButton from '../NextButton/index';
import PreviousButton from '../PreviousButton/index';
import MonthList from '../MonthList/index';
import ListeCouleurs from '../ListeCouleurs/index';
import PopupBtns from '../PopupBtns/index';
import ModelsList from '../ModelsList';
import AmountButton from '../AmountButton';

const mapStateToProps = state => ({
  popUpColors: state.popUpColors,
  popUpPackages: state.popUpPackages,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ popUpOffColor, popUpOffPackage }, dispatch)
);

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
          <LeftSide />
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
          <LeftSide />
        </div>
      );
    }
    return (
      <p>ERREUR</p>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Simulator);
