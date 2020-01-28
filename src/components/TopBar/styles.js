export default theme => ({
    root: {
        position: "sticky",
        zIndex: 1,
        top: 0,
        flexGrow: 1,
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