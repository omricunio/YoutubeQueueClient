export default theme => { 
    return {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        width: "80vw",
        height: "80vh",
        padding: theme.spacing(1,1,1,1),
        outline: "none",
        display: "flex",
        flexFlow: "column"
    }
}};