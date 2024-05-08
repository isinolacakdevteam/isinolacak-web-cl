import React, {
    FC
} from "react";
import Text from "../text/text";
import {
    IRadioButtonProps
} from "./radioButton.props";
import {
    IOCoreTheme
} from "../../core";
import {
    radioButtonStyler,
    useStyles
} from "./radioButton.styles";

const RadioButton: FC<IRadioButtonProps> = ({
    spreadBehaviour = "baseline",
    titleType = "body2-regular",
    onChange: onChangeProp,
    isSelected = false,
    disabled = false,
    titleStyle,
    title,
    style
}) => {
    const classes = useStyles();
    
    const {
        disabled: designTokensDisabled,
        borders,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const {
        radioContainer,
        radioIndicator,
        titleProps,
        container
    } = radioButtonStyler({
        disabledStyle: designTokensDisabled,
        spreadBehaviour,
        titleStyle,
        isSelected,
        disabled,
        borders,
        colors,
        spaces
    });

    const onChange = () => {
        if(onChangeProp) onChangeProp(isSelected);
    };

    const renderRadioContainer = () => {
        return <div
            className={classes.radioContainer}
            style={{
                ...radioContainer,
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
            style={{
                ...titleProps
            }}
        >
            {title}
        </Text>;
    };

    return <button
        className={classes.container}
        style={{
            ...container,
            style
        }}
        disabled={disabled}
        onClick={onChange}
    >
        {renderRadioContainer()}
        {renderTitle()}
    </button>;
};

export default RadioButton;