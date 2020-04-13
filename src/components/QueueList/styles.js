export default theme => ({
    root: {
        padding: "5vh 30vw",
        overflow: "auto"
    },
    "@keyframes in": {
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    },
    item: {
        marginBottom: "5vh",
        animation: "$in 2s",
    }
});