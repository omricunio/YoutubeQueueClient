export default theme => ({
    root: {
        position: "static",
        zIndex: 3,
        top: 0
    },
    addButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontWeight: "bold",
        display: "inline",
        padding: theme.spacing(0,3,0,0)
    }
});