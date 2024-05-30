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
        borderWidth: borders.line,
        borderColor: colors.stroke,
        borderStyle: "solid"
    };

    let checkIndicator: CSSProperties = {
        borderRadius: radiuses.quarter,
        backgroundColor: colors.primary
    };

    let titleProps: TitleProps = {
        color: titleColor,
        style: {
            marginLeft: spaces.content,
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

    return {
        checkContainer,
        checkIndicator,
        titleProps,
        container
    };
};

export default useStyles;
