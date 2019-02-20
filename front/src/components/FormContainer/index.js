import React from 'react';
import FormComponent from '../FormComponent/index';


class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSubmit = (values) => {
    console.log('values', values);
    fetch('http://www.localhost:4000/api/envoiformulaire',
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(values),
      });
  }

  render() {
    return (
      <FormComponent onSubmit={data => this.handleSubmit(data)} />
    );
  }
}

export default FormContainer;
