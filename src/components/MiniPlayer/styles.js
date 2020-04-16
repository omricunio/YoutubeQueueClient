export default theme => ({
    bottomBar: {
        top: "auto",
        bottom: 0,
        position: "static",
        zIndex: 1
    },
    playButton: {
        marginLeft: theme.spacing(2)
    },
    skipButton: {
        marginLeft: theme.spacing(0.1)
    },
    main: {
        marginLeft: theme.spacing(1),
        flexGrow: 1
    },
    imageContainer: {
        marginLeft: theme.spacing(2),
        width: "5em"
    },
    volume: {
        width: theme.spacing(10),
        marginLeft: "15px",
        marginRight: "15px"
    }
});