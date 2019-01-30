import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Simulator from './components/Simulator/index';
import Home from './components/Home/index';

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/:section/:step" component={Simulator} />
    </Switch>
  </div>
);

export default App;
