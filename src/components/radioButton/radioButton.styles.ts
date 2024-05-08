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
        display: 'flex'
    },
    radioContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 13,
        display: 'flex',
        height: 26,
        width: 26
    },
    radioIndicator: {
        borderRadius: 8,
        height: 16,
        width: 16
    },
    title: {
        alignSelf: 'center',
    },
});


export const radioButtonStyler = ({
    spreadBehaviour,
    disabledStyle,
    titleStyle,
    disabled,
    borders,
    colors,
    spaces
}: RadioButtonStylerParams): RadioButtonStylerResult => {
    let container = {
        padding: spaces.container / 2
    };

    let radioContainer = {
        backgroundColor: colors.backgroundLight,
        borderWidth: borders.line,
        borderColor: colors.stroke
    };

    let radioIndicator = {
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
