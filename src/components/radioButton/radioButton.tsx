import React, {
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
            style={{
                ...titleProps
            }}
        >
            {title}
        </Text>;
    };

    return <div
        className={classes.container}
        style={{
            ...container,
            style
        }}
        onClick={onChange}
    >
        {renderRadioContainer()}
        {renderTitle()}
    </div>;
};

export default RadioButton;