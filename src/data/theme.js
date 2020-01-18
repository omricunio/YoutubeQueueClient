import {createMuiTheme} from "@material-ui/core/styles";

const colors = {
    darkGray: "#212121",
    richRed: "#b71c1c",
    white: "#fff"
}

export const dark = createMuiTheme({
    palette: {
        type: "dark",
        background: {
            default:  colors.darkGray,
        },
        primary: {
            main: colors.richRed,
        },
        secondary: {
            main: colors.white,
        },
    }
});

export const light = createMuiTheme({
    palette: {
        type: "light",
        background: {
            default:  colors.white,
        },
        primary: {
            main: colors.richRed,
        },
        secondary: {
            main: colors.white,
        }
    }
});