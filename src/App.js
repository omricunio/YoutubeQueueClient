import React from 'react';
import TopBarContainer from "./containers/TopBarContainer/TopBarContainer";
import { MuiThemeProvider } from "@material-ui/core/styles";
import * as Themes from './data/theme';
import { CssBaseline } from "@material-ui/core";
import {connect} from "react-redux";
import VideoSearchContainer from './containers/VideoSearchContainer/VideoSearchContainer';
import { keyPressed } from './sagas/keyHandler/actions/actions';
import MiniPlayerContainer from './containers/MiniPlayerContainer/MiniPlayerContainer';
import QueueList from './components/QueueList/QueueList';

function App(props) {
    const { theme, dispatchKeyPressed } = props;
    const getMaterialTheme = () => {
        return Themes[theme];
    };
    document.addEventListener('keydown', dispatchKeyPressed);

    return (
        <MuiThemeProvider theme={getMaterialTheme()}>
            <CssBaseline/>
            <TopBarContainer/>
            <VideoSearchContainer/>
            <QueueList/>
            <MiniPlayerContainer/>
        </MuiThemeProvider>
  );
}

const mapStateToProps = (state) => {
    return {
        theme: state.appSettings.theme
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchKeyPressed: (e) => dispatch(keyPressed(e))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);