import HomePage from "./HomePage";
import { connect } from "react-redux";
import { fetchAndSetQueue, createQueue } from "../../sagas/queue/actions";

const mapStateToProps = (state) => ({
    queueGuid: state.appSettings.queueGuid
})

const mapDispatchToProps = (dispatch) => ({
    dispatchFetchAndSetQueue: (guid) => dispatch(fetchAndSetQueue(guid)),
    dispatchCreateQueue: () => dispatch(createQueue())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);