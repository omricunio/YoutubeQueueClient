export default theme => ({
    root: {
        position: "static",
        zIndex: 3,
        top: 0
    },
    addButton: {
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
        fontWeight: "bold",
        display: "inline",
        padding: theme.spacing(0,3,0,0),
        marginLeft: theme.spacing(1)
    }
});