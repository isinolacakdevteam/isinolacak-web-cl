import {
    CSSProperties
} from "react";
import {
    createUseStyles
} from "react-jss";
import {
    CheckBoxStylerParams,
    CheckBoxStylerResult,
    TitleProps 
} from "./checkBox.props";

export const useStyles = createUseStyles({
    container: {
        flexDirection: "column",
        userSelect: "none",
        display: "flex",
        "&:hover": {
            transition: "transform 0.1s",
            cursor: "pointer",
            // cursor: (props: { disabled: boolean; }) => props.disabled ? "no-drop" : "pointer",
            opacity: 0.75
        }
    },
    contentContainer: {
        flexDirection: "row",
        alignItems: "center",
        display: "flex"
    },
    checkContainer: {
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        height: 18,
        width: 18
    },
    checkIndicator: {
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        height: 18,
        width: 18
    },
    title: {
        textAlignVertical: "center"
    }
});

export const checkBoxStyler = ({
    spreadBehaviour,
    checkDirection,
    disabledStyle,
    titleStyle,
    titleColor,
    disabled,
    radiuses,
    borders,
    isError,
    colors,
    spaces
}: CheckBoxStylerParams): CheckBoxStylerResult => {
    let container: CSSProperties = {
        paddingTop: spaces.container / 2,
        paddingBottom: spaces.container / 2,
    };

    let contentContainerStyle: CSSProperties = {
    };

    let checkContainer: CSSProperties = {
        backgroundColor: colors.backgroundLight,
        borderRadius: radiuses.quarter,
        borderColor: colors.stroke,
        borderWidth: borders.line,
        borderStyle: "solid"
    };

    let checkIndicator: CSSProperties = {
        borderRadius: radiuses.quarter,
        backgroundColor: colors.primary
    };

    let titleProps: TitleProps = {
        color: titleColor,
        style: {
            ...titleStyle
        }
    };

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle
        };
        checkIndicator.backgroundColor = colors.textGrey;
    }

    if(spreadBehaviour === "baseline") {
        container.alignSelf = spreadBehaviour;
        container.width = "auto";
    }

    if(spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
        container.width = "100%";
    }

    if(checkDirection === "right") {
        checkContainer.marginLeft = spaces.content;
    } else {
        checkContainer.marginRight = spaces.content;
    }

    if(isError) {
        checkIndicator.backgroundColor = colors.error;
        checkContainer.borderColor = colors.error;
        titleProps.color = "error";
    }

    return {
        contentContainerStyle,
        checkContainer,
        checkIndicator,
        titleProps,
        container
    };
};
export default useStyles;
