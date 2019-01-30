import React from 'react';
import './App.scss';
// import { Route, Switch } from 'react-router-dom';
// import Simulator from './components/Simulator/index';
// import Home from './components/Home/index';
import OrderSection from './components/OrderSection';

const App = () => (
  <div className="App">
    <OrderSection />
  </div>
);

export default App;

/* <div className="App">
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/:section/:step" component={Simulator} />
    </Switch>
  </div> */
