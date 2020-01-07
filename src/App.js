import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { routes } from './setup/routes';
import Home from './pages/HomePage';
import LiveEvent from './pages/LiveEventPage';
import PageNotFound from './pages/PageNotFound';

import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route path={routes.home} component={Home} exact />
      <Route path={routes.liveEvent} component={LiveEvent} />

      <Route path="*" component={PageNotFound} />
    </Switch>
  </Router>
)

export default App;