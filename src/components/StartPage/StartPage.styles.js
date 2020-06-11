import { createStyles } from "@material-ui/core/styles";
export default (theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.primary.background,
            height: "100%",
            display: "flex",
            flexDirection: "column"
        },
        title: {
            marginTop: "15px",
            fontSize: "35px",
            fontWeight: "300",
            textAlign: "center"
        },
        titleIconContainer: {
            display: "flex",
            justifyContent: "center",
            height: "45px" 
        },
        titleIcon: {
            height: "100%",
            width: "auto"
        },
        options: {
            justifyContent: "space-around",
            display: "flex",
            [theme.breakpoints.down("xs")]: {
                flexDirection: "column"
            },
            height: "100%",
            flexWrap: "wrap",
            alignItems: "center",
            flex: "1"
        },
        container: {
            height: "100%"
        }
    });
