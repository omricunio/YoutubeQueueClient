import { createStyles } from "@material-ui/core/styles";

export default (theme) =>
    createStyles({
        root: {
            width: "100%",
            height: "100%"
        },
        optionTitle: {
            height: "30%",
            textAlign: "center",
            fontSize: "4vmin", 
            padding: "15px 20px 0px 20px",
            fontWeight: "100"
        },
        optionIcon: {
            height: "70%",
            width: "100%"
        },
        optionIconSVG: {
            height: "100%",
            width: "100%",
            padding: "20%"
        }
    });
