import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import { connect } from "react-redux";
import {toggleDarkMode} from "../../reducers/appSettings/actions";
import { openVideoSearch } from '../../reducers/videoSearch/actions';

class TopBarContainer extends React.Component {
    render() {
        const { dispatchToggleDarkMode, dispatchShowVideoSearch, title } = this.props;
        return <TopBar onAddClick={dispatchShowVideoSearch} title={title} onDarkModeClick={dispatchToggleDarkMode}/>
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.appSettings.title
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchToggleDarkMode: () => { dispatch(toggleDarkMode()) }, 
        dispatchShowVideoSearch: () => { dispatch(openVideoSearch()) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBarContainer);