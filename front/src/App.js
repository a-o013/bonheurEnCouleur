import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/index';
import Simulator from './components/Simulator/index';
import Facture from './components/Facture/index';

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/:section/:step" component={Simulator} />
      <Route path="/facture" component={Facture} />
    </Switch>
  </div>
);

export default App;
