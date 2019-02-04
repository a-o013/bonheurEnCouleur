import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Simulator from './components/Simulator/index';
import Home from './components/Home/index';
import FormContainer from './components/FormContainer';

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/:section/:step" component={Simulator} />
      <Route path="/formulaire" component={FormContainer} />
    </Switch>

  </div>
);

export default App;
