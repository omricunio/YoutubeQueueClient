import React from 'react';
import TopBarContainer from "./containers/TopBarContainer/TopBarContainer";
import { MuiThemeProvider } from "@material-ui/core/styles";
import * as Themes from './data/theme';
import { CssBaseline } from "@material-ui/core";
import {connect} from "react-redux";
import VideoSearchContainer from './containers/VideoSearchContainer/VideoSearchContainer';
import { keyPressed } from './sagas/keyHandler/actions/actions';
import MainContainer from './containers/MainContainer/MainContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import { setQueueGuid } from './reducers/appSettings/actions';

function App(props) {
    const { theme, dispatchKeyPressed } = props;
    const getMaterialTheme = () => {
        return Themes[theme];
    };
    document.addEventListener('keydown', dispatchKeyPressed);  

    return (
        <MuiThemeProvider theme={getMaterialTheme()}>
            <CssBaseline/>
            <Router>
                <Switch>
                    <Route path="/:queueGuid?" component={HomePage}/>
                </Switch>
            </Router>
        </MuiThemeProvider>
  );
}

const mapStateToProps = (state) => {
    return {
        theme: state.appSettings.theme,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchKeyPressed: (e) => dispatch(keyPressed(e))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);