import {
    FC
} from "react";
import {
    IOCoreTheme
} from "../../core";
import {
    radioButtonStyler,
    useStyles
} from "./radioButton.styles";
import Text from "../text/text";
import {
    IRadioButtonProps
} from "./radioButton.props";

const RadioButton: FC<IRadioButtonProps> = ({
    spreadBehaviour = "baseline",
    titleType = "body2-regular",
    direction = "leftToRight",
    onChange: onChangeProp,
    isSelected = false,
    indicatorSize = 15,
    disabled = false,
    infoTextProps,
    titleStyle,
    titleColor,
    infoText,
    isError,
    title,
    style
}) => {
    const {
        disabled: designTokensDisabled,
        borders,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const classes = useStyles();

    const {
        radioContainer,
        radioIndicator,
        titleProps,
        container
    } = radioButtonStyler({
        disabledStyle: designTokensDisabled,
        spreadBehaviour,
        indicatorSize,
        titleStyle,
        titleColor,
        isSelected,
        direction,
        disabled,
        isError,
        borders,
        colors,
        spaces
    });

    const onChange = () => {
        if(disabled) {
            return;
        }
        if(onChangeProp) onChangeProp(isSelected);
    };

    const renderRadioContainer = () => {
        return <div
            className={classes.radioContainer}
            style={{
                ...radioContainer
            }}
        >
            {renderIndicator()}
        </div>;
    };

    const renderIndicator = () => {
        if(!isSelected) {
            return null;
        }

        return <div
            className={classes.radioIndicator}
            style={{
                ...radioIndicator
            }}
        />;
    };

    const renderTitle = () => {
        if(!title) {
            return null;
        }

        return <Text
            className={classes.title}
            color={titleProps.color}
            variant={titleType}
            style={titleProps.style}
        >
            {title}
        </Text>;
    };

    const renderInfoText = () => {
        if(!infoText) {
            return null;
        }

        const customStyle = infoTextProps && infoTextProps.style ? infoTextProps.style : {
        };

        return <Text
            {...infoTextProps}
            style={{
                marginTop: spaces.content,
                ...customStyle
            }}
        >
            {infoText}
        </Text>;
    };

    return <div
        className={classes.container}
        style={{
            ...container,
            ...style
        }}
        onClick={onChange}
    >
        <div
            className={classes.contentContainer}
            style={{

            }}
        >
            {direction === "leftToRight" ? renderRadioContainer() : null}
            {renderTitle()}
            {direction === "rightToLeft" ? renderRadioContainer() : null}
        </div>
        {renderInfoText()}
    </div>;
};
export default RadioButton;
