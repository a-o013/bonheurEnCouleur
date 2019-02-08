import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import LeftSide from '../LeftSide/index';
import StepBar from '../StepBar/index';
import NextButton from '../NextButton/index';
import PreviousButton from '../PreviousButton/index';
import MonthList from '../MonthList/index';
import plancheChoco from '../../assets/images/Planche_chocolat.png';
import plancheGrise from '../../assets/images/Planche_grise.png';


const mapStateToProps = state => ({
  currentPlanche: state.currentPlanche,
});

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
              <img src={plancheGrise} alt="btn_planche_grise" className={`planches_simulator planches_simulator_${this.props.currentPlanche}`} />
              <img src={plancheChoco} alt="btn_planche_chocolat" className="planches_simulator planches_simulator_choco" />
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
              <img src={plancheGrise} alt="btn_planche_grise" className={`planches_simulator planches_simulator_${this.props.currentPlanche}`} />
              <img src={plancheChoco} alt="btn_planche_chocolat" className="planches_simulator planches_simulator_choco" />
              <MonthList />
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
              <img src={plancheGrise} alt="btn_planche_grise" className={`planches_simulator planches_simulator_${this.props.currentPlanche}`} />
              <img src={plancheChoco} alt="btn_planche_chocolat" className="planches_simulator planches_simulator_choco" />
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

export default connect(mapStateToProps)(Simulator);
