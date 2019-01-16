import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Simulator from './components/Simulator/index';

const App = () => (
  <div className="App">
    <header className="App-header" />
    <BrowserRouter>
      <Switch>
        <Route path="/:section/:step" component={Simulator} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
