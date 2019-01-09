import React, { Component } from 'react';

const couleur = [{ img: '1.png', key: 1 },
  { img: '2.png', key: 2 },
  { img: '3.png', key: 3 },
  { img: '4.png', key: 4 },
  { img: '5.png', key: 5 },
  { img: '6.png', key: 6 },
  { img: '7.png', key: 7 },
  { img: '8.png', key: 8 },
  { img: '9.png', key: 9 },
  { img: '10.png', key: 10 },
  { img: '11.png', key: 11 },
  { img: '12.png', key: 12 },
  { img: '13.png', key: 13 },
  { img: '14.png', key: 14 },
  { img: '15.png', key: 15 },
  { img: '16.png', key: 16 },
  { img: '17.png', key: 17 },
  { img: '18.png', key: 18 },
  { img: '19.png', key: 19 },
  { img: '20.png', key: 20 },
  { img: '21.png', key: 21 },
  { img: '22.png', key: 22 },
  { img: '23.png', key: 23 },
  { img: '24.png', key: 24 },
  { img: '25.png', key: 25 },
  { img: '26.png', key: 26 },
  { img: '27.png', key: 27 },
  { img: '28.png', key: 28 },
  { img: '29.png', key: 29 },
  { img: '30.png', key: 30 },
  { img: '31.png', key: 31 },
  { img: '32.png', key: 32 },
  { img: '33.png', key: 33 },
  { img: '34.png', key: 34 },
  { img: '35.png', key: 35 },
  { img: '36.png', key: 36 },
  { img: '37.png', key: 37 },
  { img: '38.png', key: 38 },
  { img: '39.png', key: 39 },
  { img: '40.png', key: 40 },
  { img: '41.png', key: 41 },
  { img: '42.png', key: 42 },
  { img: '43.png', key: 43 },
  { img: '44.png', key: 44 },
  { img: '45.png', key: 45 },
  { img: '46.png', key: 46 },
  { img: '47.png', key: 47 },
  { img: '48.png', key: 48 }];


class ListeCouleurs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const listeCouleurs = couleur.map(elem => (
      <li key={elem.key}><img src={elem.img} alt="choix-couleurs" /></li>
    ));

    return (
      <div className="liste_option_couleurs">
        <ul>
          <li>{listeCouleurs}</li>
        </ul>
      </div>
    );
  }
}

export default ListeCouleurs;
