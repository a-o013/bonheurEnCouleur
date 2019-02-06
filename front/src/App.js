import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/index';
import Simulator from './components/Simulator/index';
import Footer from './components/Footer/index';

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/:section/:step" component={Simulator} />
      <Route path="/footer" component={Footer} />
    </Switch>
  </div>
);

export default App;
