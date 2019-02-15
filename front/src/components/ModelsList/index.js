import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nextModel, previousModel } from '../../actions/actions';
import next from '../../assets/images/arrow-right-blue.svg';
import previous from '../../assets/images/arrow-left-blue.svg';
import model1 from '../../assets/images/model1.png';
import model2 from '../../assets/images/model2.png';
import model3 from '../../assets/images/model3.png';
import model4 from '../../assets/images/model4.png';
import model5 from '../../assets/images/model5.png';

const table = [
  {
    image: model1,
    key: 1,
  },
  {
    image: model2,
    key: 2,
  },
  {
    image: model3,
    key: 3,
  },
  {
    image: model4,
    key: 4,
  },
  {
    image: model5,
    key: 5,
  },
];

class ModelsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 1,
    };
  }

  nextModel() {
    if (this.state.limit === 5) {
      this.setState({
        limit: 1,
      });
    } else {
      this.setState(
        prevState => ({ limit: prevState.limit + 1 }
        ),
      );
    }
  }

  previousModel() {
    if (this.state.limit === 1) {
      this.setState({
        limit: 5,
      });
    } else {
      this.setState(
        prevState => ({ limit: prevState.limit - 1 }
        ),
      );
    }
  }

  render() {
    const models = table.slice(this.props.limit - 1, this.props.limit).map(elem => (
      <li key={elem.key} className="model-item">
        <img className="image-model" src={elem.image} alt="" />
        <p className="model-step">{`${elem.key} / 5`}</p>
      </li>
    ));
    return (
      <div className="models-container">
        <button type="button" className="arrow-container" onClick={this.props.previousModel}><img src={previous} className="arrow-blue" alt="" /></button>
        <ul className="models-list">
          {models}
        </ul>
        <button type="button" className="arrow-container" onClick={this.props.nextModel}><img src={next} className="arrow-blue" alt="" /></button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  limit: state.limit,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ nextModel, previousModel }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ModelsList);
