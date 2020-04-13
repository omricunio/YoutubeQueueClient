export default function styles(theme) {
    return { 
        container: {
            display: "flex",
            flexFlow: "column",
            flex: 1,
            overflow: "auto"
        },
        display: {
            transition: "flex-grow 1s ease-out",
            overflow: "auto",
        },
        player: {
            flex: 0
        },
        queue: {
            flex: 0
        },
        opened: {
            flex: 1
        }
    }
}