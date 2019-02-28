import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import { toPDF } from '../../actions/actions';
import FormComponent from '../FormComponent/index';
import './index.scss';

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
        body: JSON.stringify({
          flowers: this.props.resume,
          plank: this.props.plank === 'on' ? 'grise' : 'chocolat',
          userData: values,
        }),
      })
      .then((res) => {
        if (res.status === 200) {
          this.popupCommande();
        }
      });
    this.props.toPDF(values);
  }

  popupCommande = () => {
    this.popup.classList.toggle('show');
  };

  changePage() {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className={this.props.name}>
        <FormComponent onSubmit={data => this.handleSubmit(data)} />
        <span className="popupcommande" ref={(el) => { this.popup = el; }}>Merci pour votre commande ! Vous recevrez un e-mail dʾici quelques minutes ... </span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  plank: state.Reducer.currentPlanche,
  resume: state.Reducer.resumerFleurs,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ toPDF }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
