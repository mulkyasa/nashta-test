import axios from "axios";

const API_URL = "http://localhost:3000";

const request = axios.create({
  baseURL: API_URL,
  timeout: 1000,
});

// start load event data
const loadEventSuccess = (events) => ({
  type: "LOAD_EVENT_SUCCESS",
  events,
});

const loadEventFailure = () => ({
  type: "LOAD_EVENT_FAILURE",
});

export const loadEvent = () => {
  return (dispatch) => {
    return request
      .get("/")
      .then(function (response) {
        dispatch(loadEventSuccess(response.data));
      })
      .catch(function (error) {
        console.error(error);
        dispatch(loadEventFailure());
      });
  };
};

// start load event data on dashboard
export const loadDashboardSuccess = (events) => ({
  type: 'LOAD_DASHBOARD_SUCCESS', events
})

export const loadDashboardFailure = () => ({
  type: 'LOAD_DASHBOARD_FAILURE'
})

export const loadDashboard = (id) => ({
  type: 'LOAD_DASHBOARD', id
})

// start post event data
const postEventSuccess = (event) => ({
  type: "POST_EVENT_SUCCESS",
  event,
});

const postEventFailure = (id) => ({
  type: "POST_EVENT_FAILURE",
  id,
});

const postEventRedux = (id, title, location, date, members, note) => ({
  type: "POST_EVENT",
  id,
  title,
  location,
  date,
  members,
  note,
});

export const postEvent = (title, location, date, members, note) => {
  let id = Date.now();
  return (dispatch) => {
    dispatch(postEventRedux(id, title, location, date, members, note))
    return request
      .post("/", {id, title, location, date, members, note})
      .then(function (response) {
        dispatch(postEventSuccess(response.data));
      })
      .catch(function (error) {
        console.error(error);
        dispatch(postEventFailure(id));
      });
  };
};
