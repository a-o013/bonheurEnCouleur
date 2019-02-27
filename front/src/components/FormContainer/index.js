import React, { Fragment } from 'react';
import FormComponent from '../FormComponent/index';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSubmit = (values) => {
    fetch('http://www.localhost:4000/api/envoiformulaire',
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(values),
      })
      .then((res) => {
        if (res.status === 200) {
          this.popupCommande();
        }
      });
  }

  popupCommande = () => {
    this.popup.classList.toggle('show');
  };

  changePage() {
    this.props.history.push('/');
  }

  render() {
    return (
      <Fragment>
        <FormComponent onSubmit={data => this.handleSubmit(data)} />
        <span className="popupcommande" ref={(el) => { this.popup = el; }}>Merci pour votre commande ! Vous recevrez un e-mail dʾici quelques minutes ... </span>
      </Fragment>
    );
  }
}

export default FormContainer;
