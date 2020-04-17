export default theme => ({
    player: {
        backgroundColor: theme.palette.secondary.main,
        width: "100vw",
        height: "100%",
        position: "relative"
    },
    playerClosed: {
        display: "none"
    },
    playerOpen: {
        display: "block"
    },
    displaySwitcher: {
        position: "absolute",
        zIndex: 3,
        backgroundColor: "#2f2f2f52",
        borderBottomRightRadius: "23px",
        overflow: "hidden"
    }
});