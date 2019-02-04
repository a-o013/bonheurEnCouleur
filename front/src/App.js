import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/index';
import Simulator from './components/Simulator/index';

const App = () => (
  <div className="App">
    <header className="App-header" />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/:section/:step" component={Simulator} />
    </Switch>
  </div>
);

export default App;
