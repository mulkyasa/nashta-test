import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import List from "../containers/List";

export default class PageWrapper extends Component {
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