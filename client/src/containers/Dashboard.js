import React, { Component, Fragment } from "react";
import Navbar from "../components/Navbar";
import { loadDashboard } from "../actions";
import { connect } from "react-redux";
import DashboardItems from "../components/DashboardItems";

class Dashboard extends Component {
  state = {
    data: [],
    search: ""
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const newData = this.props.loadDashboard();
    console.log(this.props.loadDashboard(), "loadDashboard")
    console.log(newData, "newData");
    this.setState({ data: [newData] });
  };

  dataFiltered = this.state.data.filter(item => {
    const location = `${item.location}`;
    if (location.toLowerCase().includes(this.state.search.toLowerCase())) {
      return item;
    }
  });

  handleSearch = (event) => {
    this.setState({ search: event.target.value });
  }

  render() {
    // console.log(this.state.data);
    const dashboardItems = this.state.data.map((item, index) => (
      <DashboardItems
        key={index}
        events={{...item}}
      />
    ));

    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <div className="card shadow-sm">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control w-25"
                    placeholder="Search"
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
                  <tbody>{dashboardItems}</tbody>
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
  events: state.dashboard.events.data,
});

const mapDispatchToProps = (dispatch) => ({
  loadDashboard: () => dispatch(loadDashboard()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
