import React from "react";
import Moment from "react-moment";

export default function Item(props) {
  return (
    <div className="col-md-4">
      <div className="card shadow-sm mb-4">
        <img
          className="card-img-top"
          src={require("../meeting.jpg")}
          alt="Card Header"
        />
        <div className="card-body py-2">
          <p className="card-text mb-1">
            <small>
              <i
                className="fa fa-map-marker text-danger mr-1"
                aria-hidden="true"
              ></i>
              {props.events.datas.location}
            </small>
          </p>
          <h4 className="card-title mb-0">{props.events.datas.title}</h4>
          <p className="card-text text-muted">
            <small>
              <Moment format="D MMMM YYYY" withTitle>
                {props.events.datas.date}
              </Moment>
            </small>
          </p>
        </div>
        <div className="list-group list-group-flush">
          <div className="list-group-item">
            <div className="row">
              {props.events.datas.members.map((item, index) => (
                <div key={index} className="col-md-auto">
                  <div className="media">
                    <img src={require("../user-picture.jpg")} className="align-self-center profile-pict mr-1" alt="..."/>
                    <div className="media-body">
                      <small>{item}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            <strong className="text-bold">Note :</strong> {props.events.datas.note}
          </small>
        </div>
      </div>
    </div>
  );
}
