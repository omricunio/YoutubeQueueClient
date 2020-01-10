import React from 'react';
import TopBarContainer from "./containers/TopBarContainer/TopBarContainer";
import { MuiThemeProvider } from "@material-ui/core/styles";
import * as Themes from './data/theme';
import { CssBaseline } from "@material-ui/core";
import './App.css';
import {toggleDarkMode} from "./reducers/appSettings/actions";
import {connect} from "react-redux";
import NewVideosModal from './components/NewVideosModal/NewVideosModal';

function App(props) {
    const themeName = props.theme;
    const getMaterialTheme = () => {
        return Themes[themeName];
    };

    return (
      <MuiThemeProvider theme={getMaterialTheme()}>
          <CssBaseline/>
          <TopBarContainer/>
          <NewVideosModal/>
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);