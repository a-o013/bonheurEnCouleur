import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './index.scss';


const SimpleForm = (props) => {
  const { handleSubmit } = props;
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>

          <div className="nomprenom">
            <div className="form_field">
              <Field
                type="text"
                name="nom_complet"
                component="input"
                placeholder="Nom"
              />
            </div>

            <div className="form_field">
              <Field
                type="text"
                name="prenom_complet"
                component="input"
                placeholder="Prénom"
              />
            </div>
          </div>

          <div className="addresslivraison">
            <p>Adresse de livraison : </p>
            <div className="form_field">
              <Field
                type="text"
                name="rue_livraison"
                component="input"
                placeholder="Adresse, numéro, boîte"
              />
            </div>
            <div className="postcodecommune">
              <div className="form_field">
                <Field
                  type="text"
                  name="postcode_livraison"
                  component="input"
                  placeholder="Code postal"
                />
              </div>

              <div className="form_field">
                <Field
                  type="text"
                  name="commune_livraison"
                  component="input"
                  placeholder="Commune"
                />
              </div>
            </div>
          </div>

          <div className="form_contact">
            <p>Contact : </p>
            <div className="form_field">
              <Field
                type="email"
                name="email"
                component="input"
                placeholder="Adresse e-mail"
              />
            </div>

            <div className="form_field">
              <Field
                type="text"
                name="numtel"
                component="input"
                placeholder="Numéro de telephone"
              />
            </div>
          </div>

          <div className="societytva">
            <p>Société :</p>
            <div className="form_field">
              <Field
                type="text"
                name="society"
                component="input"
                placeholder="Société"
              />
            </div>

            <div className="form-field">
              <Field
                type="text"
                name="tvasociety"
                component="input"
                placeholder="Numéro de TVA"
              />
            </div>
          </div>


          <div className="form-field">
            <p>Commentaires : </p>
            <Field
              type="textarea"
              name="commentaires"
              component="textarea"
              placeholder="Commentaires"
            />
          </div>

          <div className="form-data">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

const FormComponent = reduxForm({
  form: 'formulaire',
})(SimpleForm);


export default FormComponent;
