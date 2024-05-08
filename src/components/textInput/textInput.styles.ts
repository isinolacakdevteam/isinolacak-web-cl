import {
    CSSProperties
} from "react";
import {
    createUseStyles
} from "react-jss";
import {
    TextInputStylerParams,
    TextInputStylerResult,
    TitleProps 
} from "./textInput.props";

export const useStyles = createUseStyles({
    container: {
        flexDirection: "row",
        userSelect: "none",
        display: "flex",
        "&:hover": {
            cursor: "pointer"
        }
    },
    content: {
        flexDirection: "column",
        display: "flex",
        width: "100%"
    },
    input: {
        outline: "none",
        border: "none",
        width: "100%",
        "&:hover": {
            cursor: "text"
        }
    },
    clearButton: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        display: "flex"
    }
}, {
    name: "NCore-TextInput"
});

export const textInputStyler = ({
    disabledStyle,
    typography,
    isFocused,
    disabled,
    radiuses,
    borders,
    colors,
    spaces,
    value
}: TextInputStylerParams): TextInputStylerResult => {
    let container: CSSProperties = {
        borderColor: isFocused ? colors.primary : colors.panel,
        paddingRight: spaces.container / 1.5,
        paddingLeft: spaces.container / 1.5,
        paddingBottom: spaces.content * 1.5,
        paddingTop: spaces.content * 1.5,
        backgroundColor: colors.panel,
        borderRadius: radiuses.half,
        borderWidth: borders.line
    };

    let titleProps: TitleProps = {
        color: value?.length || isFocused ? "primary" : "gray50",
        style: {
            marginBottom: spaces.inline
        }
    };

    let input: CSSProperties = {
        backgroundColor: "transparent",
        opacity: value ? 1 : 0.5,
        color: colors.body,
        ...typography["body-bold"],
        lineHeight: undefined,
        height: 18
    };

    let clear: CSSProperties = {
        marginLeft: spaces.content
    };

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle,
            cursor: "no-drop"
        };
        input = {
            backgroundColor: "transparent",
            cursor: "no-drop",
            resize: "none"
        };
    }

    return {
        titleProps,
        container,
        input,
        clear
    };
};

