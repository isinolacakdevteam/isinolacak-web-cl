import {
    createUseStyles
} from "react-jss";

const useStyles = createUseStyles({
    hide: {
        display: "none"
    },
    "@global": {
        "html, body, #root": {
            flexWrap: "wrap",
            height: "100%",
            width: "100%"
        },
        "*": {
            transition: "all 0.5s",
            padding: 0,
            margin: 0
        },
        "::-webkit-scrollbar": {
            height: 9,
            width: 9
        },
        "::-webkit-scrollbar-button": {
            height: 0,
            width: 0
        },
        "::-webkit-scrollbar-thumb": {
            border: "0px none #ffffff",
            background: "#3C32A3",
            borderRadius: 100
        },
        "::-webkit-scrollbar-thumb:hover": {
            background: "#3C32A3"
        },
        "::-webkit-scrollbar-thumb:active": {
            background: "#fafafa"
        },
        "::-webkit-scrollbar-track": {
            border: "0px none #ffffff",
            background: "#3c3c3c",
            borderRadius: 100
        },
        "::-webkit-scrollbar-track:hover": {
            background: "#464646"
        },
        "::-webkit-scrollbar-track:active": {
            background: "#3c3c3c"
        },
        "::-webkit-scrollbar-corner": {
            background: "transparent"
        },
        "input[type='date']::-webkit-calendar-picker-indicator": {
            display: "none",
            "-webkit-appearance": "none"
        },
        "input[type='time']::-webkit-calendar-picker-indicator": {
            display: "none",
            "-webkit-appearance": "none"
        },
        "input[type='datetime-local']::-webkit-calendar-picker-indicator": {
            display: "none",
            "-webkit-appearance": "none"
        },
        "input[type='month']::-webkit-calendar-picker-indicator": {
            display: "none",
            "-webkit-appearance": "none"
        },
        "input[type='week']::-webkit-calendar-picker-indicator": {
            display: "none",
            "-webkit-appearance": "none"
        }
    }
}, {
    name: "IOCore"
});
export default useStyles;
