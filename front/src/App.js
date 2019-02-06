import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/index';
import Simulator from './components/Simulator/index';

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/:section/:step" component={Simulator} />
    </Switch>
  </div>
);

export default App;
