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
    },
    passwordIconContainer: {
        transform: "translateY(-50%)",
        position: "absolute",
        top: 50,
        right: 0
    },
    ıconProps: {
        justifyContent:"center",
        alignContent:"center", 
        alignItems: "center"
    },
    errorText: {
        justifyContent: 'center', 
        position: "absolute",
        alignItems: 'center', 
        display: 'flex', 
        top: 85
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
    isError,
    spaces,
    colors,
    value
}: TextInputStylerParams): TextInputStylerResult => {
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
        height: 18
    };

    let clear: CSSProperties = {
        marginTop: spaces.content * 1.5,
        marginLeft: spaces.content,
        alignSelf: "flex-start"
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
