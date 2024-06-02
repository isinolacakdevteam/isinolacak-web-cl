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
    colors,
    spaces
}: CheckBoxStylerParams): CheckBoxStylerResult => {
    let container: CSSProperties = {
        paddingTop: spaces.container / 2,
        paddingBottom: spaces.container / 2,
    };

    let checkContainer: CSSProperties = {
        backgroundColor: colors.backgroundLight,
        borderRadius: radiuses.quarter,
        marginRight: spaces.content,
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

    if(spreadBehaviour === "baseline" || spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
    }

    if(checkDirection === "right") {
        checkContainer.marginLeft = spaces.content,
        checkContainer.marginRight = 0;
    }

    return {
        checkContainer,
        checkIndicator,
        titleProps,
        container
    };
};

export default useStyles;
