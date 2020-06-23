import React, { Component, Fragment } from "react";
import Navbar from "../components/Navbar";
import { loadEvent } from "../actions";
import { connect } from "react-redux";
import DashboardItems from "../components/DashboardItems";
import ReactPaginate from 'react-paginate';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      offset: 0,
      data: [],
      perPage: 5,
      currentPage: 0
    };
  }

  receivedData = () => {
    this.props.loadEvent();

    let filteredData = this.props.events;
    let search = this.state.search.trim().toLowerCase();
    const { offset, perPage } = this.state;

    filteredData = filteredData.slice(offset, offset + perPage);

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

    this.setState({
      pageCount: Math.ceil(filteredData.length / perPage),
      listItems
    })
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
      currentPage: selectedPage,
      offset: offset
    }, () => {
      this.receivedData()
    });
  };

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  componentDidMount() {
    this.receivedData();
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <div className="card shadow-sm">
            <div className="card-body">
              <form onSubmit={this.handleSubmit} className="row">
                <div className="col-lg-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      onChange={this.handleSearchChange}
                      value={this.state.search}
                    />
                  </div>
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
                  <tbody>{this.state.listItems}</tbody>
                </table>
              </div>
              <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
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
