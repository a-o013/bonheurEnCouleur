import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './index.scss';

// fonction qui vérifie les informations

const validate = (values) => {
  const errors = {};
  if (!values.nom_complet) {
    errors.nom_complet = 'Requis';
  }
  if (!values.prenom_complet) {
    errors.prenom_complet = 'Requis';
  }
  if (!values.rue_livraison) {
    errors.rue_livraison = 'Requis';
  }
  if (!values.postcode_livraison) {
    errors.postcode_livraison = 'Requis';
  }
  if (!values.commune_livraison) {
    errors.commune_livraison = 'Requis';
  }
  if (!values.email) {
    errors.email = 'Requis';
  }
  if (!values.numtel) {
    errors.numtel = 'Requis';
  }
  return errors;
};
// fonction pour ne pas envoyer le formulaire tant que ça foire
const warn = (values) => {
  const warning = {};
  if (!values.nom_complet || !values.prenom_complet || !values.rue_livraison
    || !values.postcode_livraison || !values.commune_livraison || !values.email || !values.numtel) {
    return ('oups');
  }
  return warning;
};

const renderField = ({
  input, label, type, id, meta: { touched, error, warning },
}) => (
  <label htmlFor={id}>
    <span className="visually-hidden">{label}</span>
    <input {...input} placeholder={label} type={type} className="input-field" id={id} />
    {touched && ((error && <span className="required">{error}</span>) || (warning && <span>{warning}</span>))}
  </label>
);
// formulaire
const SimpleForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <div className="input-group">
          <Field
            type="text"
            name="nom_complet"
            component={renderField}
            label="Nom"
            id="name"
          />

          <Field
            type="text"
            name="prenom_complet"
            component={renderField}
            label="Prénom"
            id="firstname"
          />
        </div>

        <p>Adresse de livraison : </p>
        <Field
          type="text"
          name="rue_livraison"
          component={renderField}
          label="Adresse, numéro, boîte"
          id="address"
        />
      </div>
      <div className="input-group">
        <Field
          type="text"
          name="postcode_livraison"
          component={renderField}
          label="Code postal"
          id="postcode"
        />

        <Field
          type="text"
          name="commune_livraison"
          component={renderField}
          label="Commune"
          id="city"
        />
      </div>

      <p>Contact : </p>
      <div className="input-group">
        <Field
          type="email"
          name="email"
          component={renderField}
          label="Adresse e-mail"
          id="email"
        />

        <Field
          type="text"
          name="numtel"
          component={renderField}
          label="Numéro de telephone"
          id="phone"
        />
      </div>


      <p>Société :</p>
      <div className="input-group">
        <Field
          type="text"
          name="society"
          component={renderField}
          label="Société"
          id="company"
        />

        <Field
          type="text"
          name="tvasociety"
          component={renderField}
          label="Numéro de TVA"
          id="vta"
        />
      </div>


      <p>Commentaires : </p>
      <Field
        type="textarea"
        name="commentaires"
        component="textarea"
        label="Commentaires"
        placeholder="Commentaires"
      />

      <div className="form-data">
        <button type="submit" className="buttonform">COMMANDER !</button>
      </div>
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'formulaire',
  validate,
  warn,
})(SimpleForm);


export default FormComponent;
