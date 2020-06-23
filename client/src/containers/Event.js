import { connect } from "react-redux";
import { deleteEvent } from "../actions";
import Items from "../components/Items";

const mapDispatchToProps = (dispatch, ownProps) => ({
  delete: () => dispatch(deleteEvent(ownProps.events.id)),
});

export default connect(null, mapDispatchToProps)(Items);
