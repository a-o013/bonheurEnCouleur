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
            <thead>
              <tr>
                <td>Désignation</td>
                <td>Quantité</td>
                <td>Prix unitaire</td>
                <td>Prix total</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>fleur 1</td>
                <td>50</td>
                <td>1</td>
                <td>50</td>
              </tr>
              <tr>
                <td>planche</td>
                <td>1</td>
                <td>20</td>
                <td>20</td>
              </tr>
              <tr>
                <td>FLEUR 6 </td>
                <td>3</td>
                <td>1</td>
                <td>3</td>
              </tr>
              <tr>
                <td colSpan="3"> TOTAL A PAYER :</td>
                <td colSpan="1">73€</td>
              </tr>
            </tbody>
          </table>
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
