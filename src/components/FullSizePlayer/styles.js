export default theme => ({
    player: {
        backgroundColor: theme.palette.secondary.main,
        width: "100vw",
        transition: "display 2s ease out",
        height: "100%"
    },
    playerClosed: {
        display: "none"
    },
    playerOpen: {
        display: "block"
    },
    itemPreview: {
        paddingLeft: "35vw",
        paddingRight: "35vw"
    },
    content: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }
});