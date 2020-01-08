import {createMuiTheme} from "@material-ui/core/styles";

export const dark = createMuiTheme({
    palette: {
        type: 'dark',
        background: {
            default:  "#212121",
        },
        primary: {
            main: "#b71c1c",
        },
        secondary: {
            main: "#fff",
        },
        text: {
            primary: "#fff"
        }
    }
});

export const light = createMuiTheme({
    palette: {
        type: 'dark',
        background: {
            default:  "#fff",
        },
        primary: {
            main: "#b71c1c",
        },
        secondary: {
            main: "#fff",
        },
        text: {
            primary: "#fff"
        }
    }
});