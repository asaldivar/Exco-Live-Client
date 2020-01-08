import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { routes } from './setup/routes';
import Home from './pages/HomePage';
import LiveEvent from './pages/LiveEventPage';
import PageNotFound from './pages/PageNotFound';

import './App.css';

const App = () => (
  <Router>
    <h1 className="p-3 mb-2 bg-info text-white">Expedition Live</h1>
    <Switch>
      <Route path={routes.home} component={Home} exact />
      <Route path={routes.liveEvent} component={LiveEvent} />

      <Route path="*" component={PageNotFound} />
    </Switch>
  </Router>
)

export default App;