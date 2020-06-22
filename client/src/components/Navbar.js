import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <Link to="/" className="navbar-brand h1 mb-0 text-white" href="/">
          Navbar Brand
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-4">
              <Link to="/add" className="no-underline nav-link text-white">
                  <i className="fa fa-plus mr-sm-2"></i>Add Event{" "}
                  <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link to="/dashboard" className="nav-link text-white">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
