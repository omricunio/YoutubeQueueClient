import { handleLetterPress } from "./handlers/letterHandler";
import { handleEscapePress } from "./handlers/escapeHandler";
import { handleArrowPress } from "./handlers/handleArrowPress";
import { handlePPress } from "./handlers/handlePPress";

export default [
    {
        name: "P",
        keys: {
            80:80
        },
        preventsDefault: false,
        handler: function*() {
            yield handlePPress();
        }
    },
    {
        name: "Letters",
        keys: {
            186:192,
            65:90
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