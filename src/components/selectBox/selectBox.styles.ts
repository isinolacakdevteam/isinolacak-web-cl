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
        flexDirection: "column",
        boxSizing: "border-box",
        userSelect: "none",
        display: "flex",
        minHeight: 52
    },
    container: {
        justifyContent: "space-between",
        boxSizing: "border-box",
        alignItems: "center",
        flexDirection: "row",
        display: "flex",
        minHeight: 52,
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
    style,
    title
}: SelectBoxStylerParams): SelectBoxStylerResult => {
    let container = {
        ...style,
        borderColor: isError ? colors.error : isClick ? colors.primary : colors.stroke,
        paddingRight: spaces.content / 2,
        paddingBottom: spaces.container,
        backgroundColor: colors.panel,
        paddingTop: spaces.container,
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
        marginBottom: spaces.inline,
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden"
    };

    let contentProps: ContentProps = {
        color: "body",
        style: {
        }
    };

    let infoTextContainer: CSSProperties = {
        paddingLeft: spaces.content
    };

    let infoIconStyler: CSSProperties = {
        marginRight: spaces.inline
    };

    let iconContainer: CSSProperties = {
        marginRight: spaces.content,
        marginLeft: spaces.content,
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    };

    if (infoText) {
        container.marginBottom = spaces.inline;
    }

    if (disabled) {
        contentProps.color = "textGrey";
        titleProps.color = "textGrey";
    }

    if (spreadBehaviour === "baseline" || spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
    }

    if(title) {
        container.paddingBottom = spaces.container / 1.5;
        container.paddingTop = spaces.container / 1.5;
        container.minHeight = 62;
        container.maxHeight = 62;
    } else {
        container.maxHeight = 52;
    }

    return {
        infoTextContainer,
        infoIconStyler,
        iconContainer,
        contentProps,
        titleStyle,
        titleProps,
        container
    };
};
