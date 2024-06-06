import {
    CSSProperties,
    FC
} from 'react';
import IButtonProps from './button.props';
import useStyles, {
    buttonStyler
} from './button.styles';
import Text from "../text/text";
import {
    IOCoreTheme
} from '../../core';
import Loading from '../loading/loading';

const Button: FC<IButtonProps> = ({
    displayBehaviourWhileLoading = "disabled",
    spreadBehaviour = "baseline",
    icon: IconComponentProp,
    iconDirection= "left",
    variant = "filled",
    color = "primary",
    disabled = false,
    size = "medium",
    textVariant,
    titleStyle,
    textColor,
    iconColor,
    className,
    loading,
    onClick,
    title,
    style
}) => {
    const classes = useStyles();

    const {
        disabled: disabledStyle,
        radiuses,
        borders,
        colors,
        spaces
    } = IOCoreTheme.useContext();

    const {
        titleProps,
        container,
        iconProps
    } = buttonStyler({
        displayBehaviourWhileLoading,
        icon: IconComponentProp,
        spreadBehaviour,
        disabledStyle,
        iconDirection,
        textVariant,
        textColor,
        iconColor,
        radiuses,
        disabled,
        borders,
        loading,
        variant,
        colors,
        spaces,
        color,
        title,
        size
    });

    const renderIcon = (direction: "left" | "right") => {
        if(loading) {
            return null;
        }

        if(direction !== iconDirection) {
            return null;
        }

        if(!IconComponentProp) {
            return null;
        }

        return <IconComponentProp
            {...iconProps}
        />;
    };

    const renderTitle = () => { 
        if(loading) {
            return <Loading
                color={titleProps.color}
                size={22}
            />;
        }


        if(!title) {
            return null;
        }

        let textStyle: CSSProperties = {
        };

        return <Text
            variant={titleProps.variant}
            color={titleProps.color}
            style={{
                ...titleStyle,
                ...textStyle,
                ...titleProps.style
            }}
        >
            {title}
        </Text>;
    };

    return <button
        className={[
            classes.container,
            className
        ].join(" ")}
        onClick={disabled ? () => null : onClick}
        style={{
            ...style,
            ...container
        }}
    >
        {renderIcon("left")}
        {renderTitle()}
        {renderIcon("right")}
    </button>;
};
export default Button;
