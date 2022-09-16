export default theme => ({
    root: {
        position: "static",
        zIndex: 3,
        top: 0
    },
    addButton: {
        marginRight: theme.spacing(1),
    },
    queueGuid: {
        fontSize: "18px",
        background:
          "linear-gradient(108deg, rgba(224,47,37,1) 0%, rgb(255, 42, 42) 100%)",
        padding: "5px",
        backgroundColor: "rgb(255, 10, 10)",
        borderRadius: "5px",
        fontWeight: "500",
        boxShadow: "0px 0px 8px 0px #313131",
    },
    queueGuidContainer: {
        position: "absolute",
        userSelect: "none",
        cursor: "pointer",
        left: "0px",
        transition: "transform 0.2s",
        "&:hover": {
            transform: "scale(1.1)"
        }
    },
    main: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        position: "relative"
    },
    title: {
        //flexGrow: 1,
        fontWeight: "bold",
        display: "inline"
    }
});