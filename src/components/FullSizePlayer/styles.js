export default theme => ({
    player: {
        backgroundColor: theme.palette.secondary.main,
        width: "100vw",
        transition: "display 2s ease out",
        height: "100%",
    },
    playerClosed: {
        display: "none"
    },
    playerOpen: {
        display: "block"
    },
    content: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    displaySwitcher: {
        position: "absolute",
        zIndex: 3,
        backgroundColor: "#2f2f2f52",
        borderBottomRightRadius: "23px",
        overflow: "hidden"
    }
});