import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setResumerflower } from '../../actions/actions';

class InfoCommande extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <p>aaaaa</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  resumerFleurs: state.resumerFleurs,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setResumerflower }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(InfoCommande);
