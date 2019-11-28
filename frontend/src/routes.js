import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';

import Estado from './pages/Estado';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Header />

        <Route path="/" exact />
        <Route path="/estados" exact component={Estado} />
      </Switch>
    </BrowserRouter>
  );
}
