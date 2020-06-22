import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import PageWrapper from "./components/PageWrapper";
import AddEvent from "./containers/AddEvent";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={PageWrapper} />
        <Route path="/add" component={AddEvent} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}
