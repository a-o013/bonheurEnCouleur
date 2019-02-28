import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setResumerflower } from '../../actions/actions';

class DetailCommande extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  myFunction = () => {
    const popupDetail = document.getElementById('myPopupDetail');
    popupDetail.classList.toggle('showDetail');
  }

  render() {
    const popupContent = Object.keys(this.props.resumerFleurs).map(key => (
      <li className="detail_li">
        <img src={`/flowers/${key}.png`} alt="flower" className="images_detail" />
        <span className="text_detail">
          X
          {this.props.resumerFleurs[key]}
        </span>
      </li>
    ));

    return (
      <div className="popupDetail">
        <button type="button" className="btn_detail" onClick={() => this.myFunction()}>Détail</button>
        <div className="popupTextDetail" id="myPopupDetail">
          <button type="button" className="text_detail text_detail_close" onClick={() => this.myFunction()}>X</button>
          <ul className="liste_detail">{popupContent}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  resumerFleurs: state.Reducer.resumerFleurs,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setResumerflower }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(DetailCommande);
