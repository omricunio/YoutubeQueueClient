import { handleLetterPress } from "./handlers/letterHandler";
import { handleEscapePress } from "./handlers/escapeHandler";

export default [
    {
        name: "Special Letters",
        startKey: 186,
        endKey: 192,
        handler: handleLetterPress
    },
    {
        name: "Letters",
        startKey: 65,
        endKey: 90,
        handler: handleLetterPress
    },
    {
        name: "Brackets",
        startKey: 65,
        endKey: 90,
        handler: handleLetterPress
    },
    {
        name: "Escape",
        startKey: 27,
        endKey: 27,
        handler: handleEscapePress
    }
];