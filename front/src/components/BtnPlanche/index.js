import React, { Component } from 'react';
import './index.scss';

class BtnPlanche extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="btn_planches">
        <img src="" alt="btn_planche_grise" />
        <img src="" alt="btn_planche_chocolat" />
      </div>
    );
  }
}

// ajouter un onClick et liée avec le component qui va afficher la planche (display none)//

export default BtnPlanche;
