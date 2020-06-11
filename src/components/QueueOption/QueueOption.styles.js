import { createStyles } from "@material-ui/core/styles";

export default (theme) =>
    createStyles({
        root: {
            background: "linear-gradient(159deg, rgba(183,28,28,1) 0%, rgb(88, 0, 0) 100%)",
            borderRadius: "30px",
            boxShadow: "0px 0px 10px 0px #0a0a0a",
            transition: "transform 0.2s",
            cursor: "pointer",
            "&:hover": {
                transform: "scale(1.1)"
            },
            display: "flex",
            flexDirection: "column",
            
            //1:1 Aspect Ratio
            width: "30%",
            paddingBottom: "30%",
            [theme.breakpoints.down("xs")]: {
                width: "50%",
                paddingBottom: "50%"
            },
            position: "relative"
        },
        content: {
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
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
