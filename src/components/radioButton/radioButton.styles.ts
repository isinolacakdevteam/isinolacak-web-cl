import {
    CSSProperties
} from 'react';
import {
    createUseStyles
} from 'react-jss';
import {
    RadioButtonStylerParams,
    RadioButtonStylerResult,
    TitleProps
} from './radioButton.props';

export const useStyles = createUseStyles({
    container: {
        flexDirection: "column",
        alignItems: "center",
        userSelect: "none",
        display: "flex",
        "&:hover": {
            transition: "transform 0.1s",
            cursor: "pointer",
            opacity: 0.75
        }
    },
    contentContainer: {
        flexDirection: "row",
        alignItems: "center",
        display: "flex",
        width: "100%"
    },
    radioContainer: {
        border: '1px solid #ccc',
        borderRadius: 100
    },
    radioIndicator: {
        borderRadius: 100,
        alignSelf: "center",
        display:"flex",
        height: "100%",
        width: "100%"
    },
    title: {
        alignSelf: 'center'
    }
});

export const radioButtonStyler = ({
    spreadBehaviour,
    disabledStyle,
    indicatorSize,
    titleStyle,
    direction,
    disabled,
    isError,
    borders,
    colors,
    spaces,
    style
}: RadioButtonStylerParams): RadioButtonStylerResult => {
    let container = {
        padding: spaces.container / 2,
        ...style
    };

    const contentContainerStyle = {

    };

    let radioContainer: CSSProperties = {
        backgroundColor: colors.backgroundLight,
        borderWidth: borders.line,
        borderColor: colors.stroke,
        padding: spaces.inline / 2,
        minHeight: indicatorSize,
        minWidth: indicatorSize,
        height: indicatorSize,
        width: indicatorSize
    };

    let radioIndicator: CSSProperties = {
        backgroundColor: colors.primary
    };

    let titleProps: TitleProps = {
        color: "body",
        style: {
            ...titleStyle
        }
    };

    if(isError) {
        radioIndicator.backgroundColor = colors.error;
        radioContainer.borderColor = colors.error;
        titleProps.color = "error";
    }

    if(direction === "leftToRight") {
        titleProps.style.marginLeft = spaces.content;
    } else {
        titleProps.style.marginRight = spaces.content;
    }

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle
        };
        radioIndicator.backgroundColor = colors.textGrey;
    }

    if(spreadBehaviour === "baseline") {
        container.alignSelf = spreadBehaviour;
        container.width = "auto";
    }
    
    if(spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
        container.width = "100%";
    }

    return {
        contentContainerStyle,
        radioContainer,
        radioIndicator,
        titleProps,
        container
    };
};
