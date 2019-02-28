import React, { Component } from 'react';
import './index.scss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  totals,
  setPrice,
  setResumerflower,
  upRecharge,
} from '../../actions/actions';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalArray: [],
      price: 0,
      finalArray: [],
      totalRecharge: 0,
      detailRecharge: {},
    };
  }

  componentDidMount() {
    this.getTotal();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentPreview !== this.props.currentPreview) {
      this.getTotal();
    }

    if (prevState.totalArray !== this.state.totalArray) {
      this.props.totals(this.state.totalArray.length);
    }

    if (prevState.price !== this.state.price) {
      this.props.setPrice(this.state.price);
    }

    if (prevState.finalArray !== this.state.finalArray) {
      this.props.setResumerflower(this.state.finalArray);
    }
    if (prevProps.currentAmount !== this.props.currentAmount) {
      this.props.upRecharge();
    }
  }

  getTotal() {
    const total = [];
    Object.keys(this.props.currentPreview).map((key) => {
      this.props.currentPreview[key].filter((elem) => {
        if (elem !== 'empty-flower') {
          total.push(elem);
        }
        return null;
      });
      return null;
    });
    this.setState({
      totalArray: total,
    });
    this.totalPrice(total.length);
    this.createFinalArray(total);
  }

  totalPrice(total) {
    this.setState({
      price: total * 0.5 + 20,
    });
  }

  createFinalArray(total) {
    const resultArray = total.reduce((flowerList, flower) => {
      const list = flowerList;
      if (flower in flowerList) {
        list[flower] += 1;
      } else {
        list[flower] = 1;
      }
      return list;
    }, {});

    this.setState({
      finalArray: resultArray,
    });
  }


  render() {
    console.log(this.state.totalRecharge, 'total');
    console.log(this.state.detailRecharge, 'detail');

    return (
      <div>
        <p className="bold-item">
          Total fleurs:
          {(this.props.match.params.section === 'calendrier' ? this.state.totalArray.length : 0)}
        </p>
        <p className="bold-item">
          Prix:
          {(this.props.match.params.section === 'calendrier' ? this.state.price : 0)}
          €
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.Reducer.amount,
  currentPreview: state.Reducer.currentPreview,
  currentAmount: state.Reducer.currentAmount,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    totals,
    setPrice,
    setResumerflower,
    upRecharge,
  }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Counter));
