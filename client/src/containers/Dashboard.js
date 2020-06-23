import React, { Component, Fragment } from "react";
import Navbar from "../components/Navbar";
import { loadDashboard } from "../actions";
import { connect } from "react-redux";

class Dashboard extends Component {
  componentDidMount() {
    this.props.loadDashboard();
  }

  
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <div className="card shadow-sm">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <input type="text" className="form-control w-25" placeholder="Search"/>
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
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Meeting with CEO</td>
                      <td>Pisangan Timur, Jakarta</td>
                      <td>17 Agustus 2020</td>
                      <td>John Doe</td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque libero sit amet lorem. Consectetur adipiscing elit.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  events: state.dashboard.events
})

const mapDispatchToProps = (dispatch) => ({
  loadDashboard: () => dispatch(loadDashboard())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
