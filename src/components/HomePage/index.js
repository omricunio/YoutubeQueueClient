import HomePage from "./HomePage";
import { connect } from "react-redux";
import { fetchQueue } from "../../sagas/player/actions";
import { createQueue } from "../../sagas/appSettings/actions";

const mapDispatchToProps = (dispatch) => ({
    dispatchFetchQueue: (guid) => dispatch(fetchQueue(guid)),
    dispatchCreateQueue: () => dispatch(createQueue())
});

export default connect(null, mapDispatchToProps)(HomePage);