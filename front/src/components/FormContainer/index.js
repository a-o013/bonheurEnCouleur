import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toPDF } from '../../actions/actions';
import FormComponent from '../FormComponent/index';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSubmit = (values) => {
    fetch('http://www.localhost:5000/api/envoiformulaire',
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(values),
      });
    this.props.toPDF(values);
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

const mapDispatchToProps = dispatch => (
  bindActionCreators({ toPDF }, dispatch)
);

export default connect(null, mapDispatchToProps)(FormContainer);
