import React, { Component, Fragment } from "react";
import Navbar from "../components/Navbar";
import { loadEvent } from "../actions";
import { connect } from "react-redux";
import DashboardItems from "../components/DashboardItems";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  componentDidMount() {
    this.props.loadEvent();
  }

  render() {
    let search = this.state.search.trim().toLowerCase();
    let filteredData = this.props.events;

    if (search !== "") {
      filteredData = filteredData.filter(
        (item) =>
          item.datas.title.toLowerCase().includes(search) ||
          item.datas.location.toLowerCase().includes(search) ||
          item.datas.date.toLowerCase().includes(search) ||
          item.datas.members.toString().toLowerCase().includes(search)
      );
    }

    const listItems = filteredData.map((item, index) => (
      <DashboardItems key={index} id={index + 1} events={{ ...item }} />
    ));

    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <div className="card shadow-sm">
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control w-25"
                    placeholder="Search"
                    onChange={this.handleSearchChange}
                    value={this.state.search}
                  />
                </div>
              </form>
              <div className="table-responsive">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Title</th>
                      <th scope="col">Location</th>
                      <th scope="col">Date</th>
                      <th scope="col">Participant</th>
                      <th scope="col">Note</th>
                    </tr>
                  </thead>
                  <tbody>{listItems}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events,
});

const mapDispatchToProps = (dispatch) => ({
  loadEvent: () => dispatch(loadEvent()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
