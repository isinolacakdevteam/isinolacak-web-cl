import {
    createUseStyles
} from 'react-jss';
import {
    RadioButtonStylerParams,
    RadioButtonStylerResult,
    TitleProps
} from './radioButton.props';
import {
    alignSelf 
} from 'styled-system';


export const useStyles = createUseStyles({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        display: 'flex'
    },
    radioContainer: {
        border: '1px solid #ccc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 13,
        display: 'flex',
        height: 22,
        width: 22
    },
    radioIndicator: {
        borderRadius: 8,
        height: 16,
        width: 16
    },
    title: {
        alignSelf: 'center',
        marginLeft: 10
    }
});


export const radioButtonStyler = ({
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
        borderColor: colors.stroke,
        alignSelf
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

    return {
        radioContainer,
        radioIndicator,
        titleProps,
        container
    };
};
