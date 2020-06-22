const events = (state = [], action) => {
  switch (action.type) {
    case "LOAD_EVENT_SUCCESS":
      return action.events.data.map((item) => {
        item.sent = true;
        return item;
      });

    case "POST_EVENT":
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          location: action.location,
          date: action.date,
          members: action.members,
          note: action.note,
          sent: true,
        },
      ];

    case "POST_EVENT_SUCCESS":
      return state.map((item) => {
        if (item.id === action.event.id) {
          item.sent = true;
        }
        return item;
      });

    case "POST_EVENT_FAILURE":
      return state.map((item) => {
        if (item.id === action.id) {
          item.sent = false;
        }
        return item;
      });

    case "LOAD_EVENT_FAILURE":
    default:
      return state;
  }
};

export default events;
