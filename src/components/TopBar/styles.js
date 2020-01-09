import { fade } from "@material-ui/core";

export default theme => ({
    root: {
        flexGrow: 1,
    },
    addButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        fontWeight: "bold",
        display: "inline",
        padding: theme.spacing(0,3,0,0)
    },
    search: {
        flexGrow: 1,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        borderRadius: 5
    }
});