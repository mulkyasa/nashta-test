import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Dashboard from './components/Dashboard';
import AddEvent from './components/AddEvent';

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/add" component={AddEvent} />
      </Switch>
    </Router>
  )
}