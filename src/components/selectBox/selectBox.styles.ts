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
    container: {
        justifyContent: "space-between",
        boxSizing: "border-box",
        alignItems: "center",
        flexDirection: "row",
        userSelect: "none",
        minHeight: 60.9,
        display: "flex"
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
    }
});

export const selectBoxStyler = ({
    spreadBehaviour,
    radiuses,
    disabled,
    borders,
    isClick,
    colors,
    spaces,
    style
}: SelectBoxStylerParams): SelectBoxStylerResult => {
    let container = {
        ...style,
        borderColor: isClick ? colors.primary : colors.stroke,
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

    if(disabled) {
        contentProps.color = "textGrey";
        titleProps.color = "textGrey";
    }

    if(spreadBehaviour === "baseline" || spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
    }

    return {
        contentProps,
        titleStyle,
        titleProps,
        container
    };
};
