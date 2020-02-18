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
    }
});