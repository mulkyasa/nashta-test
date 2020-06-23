const dashboard = (state = { events: [] }, action) => {
  switch (action.type) {
    case "LOAD_DASHBOARD_SUCCESS":
      console.log(action.events.data, "dashboard");
      return action.events.data.map((item) => {
        item.sent = true;
        return item;
      });

    case "LOAD_DASHBOARD_FAILURE":
    default:
      return state;
  }
};

export default dashboard;
