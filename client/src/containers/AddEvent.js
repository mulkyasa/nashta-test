import React, { Component, Fragment } from "react";
import Navbar from "../components/Navbar";
import { postEvent } from "../actions";
import { connect } from "react-redux";

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      location: "",
      date: "",
      members: [],
      note: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postEvent(
      this.state.title,
      this.state.location,
      this.state.date,
      this.state.members,
      this.state.note
    );
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <div className="card shadow-sm mb-3">
            <div className="row no-gutters">
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title mb-0">Add Event</h5>
                  <small className="text-muted">Add new upcoming event.</small>
                  <form className="mt-2">
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        className="form-control"
                        id="title"
                        placeholder="Event title"
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="location">Location</label>
                          <input
                            type="text"
                            name="location"
                            value={this.state.location}
                            onChange={this.handleChange}
                            className="form-control"
                            id="location"
                            placeholder="Event location"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="date">Date</label>
                          <input
                            type="date"
                            name="date"
                            value={this.state.date}
                            onChange={this.handleChange}
                            className="form-control"
                            id="date"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="participant">Participant</label>
                      <input
                        type="text"
                        name="members"
                        value={this.state.members}
                        onChange={this.handleChange}
                        className="form-control"
                        id="participant"
                        placeholder="Participant name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="note">Note</label>
                      <textarea
                        className="form-control"
                        name="note"
                        value={this.state.note}
                        onChange={this.handleChange}
                        id="note"
                        rows="3"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  src={require("../new-event.jpg")}
                  className="card-img"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  postEvent: (title, location, date, members, note) =>
    dispatch(postEvent(title, location, date, members, note)),
});

export default connect(null, mapDispatchToProps)(AddEvent);
