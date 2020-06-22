import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import List from "./List";

export default class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Navbar/>
        <div className="container">
          <List/>
        </div>
      </Fragment>
    )
  }
}