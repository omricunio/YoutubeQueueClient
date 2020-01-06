import React from 'react';
import TopBar from "./components/TopBar/TopBar";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from './data/theme';
import {CssBaseline} from "@material-ui/core";
import './App.css';

function App() {
  return (
      <MuiThemeProvider theme={theme}>
          <CssBaseline/>
          <TopBar/>
      </MuiThemeProvider>
  );
}

export default App;
