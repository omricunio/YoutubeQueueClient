import { handleLetterPress } from "./handlers/letterHandler";
import { handleEscapePress } from "./handlers/escapeHandler";
import { handleArrowPress } from "./handlers/handleArrowPress";
import { handleAltPress } from "./handlers/handleAltPress";
import { handleEnterPress } from "./handlers/enterHandler";

export default [
    {
        name: "Alt",
        keys: {
            18:18
        },
        preventsDefault: false,
        handler: function*() {
            yield handleAltPress();
        }
    },
    {
        name: "Enter",
        keys: {
            13:13
        },
        preventsDefault: false,
        handler: function*() {
            yield handleEnterPress();
        }
    },
    {
        name: "Letters",
        keys: {
            186:192,
            65:90,
            48:57
        },
        preventsDefault: false,
        handler: handleLetterPress
    },
    {
        name: "Escape",
        keys: {
            27:27
        },
        preventsDefault: false,
        handler: handleEscapePress
    },
    {
        name: "ArrowDown",
        keys: {
            40:40
        },
        preventsDefault: true,
        handler: function*() {
            yield handleArrowPress(-1)
        }
    },
    {
        name: "ArrowUp",
        keys: {
            38:38
        },
        preventsDefault: true,
        handler: function*() {
            yield handleArrowPress(1)
        }
    }
];