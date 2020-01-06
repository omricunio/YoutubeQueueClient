import {createMuiTheme} from "@material-ui/core/styles";

export default createMuiTheme({

    palette: {
        type: 'light',
        background: {
            default:  "#212121",
        },
        primary: {
            light: "#fff",
            main: "#b71c1c",
            dark: "#b71c1c"
        },
        secondary: {
            light: "#b71c1c",
            main: "#fff",
            dark: "#fff"
        },
        text: {
            primary: "#fff"
        }
    }
});