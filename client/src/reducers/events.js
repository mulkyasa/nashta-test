const events = (state = [], action) => {
  switch (action.type) {
    case "LOAD_EVENT_SUCCESS":
      return action.events.data.map((item, index) => {
        item.id = index + 1;
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
        },
      ];

    case "DELETE_EVENT":
      return state.filter((item) => item.id !== action.id);
        
    case "POST_EVENT_SUCCESS":
    case "POST_EVENT_FAILURE":
    case "DELETE_EVENT_SUCCESS":
    case "LOAD_EVENT_FAILURE":
    default:
      return state;
  }
};

export default events;
