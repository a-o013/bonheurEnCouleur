import React, { Component } from 'react';
import './index.scss';
import img1 from './1.png';

const couleur = [{ img: img1, key: 1 },
  { img: img1, key: 2 },
  { img: img1, key: 3 },
  { img: img1, key: 4 },
  { img: img1, key: 5 },
  { img: img1, key: 6 },
  { img: img1, key: 7 },
  { img: img1, key: 8 },
  { img: img1, key: 9 },
  { img: img1, key: 10 },
  { img: img1, key: 11 },
  { img: img1, key: 12 },
  { img: img1, key: 13 },
  { img: img1, key: 14 },
  { img: img1, key: 15 },
  { img: img1, key: 16 },
  { img: img1, key: 17 },
  { img: img1, key: 18 },
  { img: img1, key: 19 },
  { img: img1, key: 20 },
  { img: img1, key: 21 },
  { img: img1, key: 22 },
  { img: img1, key: 23 },
  { img: img1, key: 24 },
  { img: img1, key: 25 },
  { img: img1, key: 26 },
  { img: img1, key: 27 },
  { img: img1, key: 28 },
  { img: img1, key: 29 },
  { img: img1, key: 30 },
  { img: img1, key: 31 },
  { img: img1, key: 32 },
  { img: img1, key: 33 },
  { img: img1, key: 34 },
  { img: img1, key: 35 },
  { img: img1, key: 36 },
  { img: img1, key: 37 },
  { img: img1, key: 38 },
  { img: img1, key: 39 },
  { img: img1, key: 40 },
  { img: img1, key: 41 },
  { img: img1, key: 42 },
  { img: img1, key: 43 },
  { img: img1, key: 44 },
  { img: img1, key: 45 },
  { img: img1, key: 46 },
  { img: img1, key: 47 },
  { img: img1, key: 48 }];


class ListeCouleurs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const listeCouleurs = couleur.map(elem => (
      <li key={elem.key}><img className="images" src={elem.img} alt="choix-couleurs" /></li>
    ));

    return (
      <div className="container_liste">
        <div className="scroll_liste scroll_liste_details">
          <ul className="listee ">
            <li className="liste_li">{listeCouleurs}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ListeCouleurs;
