import React, { Component } from 'react';
import './index.scss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nextStep, totals, warning } from '../../actions/actions';
import next from '../../assets/images/arrow-right.svg';

class NextButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.clearSnackbar = this.clearSnackbar.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.step !== this.props.step) {
      this.props.history.push(`/${this.props.section}/${this.props.step}`);
    }
    if (this.props.isVisible === true) {
      setTimeout(this.clearSnackbar, 2000);
    }
  }

  clearSnackbar() {
    this.props.warning({ isVisible: false, message: '' });
  }

  less30() {
    if (this.props.total < 30 && this.props.location.pathname === '/calendrier/2') {
      return this.props.warning({ isVisible: true, message: 'Choisissez au minimum 30 fleurs' });
    }
    if (this.props.total % 10 !== 0 && this.props.location.pathname === '/calendrier/2') {
      return this.props.warning({ isVisible: true, message: 'Les fleurs doivent être commandées par dizaines' });
    }
    this.props.warning({ isVisible: false, message: '' });
    this.props.nextStep();
    return null;
  }

  render() {
    return (
      <button type="button" className={(this.props.total < 30 && this.props.location.pathname === '/calendrier/2') || (this.props.total % 10 !== 0 && this.props.location.pathname === '/calendrier/2') ? 'next next_off' : 'next'} onClick={() => this.less30()}>
        <img src={next} className="arrow" alt="next" />
      </button>
    );
  }
}

const mapStateToProps = state => ({
  step: state.Reducer.step,
  total: state.Reducer.total,
  isVisible: state.Reducer.warning.isVisible,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ nextStep, totals, warning }, dispatch)
);

const container = withRouter(NextButton);
export default connect(mapStateToProps, mapDispatchToProps)(container);
