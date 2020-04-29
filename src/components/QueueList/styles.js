export default theme => ({
    root: {
        padding: "5vh 30vw",
        overflow: "auto"
    },
    "@keyframes played": {
        from: {
            opacity: 1
        },
        to: {
            opacity: 0.4
        }
    },
    item: {
        marginBottom: "5vh",
        // transition: "opacity 2s"
    },
    currentItem: {
        border: "1px #4e4e4e solid",
        boxShadow: "0 0 20px 3px #4e4e4e"
    },
    playedItem: {
        opacity: 0.4,
        animation: "$played 1s",
    }
});