import {
    CSSProperties
} from "react";
import {
    createUseStyles
} from "react-jss";
import {
    SelectBoxStylerParams,
    SelectBoxStylerResult,
    ContentProps,
    TitleProps
} from "./selectBox.props";

export const useStyles = createUseStyles({
    mainContainer: {
        boxSizing: "border-box",
        flexDirection: "column",
        userSelect: "none",
        display: "flex"
    },
    container: {
        justifyContent: "space-between",
        boxSizing: "border-box",
        alignItems: "center",
        flexDirection: "row",
        minHeight: 60.9,
        display: "flex",
        "&:hover": {
            transition: "transform 0.1s",
            cursor: "pointer",
            // cursor: (props: { disabled: boolean; }) => props.disabled ? "no-drop" : "pointer",
            opacity: 0.75
        }
    },
    content: {
        justifyContent: "center",
        flexDirection: "column",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        display: "flex"
    },
    customRenderForIcon: {
        textOverflow: "ellipsis",
        flexDirection: "row",
        alignItems: "center",
        whiteSpace: "nowrap",
        overflow: "hidden",
        display: "flex"
    },
    infoText: {
        display: "flex"
    }
});

export const selectBoxStyler = ({
    spreadBehaviour,
    radiuses,
    disabled,
    infoText,
    isError,
    isClick,
    borders,
    colors,
    spaces,
    style
}: SelectBoxStylerParams): SelectBoxStylerResult => {
    let container = {
        ...style,
        borderColor: isError ? colors.error : isClick ? colors.primary : colors.stroke,
        paddingBottom: spaces.content * 1.5,
        paddingRight: spaces.content / 2,
        paddingTop: spaces.content * 1.5,
        backgroundColor: colors.panel,
        paddingLeft: spaces.content,
        borderRadius: radiuses.half,
        borderWidth: borders.line,
        borderStyle: "solid",
        alignSelf: "free"
    };

    let titleProps: TitleProps = {
        color: "primary"
    };

    let titleStyle: CSSProperties = {
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden"
    };

    let contentProps: ContentProps = {
        color: "body",
        style: {
            marginTop: spaces.content / 2
        }
    };

    let infoTextContainer: CSSProperties = {
        paddingLeft: spaces.content
    };

    let infoIconStyler: CSSProperties = {
        marginRight: spaces.inline
    };

    if(infoText) {
        container.marginBottom= spaces.inline;
    }

    if(disabled) {
        contentProps.color = "textGrey";
        titleProps.color = "textGrey";
    }

    if(spreadBehaviour === "baseline" || spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
    }

    return {
        infoTextContainer,
        infoIconStyler,
        contentProps,
        titleStyle,
        titleProps,
        container
    };
};
