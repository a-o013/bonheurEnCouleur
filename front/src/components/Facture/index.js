import React, { Component } from 'react';
import './index.scss';

class Facture extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="facture">
        <div className="facture__header">
          <p className="facture__header__num">Numéro de facture</p>
          <img className="facture__header__logo" src="https://image.noelshack.com/fichiers/2019/06/4/1549530643-logo-fleur.png" alt="logo bonheur en couleur" />
        </div>

        <div className="facture__contact">
          <div className="facture__contact__address">
            <p>
              Nom Prénom
              <br />
              Rue, numéro,Boîte
              <br />
              Commune, Code Postal
            </p>
          </div>
          <p className="facture__contact__date">
            Date
          </p>
        </div>

        <div className="facture__tab">
          <table className="facture__tab__compteur">
            <td>
              <th>Désignation</th>
              <tr> PLANCHE</tr>
              <tr> FLEURS 43</tr>
              <tr>FLEURS 3</tr>
            </td>
            <td>
              <th>Quantité</th>
              <tr>1</tr>
              <tr>45</tr>
              <tr>10</tr>
            </td>
            <td>
              <th>Prix unitaire</th>
              <tr>20€</tr>
              <tr>1€</tr>
              <tr>1€</tr>
            </td>
            <td>
              <th>Prix total</th>
              <tr>20€</tr>
              <tr>45€</tr>
              <tr>10€</tr>
            </td>
          </table>
          <div>
            <table className="facture__tab__total">
              <td>
                <th>TOTAL A PAYER</th>
              </td>
              <td>
                <tr>75€</tr>
              </td>
            </table>
          </div>
        </div>

        <div className="facture__validation">
          <p className="facture__validation__title">Critères de validation :</p>
          <p className="facture__validation__corps">
            Le virement est a effectué sur le compte BEXX XXXX XXXX XXXX dés reception
            de cet e-mail.
            <br />
            Bonheur en couleurs vous enverra ensuite votre calendrier personnalisé à l
            adresse de livraison donnée.
          </p>
        </div>
      </div>
    );
  }
}

export default Facture;
