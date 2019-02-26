import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';

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
          <p className="facture__header__num">Numéro de facture:</p>
          <img className="facture__header__logo" src="https://image.noelshack.com/fichiers/2019/06/4/1549530643-logo-fleur.png" alt="logo bonheur en couleur" />
        </div>

        <div className="facture__contact">
          <div className="facture__contact__address">
            <p>
              {`${this.props.order.nom_complet}${this.props.order.prenom_complet}`}
            </p>
            <p>
              <br />
              {`${this.props.order.rue_livraison}`}
              <br />
              {`${this.props.order.postcode_livraison}${this.props.order.commune_livraison}`}
            </p>
          </div>
          <p className="facture__contact__date">
            {`${new Date().toISOString().slice(0, 10)}`}
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
                <td> 6 </td>
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

const mapStateToProps = state => ({
  order: state.Reducer.order,
});

export default connect(mapStateToProps)(Facture);
