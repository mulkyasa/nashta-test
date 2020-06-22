const dashboard = (state = { events: [] }, action) => {
  switch (action.type) {
    case "LOAD_DASHBOARD_SUCCESS":
      console.log(action.events, "ini detail");
      return {
        ...state,
        events: action.events,
      };
    case "LOAD_DASHBOARD_FAILURE":
    default:
      return state;
  }
};

export default dashboard;
