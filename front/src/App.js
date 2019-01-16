import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Simulator from './components/Simulator/index';
import Home from './components/Home/index';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/:section/:step" component={Simulator} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
