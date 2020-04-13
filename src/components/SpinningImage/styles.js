export default function styles(theme) {
    return {
        root: {
            clipPath: "circle(45% at center)",
            animation: "$spin 5s infinite linear",
            position: "relative"
        },
        disc: {
            width: "100%"
        },
        image: {
            position: "absolute",
            top: "0px",
            width: "100%",
            transform: "scale(0.5)",
            clipPath: "circle(45% at center)"
        },
        "@keyframes spin": {
            from: {
                transform: "rotate(0deg)"
            },
            to: {
                transform: "rotate(360deg)"
            }
        }
    }
}