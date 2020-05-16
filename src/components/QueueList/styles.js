export default theme => ({
    root: {
        padding: "5vh 0",
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
        boxShadow: "0 0 0px 0px #4e4e4e",
        transition: "box-shadow 2s ease-in-out"
    },
    currentItem: {
        boxShadow: "0 0 20px 3px #4e4e4e",
    },
    playedItem: {
        opacity: 0.4,
        animation: "$played 1s",
    }
});