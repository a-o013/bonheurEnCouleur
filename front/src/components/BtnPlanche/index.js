import React, { Component } from 'react';
import './index.scss';
import plancheChoco from '../../assets/images/Planche_chocolat.png';
import plancheGrise from '../../assets/images/Planche_grise.png';

class BtnPlanche extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container_btn_planches">
        <p className="bold-item">1. Choisis la couleur de ta planche</p>
        <img src={plancheGrise} alt="btn_planche_grise" className="btn_planches" />
        <img src={plancheChoco} alt="btn_planche_chocolat" className="btn_planches" />
      </div>
    );
  }
}

// ajouter un onClick et liée avec le component qui va afficher la planche (display none)//

export default BtnPlanche;
