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
        alignItems: 'center',
        flexDirection: 'row',
        userSelect: "none",
        display: 'flex',
        "&:hover": {
            transition: "transform 0.1s",
            cursor: "pointer",
            opacity: 0.75
        }
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
    disabled,
    borders,
    colors,
    spaces,
    style
}: RadioButtonStylerParams): RadioButtonStylerResult => {
    let container = {
        ...style,
        padding: spaces.container / 2
    };

    let radioContainer: CSSProperties = {
        backgroundColor: colors.backgroundLight,
        borderWidth: borders.line,
        borderColor: colors.stroke,
        padding: spaces.inline,
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
            marginLeft: spaces.content,
            ...titleStyle
        }
    };

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle
        };
        radioIndicator.backgroundColor = colors.textGrey;
    }

    if(spreadBehaviour === "baseline" || spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
    }

    return {
        radioContainer,
        radioIndicator,
        titleProps,
        container
    };
};
