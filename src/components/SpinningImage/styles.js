export default function styles(theme) {
    return {
        root: {
            clipPath: "circle(45% at center)",
            animation: "$spin 5s infinite linear"
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