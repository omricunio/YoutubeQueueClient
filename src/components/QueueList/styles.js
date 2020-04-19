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
    },
    firstItem: {
        border: "1px #4e4e4e solid",
        boxShadow: "0 0 20px 3px #4e4e4e"
    }
});