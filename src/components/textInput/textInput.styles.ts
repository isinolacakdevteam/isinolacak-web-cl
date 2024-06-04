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
        display: "flex"
    },
    ıconProps: {
        justifyContent:"center",
        alignContent:"center",
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
    disabledStyle,
    typography,
    isFocused,
    disabled,
    radiuses,
    borders,
    isError,
    spaces,
    colors,
    value
}: TextInputStylerParams): TextInputStylerResult => {
    let container: CSSProperties = {
        userSelect: "none"
    };

    let contentContainer: CSSProperties = {
        borderColor: isError ? colors.error : isFocused ? colors.primary : colors.stroke,
        paddingRight: spaces.container / 1.5,
        paddingLeft: spaces.container / 1.5,
        paddingBottom: spaces.content * 1.5,
        paddingTop: spaces.content * 1.5,
        backgroundColor: colors.panel,
        borderRadius: radiuses.half,
        marginBottom: spaces.inline,
        borderWidth: borders.line,
        borderStyle: "solid"
    };

    let titleProps: TitleProps = {
        variant: value?.length || isFocused ? "body2-regular" : "body2-regular",
        color: value?.length || isFocused ? "primary" : "textSecondary",
        style: {
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

    let passwordIcon: CSSProperties = {
        marginLeft: spaces.content
    };

    let infoTextContainer: CSSProperties = {
        paddingLeft: spaces.content
    };
    
    let infoIconStyler: CSSProperties = {
        marginRight: spaces.inline
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

    return {
        infoTextContainer,
        contentContainer,
        infoIconStyler,
        passwordIcon,
        titleProps,
        container,
        input,
        clear
    };
};
