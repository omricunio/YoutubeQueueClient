export default theme => { 
    return {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    card: {
        backgroundColor: "#ffffff26",
        backdropFilter: "blur(50px)",
        width: "80vw",
        height: "80vh",
        [theme.breakpoints.down("sm")]: {
            width: "95vw"
        },
        padding: theme.spacing(1,1,1,1),
        outline: "none",
        display: "flex",
        flexFlow: "column"
    }
}};