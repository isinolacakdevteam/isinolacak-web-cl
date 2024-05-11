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
        alignItems: "center",
        display: "flex",
    },
    content: {
        justifyContent: "center",
        flexDirection: "column",
        display: "flex"
    },
    customRenderForIcon: {
        flexDirection: "row",
        alignItems: "center"
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
        color: "primary"
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
        titleProps,
        container
    };
};
