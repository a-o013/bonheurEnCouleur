import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectColor } from '../../actions/actions';
import img1 from '../../assets/images/flowers/1.png';
import img2 from '../../assets/images/flowers/2.png';
import img3 from '../../assets/images/flowers/3.png';
import img4 from '../../assets/images/flowers/4.png';
import img5 from '../../assets/images/flowers/5.png';
import img6 from '../../assets/images/flowers/6.png';
import img7 from '../../assets/images/flowers/7.png';
import img8 from '../../assets/images/flowers/8.png';
import img9 from '../../assets/images/flowers/9.png';
import img10 from '../../assets/images/flowers/10.png';
import img11 from '../../assets/images/flowers/11.png';
import img12 from '../../assets/images/flowers/12.png';
import img13 from '../../assets/images/flowers/13.png';
import img14 from '../../assets/images/flowers/14.png';
import img15 from '../../assets/images/flowers/15.png';
import img16 from '../../assets/images/flowers/16.png';
import img17 from '../../assets/images/flowers/17.png';
import img18 from '../../assets/images/flowers/18.png';
import img19 from '../../assets/images/flowers/19.png';
import img20 from '../../assets/images/flowers/20.png';
import img21 from '../../assets/images/flowers/21.png';
import img22 from '../../assets/images/flowers/22.png';
import img23 from '../../assets/images/flowers/23.png';
import img24 from '../../assets/images/flowers/24.png';
import img25 from '../../assets/images/flowers/25.png';
import img26 from '../../assets/images/flowers/26.png';
import img27 from '../../assets/images/flowers/27.png';
import img28 from '../../assets/images/flowers/28.png';
import img29 from '../../assets/images/flowers/29.png';
import img30 from '../../assets/images/flowers/30.png';
import img31 from '../../assets/images/flowers/31.png';
import img32 from '../../assets/images/flowers/32.png';
import img33 from '../../assets/images/flowers/33.png';
import img34 from '../../assets/images/flowers/34.png';
import img35 from '../../assets/images/flowers/35.png';
import img36 from '../../assets/images/flowers/36.png';
import img37 from '../../assets/images/flowers/37.png';
import img38 from '../../assets/images/flowers/38.png';
import img39 from '../../assets/images/flowers/39.png';
import img40 from '../../assets/images/flowers/40.png';
import img41 from '../../assets/images/flowers/41.png';
import img42 from '../../assets/images/flowers/42.png';
import img43 from '../../assets/images/flowers/43.png';
import img44 from '../../assets/images/flowers/44.png';
import img45 from '../../assets/images/flowers/45.png';
import img46 from '../../assets/images/flowers/46.png';
import img47 from '../../assets/images/flowers/47.png';
import img48 from '../../assets/images/flowers/48.png';

const couleur = [{ img: img1, key: 1 },
  { img: img2, key: 2 },
  { img: img3, key: 3 },
  { img: img4, key: 4 },
  { img: img5, key: 5 },
  { img: img6, key: 6 },
  { img: img7, key: 7 },
  { img: img8, key: 8 },
  { img: img9, key: 9 },
  { img: img10, key: 10 },
  { img: img11, key: 11 },
  { img: img12, key: 12 },
  { img: img13, key: 13 },
  { img: img14, key: 14 },
  { img: img15, key: 15 },
  { img: img16, key: 16 },
  { img: img17, key: 17 },
  { img: img18, key: 18 },
  { img: img19, key: 19 },
  { img: img20, key: 20 },
  { img: img21, key: 21 },
  { img: img22, key: 22 },
  { img: img23, key: 23 },
  { img: img24, key: 24 },
  { img: img25, key: 25 },
  { img: img26, key: 26 },
  { img: img27, key: 27 },
  { img: img28, key: 28 },
  { img: img29, key: 29 },
  { img: img30, key: 30 },
  { img: img31, key: 31 },
  { img: img32, key: 32 },
  { img: img33, key: 33 },
  { img: img34, key: 34 },
  { img: img35, key: 35 },
  { img: img36, key: 36 },
  { img: img37, key: 37 },
  { img: img38, key: 38 },
  { img: img39, key: 39 },
  { img: img40, key: 40 },
  { img: img41, key: 41 },
  { img: img42, key: 42 },
  { img: img43, key: 43 },
  { img: img44, key: 44 },
  { img: img45, key: 45 },
  { img: img46, key: 46 },
  { img: img47, key: 47 },
  { img: img48, key: 48 }];


class ListeCouleurs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const listeCouleurs = couleur.map(elem => (
      <li key={elem.key}>
        <button id={elem.key} className={`color-button ${(this.props.currentColor === elem.key ? 'selected' : '')}`} type="button" onClick={() => this.props.selectColor(elem.key)}>
          <img className="images" src={elem.img} alt="choix-couleurs" />
        </button>
      </li>
    ));

    return (
      <div className="container_liste">
        <div className="scroll_liste scroll_liste_details">
          <ul className="liste">
            {listeCouleurs}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentColor: state.reducer.currentColor,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ selectColor }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ListeCouleurs);
