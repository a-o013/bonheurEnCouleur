import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import planchechocolat from '../../assets/images/planche_chocolat.png';
import planchegrise from '../../assets/images/planche_grise.png';

class Facture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flowers: {},
      plank: 'grise',
      userData: {}
    };
  }
  componentDidUpdate() {
    console.log(this.state.plank, 'state')
  }
  componentDidMount() {
    fetch('/api/create-invoice')
      .then(res => res.json())
      .then(data => {
        console.log(data, 'data')
        this.setState(
          {
            flowers: data.flowers,
            plank: data.plank,
            userData: data.userData
          }
        )
      })
  }
  render() {
    console.log(this.state.plank)
    const tableItems = Object.keys(this.state.flowers).map(key => (
      <tr>
        <td>
          <img className="images" src={`/flowers/${key}.png`} alt="flower" />
        </td>
        <td>{key}</td>
        <td>
          {this.state.flowers[key]}
        </td>
        <td>  0,50 </td>
        <td>
          {(0.5 * this.state.flowers[key])}
          €
        </td>
      </tr>
    ));
    return (
      <div className="facture">
        <div className="facture__header">
          <p className="facture__header__num">Numéro de facture:</p>
          <img className="facture__header__logo" src="https://image.noelshack.com/fichiers/2019/06/4/1549530643-logo-fleur.png" alt="logo bonheur en couleur" />
        </div>

        <div className="facture__contact">
          <div className="facture__contact__address">
            <p>
              {this.state.userData.nom_complet}
              {this.state.userData.prenom_complet}
            </p>
            <p>
              <br />
              {this.state.userData.rue_livraison}
              <br />
              {this.state.userData.postcode_livraison}
              {this.state.userData.commune_livraison}
            </p>
          </div>
          <p className="facture__contact__date">
            {new Date().toISOString().slice(0, 10)}
          </p>
          <p>this.state.userData.tvasociety:</p>
        </div>

        <div className="facture__tab">
          <table className="facture__tab__compteur">
            <thead>
              <tr>
                <th>Désignation</th>
                <th>Référence</th>
                <th>Quantité</th>
                <th>Prix unitaire</th>
                <th>Prix total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img className="images" src={this.state.plank === "grise" ? planchegrise : planchechocolat} alt="flower" />
                </td>
                <td>1</td>
                <td>
                {`planche ${this.state.plank}`}
                </td>
                <td>  20 €</td>
                <td>
                  20 €
                </td>
              </tr>
              {tableItems}
            </tbody>
          </table>
        </div>

        <div className="facture__validation">
          <p className="facture__validation__title">Critères de validation :</p>
          <p className="facture__validation__corps">
            Bonheur en couleurs vous remercie pour votre commande.
            <br />
            <br />
            Le virement est a effectué sur le compte BEXX XXXX XXXX XXXX avec pour
             communication NOM-PRENOM, dès réception de cet e-mail.
            <br />
            Bonheur en couleurs vous enverra, dès reception de votre virement,
             votre calendrier personnalisé à l’adresse de livraison donnée.
          </p>
        </div>
      </div>
    );
  }
}

export default Facture;
