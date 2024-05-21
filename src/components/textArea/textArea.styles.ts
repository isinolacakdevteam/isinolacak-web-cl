import {
    CSSProperties 
} from "react";
import {
    createUseStyles
} from "react-jss";
import {
    TextAreaStylerParams,
    TextAreaStylerResult,
    TitleProps
} from "./textArea.props";

const useStyles = createUseStyles({
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
    multilineInput: {
        transition: "height 0.1s",
        resize: "vertical",
        maxWidth: "100%",
        minWidth: "100%",
        outline: "none",
        border: "none",
        minHeight: 40,
        width: "100%"
    },
    clearButton: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        display: "flex"
    }
}, {
    name: "IOCore-TextArea"
});

export const textAreaStyler = ({
    spreadBehaviour,
    disabledStyle,
    typography,
    isFocused,
    disabled,
    radiuses,
    isError,
    borders,
    colors,
    spaces,
    value
}: TextAreaStylerParams): TextAreaStylerResult => {
    let container: CSSProperties = {
        borderColor: isError ? colors.error : isFocused ? colors.primary : colors.stroke,
        paddingRight: spaces.container / 1.5,
        paddingLeft: spaces.container / 1.5,
        paddingBottom: spaces.content * 1.5,
        paddingTop: spaces.content * 1.5,
        backgroundColor: colors.panel,
        borderRadius: radiuses.half,
        borderWidth: borders.line,
        borderStyle: "solid"
    };

    let titleProps: TitleProps = {
        variant: value?.length || isFocused ? "body3-regular" : "body2-regular",
        color: value?.length || isFocused ? "primary" : "textSecondary",
        style: {
            alignSelf: "flex-start"
        }
    };

    let input: CSSProperties = {
        backgroundColor: "transparent",
        opacity: value ? 1 : 0.5,
        color: colors.body,
        ...typography["body-regular"],
        lineHeight: undefined,
        height: 60
    };

    let clear: CSSProperties = {
        marginTop: spaces.content * 1.5,
        marginLeft: spaces.content,
        alignSelf: "flex-start"
    };

    if(spreadBehaviour === "baseline") {
        container.alignSelf = spreadBehaviour;
        container.width = "auto";
    }

    if(spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
        container.justifyContent = "center";
        container.width = "100%";
    }

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle,
            cursor: "no-drop"
        };
        input = {
            backgroundColor: "transparent",
            cursor: "no-drop",
            height: "auto",
            resize: "none"
        };
    }

    if(isFocused || (value && value.length)) {
        titleProps.style.marginBottom = spaces.inline;
    }

    return {
        titleProps,
        container,
        input,
        clear
    };
};

export default useStyles;
