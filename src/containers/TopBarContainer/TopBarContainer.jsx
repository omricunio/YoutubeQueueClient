import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import { connect } from "react-redux";
import {toggleDarkMode} from "../../reducers/appSettings/actions";

class TopBarContainer extends React.Component {
    render() {
        const { dispatchToggleDarkMode, title } = this.props;
        return <TopBar onDarkModeClick={dispatchToggleDarkMode} title={title}/>
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.appSettings.title
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchToggleDarkMode: () => { dispatch(toggleDarkMode()) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBarContainer);