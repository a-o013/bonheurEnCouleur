import React from 'react';
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
      });

    fetch('http://www.localhost:4000/mailconfirm', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(values),
    });
  }

  changePage() {
    this.props.history.push('/');
  }

  render() {
    return (
      <FormComponent onSubmit={data => this.handleSubmit(data)} />
    );
  }
}

export default FormContainer;
