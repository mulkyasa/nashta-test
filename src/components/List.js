import React, { Component } from "react";

export default class List extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={require("../2462.jpg")}
              alt="Card Header"
            />
            <div className="card-body">
              <p className="card-text mb-1">
                <small>
                  <i
                    className="fa fa-map-marker text-danger mr-1"
                    aria-hidden="true"
                  ></i>
                  Pisangan Timur, Jakarta
                </small>
              </p>
              <h4 className="card-title mb-0">Meeting with CEO</h4>
              <p className="card-text text-muted">
                <small>17 Agustus 2020</small>
              </p>
            </div>
            <div class="list-group list-group-flush">
              <div class="list-group-item no-border-bottom">
              <div class="media">
                <img class="align-self-center mr-3" src="..." alt=""/>
                <div class="media-body">
                  <p class="mb-0"><small>John Doe</small></p>
                </div>
              </div>
              </div>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque libero sit amet lorem.
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
