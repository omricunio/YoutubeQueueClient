import { createStyles } from "@material-ui/core/styles";

export default (theme) =>
    createStyles({
        root: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "opacity 3s"
        },
        title: {
            fontWeight: "500",
            letterSpacing: "10px"
        },
        content: {
            background: "linear-gradient(108deg, rgba(224, 47, 37, 0.85) 0%, rgba(129, 1, 7, 0.85) 100%)",
            width: "80vw",
            height: "80vh",
            [theme.breakpoints.down("sm")]: {
                width: "95vw"
            },
            padding: theme.spacing(1,1,1,1),
            outline: "none",
            display: "flex",
            flexFlow: "column",
            borderRadius: "15px"
        },
        qrCodeContainer: {
            flex: "1",
            textAlign: "center"
        },
        qrCode: {
            height: "100%",
            maxWidth: "100%",
            width: "auto",
            padding: "20px"
        }
    });
