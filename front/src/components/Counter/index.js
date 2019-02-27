import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { totals, setPrice, setResumerflower } from '../../actions/actions';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalArray: [],
      price: 0,
      finalArray: [],
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
    return (
      <div className="info_conteurs">
        <p className="bold-item info_conteurs_elem">
          Total fleurs:
          {this.state.totalArray.length}
        </p>
        <p className="bold-item info_conteurs_elem">
          Prix total:
          {this.state.price}
          €
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.amount,
  currentPreview: state.currentPreview,
  compteur: state.compteur,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ totals, setPrice, setResumerflower }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
