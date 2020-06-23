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
      memberInput: "",
      members: [],
      note: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleMemberChange = (event) => {
    this.setState({ memberInput: event.target.value })
  }

  addMember = () => {
    this.setState({
      members: [...this.state.members, this.state.memberInput],
    });
    this.setState({
      memberInput: ""
    });
  };

  deleteMembers = (event, id) => {
    event.preventDefault();
    console.log(this.state.members);
    this.setState((state) => ({
      members: state.members.filter((item) => item.id !== id),
    }));
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
                  <form className="mt-2" onSubmit={this.handleSubmit}>
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
                        required
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
                            required
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
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="participant">Participant</label>
                      <div className="input-group">
                        <input
                          type="text"
                          name="members"
                          value={this.state.memberInput}
                          onChange={this.handleMemberChange}
                          className="form-control"
                          id="participant"
                          placeholder="Participant name"
                        />
                        <div className="input-group-append">
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={this.addMember}
                          >
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div className="row">
                        {this.state.members.map((item, index) => (
                          <div key={index} className="col-md-auto">
                            <div className="card mt-2">
                              <div className="card-body py-1 px-2">
                                {item}
                                {/* <a
                                  href="/add"
                                  onClick={this.deleteMembers}
                                  className="ml-2"
                                >
                                  <i className="fa fa-times-circle text-dark"></i>
                                </a> */}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
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
                        required
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
