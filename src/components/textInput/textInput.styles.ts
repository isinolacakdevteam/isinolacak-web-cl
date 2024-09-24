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
        boxSizing: "border-box",
        alignItems: "center",
        cursor: "pointer",
        display: "flex"
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
    },
    passwordIconContainer: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        display: "flex",
        height: 18
    },
    iconProps: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    infoText: {
        display: "flex"
    }
}, {
    name: "ICore-TextInput"
});

export const textInputStyler = ({
    spreadBehaviour,
    iconDirection,
    disabledStyle,
    typography,
    isFocused,
    infoText,
    disabled,
    radiuses,
    borders,
    isError,
    spaces,
    colors,
    value,
    title
}: TextInputStylerParams): TextInputStylerResult => {
    let container: CSSProperties = {
        userSelect: "none"
    };

    let contentContainer: CSSProperties = {
        borderColor: isError ? colors.error : isFocused ? colors.primary : colors.stroke,
        paddingRight: spaces.container / 1.5,
        paddingLeft: spaces.container / 1.5,
        paddingBottom: spaces.container,
        paddingTop: spaces.container,
        backgroundColor: colors.panel,
        borderRadius: radiuses.half,
        borderWidth: borders.line,
        boxSizing: "border-box",
        borderStyle: "solid"
    };

    let titleProps: TitleProps = {
        variant: value?.length || isFocused ? "body2-regular" : "body2-regular",
        color: value?.length || isFocused ? "primary" : "textSecondary",
        style: {
            marginBottom: spaces.inline,
            alignSelf: "flex-start"
        }
    };

    let input: CSSProperties = {
        ...typography["body-regular"],
        backgroundColor: "transparent",
        opacity: value ? 1 : 0.5,
        lineHeight: undefined,
        color: colors.body,
        height: 18
    };

    let clear: CSSProperties = {
        marginLeft: spaces.content
    };

    let iconStyler: CSSProperties = {
    };

    let passwordIcon: CSSProperties = {
        marginLeft: spaces.content
    };

    let infoTextContainer: CSSProperties = {
        paddingLeft: spaces.content
    };

    let infoIconStyler: CSSProperties = {
        marginRight: spaces.inline
    };

    if (spreadBehaviour === "baseline") {
        container.alignSelf = spreadBehaviour;
        container.width = "auto";
    }

    if (spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
        container.justifyContent = "center";
        container.width = "100%";
    }

    if (infoText) {
        contentContainer.marginBottom = spaces.inline;
    }

    if (disabled) {
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

    if (iconDirection === "left") {
        iconStyler.marginRight = spaces.content;
    }

    if(title) {
        contentContainer.paddingBottom = spaces.container / 1.5;
        contentContainer.paddingTop = spaces.container / 1.5;
    }

    return {
        infoTextContainer,
        contentContainer,
        infoIconStyler,
        passwordIcon,
        titleProps,
        iconStyler,
        container,
        input,
        clear
    };
};
